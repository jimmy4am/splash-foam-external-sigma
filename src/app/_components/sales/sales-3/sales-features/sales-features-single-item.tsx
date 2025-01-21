import React from "react";
import Image from "next/image";

type Props = {
    icon: string;
    title: string;
    text: string;
};

const SalesFeaturesSingleItem = ({ icon, title, text }: Props) => {
    return (
        <li className="w-full flex">
            <div className="flex-[0_0_77px] md:flex-[0_0_95px] flex items-center justify-center p-[5px] bg-[#d3eaf4] rounded-[10px]">
                <Image src={icon} width={60} height={60} alt={title} />
            </div>
            <div className="flex-[1_1_auto] p-[15px_15px_17px] md:p-[20px_15px_22px] bg-[#ebf8ff] rounded-[10px]">
                <h3 className="mb-[10px] text-[22px] lg:text-[23px] leading-[28px] lg:leading-[30px] font-bold">{title}</h3>
                <p className="text-[16px] md:text-[17px] lg:text-[18px] leading-[24px] md:leading-[25px] lg:leading-[26px] tracking-[0.3px]">{text}</p>
            </div>
        </li>
    );
};

export default SalesFeaturesSingleItem;