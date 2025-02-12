"use client";

import React, { useState } from "react";
import { Inter } from "next/font/google";

import { SalesPageType } from "@/interfaces/salesPage";
import SalesFaqsSingleItemEdit from "@/app/_components/sales/sales-4/sales-faqs/sales-faqs-single-item-edit";
import SectionTitle from "@/app/_components/sales/sales-4/_components/section-title";
import BuyButton from "@/app/_components/sales/sales-4/_components/buy-button";
import AppSection from "@/app/_components/sales/sales-4/_components/app-section";

const inter = Inter({ subsets: ["latin"] });

type Props2 = {
  info: SalesPageType;
  setCurrentPost: (post: SalesPageType) => void;
};

const SalesFaqs = ({ info, setCurrentPost }: Props2) => {
  const [active, setActive] = useState(0);

  return (
    <AppSection classes={`bg-[#fff] ${inter.className}`}>
      <div className="text-center">
        <SectionTitle>Frequently Asked Questions</SectionTitle>
      </div>

      <ul className="max-w-[850px] m-[auto]">
        <SalesFaqsSingleItemEdit info={info} setCurrentPost={setCurrentPost} q={info.faqs.q1} qField="q1" a={info.faqs.a1} aField="a1" index={0} active={active} setActive={setActive} />
        <SalesFaqsSingleItemEdit info={info} setCurrentPost={setCurrentPost} q={info.faqs.q2} qField="q2" a={info.faqs.a2} aField="a2" index={1} active={active} setActive={setActive} />
        <SalesFaqsSingleItemEdit info={info} setCurrentPost={setCurrentPost} q={info.faqs.q3} qField="q3" a={info.faqs.a3} aField="a3" index={2} active={active} setActive={setActive} />
        <SalesFaqsSingleItemEdit info={info} setCurrentPost={setCurrentPost} q={info.faqs.q4} qField="q4" a={info.faqs.a4} aField="a4" index={3} active={active} setActive={setActive} />
        <SalesFaqsSingleItemEdit info={info} setCurrentPost={setCurrentPost} q={info.faqs.q5} qField="q5" a={info.faqs.a5} aField="a5" index={4} active={active} setActive={setActive} isLastItem />
      </ul>

      <div className="w-full max-w-[366px] md:max-w-[410px] mx-[auto]  mt-[30px] md:mt-[40px]">
        <BuyButton info={info} />
      </div>
    </AppSection>
  );
};

export default SalesFaqs;