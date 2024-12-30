import React from "react";
import { CheckoutPageType } from "@/interfaces/checkoutPage";
import { ClockIcon } from "@heroicons/react/24/solid";
import useCheckoutDiscountBar from "./hooks/useCheckoutDiscountBar";

type DiscountProps = {
  product: number;
  info: CheckoutPageType;
  couponActive: boolean;
  country: string;
};

//shows the current discount off of full pricer
const DiscountBar2 = ({
  product,
  info,
  couponActive,
  country,
}: DiscountProps) => {
  const { currentDiscount} = useCheckoutDiscountBar({
    product,
    info,
    couponActive,
    country,
  });

  return (
    <div className="bg-[#fff1af] w-full flex flex-col sm:flex-row justify-center items-center px-[25px] py-[12px] rounded-[7px]">
      <div className="bg-[url('/images/save-seal.png')] bg-no-repeat w-[63px] h-[63px] text-[17px] leading-[19px] text-white font-extrabold bg-[length:63px] text-center uppercase pt-[13px]">
        {currentDiscount.percent}<br/>Off
      </div>
      <div className="text-left pl-[12px] md:text-[19px]">
        <h3 className="font-bold uppercase">
          <span className="text-[#ff0000]">Hurry!</span> Limited To 100 Spots Only!
        </h3>
        <p className="mt-[5px]">
          Your spot is reserved for
          <ClockIcon className="text-red-500 inline-block mt-[-3px] w-[20px] ml-[8px] mr-[6px]" />
          <span className="font-bold">09:53</span>
        </p>
      </div>
    </div>
  );
};

export default DiscountBar2;
