import React from "react";
import Image from "next/image";

import { SalesPageType } from "@/interfaces/salesPage";
import SectionHeading from "@/app/_components/sales/sales-6/_components/section-heading";
import AppSection from "@/app/_components/sales/sales-6/_components/app-section";
import BuyButton from "@/app/_components/sales/sales-6/_components/buy-button";
import SalesFeaturesSingleItem from "@/app/_components/sales/sales-6/sales-features/sales-features-single-item";

type Props = {
  info: SalesPageType;
};

const SalesFeatures = ({ info }: Props) => {
  return (
    <AppSection classes="bg-[#f3f4f5]">
      <SectionHeading classes="md:max-w-[700px] mx-auto">{info.features.heading}</SectionHeading>

      <div className="relative max-w-[1030px] md:flex md:justify-between mx-auto mt-[25px] md:mt-[35px] lg:mt-[25px] mb-[26px] md:mb-[0]">
        <Image
          className="md:hidden absolute top-[0] -right-[90px] max-w-[250px] z-10"
          src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/d7ebd9c1-b4a1-44f6-f558-d8faad333300/public"
          width={273}
          height={549}
          alt={info.name}
        />

        <div className="md:flex-[0_0_31%] lg:flex-[0_0_28%] md:pt-[25px] lg:pt-[75px]">
          <SalesFeaturesSingleItem image={info.features.image1} title={info.features.title1} text={info.features.text1} />
          <SalesFeaturesSingleItem image={info.features.image2} title={info.features.title2} text={info.features.text2} />
          <SalesFeaturesSingleItem image={info.features.image3} title={info.features.title3} text={info.features.text3} />
        </div>

        <div className="hidden md:flex relative justify-center md:flex-[0_0_36%] xl:flex-[0_0_33%]">
          <Image
            className="max-w-[185px] lg:max-w-none z-10"
            src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/d7ebd9c1-b4a1-44f6-f558-d8faad333300/public"
            width={273}
            height={549}
            alt={info.name}
          />
          <Image
            className="absolute max-w-[275px] lg:max-w-full top-0 lg:top-[75px] left-[50%] -translate-x-[50%]"
            src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/59dce104-e476-4ee2-5bdc-1252521f9600/public"
            width={363}
            height={363}
            alt="Background"
          />
        </div>

        <div className="md:flex-[0_0_31%] lg:flex-[0_0_28%] md:pt-[25px] lg:pt-[75px]">
          <SalesFeaturesSingleItem image={info.features.image4} title={info.features.title4} text={info.features.text4} />
          <SalesFeaturesSingleItem image={info.features.image5} title={info.features.title5} text={info.features.text5} />
          <SalesFeaturesSingleItem image={info.features.image6} title={info.features.title6} text={info.features.text6} />
        </div>
      </div>

      <div className="w-full max-w-[420px] mx-[auto]">
        <BuyButton info={info}/>
      </div>
    </AppSection>
  );
};

export default SalesFeatures;