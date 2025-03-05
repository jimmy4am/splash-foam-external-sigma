import React from "react";
import Image from "next/image";

import { SalesPageType } from "@/interfaces/salesPage";
import SectionHeading from "@/app/_components/sales/sales-5/_components/section-heading";
import AppSection from "@/app/_components/sales/sales-5/_components/app-section";
import BuyButton from "@/app/_components/sales/sales-5/_components/buy-button";

type Props = {
  info: SalesPageType;
};

const SalesSpecification = ({ info }: Props) => {
  return (
    <AppSection classes="bg-[#fff] md:bg-[url(https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/997d4820-148a-4f30-0475-0392ce8e0100/public)] bg-no-repeat bg-[center_top]">
      <div className="mb-[20px] md:mb-[30px] lg:mb-[45px]">
        <SectionHeading
          title1="Gravida Aliquet Emet"
          title2="Bibendum Velit"
          subtitle="Lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duissed amet nibh
            vulputate cursusMaecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero"
        />
      </div>

      <div className="w-full max-w-[860px] mx-auto mb-[25px] md:mb-[30px] lg:mb-[50px]">
        <Image
          className="md:hidden w-full max-w-[400px] mx-auto"
          src={info.specification.main_image_mob}
          width={700}
          height={1163}
          alt={info.name}
        />
        
        <div className="hidden relative md:flex justify-center">

          <div className="absolute top-[8%] lg:top-[5%] left-[0] w-[35%]">
            <div className="w-[calc(100%-42px)] h-[48px] ml-[42px] mb-[5px] border-t-[1px] border-l-[1px] border-[#000] border-dashed"></div>
            <div className="w-[85px] mb-[12px] border-[1px] border-[#000] rounded-[50%] overflow-hidden">
              <Image
                src={info.specification.image1}
                width={85}
                height={85}
                alt={info.specification.text1}
              />
            </div>
            <p className="w-[120px] -ml-[14px] text-center text-[16px] lg:text-[18px] leading-[22px] lg:leading-[24px] text-[#000] font-semibold">{info.specification.text1}</p>
          </div>

          <div className="absolute bottom-[17%] left-[0] w-[50%]">
            <div className="flex items-center gap-[12px]">
              <div className="flex w-[85px] border-[1px] border-[#000] rounded-[50%] overflow-hidden">
                <Image
                  src={info.specification.image2}
                  width={85}
                  height={85}
                  alt={info.specification.text2}
                />
              </div>
              <p className="w-[140px] text-[16px] lg:text-[18px] leading-[22px] lg:leading-[24px] text-[#000] font-semibold">{info.specification.text2}</p>
            </div>
            <div className="w-[calc(100%-42px)] h-[42px] ml-[42px] mt-[5px] border-b-[1px] border-l-[1px] border-[#000] border-dashed"></div>
          </div>

          <div className="relative flex justify-center w-[40%] lg:w-[46%]">
            <Image
              src={info.specification.main_image_desktop}
              width={360}
              height={594}
              alt={info.name}
            />
          </div>

          <div className="absolute top-[15%] lg:top-[20%] right-[0] flex flex-col items-end w-[38%] lg:w-[38%]">
            <p className="w-[120px] -mr-[14px] mb-[12px] text-center text-[16px] lg:text-[18px] leading-[22px] lg:leading-[24px] text-[#000] font-semibold">{info.specification.text3}</p>
            <div className="w-[85px] mb-[5px] border-[1px] border-[#000] rounded-[50%] overflow-hidden">
              <Image
                src={info.specification.image3}
                width={85}
                height={85}
                alt={info.specification.text3}
              />
            </div>
            <div className="w-[calc(100%-42px)] h-[32px] mr-[42px] mb-[5px] border-b-[1px] border-r-[1px] border-[#000] border-dashed"></div>
          </div>

          <div className="absolute bottom-[24%] right-[0] flex flex-col items-end w-[38%] lg:w-[38%]">
            <div className="flex items-center justify-end gap-[12px]">
              <p className="w-[150px] text-right text-[16px] lg:text-[18px] leading-[22px] lg:leading-[24px] text-[#000] font-semibold">{info.specification.text4}</p>
              <div className="w-[85px] mb-[5px] border-[1px] border-[#000] rounded-[50%] overflow-hidden">
                <Image
                  src={info.specification.image4}
                  width={85}
                  height={85}
                  alt={info.specification.text4}
                />
              </div>
            </div>
            <div className="w-[calc(100%-42px)] h-[32px] mr-[42px] mb-[5px] border-b-[1px] border-r-[1px] border-[#000] border-dashed"></div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[402px] mx-[auto]">
        <BuyButton info={info}/>
      </div>
    </AppSection>
  );
};

export default SalesSpecification;