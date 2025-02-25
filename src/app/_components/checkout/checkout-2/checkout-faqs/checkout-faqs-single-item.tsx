"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { CheckIcon } from "@heroicons/react/24/solid";

const poppins = Poppins({weight: ["700"], subsets: ["latin"] });

type Props = {
  q: string;
  a: string;
};

const CheckoutFaqsSingleItem = ({ q, a }: Props) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex w-full flex-col border-b-[1px] border-[#c2c2c2]">
      <div
        className={`group flex w-full justify-between items-center gap-[10px] p-[14px_0] cursor-pointer hover:bg-[rgba(18,18,18,.04)] transition-all duration-200 ease-in-out`}
        onClick={() => setOpen(prev => !prev)}>
        <span className="flex items-center justify-center w-[16px] h-[16px] border-[1px] border-[#121212] rounded-[2px]">
          <CheckIcon className="text-[#121212]"/>
        </span>
        <h3 className={`group-hover:underline flex-1 text-[16px] leading-[20px] font-bold ${poppins.className}`}>{q}</h3>
        <Image
          className="transition-all duration-200 ease-in-out"
          style={{ transform: `rotateX(${open ? '-180deg' : '0deg'})`}}
          src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/aa61d5ee-cfc5-411e-229c-c320d3251f00/public"
          width={14}
          height={12}
          alt="Chevron icon" />
      </div>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-200 ease-in-out`}
        style={{
          height: open ? contentRef.current?.scrollHeight : 0,
        }}
      >
        <p className="p-[6px_15px_6px]">{a}</p>
      </div>
    </div>
  );
};

export default CheckoutFaqsSingleItem;