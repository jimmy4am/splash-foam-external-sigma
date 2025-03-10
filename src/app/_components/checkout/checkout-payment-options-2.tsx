import React from "react";
import Image from "next/image";
import {
  ChevronDownIcon,
  CreditCardIcon,
  ArrowRightIcon,
  TruckIcon
} from '@heroicons/react/24/solid';
import { CheckoutPageType } from "@/interfaces/checkoutPage";
import { ProductInfoType } from "@/interfaces/productInfo";
import StateProvinceSelect from "./checkout-state-selector";
import { PriceDisplaySimple } from "./checkout-price-display";
import useCheckoutPaymentOptions from "./hooks/useCheckoutPaymentOptions";

type PaymentProps = {
  info: CheckoutPageType;
  product: ProductInfoType;
  formik: any;
  loading: string;
  country: string;
  setCountry: (country: string) => void;
};
interface AddressComponents {
  street_number?: string;
  subpremise?: string;
  route?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
}

const PaymentOptions2 = ({
  info,
  product,
  formik,
  loading,
  country,
  setCountry,
}: PaymentProps) => {
  const { addressInputRef, handleCountryChange } = useCheckoutPaymentOptions({ formik, setCountry });

  return (
    <>
      {loading && (
        <div className="fixed h-screen w-screen top-0 left-0 z-40 flex justify-center items-center bg-black/20">
          <div className="flex bg-blue-500 text-white p-4 rounded-md flex-col items-center justify-center w-[280px] h-[140px] text-[18px] font-[500]">
            <div role="status" className="h-[60px]">
              {(loading === "Processing Payment" ||
                loading === "Connecting to PayPal") && (
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
              {(loading === "Order Confirmed" ||
                loading === "One More Thing..." ||
                loading === "Redirecting to PayPal") && (
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
                loading === "Please Try Another Payment Method" ||
                loading === "Error with PayPal. Please try again.") && (
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
            <div className="h-[25px] flex items-center text-center justify-center w-full">
              {loading}
            </div>
          </div>
        </div>
      )}

      <form onSubmit={formik.handleSubmit}>
        <div className="flex items-center pb-6">
          <TruckIcon className="w-[50px]"/>
          <div className="pl-[10px] text-left">
            <h3 className="text-[28px] leading-[28px] text-black font-bold">Shipping Information</h3>
            <p className="text-[15px] leading-[21px] text-black tracking-[0.3px] mt-[5px]">
              Where do we send your {info.product.name}?
            </p>
          </div>
        </div>
        <div className="flex w-full space-x-4">
          <div className="flex w-full flex-col items-start justify-start relative">
            <label className="text-[14px] pb-2">Country</label>
            <div className="relative w-full">
              <select
                onChange={handleCountryChange}
                className="w-full border-[1px] border-[#333]  px-4 py-2 text-[16px] sm:text-[14px] rounded-md bg-white"
                value={formik.values.country}
                name="country"
              >
                <option value="US">United States</option>
                <option value="AU">Australia</option>
                <option value="CA">Canada</option>
                <option value="FI">Finland</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
                <option value="IS">Iceland</option>
                <option value="IE">Ireland</option>
                <option value="IL">Israel</option>
                <option value="NZ">New Zealand</option>
                <option value="NO">Norway</option>
                <option value="SE">Sweden</option>
                <option value="GB">United Kingdom</option>
              </select>
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <ChevronDownIcon className="w-4 h-4 text-[#555] "/>
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full space-x-4 mt-6">
          <div className="flex w-full flex-col items-start justify-start">
            <label className="text-[14px] pb-2">
              Delivery Address
            </label>
            <input
              type="text"
              name="address"
              ref={addressInputRef}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
              className="w-full border-[1px] border-[#333] px-4 py-2 text-[16px] sm:text-[14px] mb-2 rounded-md"
              placeholder="Address"
            />
            {formik.touched.address && formik.errors.address ? (
              <div className="text-red-500 text-xs">
                {formik.errors.address}
              </div>
            ) : null}
            <input
              type="text"
              name="address2"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address2}
              className="w-full border-[1px] border-[#333] px-4 py-2 text-[16px] sm:text-[14px]  rounded-md"
              placeholder="Apartment, suite, etc. (optional)"
            />
          </div>
        </div>
        <div className="flex w-full space-x-4 mt-6">
          <div className="flex w-full flex-col items-start justify-start">
            <label className="text-[14px] pb-2">City</label>
            <input
              type="text"
              name="city"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}
              className="w-full border-[1px] border-[#333] px-4 py-2 text-[16px] sm:text-[14px] rounded-md"
              placeholder="City"
            />
            {formik.touched.city && formik.errors.city ? (
              <div className="text-red-500 text-xs">{formik.errors.city}</div>
            ) : null}
          </div>
        </div>
        <div className="flex w-full space-x-4 mt-4">
          <div className="flex w-1/2 flex-col items-start justify-start relative">
            <StateProvinceSelect formik={formik} country={country}/>
            {formik.touched.state && formik.errors.state ? (
              <div className="text-red-500 text-xs">{formik.errors.state}</div>
            ) : null}
          </div>
          {' '}
          <div className="flex w-1/2 flex-col items-start justify-start">
            <label className="text-[14px] pb-2">
              {(country === 'US' && 'Zip Code') || 'Postal Code'}
            </label>
            <input
              type="text"
              name="zip"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.zip}
              className="w-full border-[1px] border-[#333] px-4 py-2 text-[16px] sm:text-[14px] rounded-md"
              placeholder={(country === 'US' && 'Zip Code') || 'Postal Code'}
            />
            {formik.touched.zip && formik.errors.zip ? (
              <div className="text-red-500 text-xs">{formik.errors.zip}</div>
            ) : null}
          </div>
        </div>
        <div className="flex w-full space-x-4 mt-6">
          <div className="flex w-full flex-col items-start justify-start">
            <label className="text-[14px] pb-2">Shipping</label>
            <div className="flex">
              <input
                type="radio"
                name="shipping"
                defaultChecked
                value={'1'}
                className="mr-2"
              />
              <label className="text-[14px]">
                Standard{' '}
                <PriceDisplaySimple
                  priceUSD={parseFloat(product.productShipping)}
                  countryCode={country}
                  digits={2}
                />
              </label>
            </div>
          </div>
        </div>
        <div className="flex items-center pb-6 mt-[35px]">
          <CreditCardIcon className="w-[50px]"/>
          <div className="pl-[10px] text-left">
            <h3 className="text-[28px] leading-[28px] text-black font-bold">Payment Information</h3>
            <p className="text-[15px] leading-[21px] text-black tracking-[0.3px] mt-[5px]">
              Safe & Secure Checkout
            </p>
          </div>
        </div>
        <div className="flex w-full space-x-4">
          <div className="flex w-full flex-col items-start justify-start">
            <label className="text-[14px] pb-2">Card Number</label>
            <input
              type="text"
              name="card"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.card}
              maxLength={16}
              pattern="\d*"
              className="w-full border-[1px] border-[#333] px-4 py-2 text-[16px] sm:text-[14px] rounded-md"
              placeholder="Credit Card Number"
            />
            {formik.touched.card && formik.errors.card ? (
              <div className="text-red-500 text-xs">{formik.errors.card}</div>
            ) : null}
          </div>
        </div>
        <div className="flex w-full space-x-4 mt-4">
          <div className="flex w-1/2 flex-col items-start justify-start relative">
            <label className="text-[14px] pb-2">Expiry Month</label>
            <div className="relative w-full">
              <select
                name="month"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.month}
                className="w-full border-[1px] border-[#333]  px-4 py-2 text-[16px] sm:text-[14px] rounded-md bg-white"
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
                <ChevronDownIcon className="w-4 h-4 text-[#555] "/>
              </span>
            </div>
            {formik.touched.month && formik.errors.month ? (
              <div className="text-red-500 text-xs">{formik.errors.month}</div>
            ) : null}
          </div>
          <div className="flex w-1/2 flex-col items-start justify-start">
            <label className="text-[14px] pb-2">Expiry Year</label>
            <div className="relative w-full">
              <select
                name="year"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.year}
                className="w-full border-[1px] border-[#333]  px-4 py-2 text-[16px] sm:text-[14px] rounded-md bg-white"
              >
                <option disabled value="" className="text-[#ccc]">
                  Year
                </option>
                <option value="2024">2024</option>
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
                <ChevronDownIcon className="w-4 h-4 text-[#555]"/>
              </span>
            </div>
            {formik.touched.year && formik.errors.year ? (
              <div className="text-red-500 text-xs">{formik.errors.year}</div>
            ) : null}
          </div>
        </div>
        <div className="flex w-full space-x-4 mt-6 mb-6">
          <div className="flex w-full flex-col items-start justify-start">
            <label className="text-[14px] pb-2">CVV</label>
            <input
              type="text"
              name="cvv"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.cvv}
              maxLength={4}
              pattern="\d*"
              className="w-full border-[1px] border-[#333] px-4 py-2 text-[16px] sm:text-[14px] rounded-md"
              placeholder="CVV"
            />
            {formik.touched.cvv && formik.errors.cvv ? (
              <div className="text-red-500 text-xs">{formik.errors.cvv}</div>
            ) : null}
          </div>
        </div>
        <p className="text-[14px] text-[#a1a1a1]">
          By placing this order you agree to {info.product.name}{' '}
          <a
            href="/terms-conditions"
            className="text-blue-300 underline cursor-pointer hover:text-blue-500"
            tabIndex={1}
          >
            terms and conditions
          </a>{' '}
          and{' '}
          <a
            href="/privacy-policy"
            className="text-blue-300 underline cursor-pointer hover:text-blue-500"
            tabIndex={2}
          >
            privacy policy
          </a>
          .
        </p>
        <button
          type="submit"
          className="inline-block w-full h-[75px] text-[20px] md:text-[28px] text-white border font-bold mt-[20px] rounded-[5px] border-solid border-[#77d496] bg-[#00af3a]"
        >
          {info.buttonCta}
          <ArrowRightIcon
            className="inline-block w-[18px] ml-[17px]"/>
        </button>
      </form>
      <div className="flex mt-8 justify-center">
        <Image
          src="/images/guaranty-seal.jpg"
          width={505}
          height={37}
          alt="Secure Checkout"
        />
      </div>
    </>
  );
};

export default PaymentOptions2;
