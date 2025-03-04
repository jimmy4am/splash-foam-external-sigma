"use client";

import React from "react";
import Image from "next/image";

import { SalesPageType } from "@/interfaces/salesPage";
import AppButton from "@/app/_components/sales/sales-5/_components/app-button";

type Props = {
  info: SalesPageType,
};

const BuyButton = ({ info }: Props) => {
  return (
    <div className="text-center">
      <AppButton classes="w-full justify-center" url={info.cta}>Order Now & Save 70%</AppButton>
      <ul className="w-full flex justify-between mt-[10px] md:mt-[15px] lg:mt-[20px] md:px-[10px] text-[10px] md:text-[11px] leading-[15px] md:leading-[17px] text-[#000] uppercase underline font-medium ">
        <li className="flex items-start gap-[5px] text-left">
          <Image
            className="flex-[0_0_25px] md:flex-[0_0_29px]"
            src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/68b8095e-4f7c-4baa-e633-c7a691974900/public"
            width={29}
            height={35}
            alt="Fast & Free Shipping"
          />
          <span className="flex-1">Fast & free<br /> shipping</span>
        </li>
        <li className="flex items-start gap-[5px] text-left">
          <Image
            className="flex-[0_0_25px] md:flex-[0_0_29px]"
            src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/cf148a13-5b78-4229-f8a7-b550f3598400/public"
            width={29}
            height={35}
            alt="30-day money back"
          />
          <span className="flex-1">30-day money<br /> back</span>
        </li>
        <li className="flex items-start gap-[5px] text-left">
          <Image
            className="flex-[0_0_25px] md:flex-[0_0_29px]"
            src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/9cbddfe7-af33-43a1-087d-06b68977c100/public"
            width={29}
            height={35}
            alt="1-year warranty"
          />
          <span className="flex-1">1-year<br /> warranty</span>
        </li>
      </ul>
    </div>
  )
};

export default BuyButton;