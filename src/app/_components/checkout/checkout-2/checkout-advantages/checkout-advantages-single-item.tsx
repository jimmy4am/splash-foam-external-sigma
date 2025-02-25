import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({weight: ["700"], subsets: ["latin"] });

type Props = {
  title: string;
  text: string;
};

const CheckoutAdvantagesSingleItem = ({ title, text }: Props) => {
  return (
    <div className="p-[25px] bg-[#ffa500] bg-gradient-to-r from-[rgba(253,251,247,0.04)] to-[rgba(253,251,247,0.04)] rounded-[24px]">
      <h3 className={`mb-[10px] text-[22px] md:text-[24px] leading-[31px] ${poppins.className}`}>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default CheckoutAdvantagesSingleItem;