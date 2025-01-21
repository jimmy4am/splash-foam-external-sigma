import React from "react";
import Image from "next/image";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

type Props = {
    icon: string;
    title: string;
    text: string;
};

const SalesComparisonHighlight = ({ icon, title, text }: Props) => {
    return (
        <li className="flex flex-col items-center justify-start flex-1 gap-[10px] p-[25px_35px_22px] md:p-[25px_15px_30px] bg-[#fff] border-[1px] border-[#2079ba] rounded-[10px] text-center">
            <Image src={icon} width={50} height={50} alt={title} />
            <h3 className={`text-[24px] leading-[28px] font-bold ${outfit.className}`}>{title}</h3>
            <p className="min-h-[96px] text-[16px] leading-[24px] font-medium">{text}</p>
        </li>
    );
};

export default SalesComparisonHighlight;