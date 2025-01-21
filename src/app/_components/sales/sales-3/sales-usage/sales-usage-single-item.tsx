"use client";

import React from "react";
import { Outfit } from "next/font/google";
import Image from "next/image";

const outfit = Outfit({ subsets: ["latin"] });

type Props = {
    image: string;
    title: string;
};

const SalesUsageSingleItem = ({ image, title }: Props) => {
    return (
        <div className="p-[0_16px] md:p-[0_10px]">
            <div className="mb-[25px] rounded-[20px] md:rounded-[0] overflow-hidden">
                <Image
                    className="w-full object-cover aspect-[1/1.15] md:aspect-[1/0.85]"
                    src={image} width={400} height={400} alt="Arrow icon"
                />
            </div>
            <h3 className={`text-[24px] leading-[24px] md:text-[21px] md:leading-[25px] lg:text-[25px] font-bold ${outfit.className}`}>{title}</h3>
        </div>
    );
};

export default SalesUsageSingleItem;