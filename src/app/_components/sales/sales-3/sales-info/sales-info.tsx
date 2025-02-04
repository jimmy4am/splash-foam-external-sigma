"use client";

import React from "react";
import Image from "next/image";

import { SalesPageType } from "@/interfaces/salesPage";
import SectionTitle from "@/app/_components/sales/sales-3/_components/section-title";
import BuyButton from "@/app/_components/sales/sales-3/_components/buy-button";
import AppSection from "@/app/_components/sales/sales-3/_components/app-section";

type Props = {
  info: SalesPageType;
};

const SalesInfoFeatureItem = ({ text }: { text: string }) => {
  return (
    <li className="p-[16px_15px_17px] bg-[#fff] border-[1px] border-[#0f85d3] rounded-[4px] text-[16px] leading-[20px] font-bold">{text}</li>
  );
};

const SalesInfo = ({ info }: Props) => {
  return (
    <AppSection classes="bg-[linear-gradient(180deg,_#f4fbff_30%,_#b5dfed_95%)] md:bg-[linear-gradient(180deg,_#f4fbff_50%,_#b5dfed_95%)]">
      <div className="flex justify-center md:w-[60%] lg:w-[55%] text-center md:text-left pt-[28px]">
        <SectionTitle>
          {info.info.heading}
          <span className="absolute right-[20px] md:-right-[10px] lg:-right-[90px] xl:-right-[0] -top-[30px] md:-top-[37px] lg:-top-[45px] flex flex-col items-end text-[14px] md:text-[15px] lg:text-[18px] leading-[16px] md:leading-[20px] lg:leading-[24px] text-[#000] font-bold">
            <span className="mb-[12px]">{info.info.headingLabel}</span>
            <Image
              style={{ transform: 'rotateY(190deg)'}}
              className="w-[26px] md:w-[33px] lg:w-[40px] mr-[15px] md:mr-[55px] lg:mr-[45px]"
              src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/5c716bf6-169f-40ca-0d06-ab8ba04c0a00/public" width={40} height={40} alt="Arrow icon"
            />
          </span>
        </SectionTitle>
      </div>
      <div className="flex items-start">
        <div className="flex-[1_1_auto]">
          <p dangerouslySetInnerHTML={{ __html: info.info.text }}
            className="w-full max-w-[740px] mx-[auto] mb-[20px] md:mb-[25px] text-center md:text-left text-[16px] md:text-[17px] lg:text-[18px] leading-[24px] md:leading-[25px] lg:leading-[26px] tracking-[0.2px] md:tracking-[0.3px]" />
          <p dangerouslySetInnerHTML={{ __html: info.info.textBottom }}
            className="w-full max-w-[740px] mx-[auto] mb-[20px] md:mb-[25px] text-center md:text-left text-[16px] md:text-[17px] lg:text-[18px] leading-[24px] md:leading-[25px] lg:leading-[26px] tracking-[0.2px] md:tracking-[0.3px]" />

          <div className="flex items-center max-w-[555px] mb-[25px]">
            <div className="flex-[0_0_52%] md:hidden">
              <Image src={info.info.image} width={500} height={500} alt="Image" />
            </div>
            <ul className="flex-[1_1_auto] grid gap-[10px] lg:grid-cols-2">
              <SalesInfoFeatureItem text={info.info.feature1} />
              <SalesInfoFeatureItem text={info.info.feature2} />
              <SalesInfoFeatureItem text={info.info.feature3} />
              <SalesInfoFeatureItem text={info.info.feature4} />
            </ul>
          </div>

          <div className="flex items-center max-w-[555px] p-[15px_12px_16px] md:p-[18px-12px_20px] lg:p-[18px_15px_20px] bg-[#fff] rounded-[9px] shadow-[0_0_4px_1px_#0000001a]">
            <div className="flex-[0_0_55px] md:flex-[0_0_65px] mr-[12px]">
              <Image  src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/b7bb802c-965f-412e-de59-7c81131f1800/public" width={50} height={50} alt="Image" />
            </div>
            <div>
              <p className="flex-[1_1_auto] text-[18px] md:text-[20px] leading-[22px] md:leading-[24px] font-bold">{info.info.feature5}</p>
              {info.info.feature5subtitle && <p className="mt-[10px] pt-[9px] border-t-[1px] border-[#e7e7ea] text-[15px] md:text-[16px] lg:text-[18px] leading-[22px] md:leading-[24px] lg:leading-[26px]">{info.info.feature5subtitle}</p>}
            </div>
          </div>

          <div className="w-full max-w-[366px] md:max-w-[410px] mx-[auto] md:mx-[0]  mt-[30px] md:mt-[40px]">
            <BuyButton info={info} />
          </div>
        </div>

        <div className="hidden md:flex md:flex-[0_0_40%] lg:flex-[0_0_45%]">
          <Image src={info.info.image} width={500} height={500} alt="Image" />
        </div>
      </div>
    </AppSection>
  );
};

export default SalesInfo;