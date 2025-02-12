import React from "react";
import Image from "next/image";
import { Outfit } from "next/font/google";

import { SalesPageType } from "@/interfaces/salesPage";

const outfit = Outfit({ subsets: ["latin"] });

type Props = {
  info: SalesPageType,
};

const SalesHeroReview = ({ info }: Props) => {
  return (
    <div className="relative w-full bg-[#fff] max-w-[350px] mx-[auto] border-[1px] border-[#0f85d3] rounded-[8px] p-[10px] shadow-[0px_0px_8px_2px_rgba(0,0,0,0.1)]">
      <span className={`absolute right-[20px] -top-[12px] w-[25px] h-[25px] bg-[#fff] border-[1px] border-[#0f85d3] rounded-[50%] text-center ${outfit.className} text-[34px] leading-[38px] font-semibold`}>"</span>
      <h3 className={`mb-[4px] ${outfit.className} text-[16px] leading-[16px] font-extrabold uppercase`}>{info.reviews.title1}</h3>
      <Image className="mb-[7px]" src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/49253e46-369e-4742-d9f4-c870b1722100/public" alt="rating stars" width={82} height={14} />
      <p className="text-[14px] leading-[20px]"><em>{info.reviews.text1}</em></p>
      <p className="flex items-center gap-[6px] mt-[10px]">
        <span className="text-[14px] leading-[12px] text-[#0f85d3] font-medium">{info.reviews.name1}</span>
        <Image src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/268e71c2-130f-4cc6-be84-9f62c18a9000/public" alt="verify icon" width={10} height={12} />
        <span className="text-[12px] leading-[12px]">Verified Buyer</span>
      </p>
    </div>
  );
};

export default SalesHeroReview;
