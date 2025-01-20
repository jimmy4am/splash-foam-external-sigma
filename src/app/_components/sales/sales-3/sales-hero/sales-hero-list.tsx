import React from "react";
import Image from "next/image";
import {SalesPageType} from "@/interfaces/salesPage";

type Props = {
    info: SalesPageType,
};

const SalesHeroListItem = ({ text }: {text: string}) => {
    return (
        <li className="flex items-start gap-[10px] py-[7px]  border-b-[1px] border-b-[#ccc] text-[16px] md:text-[18px] leading-[24px] font-semibold tracking-[0.5px]">
            <Image className="mt-[3px]" src="/images/template-3/bnr-point-thik.png" alt="check icon" width={19} height={19} />
            {text}
        </li>
    );
};

const SalesHeroList = ({ info }: Props) => {
    return (
        <ul className="">
            <SalesHeroListItem text={info.header.pro1} />
            <SalesHeroListItem text={info.header.pro2} />
            <SalesHeroListItem text={info.header.pro3} />
            <SalesHeroListItem text={info.header.pro4} />
            <SalesHeroListItem text={info.header.pro5} />
        </ul>
    );
};

export default SalesHeroList;
