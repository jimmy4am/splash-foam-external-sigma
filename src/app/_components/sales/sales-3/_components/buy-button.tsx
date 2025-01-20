import React from "react";
import Image from "next/image";

import {SalesPageType} from "@/interfaces/salesPage";
import {getFormattedDayOfTheWeek} from "@/app/_utils/dateUtils";
import AppButton from "@/app/_components/sales/sales-3/_components/app-button";

type BuyButtonProps = {
    info: SalesPageType,
};

const BuyButton = ({ info }: BuyButtonProps) => {
    return (
        <div className="text-center">
            <p className="inline-flex items-center gap-[10px] mb-[10px] text-[13px] md:text-[15px] leading-[13px] md:leading-[15px] tracking-[0.5px]">
                <Image src="/images/template-3/btn-thik.png" width={14} height={12} alt="Hand icon" />
                In Stock - Ships On {getFormattedDayOfTheWeek(2)}
            </p>
            <AppButton url={info.cta}>
                Claim 50% OFF Today
                <Image src="/images/template-3/btn-hand.png" width={43} height={28} alt="Hand icon" />
            </AppButton>
            <p className="inline-flex items-center gap-[10px] mt-[10px] text-[13px] md:text-[15px] leading-[13px] md:leading-[15px] tracking-[0.5px]">
                <Image src="/images/template-3/dollar-icn.png" width={19} height={19}  alt="Money back icon" />
                30 Day Money Back Guarantee
            </p>
        </div>
    )
};

export default BuyButton;
