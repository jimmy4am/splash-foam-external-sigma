import React from "react";
import Image from "next/image";

import { SalesPageType } from "@/interfaces/salesPage";

type Props = {
    info: SalesPageType;
    classes: string;
    img: string;
    label: string;
    icon: string;
};

const SalesComparisonItemRow = ({ text, icon }: { text: string, icon: string }) => (
    <li className="flex items-start gap-[10px] text-[15px] md:text-[18px] leading-[20px] md:leading-[24px] font-semibold text-[#000]">
        <div className="flex-[0_0_16px] md:flex-[0_0_21px] mt-[3px]">
            <Image src={icon} width={50} height={50} alt="Icon" />
        </div>
        <p>{text}</p>
    </li>
)

const SalesComparisonItem = ({ info, classes, img, label, icon }: Props) => {
    return (
        <div className={`flex flex-col items-center flex-1 p-[20px_10px_22px_10px] md:p-[25px_25px_30px_25px] ${classes}`}>
            <div className="relative mb-[15px] md:mb-[20px] p-[5px_11px_8px] md:p-[7px-25px_8px] bg-[#159bde] border-[1px] border-[#b5bdc5] rounded-[7px] text-[17px] md:text-[20px] text-[#fff] leading-[17px] md:leading-[20px] font-bold">
                {label}
                <div className="absolute left-[50%] -ml-[7px] md:-mt-[1px] w-[8px] md:w-[10px] h-[8px] md:h-[10px] origin-bottom-left rotate-45 transform border-[1px] border-[#b5bdc5] border-t-[0] border-l-[0] bg-[#159bde]"></div>
            </div>
            <div className="flex justify-center w-full h-[150px] md:h-[175px] mb-[22px] md:mb-[25px] border-[1px] border-[#dbdddd] rounded-[20px]">
                <Image className="object-contain h-[100%]" src={img} width={200} height={200} alt={label}
                />
            </div>
            <ul className="flex flex-col gap-[12px] md:gap-[15px]">
                <SalesComparisonItemRow text={info.specgrid.text1} icon={icon}/>
                <SalesComparisonItemRow text={info.specgrid.text2} icon={icon} />
                <SalesComparisonItemRow text={info.specgrid.text3} icon={icon} />
                <SalesComparisonItemRow text={info.specgrid.text4} icon={icon} />
                <SalesComparisonItemRow text={info.specgrid.text5} icon={icon} />
                <SalesComparisonItemRow text={info.specgrid.text6} icon={icon} />
                <SalesComparisonItemRow text={info.specgrid.text7} icon={icon} />
            </ul>
        </div>
    );
};

export default SalesComparisonItem;