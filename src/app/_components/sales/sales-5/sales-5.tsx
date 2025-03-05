import React from "react";
import { Inter } from "next/font/google";

import { SalesPageType } from "@/interfaces/salesPage";

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
    <div className={`w-full text-[16px] md:text-[17px] leading-[24px] md:leading-[25px] text-[#1a1a1a] ${inter.className}`}>
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