import React from "react";
import Image from "next/image";
import { Outfit } from "next/font/google";

import { SalesPageType } from "@/interfaces/salesPage";

const outfit = Outfit({ subsets: ["latin"] });

type Props = {
  info: SalesPageType,
};

const SalesHeroStep = ({ image, text }: { image: string, text: string }) => (
  <div className="flex-1 p-[5px_5px_10px] lg:p-[10px] bg-[#188fcf] rounded-[10px] lg:rounded-[15px]">
    <Image className="mb-[7px] rounded-[8px] lg:rounded-[13px]" src={image} width={115} height={84} alt={text} />
    <p className="text-center text-[13px] md:text-[12px] ld:text-[15px] leading-[16px] md:leading-[15px] ld:leading-[18px] text-[#fff] font-semibold">{text}</p>
  </div>
)

const SalesHeroSteps = ({ info }: Props) => {
  return (
    <>
      <div className="flex items-center gap-[10px] mb-[15px]">
        <span className="flex-[1_1_auto] h-[2px] bg-[#c9cdcf]"></span>
        <p className={`flex-[0_1_auto] text-[18px] md:text-[20px] lg:text-[23px] leading-[18px] md:leading-[20px] lg:leading-[23px] uppercase font-semibold ${outfit.className}`}>{info.header.stepTitle}</p>
        <span className="flex-[1_1_auto] h-[2px] bg-[#c9cdcf]"></span>
      </div>
      <div className="flex gap-[15px] md:gap-[10px] lg:md:gap-[15px] max-w-[430px] mx-[auto] px-[16px] md:px-[0px]">
        <SalesHeroStep text={info.header.stepText1} image={info.header.stepImage1} />
        <SalesHeroStep text={info.header.stepText2} image={info.header.stepImage2} />
        <SalesHeroStep text={info.header.stepText3} image={info.header.stepImage3} />
      </div>
    </>
  );
};

export default SalesHeroSteps;
