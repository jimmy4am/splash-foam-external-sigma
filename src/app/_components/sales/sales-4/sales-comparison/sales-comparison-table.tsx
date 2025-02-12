import React from "react";
import Image from "next/image";

import {SalesPageType} from "@/interfaces/salesPage";

type Props = {
  info: SalesPageType;
};

const SalesComparisonIcon = ({ icon, label, idx }: { icon: string, label: string, idx: number}) => (
  <div className={`h-[75px] md:h-[90px] flex items-center justify-center px-[10px] bg-[${idx % 2 && '#fff'}]`}>
    <Image src={icon} width={32} height={32} alt={label} />
  </div>
)

const SalesComparisonCheckIcon = ({ idx }: { idx: number}) => <SalesComparisonIcon icon="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/d561d568-978b-455f-d480-cdc47a042800/public" label="Check icon" idx={idx} />

const SalesComparisonCrossIcon = ({ idx }: { idx: number}) => <SalesComparisonIcon icon="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/58c00d25-fc56-4b99-5cba-bfcaca0f0b00/public" label="Cross icon" idx={idx} />

const SalesComparisonItem = ({ text }: { text: string }) => (
  <li className="h-[75px] md:h-[90px] flex items-center justify-center px-[5px] md:px-[10px] text-center text-[16px] md:text-[19px] leading-[20px] sm:leading-[24px] md:leading-[22px] font-medium">
    {text}
  </li>
)

const SalesComparisonTable = ({ info }: Props) => {
  return (
    <>
      <div className="flex items-center -mx-4 md:mx-[0]">
        <div className="flex-[0_0_20%] sm:flex-[0_0_25%] flex flex-col items-center">
          <p className="mb-[15px] text-center text-[18px] md:text-[26px] leading-[24px] md:leading-[26px] font-bold">Splash Foam</p>
          <Image className="h-[86px] sm:h-[122px] lg:h-[162px] w-[auto]" src={info.specgrid.productImg} width={200} height={200} alt="Splash Foam" />
        </div>
        <div className="flex-[0_0_60%] sm:flex-[0_0_50%] flex items-center gap-[15px]">
          <span className="flex-[1_1_auto] h-[3px] bg-[#0f85d3]"></span>
          <span className="flex items-center justify-center w-[50px] md:w-[75px] h-[50px] md:h-[75px] bg-[#fff] border-[3px] border-[#0f85d3] rounded-[50%] text-center text-[20px] md:text-[33px] uppercase font-semibold">vs</span>
          <span className="flex-[1_1_auto] h-[3px] bg-[#0f85d3]"></span>
        </div>
        <div className="flex-[0_0_20%] sm:flex-[0_0_25%] flex flex-col items-center">
          <p className="mb-[15px] text-center text-[18px] md:text-[26px] leading-[24px] md:leading-[26px] font-bold">Other Brands</p>
          <Image className="h-[86px] sm:h-[122px] lg:h-[162px] w-[auto]" src={info.specgrid.otherImg} width={200} height={200} alt="Other Brands" />
        </div>
      </div>

      <div className="flex items-center -mx-4 md:mx-[0]">
        <div className="flex-[0_0_20%] sm:flex-[0_0_25%]">
          <SalesComparisonCheckIcon idx={0} />
          <SalesComparisonCheckIcon idx={1} />
          <SalesComparisonCheckIcon idx={2} />
          <SalesComparisonCheckIcon idx={3} />
          <SalesComparisonCheckIcon idx={4} />
          <SalesComparisonCheckIcon idx={5} />
          <SalesComparisonCheckIcon idx={6} />
        </div>
        <ul className="flex-[0_0_60%] sm:flex-[0_0_50%] bg-[#fff] border-[3px] border-[#429fdc] rounded-[15px]">
          <SalesComparisonItem text={info.specgrid.text1} />
          <SalesComparisonItem text={info.specgrid.text2} />
          <SalesComparisonItem text={info.specgrid.text3} />
          <SalesComparisonItem text={info.specgrid.text4} />
          <SalesComparisonItem text={info.specgrid.text5} />
          <SalesComparisonItem text={info.specgrid.text6} />
          <SalesComparisonItem text={info.specgrid.text7} />
        </ul>
        <div className="flex-[0_0_20%] sm:flex-[0_0_25%]">
          <SalesComparisonCrossIcon idx={0} />
          <SalesComparisonCrossIcon idx={1} />
          <SalesComparisonCrossIcon idx={2} />
          <SalesComparisonCrossIcon idx={3} />
          <SalesComparisonCrossIcon idx={4} />
          <SalesComparisonCrossIcon idx={5} />
          <SalesComparisonCrossIcon idx={6} />
        </div>
      </div>
    </>
  );
};

export default SalesComparisonTable;