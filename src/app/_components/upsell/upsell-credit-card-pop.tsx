import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSession } from "@/app/_context/SessionContext";
import { useRouter } from "next/navigation";
import sendSlackMessage from "@/app/_utils/api/sendSlackApiHelper";
import { encryptCreditCard } from "@/app/_utils/encryptUtils";
import { createJimmyKey } from "@/app/_utils/jimmyKeyUtils";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

type Props = {
  setShowCcPop: (value: boolean) => void;
};
const UpsellCreditCardPop = ({ setShowCcPop }: Props) => {
  const router = useRouter();
  const { sessionId } = useSession();
  const [loading, setLoading] = useState("");
  const [attempts, setAttempts] = useState(1);
  const [creditCardInfo, setCreditCardInfo] = useState({
    card: "",
    cvv: "",
    month: "",
    year: "",
  });

  const formik = useFormik({
    initialValues: creditCardInfo,
    validationSchema: Yup.object({
      card: Yup.string()
        .matches(/^[0-9]{13,19}$/, "Card number must be 13-19 digits")
        .required("Card Number is required"),
      cvv: Yup.string()
        .matches(/^[0-9]{3,4}$/, "CVV must be 3-4 digits")
        .required("CVV is required"),
      month: Yup.string().required("Month is required"),
      year: Yup.string().required("Year is required"),
    }),
    onSubmit: async (values) => {
      setCreditCardInfo(values);
      setLoading("Finalizing Order");
      if (!sessionId) {
        await sendSlackMessage(
          "Error with Upsell Credit Card Pop",
          "No Session ID Found",
          "missing",
          ""
        );
        alert(
          "We are experiencing technical difficulties. Please try again later."
        );
        window.location.href = "/";
      }
      const encryptedCard = encryptCreditCard(values.card);
      const encryptedCVV = encryptCreditCard(values.cvv);
      const seshData = await fetch("/api/session/finalize-purchase", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-jimmy-key": createJimmyKey().encryptedData,
        },
        body: JSON.stringify({
          sessionId,
          finalizedBy: "upsell-credit-card-pop",
          card2: {
            card: encryptedCard.encryptedData,
            cvv: encryptedCVV.encryptedData,
            month: values.month,
            year: values.year,
          },
        }),
      });
      const seshDataRes = await seshData.json();
      // console.log(
      //   "Upsell Credit Card Pop - Session Data Response: ",
      //   seshDataRes
      // );
      if (seshDataRes?.attempts === 69) {
        setLoading("Order Confirmed");
        setTimeout(() => {
          window.location.href = "/checkout/thank-you";
        }, 3000);
      } else {
        if (attempts < 3) {
          setLoading("Error with Payment. Let's try one more time.");
        } else {
          setLoading(
            "We are experiencing technical difficulties. Please try again later."
          );
          setTimeout(() => {
            window.location.href = "/";
          }, 3000);
        }
      }
    },
  });

  return (
    <div className="fixed h-screen w-screen top-0 left-0 z-40 flex justify-center items-center bg-black/60">
      <div className="flex bg-blue-500 text-white p-4 rounded-md flex-col items-center justify-center w-[280px] text-[18px] font-[500]">
        <h1 className="text-2xl font-bold ">Uh-Oh</h1>
        <h3 className="text-center">Please try another card.</h3>
        {(loading && (
          <div role="status" className="h-[60px]">
            {loading === "Finalizing Order" && (
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            )}
            {loading === "Order Confirmed" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52 52"
                className="checkmark"
              >
                <circle
                  className="checkmark__circle"
                  cx="26"
                  cy="26"
                  r="25"
                  fill="none"
                />
                <path
                  className="checkmark__check"
                  fill="none"
                  d="M14.1 27.2l7.1 7.2 16.7-16.8"
                />
              </svg>
            )}
            {(loading === "Error Processing Payment" ||
              loading === "Please Try Another Payment Method") && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52 52"
                className="checkmark_red"
              >
                <circle
                  className="checkmark__circle_red"
                  cx="26"
                  cy="26"
                  r="25"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                />
                <line
                  x1="16"
                  y1="16"
                  x2="36"
                  y2="36"
                  stroke="white"
                  strokeWidth="2"
                />
                <line
                  x1="36"
                  y1="16"
                  x2="16"
                  y2="36"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            )}
          </div>
        )) || (
          <form onSubmit={formik.handleSubmit}>
            <div className="flex w-full space-x-4 mt-4">
              <div className="flex w-full flex-col items-start justify-start">
                <label className="font-bold text-[14px] pb-2">
                  Card Number
                </label>
                <input
                  type="text"
                  name="card"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.card}
                  maxLength={16}
                  pattern="\d*"
                  className="w-full border-[1px] border-[#333] px-4 py-2 text-[16px] sm:text-[14px] rounded-md text-[#333]"
                  placeholder="Credit Card Number"
                />
                {formik.touched.card && formik.errors.card ? (
                  <div className="text-red-300 text-xs">
                    {formik.errors.card}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="flex w-full space-x-4 mt-4">
              <div className="flex w-1/2 flex-col items-start justify-start relative">
                <label className="font-bold text-[14px] pb-2">
                  Expiry Month
                </label>
                <div className="relative w-full">
                  <select
                    name="month"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.month}
                    className="w-full border-[1px] border-[#333]  px-4 py-2 text-[16px] sm:text-[14px] rounded-md bg-white text-[#333]"
                  >
                    <option disabled value="" className="text-[#ccc]">
                      Month
                    </option>
                    <option value="1">(01) January</option>
                    <option value="2">(02) February</option>
                    <option value="3">(03) March</option>
                    <option value="4">(04) April</option>
                    <option value="5">(05) May</option>
                    <option value="6">(06) June</option>
                    <option value="7">(07) July</option>
                    <option value="8">(08) August</option>
                    <option value="9">(09) September</option>
                    <option value="10">(10) October</option>
                    <option value="11">(11) November</option>
                    <option value="12">(12) December</option>
                  </select>
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <ChevronDownIcon className="w-4 h-4 text-[#555] " />
                  </span>
                </div>
                {formik.touched.month && formik.errors.month ? (
                  <div className="text-red-300 text-xs">
                    {formik.errors.month}
                  </div>
                ) : null}
              </div>
              <div className="flex w-1/2 flex-col items-start justify-start">
                <label className="font-bold text-[14px] pb-2">
                  Expiry Year
                </label>
                <div className="relative w-full">
                  <select
                    name="year"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.year}
                    className="w-full border-[1px] border-[#333]  px-4 py-2 text-[16px] sm:text-[14px] rounded-md bg-white text-[#333]"
                  >
                    <option disabled value="" className="text-[#ccc]">
                      Year
                    </option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                    <option value="2031">2031</option>
                    <option value="2032">2032</option>
                    <option value="2033">2033</option>
                    <option value="2034">2034</option>
                    <option value="2035">2035</option>
                    <option value="2036">2036</option>
                    <option value="2037">2037</option>
                    <option value="2038">2038</option>
                    <option value="2039">2039</option>
                    <option value="2040">2040</option>
                    <option value="2041">2041</option>
                    <option value="2042">2042</option>
                    <option value="2043">2043</option>
                    <option value="2044">2044</option>
                    <option value="2045">2045</option>
                  </select>
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <ChevronDownIcon className="w-4 h-4 text-[#555]" />
                  </span>
                </div>
                {formik.touched.year && formik.errors.year ? (
                  <div className="text-red-300 text-xs">
                    {formik.errors.year}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="flex w-full space-x-4 mt-6 mb-6">
              <div className="flex w-full flex-col items-start justify-start">
                <label className="font-bold text-[14px] pb-2">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.cvv}
                  maxLength={4}
                  pattern="\d*"
                  className="w-full border-[1px] border-[#333] px-4 py-2 text-[16px] sm:text-[14px] rounded-md text-[#333]"
                  placeholder="CVV"
                />
                {formik.touched.cvv && formik.errors.cvv ? (
                  <div className="text-red-300 text-xs">
                    {formik.errors.cvv}
                  </div>
                ) : null}
              </div>
            </div>
            <input
              type="submit"
              className="bg-[#29af5c] text-[18px] uppercase  text-white p-2 md:p-4 flex  green-text-shadow  items-center hover:transform  font-bold justify-center max-w-[775px]  hover:bg-[#0ebf52] rounded-md disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
              value="Complete Purchase"
            />
          </form>
        )}
      </div>
    </div>
  );
};

export default UpsellCreditCardPop;
