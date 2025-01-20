import React from "react";
import Image from "next/image";

const SalesHeroRating = () => {
    return (
        <div className="inline-flex items-center gap-[10px] p-[6px_15px] md:p-[7px_15px] border-[1px] border-[#00cb88] rounded-[50px] text-[16px] leading-[16px] md:text-[18px] md:leading-[18px] text-[#000] tracking-[0.5px] font-bold">
            <Image className="-mt-[2px]" src="/images/template-3/single-green-star.png" alt="single star" width={26} height={26} />
            Trustpilot
            <Image src="/images/template-3/green-star.png" alt="group of stars" width={100} height={20} />
            Excellent
        </div>
    );
};

export default SalesHeroRating;
