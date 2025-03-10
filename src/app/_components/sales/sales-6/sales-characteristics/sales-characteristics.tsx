import React from "react";

import { SalesPageType } from "@/interfaces/salesPage";
import SectionHeading from "@/app/_components/sales/sales-6/_components/section-heading";
import AppSection from "@/app/_components/sales/sales-6/_components/app-section";
import BuyButton from "@/app/_components/sales/sales-6/_components/buy-button";
import SalesCharacteristicsSingleItem
  from "@/app/_components/sales/sales-6/sales-characteristics/sales-characteristics-single-item";

type Props = {
  info: SalesPageType;
};

const SalesCharacteristics = ({ info }: Props) => {
  return (
    <AppSection classes="bg-[#fff]">
      <SectionHeading>{info.characteristics.heading}</SectionHeading>

      <ul className="grid md:grid-cols-3 gap-[25px] md:gap-[1px] mt-[25px] md:mt-[10px] lg:mt-[30px] mb-[26px] md:mb-[10px]">
        <SalesCharacteristicsSingleItem icon={info.characteristics.icon1} title={info.characteristics.title1} text={info.characteristics.text1} rightLine bottomLine />
        <SalesCharacteristicsSingleItem icon={info.characteristics.icon2} title={info.characteristics.title2} text={info.characteristics.text2} rightLine bottomLine />
        <SalesCharacteristicsSingleItem icon={info.characteristics.icon3} title={info.characteristics.title3} text={info.characteristics.text3} bottomLine />
        <SalesCharacteristicsSingleItem icon={info.characteristics.icon4} title={info.characteristics.title4} text={info.characteristics.text4} rightLine shortTitle />
        <SalesCharacteristicsSingleItem icon={info.characteristics.icon5} title={info.characteristics.title5} text={info.characteristics.text5} rightLine />
        <SalesCharacteristicsSingleItem icon={info.characteristics.icon6} title={info.characteristics.title6} text={info.characteristics.text6} />
      </ul>

      <div className="w-full max-w-[420px] mx-[auto]">
        <BuyButton info={info}/>
      </div>
    </AppSection>
  );
};

export default SalesCharacteristics;