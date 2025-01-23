"use client";

import React from "react";
import Image from "next/image";

import { SalesPageType } from "@/interfaces/salesPage";
import useCountDown from "@/app/_components/sales/CountDown/useCountDown";
import AppButton from "@/app/_components/sales/sales-4/_components/app-button";

type Props = {
    info: SalesPageType,
};

const BuyButton = ({ info }: Props) => {
    const { data, message } = useCountDown();

    return (
        <div className="text-center">
            <p className="inline-flex items-center gap-[7px] md:gap-[8px] mb-[10px] text-[13px] md:text-[15px] leading-[13px] md:leading-[15px] tracking-[0.5px]">
                {message ? message : (
                    <>
                        <Image className="w-[12px] md:w-[14px]" src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/7829ed7c-7c70-4c02-4bb3-9dba93294e00/public" width={12} height={15} alt="Fire icon" />
                        {`Flash Sale Up To 40% OFF  ${data.hours}h : ${data.minutes}m : ${data.seconds}s`}
                    </>
                )}
            </p>
            <AppButton url={info.cta}>
                Claim 50% OFF Today
                <Image className="w-[35px] md:w-[43px]" src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/0d81b7dc-c351-4a98-db70-45ae040c3700/public" width={43} height={28} alt="Hand icon" />
            </AppButton>
            <p className="inline-flex items-center gap-[6px] md:gap-[10px] mt-[10px] text-[13px] md:text-[15px] leading-[13px] md:leading-[15px] tracking-[0.5px]">
                <Image className="w-[16px] md:w-[19px]" src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/254b3bcf-d898-470d-7661-71de23d8e100/public" width={19} height={19}  alt="Money back icon" />
                30 Day Money Back Guarantee
            </p>
        </div>
    )
};

export default BuyButton;