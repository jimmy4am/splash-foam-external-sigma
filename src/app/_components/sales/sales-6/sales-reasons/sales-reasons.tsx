import React from "react";
import Image from "next/image";

import { SalesPageType } from "@/interfaces/salesPage";
import SalesReasonsSingleItem from "@/app/_components/sales/sales-6/sales-reasons/sales-reasons-single-item";
import SectionHeading from "@/app/_components/sales/sales-6/_components/section-heading";
import BuyButton from "@/app/_components/sales/sales-6/_components/buy-button";

type Props = {
  info: SalesPageType;
};

const SalesReasons = ({ info }: Props) => {
  return (
    <section className="p-[0_0_30px] md:p-[60px_0] bg-[#000]">
      <div className="w-full max-w-[1200px] mx-[auto] px-[15px]">
        <div className="hidden md:block mb-[25px] lg:mb-[50px] text-center text-[#fff]">
          <SectionHeading classes="max-w-[480px] lg:max-w-[500px] mx-auto mb-[15px]">{info.reasons.heading}</SectionHeading>
          <p className="max-w-[680px] mx-auto">{info.reasons.subheading}</p>
        </div>

        <div className="w-full max-w-[990px] flex flex-col md:flex-row md:items-start md:gap-[35px] lg:gap-[60px] xl:gap-[55px] mx-auto mb-[26px] md:mb-[35px] lg:mb-[40px] text-[#fff]">
          <div className="md:flex-[0_0_356px] lg:flex-[0_0_481px] flex -mx-[15px] md:mx-0">
            <Image
              className="w-full"
              src={info.reasons.main_image_mob}
              width={481}
              height={349}
              alt="Image"
            />
          </div>

          <div className="pt-[25px] md:pt-[0] md:flex-[1_1_auto]">
            <div className="md:hidden mb-[20px] px-[10px] text-center">
              <SectionHeading>{info.reasons.heading}</SectionHeading>
              <p className="mt-[12px]">{info.reasons.subheading}</p>
            </div>

            <p className="mb-[20px] lg:mb-[15px] xl:mb-[35px] text-[18px] md:text-[16px] lg:text-[20px] leading-[28px] font-bold">{info.reasons.heading2}</p>
            <ul className="flex flex-col gap-[10px] lg:gap-[20px] text-[16px] lg:text-[18px] leading-[22px] lg:leading-[28px] font-medium">
              <SalesReasonsSingleItem title={info.reasons.text1} />
              <SalesReasonsSingleItem title={info.reasons.text2} />
              <SalesReasonsSingleItem title={info.reasons.text3} />
              <SalesReasonsSingleItem title={info.reasons.text4} />
              <SalesReasonsSingleItem title={info.reasons.text5} />
              <SalesReasonsSingleItem title={info.reasons.text6} />
              <SalesReasonsSingleItem title={info.reasons.text7} />
            </ul>
          </div>
        </div>

        <div className="w-full max-w-[420px] mx-[auto]">
          <BuyButton info={info} dark />
        </div>
      </div>
    </section>
  );
};

export default SalesReasons;