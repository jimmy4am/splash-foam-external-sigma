import React from "react";
import Image from "next/image";

import { CheckoutPageType } from "@/interfaces/checkoutPage";

type Props = {
  info: CheckoutPageType;
};

const CheckoutPartners = ({ info }: Props) => {
  return (
    <section className="py-[12px] md:py-[16px] bg-[#ffa500]">
      <div className="partners-ticker flex items-center justify-center gap-[60px] md:gap-[100px]">
        <Image
          src={info.mould_cleaner.partners.partner_1_image}
          alt="Partner 1"
          width={100}
          height={200}
          className="w-auto h-[26px] md:h-[40px]"
        />
        <Image
          src={info.mould_cleaner.partners.partner_2_image}
          alt="Partner 2"
          width={100}
          height={200}
          className="w-auto h-[26px] md:h-[40px]"
        />
        <Image
          src={info.mould_cleaner.partners.partner_3_image}
          alt="Partner 3"
          width={100}
          height={200}
          className="w-auto h-[26px] md:h-[40px]"
        />
        <Image
          src={info.mould_cleaner.partners.partner_4_image}
          alt="Partner 4"
          width={100}
          height={200}
          className="w-auto h-[26px] md:h-[40px]"
        />
        <Image
          src={info.mould_cleaner.partners.partner_1_image}
          alt="Partner 1"
          width={100}
          height={200}
          className="w-auto h-[26px] md:h-[40px]"
        />
        <Image
          src={info.mould_cleaner.partners.partner_2_image}
          alt="Partner 2"
          width={100}
          height={200}
          className="w-auto h-[26px] md:h-[40px]"
        />
        <Image
          src={info.mould_cleaner.partners.partner_3_image}
          alt="Partner 3"
          width={100}
          height={200}
          className="w-auto h-[26px] md:h-[40px]"
        />
        <Image
          src={info.mould_cleaner.partners.partner_4_image}
          alt="Partner 4"
          width={100}
          height={200}
          className="w-auto h-[26px] md:h-[40px]"
        />
        <Image
          src={info.mould_cleaner.partners.partner_1_image}
          alt="Partner 1"
          width={100}
          height={200}
          className="w-auto h-[26px] md:h-[40px]"
        />
        <Image
          src={info.mould_cleaner.partners.partner_2_image}
          alt="Partner 2"
          width={100}
          height={200}
          className="w-auto h-[26px] md:h-[40px]"
        />
        <Image
          src={info.mould_cleaner.partners.partner_3_image}
          alt="Partner 3"
          width={100}
          height={200}
          className="w-auto h-[26px] md:h-[40px]"
        />
        <Image
          src={info.mould_cleaner.partners.partner_4_image}
          alt="Partner 4"
          width={100}
          height={200}
          className="w-auto h-[26px] md:h-[40px]"
        />
        <Image
          src={info.mould_cleaner.partners.partner_1_image}
          alt="Partner 1"
          width={100}
          height={200}
          className="w-auto h-[26px] md:h-[40px]"
        />
        <Image
          src={info.mould_cleaner.partners.partner_2_image}
          alt="Partner 2"
          width={100}
          height={200}
          className="w-auto h-[26px] md:h-[40px]"
        />
        <Image
          src={info.mould_cleaner.partners.partner_3_image}
          alt="Partner 3"
          width={100}
          height={200}
          className="w-auto h-[26px] md:h-[40px]"
        />
        <Image
          src={info.mould_cleaner.partners.partner_4_image}
          alt="Partner 4"
          width={100}
          height={200}
          className="w-auto h-[26px] md:h-[40px]"
        />
        <Image
          src={info.mould_cleaner.partners.partner_1_image}
          alt="Partner 1"
          width={100}
          height={200}
          className="w-auto h-[26px] md:h-[40px]"
        />
        <Image
          src={info.mould_cleaner.partners.partner_2_image}
          alt="Partner 2"
          width={100}
          height={200}
          className="w-auto h-[26px] md:h-[40px]"
        />
        <Image
          src={info.mould_cleaner.partners.partner_3_image}
          alt="Partner 3"
          width={100}
          height={200}
          className="w-auto h-[26px] md:h-[40px]"
        />
        <Image
          src={info.mould_cleaner.partners.partner_4_image}
          alt="Partner 4"
          width={100}
          height={200}
          className="w-auto h-[26px] md:h-[40px]"
        />
      </div>
    </section>
  )
};

export default CheckoutPartners;