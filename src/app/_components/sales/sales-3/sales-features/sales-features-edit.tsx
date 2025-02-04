import React from "react";
import Image from "next/image";

import { SalesPageType } from "@/interfaces/salesPage";
import SectionTitle from "@/app/_components/sales/sales-3/_components/section-title";
import BuyButton from "@/app/_components/sales/sales-3/_components/buy-button";
import SalesFeaturesSingleItemEdit
  from "@/app/_components/sales/sales-3/sales-features/sales-features-single-item-edit";
import AppSection from "@/app/_components/sales/sales-3/_components/app-section";

type Props = {
  info: SalesPageType;
  setCurrentPost: (post: SalesPageType) => void;
};

const SalesFeaturesEdit = ({ info, setCurrentPost }: Props) => {
  return (
    <AppSection>
      <div className="max-w-[380px] md:max-w-[590px] mx-[auto] flex justify-center text-center pt-[28px]">
        <SectionTitle>
          <span className="relative">
            <span className="absolute -left-[50px] md:-left-[60px] -top-[30px] md:-top-[37px] lg:-top-[45px] flex flex-col items-start text-[14px] md:text-[15px] lg:text-[18px] leading-[16px] md:leading-[20px] lg:leading-[24px] text-[#000] font-bold">
              <span className="mb-[12px] whitespace-nowrap">
                <input
                  className="editable-input"
                  onChange={(e) => {
                    setCurrentPost({
                      ...info,
                      slideshow: {
                        ...info.slideshow,
                        headingLabel: e.target.value,
                      },
                    });
                  }}
                  value={info.slideshow.headingLabel}
                  placeholder="Heading label"
                />
              </span>
              <Image
                className="w-[26px] md:w-[33px] lg:w-[40px] ml-[15px]"
                src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/5c716bf6-169f-40ca-0d06-ab8ba04c0a00/public" width={40} height={40} alt="Arrow icon"
              />
            </span>
          </span>
          <input
            className="editable-input"
            onChange={(e) => {
              setCurrentPost({
                ...info,
                slideshow: {
                  ...info.slideshow,
                  heading: e.target.value,
                },
              });
            }}
            value={info.slideshow.heading}
            placeholder="Heading"
          />
        </SectionTitle>
      </div>
      <p className="w-full max-w-[500px] mx-[auto] mb-[30px] md:mb-[40px] text-center text-[16px] md:text-[17px] lg:text-[18px] leading-[24px] md:leading-[25px] lg:leading-[26px] tracking-[0.2px] md:tracking-[0.3px]">
        <textarea
          className="editable-input w-full"
          onChange={(e) => {
            setCurrentPost({
              ...info,
              slideshow: {
                ...info.slideshow,
                subheading: e.target.value,
              },
            });
          }}
          value={info.slideshow.subheading}
          placeholder="Subheading"
        />
      </p>

      <div className="w-full max-w-[1050px] mx-[auto] grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
        <SalesFeaturesSingleItemEdit info={info} setCurrentPost={setCurrentPost} icon={info.slideshow.icon1} iconField="slideshow.icon1" title={info.slideshow.title1} titleField="title1" text={info.slideshow.text1} textField="text1" />
        <SalesFeaturesSingleItemEdit info={info} setCurrentPost={setCurrentPost} icon={info.slideshow.icon2} iconField="slideshow.icon2" title={info.slideshow.title2} titleField="title2" text={info.slideshow.text2} textField="text2" />
        <SalesFeaturesSingleItemEdit info={info} setCurrentPost={setCurrentPost} icon={info.slideshow.icon3} iconField="slideshow.icon3" title={info.slideshow.title3} titleField="title3" text={info.slideshow.text3} textField="text3" />
        <SalesFeaturesSingleItemEdit info={info} setCurrentPost={setCurrentPost} icon={info.slideshow.icon4} iconField="slideshow.icon4" title={info.slideshow.title4} titleField="title4" text={info.slideshow.text4} textField="text4" />
      </div>

      <div className="w-full max-w-[366px] md:max-w-[410px] mx-[auto]  mt-[30px] md:mt-[40px]">
        <BuyButton info={info} />
      </div>
    </AppSection>
  );
};

export default SalesFeaturesEdit;