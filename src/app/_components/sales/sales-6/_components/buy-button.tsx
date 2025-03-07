"use client";

import React from "react";
import Image from "next/image";

import { SalesPageType } from "@/interfaces/salesPage";
import AppButton from "@/app/_components/sales/sales-6/_components/app-button";

type Props = {
  info: SalesPageType,
  dark?: boolean,
};

const BuyButton = ({ info, dark = false }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <p className="relative flex items-center justify-center gap-[8px] mb-[15px] p-[5px_10px_5px] md:p-[5px_15px_5px] bg-[#ffea9f] border-[1px] border-[#353429] border-dotted rounded-[3px] text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] font-medium capitalize tracking-[0.5px]">
        <span className="absolute left-[25px] -bottom-[6px] rotate-[135deg] w-[10px] h-[10px] bg-[#ffea9f] border-[1px] border-dotted border-t-[#353429] border-r-[#353429]"></span>
        <Image
          className="w-[15px]"
          src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/c03aef42-6358-40dc-9668-e545064e7000/public"
          width={30}
          height={30}
          alt="Sale"
        />
        Don’t miss out on this Exclusive Offer
      </p>
      <AppButton classes="w-full mb-[10px] md:mb-[12px]" url={info.cta}>
        Order Now & Save 70%
        <Image
          className="w-[20px]"
          src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/7c1895c8-b696-4882-98ea-b30dc7c90300/public"
          width={40}
          height={28}
          alt="Arrow right"
        />
      </AppButton>
      <div className={`flex items-center justify-center gap-[6px] text-[13px] md:text-[15px] leading-[18px] md:leading-[20px] text-[${dark ? '#fff' : '#000'}] font-semibold tracking-[0.5px]`}>
        <Image
          className="w-[73px] mb-[1px]"
          src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/7831a41c-f559-47f6-2c4f-d1ce30395a00/public"
          width={146}
          height={26}
          alt="Rating stars"
        />
        Over 25,000+ Units Sold
      </div>
    </div>
  )
};

export default BuyButton;