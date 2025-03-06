import React from "react";
import Image from "next/image";

import { SalesPageType } from "@/interfaces/salesPage";
import SectionHeading from "@/app/_components/sales/sales-5/_components/section-heading";
import AppSection from "@/app/_components/sales/sales-5/_components/app-section";
import BuyButton from "@/app/_components/sales/sales-5/_components/buy-button";
import SalesComparisonSingleItem from "@/app/_components/sales/sales-5/sales-comparison/sales-comparison-single-item";

type Props = {
  info: SalesPageType;
};

const SalesComparison = ({ info }: Props) => {
  return (
    <AppSection classes="bg-[#fff]">
      <div className="mb-[20px] md:mb-[30px] lg:mb-[45px]">
        <SectionHeading
          title1={info.specgrid.heading}
          title2={info.specgrid.headingend}
          subtitle={info.specgrid.subheading}
        />
      </div>

      <div className="w-full max-w-[780px] mx-[auto] mb-[25px] md:mb-[30px] lg:mb-[50px] p-[25px_0_10px] md:p-[30px_35px_15px] rounded-[15px] bg-[linear-gradient(90deg,_#f3fffc_50%,_#fff3f3_50%)] md:shadow-[0_0_10px_1px_rgba(0,0,0,0.1)]">
        <div className="relative flex justify-between w-[90%] md:w-[85%] mx-auto">
          <div className="flex-[0_0_48%] md:flex-[0_0_32%] flex flex-col items-center">
            <span className="inline-block min-w-[130px] md:min-w-[205px] mb-[12px] md:mb-[20px] lg:mb-[30px] p-[4px_10px] md:p-[7px_10px_8px] bg-[#e4fdf6] rounded-[50px] text-center text-[15px] md:text-[20px] leading-[21px] md:leading-[20px] font-bold">XAll Cleaning</span>
            <Image
              className="w-[130px] md:w-[120px] lg:w-[153px]"
              src={info.specgrid.productImg}
              width={153}
              height={174}
              alt={info.name}
            />
          </div>

          <span className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-yx-[50%] flex items-center justify-center w-[40px] md:w-[46px] h-[40px] md:h-[46px] bg-[#fff] border-[1px] border-[#e1e1e1] rounded-[50%] text-[16px] md:text-[19px] leading-[1] font-bold uppercase">vs</span>

          <div className="flex-[0_0_48%] md:flex-[0_0_32%] flex flex-col items-center">
            <span className="inline-block min-w-[130px] md:min-w-[205px] mb-[12px] md:mb-[20px] lg:mb-[30px] p-[4px_10px] md:p-[7px_10px_8px] bg-[#f4f4f4] rounded-[50px] text-center text-[15px] md:text-[20px] leading-[21px] md:leading-[20px] font-bold">Regular Cleaning</span>
            <Image
              className="w-[130px] md:w-[120px] lg:w-[153px]"
              src={info.specgrid.otherImg}
              width={153}
              height={174}
              alt="Regular Cleaning"
            />
          </div>
        </div>
        <ul>
          <SalesComparisonSingleItem text={info.specgrid.text1} />
          <SalesComparisonSingleItem text={info.specgrid.text2} />
          <SalesComparisonSingleItem text={info.specgrid.text3} />
          <SalesComparisonSingleItem text={info.specgrid.text4} />
          <SalesComparisonSingleItem text={info.specgrid.text5} isLastItem />
        </ul>
      </div>

      <div className="w-full max-w-[402px] mx-[auto]">
        <BuyButton info={info}/>
      </div>
    </AppSection>
  );
};

export default SalesComparison;