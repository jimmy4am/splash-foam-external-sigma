import React from "react";
import Image from "next/image";

import { SalesPageType } from "@/interfaces/salesPage";
import SectionTitle from "@/app/_components/sales/sales-3/_components/section-title";
import BuyButton from "@/app/_components/sales/sales-3/_components/buy-button";
import AppSection from "@/app/_components/sales/sales-3/_components/app-section";
import SalesStepsSingleItemEdit from "@/app/_components/sales/sales-3/sales-steps/sales-steps-single-item-edit";

type Props = {
  info: SalesPageType;
  setCurrentPost: (post: SalesPageType) => void;
};

const SalesStepsEdit = ({ info, setCurrentPost }: Props) => {
  return (
    <AppSection classes="bg-[#e7f4f9]">
      <div className="flex justify-center text-center pt-[28px]">
        <SectionTitle>
          <input
            className="editable-input"
            onChange={(e) => {
              setCurrentPost({
                ...info,
                splitcompare: {
                  ...info.splitcompare,
                  heading2top: e.target.value,
                },
              });
            }}
            value={info.splitcompare.heading2top}
            placeholder="Heading top"
          />
          <span className="absolute right-[20px] md:-right-[10px] lg:-right-[0] -top-[30px] md:-top-[37px] lg:-top-[45px] flex flex-col items-end text-[14px] md:text-[15px] lg:text-[18px] leading-[16px] md:leading-[20px] lg:leading-[24px] text-[#000] font-bold">
            <span className="mb-[12px]">
              <input
                className="editable-input"
                onChange={(e) => {
                  setCurrentPost({
                    ...info,
                    splitcompare: {
                      ...info.splitcompare,
                      headingLabel: e.target.value,
                    },
                  });
                }}
                value={info.splitcompare.headingLabel}
                placeholder="Heading label"
              />
            </span>
            <Image
              style={{ transform: 'rotateY(190deg)'}}
              className="w-[26px] md:w-[33px] lg:w-[40px] mr-[15px] md:mr-[55px] lg:mr-[45px]"
              src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/5c716bf6-169f-40ca-0d06-ab8ba04c0a00/public" width={40} height={40} alt="Arrow icon"
            />
          </span>
          <br/>
          <input
            className="editable-input"
            onChange={(e) => {
              setCurrentPost({
                ...info,
                splitcompare: {
                  ...info.splitcompare,
                  heading2bot: e.target.value,
                },
              });
            }}
            value={info.splitcompare.heading2bot}
            placeholder="Heading bottom"
          />
        </SectionTitle>
      </div>
      <p className="w-full max-w-[740px] mx-[auto] mb-[30px] md:mb-[40px] text-center text-[16px] md:text-[17px] lg:text-[18px] leading-[24px] md:leading-[25px] lg:leading-[26px] tracking-[0.2px] md:tracking-[0.3px]">
        <textarea
          className="editable-input w-full"
          onChange={(e) => {
            setCurrentPost({
              ...info,
              splitcompare: {
                ...info.splitcompare,
                subheading2: e.target.value,
              },
            });
          }}
          value={info.splitcompare.subheading2}
          placeholder="Subheading"
        />
      </p>
      <div className="w-full max-w-[1080px] mx-[auto] flex flex-col md:flex-row gap-[20px] lg:gap-[30px] xl:gap-[40px]">
        <SalesStepsSingleItemEdit info={info} setCurrentPost={setCurrentPost} step={1} img={info.splitcompare.step1Img} imgField="splitcompare.step1Img" title={info.splitcompare.step1Title} titleField="step1Title" text={info.splitcompare.step1Text} textField="step1Text" />
        <SalesStepsSingleItemEdit info={info} setCurrentPost={setCurrentPost} step={2} img={info.splitcompare.step2Img} imgField="splitcompare.step2Img" title={info.splitcompare.step2Title} titleField="step2Title" text={info.splitcompare.step2Text} textField="step2Text" />
        <SalesStepsSingleItemEdit info={info} setCurrentPost={setCurrentPost} step={3} img={info.splitcompare.step3Img} imgField="splitcompare.step3Img" title={info.splitcompare.step3Title} titleField="step3Title" text={info.splitcompare.step3Text} textField="step3Text" />
      </div>

      <div className="w-full max-w-[366px] md:max-w-[410px] mx-[auto]  mt-[30px] md:mt-[40px]">
        <BuyButton info={info} />
      </div>
    </AppSection>
  );
};

export default SalesStepsEdit;