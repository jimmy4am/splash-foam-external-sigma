import React from "react";
import Image from "next/image";
import { Raleway } from "next/font/google";
import { SalesPageType } from "@/interfaces/salesPage";
import { siteProduct } from "@/lib/site-info";
import BuyButton from "./buy-button";
import markdownStyles from "./markdown-sales-styles.module.css";

const raleway = Raleway({ subsets: ["latin"] });

type Props2 = {
  info: SalesPageType;
};

const SplitCompare = ({ info }: Props2) => {
  return (
    <div
      className="flex flex-col w-full px-4 pt-6 items-center "
      id="how-it-works"
    >
      <div className="relative flex flex-col w-full max-w-[1260px] items-center text-center pb-[250px]">
        <div className="hidden lg:block absolute inset-0 w-full h-full">
          <Image
            src={info.splitcompare.background}
            alt="Background"
            fill
            className="rounded-lg object-cover border-[3px] border-[#fff] shadow-xl
              "
          />
        </div>
        <h4 className="relative text-[26px] lg:text-[50px] font-[600] text-[#005279] mt-8 px-4 lg:px-20 xl:px-36 z-10 leading-tight">
          {info.splitcompare.heading}
        </h4>
        <div
          dangerouslySetInnerHTML={{ __html: info.splitcompare.subheading }}
          className={`${markdownStyles["markdown"]} z-10 px-4 lg:px-12 xl:px-20`}
        />

        <div className="flex w-full z-10 mt-16">
          <div className="flex w-1/2 items-start justify-center">
            <div>
              <Image
                src={info.splitcompare.beforeImg}
                alt={siteProduct}
                width={90}
                height={90}
                className="mr-6 w-[50px] h-[50px] lg:w-[90px] lg:h-[90px]"
              />
            </div>
            <div className="flex flex-col justify-start text-left">
              <h5 className="text-[20px] font-bold ">Before</h5>
              <p className="text-[17px] text-[#d11111]">
                {info.splitcompare.beforeText}
              </p>
            </div>
          </div>
          <div className="flex w-1/2 items-start justify-center">
            <div>
              <Image
                src={info.splitcompare.afterImg}
                alt={`Before ${siteProduct}`}
                width={90}
                height={90}
                className="mr-6 w-[50px] h-[50px] lg:w-[90px] lg:h-[90px]"
              />
            </div>
            <div className="flex flex-col justify-start text-left">
              <h5 className="text-[20px] font-bold ">After</h5>
              <p className="text-[17px] text-[#007fbc]">
                {info.splitcompare.afterText}
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full mt-[-20px] mb-[-20px] z-30 justify-center">
          <Image
            src={info.splitcompare.centerImg}
            alt={siteProduct}
            height={350}
            width={370}
          />
        </div>
      </div>
      <div className="relative flex flex-col w-full max-w-[1160px] items-center text-center">
        {" "}
        <div className="bg-white z-10 w-[90%] rounded-lg mt-[-350px]  pt-[100px] flex flex-col items-center px-2 lg:px-6">
          <BuyButton info={info} />
          <h2
            className={`text-[26px] lg:text-[50px] ${raleway.className} font-bold text-[#005279] leading-tight mt-8`}
          >
            <span className="text-[#0082c0]">
              {info.splitcompare.heading2top}
            </span>{" "}
            <br /> {info.splitcompare.heading2bot}
          </h2>
          <p className="text-center tesxt-[17px] lg:text-[20px] py-6">
            {info.splitcompare.subheading2}
          </p>
          <div className="flex flex-col items-center lg:flex-row  lg:items-start w-full">
            <div className="flex flex-col w-full lg:w-1/3 items-center justify-start text-center px-4 pb-6">
              <div
                className={`bg-[#0082c0] text-[18px] rounded-full px-6 py-2 text-white font-bold ${raleway.className}`}
              >
                Step 01
              </div>
              <Image
                src={info.splitcompare.step1Img}
                width={305}
                height={305}
                alt="Step 1"
                className="mt-2 lg:mt-6 rounded-xl border-[1px] border-[#0082c0] max-w-full"
              />
              <h5
                className={`text-[20px] text-[#1376a3] font-bold pt-4 pb-2 ${raleway.className}`}
              >
                {info.splitcompare.step1Title}
              </h5>
              <p className="text-[19px] px-6">{info.splitcompare.step1Text}</p>
            </div>
            <div className="flex flex-col w-full lg:w-1/3 items-center justify-start text-center px-4 pb-6">
              <div
                className={`bg-[#0082c0] text-[18px] rounded-full px-6 py-2 text-white font-bold ${raleway.className}`}
              >
                Step 02
              </div>
              <Image
                src={info.splitcompare.step2Img}
                width={305}
                height={305}
                alt="Step 1"
                className="mt-2 lg:mt-6 rounded-xl border-[1px] border-[#0082c0] max-w-full"
              />
              <h5
                className={`text-[20px] text-[#1376a3] font-bold pt-4 pb-2 ${raleway.className}`}
              >
                {info.splitcompare.step2Title}
              </h5>
              <p className="text-[19px] px-6">{info.splitcompare.step2Text}</p>
            </div>
            <div className="flex flex-col w-full lg:w-1/3 items-center justify-start text-center px-4 pb-6">
              <div
                className={`bg-[#0082c0] text-[18px] rounded-full px-6 py-2 text-white font-bold ${raleway.className}`}
              >
                Step 03
              </div>
              <Image
                src={info.splitcompare.step3Img}
                width={305}
                height={305}
                alt="Step 1"
                className="mt-2 lg:mt-6 rounded-xl border-[1px] border-[#0082c0] max-w-full"
              />
              <h5
                className={`text-[20px] text-[#1376a3] font-bold pt-4 pb-2 ${raleway.className}`}
              >
                {info.splitcompare.step3Title}
              </h5>
              <p className="text-[19px] px-6">{info.splitcompare.step3Text}</p>
            </div>
          </div>
          <BuyButton info={info} />
        </div>
      </div>
    </div>
  );
};

export default SplitCompare;
