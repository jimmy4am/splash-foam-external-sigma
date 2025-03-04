import React from "react";
import { Inter } from "next/font/google";

import { SalesPageType } from "@/interfaces/salesPage";

import SalesFaqs from "@/app/_components/sales/sales-5/sales-faqs/sales-faqs";
import SalesFooter from "@/app/_components/sales/sales-5/sales-footer/sales-footer";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  info: SalesPageType;
};

const Sales5 = ({ info }: Props) => {
  return (
    <div className={`w-full text-[16px] md:text-[17px] leading-[24px] md:leading-[25px] text-[#1a1a1a] ${inter.className}`}>
      <SalesFaqs info={info} />
      <SalesFooter info={info} />
    </div>
  );
};

export default Sales5;