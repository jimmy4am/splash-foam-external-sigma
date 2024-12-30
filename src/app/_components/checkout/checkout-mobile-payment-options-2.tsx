import React from "react";
import Image from "next/image";

type Props = {
  firePaypal: () => void;
  loading: string;
};

const CheckoutMobilePaymentOptions2 = ({ firePaypal, loading }: Props) => {
  return (
    <>
      <div
        className="text-center pb-[18px] px-[18px] rounded-[5px] border-2 border-solid border-[#ededed]">
        <p className="text-[18px] leading-[20px] inline-block align-top text-center mt-[-12px] px-[20px] bg-white">Express Checkout</p>
        <button
          type="button"
          className="text-white text-[20px] h-[70px] inline-block w-full rounded-[5px] bg-[#ffc439]"
          title="PayPal"
          onClick={() => {
            if (loading === "") {
              firePaypal();
            }
          }}
        >
          <Image
            src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/1397951e-7288-4b95-8ef1-b1f423b56c00/public"
            width={310}
            height={78}
            alt="Paypal"
            className="block w-[155px] mx-auto"
          />
        </button>
      </div>
    </>
  );
};

export default CheckoutMobilePaymentOptions2;
