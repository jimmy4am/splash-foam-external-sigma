"use client";

import React, { useState } from "react";
import { Inter } from "next/font/google";

import { SalesPageType } from "@/interfaces/salesPage";
import SalesFaqsSingleItem from "@/app/_components/sales/sales-3/sales-faqs/sales-faqs-single-item";
import SectionTitle from "@/app/_components/sales/sales-3/_components/section-title";
import BuyButton from "@/app/_components/sales/sales-3/_components/buy-button";

const inter = Inter({ subsets: ["latin"] });

type Props2 = {
    info: SalesPageType;
};

const SalesFaqs = ({ info }: Props2) => {
    const [active, setActive] = useState(0);

    return (
        <section className={`w-full p-[30px_0_35px] md:p-[50px_0_60px] lg:p-[60px_0_70px] bg-[#fff] ${inter.className}`}>
            <div className="w-full max-w-[1200px] mx-[auto] px-4">
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
            </div>
        </section>
    );
};

export default SalesFaqs;