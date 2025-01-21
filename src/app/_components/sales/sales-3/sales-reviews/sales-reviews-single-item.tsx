import React from "react";
import Image from "next/image";

type Props = {
    title: string;
    author: string;
    text: string;
};

const SalesReviewsSingleItem = ({ title, author, text }: Props) => {
    return (
        <li className="w-full p-[20px_20px_25px] bg-[#eef4f7] border-[1px] border-[#2079ba] rounded-[10px]">
            <h3 className="mb-[10px] text-[18px] leading-[24px] font-bold">{title}</h3>
            <Image className="w-[86px] mb-[10px]" src="/images/template-3/star.svg" alt="rating stars" width={82} height={14} />
            <p className="mb-[25px] text-[16px] md:text-[17px] lg:text-[18px] leading-[24px] md:leading-[25px] lg:leading-[26px] tracking-[0.5px]">{text}</p>
            <div className="flex">
                <div className="flex-[0_0_54px] w-[54px] h-[54px] mr-[12px] bg-[#2079ba] rounded-[50%] text-center text-[24px] leading-[52px] text-[#fff] font-bold uppercase">{author.charAt(0)}</div>
                <div className="flex-1">
                    <div className="text-[17px] leading-[25px] font-bold">{author}</div>
                    <div className="inline-flex items-center gap-[6px]">
                        <Image className="w-[11px]" src="/images/template-3/testi-vrfy.png" alt="verify icon" width={10} height={12} />
                        <span className="text-[14px] leading-[22px] text-[#0ab83f]">Verified Buyer</span>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default SalesReviewsSingleItem;
