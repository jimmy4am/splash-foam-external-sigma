import React from "react";
import Image from "next/image";

import { SalesPageType } from "@/interfaces/salesPage";
import { getFormattedDayOfTheWeek } from "@/app/_utils/dateUtils";
import AppButton from "@/app/_components/sales/sales-3/_components/app-button";

type Props = {
    info: SalesPageType,
};

const BuyButton = ({ info }: Props) => {
    return (
        <div className="text-center">
            <p className="inline-flex items-center gap-[10px] mb-[10px] text-[13px] md:text-[15px] leading-[13px] md:leading-[15px] tracking-[0.5px]">
                <Image src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/f78a7475-4711-4fef-6bb4-5f430844a600/public" width={14} height={12} alt="Hand icon" />
                In Stock - Ships On {getFormattedDayOfTheWeek(2)}
            </p>
            <AppButton url={info.cta}>
                Claim 50% OFF Today
                <Image className="w-[35px] md:w-[43px]" src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/0d81b7dc-c351-4a98-db70-45ae040c3700/public" width={43} height={28} alt="Hand icon" />
            </AppButton>
            <p className="inline-flex items-center gap-[10px] mt-[10px] text-[13px] md:text-[15px] leading-[13px] md:leading-[15px] tracking-[0.5px]">
                <Image src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/254b3bcf-d898-470d-7661-71de23d8e100/public" width={19} height={19}  alt="Money back icon" />
                30 Day Money Back Guarantee
            </p>
        </div>
    )
};

export default BuyButton;
