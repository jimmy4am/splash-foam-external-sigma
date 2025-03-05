"use client";

import React, { useState } from "react";

import { SalesPageType } from "@/interfaces/salesPage";
import SalesFaqsSingleItem from "@/app/_components/sales/sales-5/sales-faqs/sales-faqs-single-item";
import SectionHeading from "@/app/_components/sales/sales-5/_components/section-heading";
import BuyButton from "@/app/_components/sales/sales-5/_components/buy-button";
import AppSection from "@/app/_components/sales/sales-5/_components/app-section";

type Props = {
  info: SalesPageType;
};

const SalesFaqs = ({ info }: Props) => {
  const [active, setActive] = useState(0);

  return (
    <AppSection classes="bg-[#f6f6f6]">
      <SectionHeading title1="You Asked The Questions" title2="We Give The Answers" />

      <ul className="max-w-[770px] mx-[auto] mt-[10px] md:mt-[20px] lg:mt-[25px] mb-[15px] md:mb-[25px]">
        <SalesFaqsSingleItem q={info.faqs.q1} a={info.faqs.a1} index={0} active={active} setActive={setActive} />
        <SalesFaqsSingleItem q={info.faqs.q2} a={info.faqs.a2} index={1} active={active} setActive={setActive} />
        <SalesFaqsSingleItem q={info.faqs.q3} a={info.faqs.a3} index={2} active={active} setActive={setActive} />
        <SalesFaqsSingleItem q={info.faqs.q4} a={info.faqs.a4} index={3} active={active} setActive={setActive} />
        <SalesFaqsSingleItem q={info.faqs.q5} a={info.faqs.a5} index={4} active={active} setActive={setActive} />
        <SalesFaqsSingleItem q={info.faqs.q6} a={info.faqs.a6} index={5} active={active} setActive={setActive} isLastItem />
      </ul>

      <div className="w-full max-w-[402px] mx-[auto]">
        <BuyButton info={info} />
      </div>
    </AppSection>
  );
};

export default SalesFaqs;