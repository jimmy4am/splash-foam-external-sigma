import React from "react";
import { Figtree } from "next/font/google";

const figtree = Figtree({ subsets: ["latin"] });

type Props = {
  title1: string,
  title2: string,
  subtitle?: string,
  classes?: string,
  dark?: boolean,
};

const SectionHeading = ({ title1, title2, subtitle, classes, dark = false }: Props) => {
  return (
    <div>
      <h2 className={`flex flex-col items-center text-center text-[30px] md:text-[33px] lg:text-[45px] leading-[36px] md:leading-[41px] lg:leading-[53px] font-extrabold ${figtree.className} ${classes}`}>
        <span className="bg-[#1b7de5] bg-[linear-gradient(180deg,_#1b7de5,_#47c1ff)] text-[transparent] bg-clip-text">{title1}</span>
        <span className={`'text-[${dark ? '#fff' : '#000'}]`}>{title2}</span>
      </h2>
      {subtitle && <p className="w-full max-w-[1000px] mx-[auto] mt-[15px] lg:mt-[20px] text-center text-[16px] md:text-[17px] lg:text-[18px] leading-[24px] md:leading-[25px] lg:leading-[26px]">{subtitle}</p>}
    </div>
  )
};

export default SectionHeading;