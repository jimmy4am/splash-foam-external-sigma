"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";

import { SalesPageType } from "@/interfaces/salesPage";
import SectionTitle from "@/app/_components/sales/sales-4/_components/section-title";
import BuyButton from "@/app/_components/sales/sales-4/_components/buy-button";
import SalesComparisonHighlight from "@/app/_components/sales/sales-4/sales-comparison/sales-comparison-highlight";
import AppSection from "@/app/_components/sales/sales-4/_components/app-section";
import SalesComparisonTable from "@/app/_components/sales/sales-4/sales-comparison/sales-comparison-table";

type Props = {
  info: SalesPageType;
};

const SalesComparison = ({ info }: Props) => {
  const [ windowWidth, setWindowWidth ] = useState(0);

  const settings = {
    dots: true,
    nextArrow: <button><Image className="" src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/c8d363ef-dadd-4654-0728-197ae1a4b900/public" width={38} height={38} alt="Next slide icon" /></button>,
    prevArrow: <button><Image className="" src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/64e9553b-9c3c-43c1-458b-1f70fc3e2600/public" width={38} height={38} alt="Prev slide icon" /></button>,
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <AppSection classes="bg-[#e7f4f9]">
      <div className="flex justify-center text-center pt-[28px]">
        <SectionTitle>
          {info.specgrid.heading}
          <span className="absolute -right-[30px] md:-right-[100px] -top-[30px] md:-top-[37px] lg:-top-[45px] flex flex-col items-end text-[14px] md:text-[15px] lg:text-[18px] leading-[16px] md:leading-[20px] lg:leading-[24px] text-[#000] font-bold">
            <span className="mb-[12px]">{info.specgrid.headingLabel}</span>
            <Image
              style={{ transform: 'rotateY(190deg)'}}
              className="w-[26px] md:w-[33px] lg:w-[40px] mr-[30px] md:mr-[55px] lg:mr-[45px]"
              src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/5c716bf6-169f-40ca-0d06-ab8ba04c0a00/public" width={40} height={40} alt="Arrow icon"
            />
          </span>
          <br className="md:hidden"/>
          {info.specgrid.headingend}
        </SectionTitle>
      </div>

      <div className="w-full max-w-[830px] mx-[auto] mb-[35px] md:mb-[45px] md:mt-[20px]">
        <SalesComparisonTable info={info} />
      </div>

      { windowWidth >= 768 ? (
        <div className="w-full max-w-[1060px] mx-[auto] flex flex-col md:flex-row gap-[20px] lg:gap-[30px] xl:gap-[40px]">
          <SalesComparisonHighlight icon={info.highlights.icon1} title={info.highlights.head1} text={info.highlights.text1} />
          <SalesComparisonHighlight icon={info.highlights.icon2} title={info.highlights.head2} text={info.highlights.text2} />
          <SalesComparisonHighlight icon={info.highlights.icon3} title={info.highlights.head3} text={info.highlights.text3} />
        </div>
      ) : (
        <div className="w-full max-w-[1060px] mx-[auto] flex flex-col md:flex-row gap-[20px] lg:gap-[30px] xl:gap-[40px] mb-[12px] md:mb-[0]">
          <Slider className="comparison-highlight-slider slider" {...settings}>
            <SalesComparisonHighlight icon={info.highlights.icon1} title={info.highlights.head1} text={info.highlights.text1} />
            <SalesComparisonHighlight icon={info.highlights.icon2} title={info.highlights.head2} text={info.highlights.text2} />
            <SalesComparisonHighlight icon={info.highlights.icon3} title={info.highlights.head3} text={info.highlights.text3} />
          </Slider>
        </div>
      )}

      <div className="w-full max-w-[366px] md:max-w-[410px] mx-[auto]  mt-[30px] md:mt-[40px]">
        <BuyButton info={info} />
      </div>
    </AppSection>
  );
};

export default SalesComparison;