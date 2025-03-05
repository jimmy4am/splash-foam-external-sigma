import React from "react";

import { SalesPageType } from "@/interfaces/salesPage";
import SectionHeading from "@/app/_components/sales/sales-5/_components/section-heading";
import AppSection from "@/app/_components/sales/sales-5/_components/app-section";
import BuyButton from "@/app/_components/sales/sales-5/_components/buy-button";
import SalesFeaturesSingleItem from "@/app/_components/sales/sales-5/sales-features/sales-features-single-item";
import SalesFeaturesOffer from "@/app/_components/sales/sales-5/sales-features/sales-features-offer";

type Props = {
  info: SalesPageType;
};

const SalesFeatures = ({ info }: Props) => {
  return (
    <AppSection classes="bg-[#fff]">
      <div className="mb-[20px] md:mb-[30px] lg:mb-[45px]">
        <SectionHeading
          title1="The Easy Way To Clean"
          title2="Everything SMARTLY!"
          subtitle="Lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duissed amet nibh vulputate
            cursusMaecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero"
        />
      </div>

      <ul className="grid md:grid-cols-3 gap-[30px] md:gap-x-[10px] md:gap-y-[30px] lg:gap-[30px] mb-[25px] md:mb-[30px] lg:mb-[50px]">
        <SalesFeaturesSingleItem image={info.features.image1} title={info.features.title1} text={info.features.text1} />
        <SalesFeaturesSingleItem image={info.features.image2} title={info.features.title2} text={info.features.text2} />
        <SalesFeaturesSingleItem image={info.features.image3} title={info.features.title3} text={info.features.text3} />
        <SalesFeaturesOffer info={info} />
        <SalesFeaturesSingleItem image={info.features.image4} title={info.features.title4} text={info.features.text4} />
        <SalesFeaturesSingleItem image={info.features.image5} title={info.features.title5} text={info.features.text5} />
        <SalesFeaturesSingleItem image={info.features.image6} title={info.features.title6} text={info.features.text6} />
      </ul>

      <div className="w-full max-w-[402px] mx-[auto]">
        <BuyButton info={info}/>
      </div>
    </AppSection>
  );
};

export default SalesFeatures;