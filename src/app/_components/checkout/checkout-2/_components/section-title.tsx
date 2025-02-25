import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({weight: ["700"], subsets: ["latin"] });

type Props = {
    children: React.ReactNode,
};

const SectionTitle = ({ children }: Props) => {
    return (
        <h2 className={`mb-[20px] md:mb-[30px] text-[30px] md:text-[39px] leading-[36px] md:leading-[48px] font-bold ${poppins.className}`}>{children}</h2>
    )
};

export default SectionTitle;
