import React from "react";
import { Inter } from "next/font/google";

import { SalesPageType } from "@/interfaces/salesPage";

import SalesHeader from "@/app/_components/sales/sales-5/sales-header/sales-header";
import SalesHero from "@/app/_components/sales/sales-5/sales-hero/sales-hero";
import SalesSources from "@/app/_components/sales/sales-5/sales-sources/sales-sources";
import SalesReasons from "@/app/_components/sales/sales-5/sales-reasons/sales-reasons";
import SalesResults from "@/app/_components/sales/sales-5/sales-results/sales-results";
import SalesUsage from "@/app/_components/sales/sales-5/sales-usage/sales-usage";
import SalesFeatures from "@/app/_components/sales/sales-5/sales-features/sales-features";
import SalesSpecification from "@/app/_components/sales/sales-5/sales-specification/sales-specification";
import SalesCharacteristics from "@/app/_components/sales/sales-5/sales-characteristics/sales-characteristics";
import SalesComparison from "@/app/_components/sales/sales-5/sales-comparison/sales-comparison";
import SalesPackages from "@/app/_components/sales/sales-5/sales-packages/sales-packages";
import SalesReviews from "@/app/_components/sales/sales-5/sales-reviews/sales-reviews";
import SalesFaqs from "@/app/_components/sales/sales-5/sales-faqs/sales-faqs";
import SalesFooter from "@/app/_components/sales/sales-5/sales-footer/sales-footer";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  info: SalesPageType;
};

const Sales5 = ({ info }: Props) => {
  return (
    <div className={`w-full text-[16px] md:text-[17px] leading-[24px] md:leading-[25px] text-[#1a1a1a] ${inter.className} overflow-hidden`}>
      <SalesHeader info={info} />
      <SalesHero info={info} />
      <SalesSources info={info} />
      <SalesReasons info={info} />
      <SalesResults info={info} />
      <SalesUsage info={info} />
      <SalesFeatures info={info} />
      <SalesSpecification info={info} />
      <SalesCharacteristics info={info} />
      <SalesComparison info={info} />
      <SalesPackages info={info} />
      <SalesReviews info={info} />
      <SalesFaqs info={info} />
      <SalesFooter info={info} />
    </div>
  );
};

export default Sales5;