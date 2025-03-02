import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

import { SalesPageType } from "@/interfaces/salesPage";
import SectionTitle from "@/app/_components/sales/sales-4/_components/section-title";
import BuyButton from "@/app/_components/sales/sales-4/_components/buy-button";
import SalesFeaturesSingleItemEdit from "@/app/_components/sales/sales-4/sales-features/sales-features-single-item-edit";
import AppSection from "@/app/_components/sales/sales-4/_components/app-section";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  info: SalesPageType;
  setCurrentPost: (post: SalesPageType) => void;
};

const SalesFeaturesEdit = ({ info, setCurrentPost }: Props) => {
  return (
    <AppSection>
      <div className="max-w-[280px] md:max-w-[550px] lg:max-w-[650px] mx-[auto] flex justify-center text-center pt-[28px]">
        <SectionTitle>
          <span className="relative">
            <span className="absolute -left-[50px] md:-left-[60px] -top-[30px] md:-top-[37px] lg:-top-[45px] flex flex-col items-start text-[14px] md:text-[15px] lg:text-[18px] leading-[16px] md:leading-[20px] lg:leading-[24px] text-[#000] font-bold">
              <span className="mb-[12px] whitespace-nowrap">
                <input
                  className="editable-input"
                  onChange={(e) => {
                    setCurrentPost({
                      ...info,
                      features: {
                        ...info.features,
                        headingLabel: e.target.value,
                      },
                    });
                  }}
                  value={info.features.headingLabel}
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
            className="editable-input w-full"
            onChange={(e) => {
              setCurrentPost({
                ...info,
                features: {
                  ...info.features,
                  heading: e.target.value,
                },
              });
            }}
            value={info.features.heading}
            placeholder="Heading"
          />
        </SectionTitle>
      </div>
      <p className={`w-full max-w-[500px] mx-[auto] mb-[30px] md:mb-[40px] text-center text-[16px] md:text-[17px] lg:text-[18px] leading-[24px] md:leading-[25px] lg:leading-[26px] tracking-[0.2px] md:tracking-[0.3px] ${inter.className}`}>
        <textarea
          className="editable-input w-full"
          onChange={(e) => {
            setCurrentPost({
              ...info,
              features: {
                ...info.features,
                subheading: e.target.value,
              },
            });
          }}
          value={info.features.subheading}
          placeholder="Subheading"
        />
      </p>

      <ul className="w-full max-w-[345px] md:max-w-[1080px] mx-[auto] grid grid-cols-1 md:grid-cols-3 gap-[20px] lg:gap-[30px] xl:gap-[40px] mb-[10px]">
        <SalesFeaturesSingleItemEdit
          info={info}
          setCurrentPost={setCurrentPost}
          icon={info.features.icon1}
          iconField="features.icon1"
          title={info.features.title1}
          titleField="title1"
          text={info.features.text1}
          textField="text1"
          image={info.features.image1}
          imageField="features.image1"
        />
        <SalesFeaturesSingleItemEdit
          info={info}
          setCurrentPost={setCurrentPost}
          icon={info.features.icon2}
          iconField="features.icon2"
          title={info.features.title2}
          titleField="title2"
          text={info.features.text2}
          textField="text2"
          image={info.features.image2}
          imageField="features.image2"
        />
        <SalesFeaturesSingleItemEdit
          info={info}
          setCurrentPost={setCurrentPost}
          icon={info.features.icon3}
          iconField="features.icon3"
          title={info.features.title3}
          titleField="title3"
          text={info.features.text3}
          textField="text3"
          image={info.features.image3}
          imageField="features.image3"
        />
      </ul>

      <div className="w-full max-w-[366px] md:max-w-[410px] mx-[auto]  mt-[30px] md:mt-[40px]">
        <BuyButton info={info} />
      </div>
    </AppSection>
  );
};

export default SalesFeaturesEdit;