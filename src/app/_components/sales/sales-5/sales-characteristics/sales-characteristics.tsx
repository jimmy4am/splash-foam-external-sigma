import React from "react";

import { SalesPageType } from "@/interfaces/salesPage";
import SectionHeading from "@/app/_components/sales/sales-5/_components/section-heading";
import AppSection from "@/app/_components/sales/sales-5/_components/app-section";
import BuyButton from "@/app/_components/sales/sales-5/_components/buy-button";
import SalesCharacteristicsSingleItem
  from "@/app/_components/sales/sales-5/sales-characteristics/sales-characteristics-single-item";

type Props = {
  info: SalesPageType;
};

const SalesCharacteristics = ({ info }: Props) => {
  return (
    <AppSection classes="bg-[#fff]">
      <div className="mb-[20px] md:mb-[30px] lg:mb-[45px]">
        <SectionHeading
          title1="Why Every House Needs"
          title2="XAll Spin Scrubber"
          subtitle="Lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duissed amet nibh vulputate
            cursusMaecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero"
        />
      </div>

      <ul className="grid md:grid-cols-3 gap-[10px] md:gap-x-[10px] md:gap-y-[15px] lg:gap-[30px] mb-[25px] md:mb-[30px] lg:mb-[50px]">
        <SalesCharacteristicsSingleItem icon={info.characteristics.icon1} title={info.characteristics.title1} text={info.characteristics.text1} />
        <SalesCharacteristicsSingleItem icon={info.characteristics.icon2} title={info.characteristics.title2} text={info.characteristics.text2} />
        <SalesCharacteristicsSingleItem icon={info.characteristics.icon3} title={info.characteristics.title3} text={info.characteristics.text3} />
        <SalesCharacteristicsSingleItem icon={info.characteristics.icon4} title={info.characteristics.title4} text={info.characteristics.text4} />
        <SalesCharacteristicsSingleItem icon={info.characteristics.icon5} title={info.characteristics.title5} text={info.characteristics.text5} />
        <SalesCharacteristicsSingleItem icon={info.characteristics.icon6} title={info.characteristics.title6} text={info.characteristics.text6} />
      </ul>

      <div className="w-full max-w-[402px] mx-[auto]">
        <BuyButton info={info}/>
      </div>
    </AppSection>
  );
};

export default SalesCharacteristics;