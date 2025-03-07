import React from "react";
import { Inter } from "next/font/google";

import { SalesPageType } from "@/interfaces/salesPage";
import SalesHeader from "@/app/_components/sales/sales-6/sales-header/sales-header";
import SalesFaqs from "@/app/_components/sales/sales-6/sales-faqs/sales-faqs";
import SalesFooter from "@/app/_components/sales/sales-6/sales-footer/sales-footer";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  info: SalesPageType;
};

const Sales6 = ({ info }: Props) => {
  return (
    <div className={`w-full text-[16px] md:text-[17px] leading-[24px] md:leading-[25px] text-[#000] ${inter.className} overflow-hidden`}>
      <SalesHeader info={info} />
      <SalesFaqs info={info} />
      <SalesFooter info={info} />
    </div>
  );
};

export default Sales6;