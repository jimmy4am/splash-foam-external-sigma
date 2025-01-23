"use client";

import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";

type Props = {
    q: string;
    a: string;
    index: number;
    active: number;
    setActive: (index: number) => void;
    isLastItem?: boolean
};

const SalesFaqsSingleItem = ({ q, a, index, active, setActive, isLastItem }: Props) => {
    const [open, setOpen] = useState(index === active);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setOpen(index === active)
    }, [index, active]);

    return (
        <div className={`flex w-full flex-col  ${!isLastItem ? 'border-b-[1px] border-[#c2c2c2]' : undefined}`}>
            <div
                className={`flex w-full justify-between items-center p-[18px_0] md:p-[25px_0] cursor-pointer hover:text-[#0073b7] transition-all duration-250 ease-in-out`}
                onClick={() => {
                    setOpen(!open);
                    setActive(index);
                }}>
                <h3 className="text-[17px] md:text-[20px] leading-[20px] md:leading-[26px] font-bold">{q}</h3>
                <Image
                    className="transition-all duration-500 ease-in-out"
                    style={{ transform: `rotateX(${open ? '-180deg' : '0deg'})`}}
                    src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/aa61d5ee-cfc5-411e-229c-c320d3251f00/public"
                    width={14}
                    height={12}
                    alt="Chevron icon" />
            </div>
            <div
                ref={contentRef}
                className={`overflow-hidden transition-all duration-500 ease-in-out`}
                style={{
                    height: open ? contentRef.current?.scrollHeight : 0,
                }}
            >
                <p className={`mb-[25px] text-[16px] md:text-[17px] lg:text-[18px] leading-[24px] md:leading-[25px] lg:leading-[26px]`}>{a}</p>
            </div>
        </div>
    );
};

export default SalesFaqsSingleItem;