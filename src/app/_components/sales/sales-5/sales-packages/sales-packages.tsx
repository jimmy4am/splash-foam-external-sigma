import React from "react";
import Image from "next/image";

import { SalesPageType } from "@/interfaces/salesPage";
import SectionHeading from "@/app/_components/sales/sales-5/_components/section-heading";
import AppSection from "@/app/_components/sales/sales-5/_components/app-section";
import BuyButton from "@/app/_components/sales/sales-5/_components/buy-button";

type Props = {
  info: SalesPageType;
};

type SalesPackagesSingleItemProps = {
  image: string;
  title: string;
  text: string;
};

const SalesPackagesSingleItem = ({ image, title, text }: SalesPackagesSingleItemProps) => (
  <li className="flex gap-[15px]">
    <div className="flex-[0_0_80px] md:flex-[0_0_60px] lg:flex-[0_0_84px] border-[1px] border-[#000] rounded-[5px] overflow-hidden">
      <Image
        src={image}
        width={84}
        height={84}
        alt={title}
      />
    </div>
    <div className="flex-1">
      <h3 className="mb-[6px] lg:mb-[8px] text-[20px] leading-[24px] text-[#000] font-bold">{title}</h3>
      <p>{text}</p>
    </div>
  </li>
)

const SalesPackages = ({ info }: Props) => {
  return (
    <AppSection classes="bg-[#fbfbfb]">
      <div className="mb-[20px] md:mb-[30px] lg:mb-[45px]">
        <SectionHeading
          title1={info.packages.heading}
          title2={info.packages.heading2}
          subtitle={info.packages.subheading}
        />
      </div>
      
      <div className="flex flex-col md:flex-row gap-[20px] mb-[25px] md:mb-[30px] lg:mb-[50px]">
        <div className="">
          <Image
            src={info.packages.image}
            width={642}
            height={561}
            alt={info.name}
          />
        </div>
        <ul className="flex flex-col gap-[25px] lg:gap-[30px]">
          <SalesPackagesSingleItem image={info.packages.image1} title={info.packages.title1} text={info.packages.text1} />
          <SalesPackagesSingleItem image={info.packages.image2} title={info.packages.title2} text={info.packages.text2} />
          <SalesPackagesSingleItem image={info.packages.image3} title={info.packages.title3} text={info.packages.text3} />
          <SalesPackagesSingleItem image={info.packages.image4} title={info.packages.title4} text={info.packages.text4} />
          <SalesPackagesSingleItem image={info.packages.image5} title={info.packages.title5} text={info.packages.text5} />
        </ul>
      </div>

      <div className="w-full max-w-[402px] mx-[auto]">
        <BuyButton info={info}/>
      </div>
    </AppSection>
  );
};

export default SalesPackages;