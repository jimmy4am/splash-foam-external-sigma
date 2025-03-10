"use client";

import React from "react";

import { SalesPageType } from "@/interfaces/salesPage";
import SectionHeading from "@/app/_components/sales/sales-6/_components/section-heading";
import AppSection from "@/app/_components/sales/sales-6/_components/app-section";
import BuyButton from "@/app/_components/sales/sales-6/_components/buy-button";
import SalesUsageSingleItem from "@/app/_components/sales/sales-6/sales-usage/sales-usage-single-item";

type Props = {
  info: SalesPageType;
};

const SalesUsage = ({ info }: Props) => {
  return (
    <AppSection classes="bg-[#f3f4f5]">
      <SectionHeading>{info.slideshow.heading}</SectionHeading>

      <div className="grid md:grid-cols-3 gap-[15px] md:gap-[25px] mt-[30px] md:mt-[40px] mb-[26px] md:mb-[35px] lg:mb-[40px]">
        <SalesUsageSingleItem image={info.slideshow.image1} title={info.slideshow.title1} />
        <SalesUsageSingleItem image={info.slideshow.image2} title={info.slideshow.title2} />
        <SalesUsageSingleItem image={info.slideshow.image3} title={info.slideshow.title3} />
      </div>

      <div className="w-full max-w-[420px] mx-[auto]">
        <BuyButton info={info} dark />
      </div>
    </AppSection>
  );
};

export default SalesUsage;