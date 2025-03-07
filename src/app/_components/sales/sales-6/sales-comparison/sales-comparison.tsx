"use client";

import React from "react";
import Image from "next/image";

import { SalesPageType } from "@/interfaces/salesPage";
import SectionHeading from "@/app/_components/sales/sales-6/_components/section-heading";
import BuyButton from "@/app/_components/sales/sales-6/_components/buy-button";
import AppSection from "@/app/_components/sales/sales-6/_components/app-section";

type Props = {
  info: SalesPageType;
};

type SalesComparisonListItemProps = {
  icon: string;
  text: string
}

const SalesComparisonListItem = ({ icon, text }: SalesComparisonListItemProps) => (
  <li className="flex items-start gap-[8px]">
    <Image className="w-[14px] md:w-[17px] mt-[2px] md:mt-[3px]" src={icon} width={34} height={34} alt="Image" />
    <p>{text}</p>
  </li>
)

const SalesComparison = ({ info }: Props) => {
  const checkIcon = "https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/be1b4af3-4e1a-4620-f3a9-3095cc7fc200/public";
  const crossIcon = "https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/de8053ec-8ad5-4504-cddb-1dbe3a0c3a00/public";

  return (
    <AppSection classes="bg-[#fff]">
      <SectionHeading>{info.comparison.heading}</SectionHeading>

      <div className="grid grid-cols-2 md:max-w-[830px] -mx-[15px] md:mx-[auto] mt-[25px] md:mt-[30px] lg:mt-[35px] xl:mt-[45px] mb-[26px] md:mb-[35px] lg:mb-[40px]">
        <div className="p-[15px_15px_20px] md:p-[20px_30px_45px] lg:p-[25px_47px_35px] bg-[#e9ffed]">
          <h3 className="mb-[10px] lg:mb-[15px] text-center text-[18px] md:text-[20px] lg:text-[22px] leading-[26px] lg:leading-[28px] font-bold">{info.comparison.product1.title}</h3>
          <Image
            className="mb-[30px] lg:mb-[40px]"
            src={info.comparison.product1.image}
            width={319}
            height={190}
            alt="Image"
          />
          <ul className="flex flex-col gap-[16px] md:gap-[13px] lg:gap-[15px] text-[14px] md:text-[16px] lg:text-[18px] leading-[18px] md:leading-[22px] lg:leading-[24px] font-semibold">
            <SalesComparisonListItem icon={checkIcon} text={info.comparison.product1.text1} />
            <SalesComparisonListItem icon={checkIcon} text={info.comparison.product1.text2} />
            <SalesComparisonListItem icon={checkIcon} text={info.comparison.product1.text3} />
            <SalesComparisonListItem icon={checkIcon} text={info.comparison.product1.text4} />
            <SalesComparisonListItem icon={checkIcon} text={info.comparison.product1.text5} />
            <SalesComparisonListItem icon={checkIcon} text={info.comparison.product1.text6} />
          </ul>
        </div>

        <div className="p-[15px_15px_20px] md:p-[20px_30px_45px] lg:p-[25px_47px_35px] bg-[#fff3f3]">
          <h3 className="mb-[10px] lg:mb-[15px] text-center text-[18px] md:text-[20px] lg:text-[22px] leading-[26px] lg:leading-[28px] font-medium">{info.comparison.product2.title}</h3>
          <Image
            className="mb-[30px] lg:mb-[40px]"
            src={info.comparison.product2.image}
            width={319}
            height={190}
            alt="Image"
          />
          <ul className="flex flex-col gap-[16px] md:gap-[13px] lg:gap-[15px] text-[14px] md:text-[16px] lg:text-[18px] leading-[18px] md:leading-[22px] lg:leading-[24px] font-semibold">
            <SalesComparisonListItem icon={crossIcon} text={info.comparison.product2.text1} />
            <SalesComparisonListItem icon={crossIcon} text={info.comparison.product2.text2} />
            <SalesComparisonListItem icon={crossIcon} text={info.comparison.product2.text3} />
            <SalesComparisonListItem icon={crossIcon} text={info.comparison.product2.text4} />
            <SalesComparisonListItem icon={crossIcon} text={info.comparison.product2.text5} />
            <SalesComparisonListItem icon={crossIcon} text={info.comparison.product2.text6} />
          </ul>
        </div>
      </div>

      <div className="w-full max-w-[420px] mx-[auto]">
        <BuyButton info={info} />
      </div>
    </AppSection>
  );
};

export default SalesComparison;