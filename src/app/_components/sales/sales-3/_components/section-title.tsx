import React from "react";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

type Props = {
    children: React.ReactNode,
};

const SectionTitle = ({ children }: Props) => {
    return (
        <h2 className={`relative mb-[25px] md:mb-[20px] bg-[#0262b4] bg-[linear-gradient(90deg,_#0262b4_5%,_#1b96d3_30%,_#1b96d3_60%,_#0262b4_95%)] text-[transparent] text-[34px] md:text-[37px] lg:text-[45px] leading-[40px] md:leading-[45px] lg:leading-[53px] font-extrabold ${outfit.className} bg-clip-text`}>{children}</h2>
    )
};

export default SectionTitle;
