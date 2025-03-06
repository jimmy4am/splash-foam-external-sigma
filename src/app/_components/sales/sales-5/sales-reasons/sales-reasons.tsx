import React from "react";
import Image from "next/image";
import { Figtree } from "next/font/google";

import { SalesPageType } from "@/interfaces/salesPage";
import SalesReasonsSingleItem from "@/app/_components/sales/sales-5/sales-reasons/sales-reasons-single-item";

const figtree = Figtree({ subsets: ["latin"] });

type Props = {
  info: SalesPageType;
};

const SalesReasons = ({ info }: Props) => {
  return (
    <section className="p-[0_0_45px] md:p-[40px_0_85px] lg:p-[65px_0_115px] bg-[#000]">
      <div className="w-full max-w-[1200px] mx-[auto] px-[15px]">
        <div className="hidden md:block mb-[20px] md:mb-[30px] lg:mb-[45px]  text-center text-[#fff]">
          <h2 className={`w-full max-w-[350px] lg:max-w-[450px] mx-auto mb-[15px] lg:mb-[20px] text-[33px] lg:text-[45px] leading-[41px] lg:leading-[53px]  font-extrabold ${figtree.className}`}>
            {info.reasons.heading} <span className="text-[#f00]">“{info.reasons.headingLabel}”</span> {info.reasons.heading2}
          </h2>
          <p className="w-full max-w-[750px] mx-[auto] text-[17px] lg:text-[18px] leading-[25px] lg:leading-[26px] tracking-[0.3px] lg:tracking-[0]">
            {info.reasons.subheading}
          </p>
        </div>

        <div className="w-full max-w-[970px] flex flex-col md:flex-row md:justify-between mx-auto">
          <div className="md:flex-[0_0_57%] lg:flex-[0_0_58%] relative flex -mx-[15px] md:mx-0 mb-[30px] md:mb-0">
            <Image
              className="hidden md:block w-full rounded-[6px] lg:rounded-[10px]"
              src={info.reasons.main_image_desktop}
              width={556}
              height={403}
              alt="Image"
            />
            <Image
              className="md:hidden w-full"
              src={info.reasons.main_image_mob}
              width={700}
              height={637}
              alt="Image"
            />
            <Image
              className="md:hidden absolute left-[50%] bottom-0 -translate-x-[50%] translate-y-[50%] rounded-[50%]"
              src={info.reasons.icon}
              width={47}
              height={47}
              alt="Image"
            />
          </div>

          <div className="md:flex-[0_0_41%] lg:flex-[0_0_38%]">
            <div className="md:hidden mb-[20px] text-center  text-[#fff]">
              <h2 className={`w-full max-w-[400px] mx-auto mb-[15px] text-[30px] leading-[36px] font-extrabold ${figtree.className}`}>
                Cleaning Can Be A Real <span className="text-[#f00]">“Painful”</span> Chore
              </h2>
              <p className="text-[16px] leading-[24px] tracking-[0.3px]">
                Lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh amet nibh vulputate cursus tincidunt auctor a ornare odio mauris vitae erat  sociosqu
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-[10px] px-[5px] md:px-0">
              <SalesReasonsSingleItem image={info.reasons.image1} title={info.reasons.text1} />
              <SalesReasonsSingleItem image={info.reasons.image2} title={info.reasons.text2} />
              <SalesReasonsSingleItem image={info.reasons.image3} title={info.reasons.text3} />
              <SalesReasonsSingleItem image={info.reasons.image4} title={info.reasons.text4} />
              <SalesReasonsSingleItem image={info.reasons.image5} title={info.reasons.text5} />
              <SalesReasonsSingleItem image={info.reasons.image6} title={info.reasons.text6} />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesReasons;