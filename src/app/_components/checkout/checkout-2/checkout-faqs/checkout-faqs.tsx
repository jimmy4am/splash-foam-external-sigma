import React from "react";

import { CheckoutPageType } from "@/interfaces/checkoutPage";
import SalesFaqsSingleItem from "@/app/_components/checkout/checkout-2/checkout-faqs/checkout-faqs-single-item";
import SectionTitle from "@/app/_components/checkout/checkout-2/_components/section-title";

type Props = {
  info: CheckoutPageType;
};

const CheckoutFaqs = ({ info }: Props) => {
  return (
    <section className="py-[27px] md:py-[36px]">
      <div className="w-full max-w-[1330px] mx-auto px-[15px]">
        <div className="text-center">
          <SectionTitle>Frequently Asked Questions</SectionTitle>
        </div>

        <ul className="max-w-[700px] m-[auto] border-t-[1px] border-[#c2c2c2]">
          <SalesFaqsSingleItem q={info.mould_cleaner.faqs.q1} a={info.mould_cleaner.faqs.a1} />
          <SalesFaqsSingleItem q={info.mould_cleaner.faqs.q2} a={info.mould_cleaner.faqs.a2} />
          <SalesFaqsSingleItem q={info.mould_cleaner.faqs.q3} a={info.mould_cleaner.faqs.a3} />
          <SalesFaqsSingleItem q={info.mould_cleaner.faqs.q4} a={info.mould_cleaner.faqs.a4} />
          <SalesFaqsSingleItem q={info.mould_cleaner.faqs.q5} a={info.mould_cleaner.faqs.a5} />
          <SalesFaqsSingleItem q={info.mould_cleaner.faqs.q6} a={info.mould_cleaner.faqs.a6} />
        </ul>
      </div>
    </section>
  );
};

export default CheckoutFaqs;