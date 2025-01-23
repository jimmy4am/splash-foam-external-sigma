"use client";

import React, { useState } from "react";
import { Inter } from "next/font/google";

import { SalesPageType } from "@/interfaces/salesPage";
import SalesFaqsSingleItem from "@/app/_components/sales/sales-4/sales-faqs/sales-faqs-single-item";
import SectionTitle from "@/app/_components/sales/sales-4/_components/section-title";
import BuyButton from "@/app/_components/sales/sales-4/_components/buy-button";
import AppSection from "@/app/_components/sales/sales-4/_components/app-section";

const inter = Inter({ subsets: ["latin"] });

type Props2 = {
    info: SalesPageType;
};

const SalesFaqs = ({ info }: Props2) => {
    const [active, setActive] = useState(0);

    return (
        <AppSection classes={`bg-[#fff] ${inter.className}`}>
            <div className="text-center">
                <SectionTitle>Frequently Asked Questions</SectionTitle>
            </div>

            <ul className="max-w-[850px] m-[auto]">
                <SalesFaqsSingleItem q={info.faqs.q1} a={info.faqs.a1} index={0} active={active} setActive={setActive} />
                <SalesFaqsSingleItem q={info.faqs.q2} a={info.faqs.a2} index={1} active={active} setActive={setActive} />
                <SalesFaqsSingleItem q={info.faqs.q3} a={info.faqs.a3} index={2} active={active} setActive={setActive} />
                <SalesFaqsSingleItem q={info.faqs.q4} a={info.faqs.a4} index={3} active={active} setActive={setActive} />
                <SalesFaqsSingleItem q={info.faqs.q5} a={info.faqs.a5} index={4} active={active} setActive={setActive} isLastItem />
            </ul>

            <div className="w-full max-w-[366px] md:max-w-[410px] mx-[auto]  mt-[30px] md:mt-[40px]">
                <BuyButton info={info} />
            </div>
        </AppSection>
    );
};

export default SalesFaqs;