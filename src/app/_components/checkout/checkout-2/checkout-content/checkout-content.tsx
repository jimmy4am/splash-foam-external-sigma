import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";

import SectionTitle from "@/app/_components/checkout/checkout-2/_components/section-title";

const poppins = Poppins({weight: ["700"], subsets: ["latin"] });

type Props = {
  image: string;
  title: string;
  text: string;
  subtitle: string;
  revert?: boolean;
};

const CheckoutContent = ({ image, title, text, subtitle, revert = false}: Props) => {
  return (
    <section className="py-[27px] md:py-[36px]">
      <div className="w-full max-w-[1330px] mx-auto px-[15px] md:flex md:items-center">
        <div className="md:self-start md:w-1/2 order-1 aspect-square rounded-[12px] overflow-hidden">
          <Image
            className="w-full h-full object-cover"
            src={image}
            width={500}
            height={500}
            alt="Image"
          />
        </div>
        <div className={`md:w-1/2 p-[20px_0] md:p-[30px] lg:md:p-[0_70px] text-left ${revert ? 'order-0 md:!pl-0' : 'order-1 md:text-center'}`}>
          <SectionTitle>{title}</SectionTitle>
          <p>{text}</p>
          {subtitle && <h3 className={`mt-[24px] text-[22px] md:text-[24px] leading-[27px] md:leading-[29px] font-bold ${poppins.className}`}>{subtitle}</h3>}
        </div>
      </div>
    </section>
  )
};

export default CheckoutContent;