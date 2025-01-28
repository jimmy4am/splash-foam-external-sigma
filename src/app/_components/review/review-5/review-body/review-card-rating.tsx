import React from "react";

import { getRatingImage, getRatingName } from "@/app/_components/review/review-5/review-body/utils";

type Props = {
    rating: string;
    topProduct?: boolean;
};

const ReviewCardRating = ({ rating, topProduct = false }: Props) => {
    return (
        <div className="inline-flex flex-col items-center p-[8px_15px_5px] md:p-[10px] lg:p-[20px] bg-[#fcfcfc] border-[1px] border-[#e7e7e7] rounded-[8px]">
            <p className="mb-[3px] md:mb-[6px] text-[11px] md:text-[13px] lg:text-[16px] leading-[11px] md:leading-[16px] lg:leading-[20px]">Rated</p>
            <p className={`mb-[3px] md:mb-[6px] text-[16px] md:text-[24px] lg:text-[32px] leading-[16px] md:leading-[26px] lg:leading-[34px] font-bold ${topProduct ? 'text-[#197dd0]' : 'text-[#000]'}`}>{rating}/10</p>
            <p className="mb-[5px] md:mb-[10px] text-[11px] md:text-[13px] lg:text-[16px] leading-[11px] md:leading-[16px] lg:leading-[20px]">{getRatingName(Number(rating))}</p>
            <div className="text-[#ffb22b] text-[14px]">{getRatingImage(Number(rating))}</div>
        </div>
    );
};

export default ReviewCardRating;