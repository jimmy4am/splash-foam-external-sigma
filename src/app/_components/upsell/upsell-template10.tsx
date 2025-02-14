"use client";

import React from "react";
import Image from "next/image";
import { Inter, Lato } from "next/font/google";

import { siteProduct } from "@/lib/site-info";
import { UpsellPageType } from "@/interfaces/upsellPage";
import { SessionDataType } from "@/interfaces/sessionData";
import useCountDown from "@/app/_components/upsell/hooks/useCountDown";
import { formatTime } from "@/app/_components/upsell/utils";
import { PriceDisplay } from "./upsell-price-display";

const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"]
});
const inter = Inter({ subsets: ["latin"] });

type Props = {
  info: UpsellPageType;
  nextStep: (upsell?: any) => Promise<void>;
  sessionData: SessionDataType;
};

const UpsellTemplate10 = ({ info, nextStep, sessionData }: Props) => {
  const { mins, setMins, secs } = useCountDown();

  const acceptOffer = async () => {
    const upsell = {
      offerName: info.stickyname1,
      offerPrice: parseFloat(info.stickyprice1),
      offerId: info.stickyid1,
      offerBilling: info.stickybilling1,
      offerOfferId: info.stickyoffer1,
    };
    await nextStep(upsell);
  };

  const declineOffer = async () => {
    await nextStep();
  };

  return (
    <div className={`pt-[15px] md:pt-[40px] bg-[#f6fbfe] text-[20px] leading-[24px] ${lato.className}`}>
      <div className="max-w-[1112px] m-[0_auto] px-[6px]">
        <div className="bg-[#fff] lg:border-[1px] lg:border-[#5D778F]">
          {/*STEPs*/}
          <ul className="flex border-[1px] border-[#5D778F] lg:border-0 text-center text-[11px] sm:text-[12px] lg:text-[18px] leading-[35px] text-[#A7A7A7] uppercase">
            <li className="flex-1 bg-[#DCDCDC]">Step 1 : Order page</li>
            <li className="flex-1 bg-[#0083D2] text-[#fff]">Step 2 : Special offer</li>
            <li className="flex-1 bg-[#DCDCDC]">Step 3 : Confirmation</li>
          </ul>

          <div className="flex w-full flex-col items-center md:px-[30px]">
            <div className="p-[15px] md:p-[27px_16px]">
              <h5 className="mb-[8px] text-center text-[#DC5B5B] text-[4.4vw] md:text-[16px] lg:text-[23px] leading-[1.2] font-bold italic">
                WAIT! Don&apos;t Checkout Without Taking ADVANTAGE of this
                SPECIAL OFFER
              </h5>
              <h1 className="mb-[16px] text-center text-[4.4vw] md:text-[16px] lg:text-[23px] font-bold italic text-[#606060]">
                {info.title1}{" "}
                <span className="text-[#20A51D]">{info.savings1}</span>{" "}
                {info.title2}
              </h1>
              <p className="w-[95%] sm:w-[68%] lg:w-full lg:max-w-[620px] mx-[auto] text-center text-[#1481d6] text-[20px] lg:text-[25px] leading-[1.4] font-bold">
                {info.text4}
              </p>
            </div>

            <div className="relative mb-[15px] md:mb-[30px] p-[16px_0] md:p-[5px_20px]">
              <Image
                src={info.image2!}
                fill
                className="w-full absolute"
                alt="background"
              />
              <div className="relative flex flex-col md:flex-row items-center md:justify-between z-10">
                <div className="flex justify-center md:w-[43%]">
                  <Image
                    src={info.image1}
                    width={206}
                    height={335}
                    alt={siteProduct}
                  />
                </div>

                <div className="w-[88%] md:w-[50%] text-center md:text-left">
                  <p className="mb-[8px] text-[3.8vw] md:text-[20px] leading-[4.6vw] md:leading-[26px]">
                    {info.text2}
                  </p>
                  <h2 className="w-full mb-[8px] py-2 text-[6vw] md:text-[30px] leading-[1.2] font-bold uppercase">
                    {info.product}!
                  </h2>
                  <h4 className="w-full flex justify-center md:justify-start items-end text-[#10B74A] text-[8.6vw] md:text-[40px] leading-[1] font-bold">
                    <span className="mr-[2vw] md:mr-[10px] text-[#FD4631] line-through text-[6.5vw] md:text-[30px]">
                      <PriceDisplay
                        priceUSD={parseFloat(info.text1)}
                        countryCode={
                          sessionData?.customerInfo?.country || "US"
                        }
                        digits={2}
                      />
                    </span>{" "}
                    <PriceDisplay
                      priceUSD={parseFloat(info.stickyprice1)}
                      countryCode={
                        sessionData?.customerInfo?.country || "US"
                      }
                      digits={2}
                    />
                  </h4>
                </div>
              </div>
            </div>

            <div className="max-w-[675px] flex flex-col items-center mx-auto text-center">
              <p className="w-[90%] max-w-[600px] mb-[15px] md:mb-[20px] text-center text-[#1481D6] text-[18px] lg:text-[22px] leading-[1.4] font-bold">
                This Exclusive offer is only going to be available for a limited time. So Make sure to claim this GIFT Now!
              </p>
              {mins === 0 && secs === 0 ? (
                <>
                  <p className="mb-[20px] text-[18px] lg:text-[22px] leading-[1.4] text-[#FD594D] font-bold">
                    This Offer has expired :
                  </p>
                  <button
                    className="w-[200px] h-[60px] flex items-center justify-center bg-[#fd594d] rounded-md text-[18px] lg:text-[22px] leading-[1.4] text-[#fff] uppercase font-700 hover:bg-red-600"
                    onClick={() => setMins(2)}
                  >
                    Request Extension
                  </button>
                </>
              ) : (
                <>
                  <p className="mb-[20px] text-[18px] lg:text-[22px] leading-[1.4]  text-[#FD594D] font-700">
                    This EXCLUSIVE Offer will be held for :
                  </p>
                  <div className="w-[244px] h-[65px] flex items-center justify-center bg-[#fd594d] text-[36px] text-[#fff] font-bold">
                    {formatTime(mins)}:{formatTime(secs)}
                  </div>
                </>
              )}
              <p className={`w-[90%] mt-[20px] text-[16px] lg:text-[14px] leading-[26px] text-[#5a5b5b] font-medium text-justify ${inter.className}`}>{info.text3}</p>

              <Image
                src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/645f8e19-3b68-428e-1eb3-dfad6e385000/public"
                width={200}
                height={80}
                alt="Secure Checkout"
                className="my-[30px]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-[15px] py-[20px] md:py-[30px] lg:py-[60px]">
          <p className="flex items-center justify-center text-[12px] leading-[15px] text-[#222]">
            Copyright {new Date().getFullYear()} - {info.product}{" "}
            <Image
              src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/4f72e2bd-5704-418f-080c-92afe34ee900/public"
              width={12}
              height={12}
              alt="heart icon"
              className="object-scale-down mr-[10px] ml-[10px]"
            />
            All Rights Reserved
          </p>
          <Image
            src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/e6c4e39d-5796-4506-8db9-141156085500/public"
            width={135}
            height={28}
            alt="DMCA protected"
          />
        </div>
      </div>

      <div className="sticky left-0 right-0 bottom-0 flex justify-center p-[10px_6px] bg-[#fff] z-20">
        <div className="flex flex-col w-full items-center md:px-4">
          <button
            className="w-full max-w-[747px] p-[26px_45px] md:p-[20px_45px] bg-[#4AC27E] text-[23px] leading-[30px] uppercase text-[#fff] font-bold  hover:bg-[#0ebf52] disabled:opacity-40 disabled:pointer-events-none"
            onClick={acceptOffer}
          >
            {info.ctaText1}
          </button>
          <button
            className="mt-[10px] md:mt-[15px] pb-0 bg-transparent border-none text-[11px] md:text-[12px] text-[rgba(153,153,153,0.5)] cursor-default"
            onClick={declineOffer}
          >
            {info.skipOfferText1}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpsellTemplate10;
