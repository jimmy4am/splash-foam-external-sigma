"use client";
import { UpsellPageType } from "@/interfaces/upsellPage";
import React, { useState } from "react";
import Image from "next/image";
import { siteProduct } from "@/lib/site-info";
import { useSession } from "@/app/_context/SessionContext";
import { PriceDisplay } from "./upsell-price-display";
import { sendGAEvent } from "@next/third-parties/google";
import { SessionDataType } from "@/interfaces/sessionData";

type Props = {
  info: UpsellPageType;
  nextStep: (upsell?: any) => void;
  sessionData: SessionDataType;
};

type DownsellProps = {
  info: UpsellPageType;
  acceptOffer: () => void;
  declineOffer: () => void;
  sessionData: any | null;
};

const DownsellPop = ({
  info,
  acceptOffer,
  declineOffer,
  sessionData,
}: DownsellProps) => {
  return (
    <>
      {" "}
      <div className="fixed h-screen w-screen overflow-auto bg-black/60 px-2 py-2 md:px-4 md:py-6 flex flex-col items-center justify-center z-30">
        <div className="flex flex-col items-center max-w-[640px] bg-white w-full border-2 border-dashed border-[#b90000] py-12 text-center px-6">
          <h3 className="text-[24px] uppercase text-[#000088] font-[600]">
            {info.title3}
          </h3>
          <p className="text-[#222] text-[14px] font-[600] pt-2">
            {info.text3}{" "}
            <PriceDisplay
              priceUSD={parseFloat(info.stickyprice2)}
              countryCode={sessionData?.customerInfo?.country || "US"}
              digits={2}
            />
            {info.text5}
          </p>
          <button
            className="bg-gradient-to-b from-red-500 to-[#b90000] py-2 px-4 md:py-4 text-white text-[28px] rounded-md mt-4 w-full md:max-w-[80%] hover:to-red-700 hover:from-red-600"
            onClick={acceptOffer}
          >
            {info.ctaText2}
          </button>
          <button
            className="bg-transparent border-none mt-4 text-[12px] text-[#007bff] cursor-default "
            onClick={declineOffer}
          >
            {info.skipOfferText2}
          </button>
        </div>
      </div>
    </>
  );
};

const UpsellTemplate4 = ({ info, nextStep, sessionData }: Props) => {
  const [showDownsell, setShowDownsell] = useState(false);
  const { sessionId } = useSession();

  const acceptOffer = async () => {
    const upsell = {
      offerName: info.offerName,
      offerPrice: parseFloat(info.stickyprice1),
      offerId: info.stickyid1,
      offerBilling: info.stickybilling1,
      offerOfferId: info.stickyoffer1,
    };
    await nextStep(upsell);
  };

  const acceptOffer2 = async () => {
    const upsell = {
      offerName: info.stickyname2,
      offerPrice: parseFloat(info.stickyprice2),
      offerId: info.stickyid2,
      offerBilling: info.stickybilling2,
      offerOfferId: info.stickyoffer2,
    };
    await nextStep(upsell);
  };

  const declineOffer1 = async () => {
    sendGAEvent("event", `decline_upsell${sessionData.currentStep}`, {
      sessionId: sessionId,
    });
    setShowDownsell(true);
  };

  const declineOffer2 = async () => {
    await nextStep();
  };

  return (
    <>
      {showDownsell && (
        <DownsellPop
          info={info}
          acceptOffer={acceptOffer2}
          declineOffer={declineOffer2}
          sessionData={sessionData}
        />
      )}
      <div className="flex w-full min-h-screen bg-[#f6fbfe] relative">
        <Image
          src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/6f5c57b0-aede-4af9-27ef-c5c58ba8be00/public"
          fill
          className="w-full absolute object-scale-down"
          alt="background"
        />
        <div className="z-10 flex flex-col w-full items-center px-4">
          <div className="bg-white mt-4 md:mt-10 border-[1px] border-[#5D778F] flex flex-col items-center w-full max-w-[900px] px-2 md:px-8">
            <div className="flex w-full justify-center flex-col items-center">
              <h1 className=" text-[24px] sm:text-[40px] md:text-[50px] lg:text-[64px] text-center font-[600] uppercase">
                {info.title1}
              </h1>
              <h2 className="text-[18px] sm:text-[28px] md:text-[32px] lg:text-[44px] text-center font-[400] uppercase md:mt-[-20px] mb-4 leading-tight">
                {info.title2}
              </h2>
            </div>
            <div className="flex w-full border-[1px] border-[#333]">
              <div className="w-1/3 bg-[#DCDCDC] text-[10px] md:text-[16px] text-center uppercase text-[#a7a7a7] p-2 font-[500]">
                <span className="hidden md:block">Step</span> 1: Shipping Info
              </div>
              <div className="w-1/3 bg-[#DCDCDC] text-[10px] md:text-[16px] text-center uppercase text-[#a7a7a7] p-2 font-[500] border-r-[1px] border-l-[1px] border-[#333]">
                <span className="hidden md:block">Step</span> 2: Finish Order
              </div>
              <div className="w-1/3 text-[10px] md:text-[16px] text-center uppercase text-white p-2 font-bold bg-[#0083D2]">
                <span className="hidden md:block">Step</span> 3: Summary
              </div>
            </div>
            <div className="flex w-full py-4 flex-col items-center">
              <div className="flex w-full">
                <div className="hidden md:flex flex-col w-1/2" />
                <div className="flex flex-col w-full md:w-1/2  pr-4 h-[200px] mb-[-200px] pt-2 sm:pt-6 z-10 px-4 md:px-0">
                  <div className="flex w-full justify-start sm:pr-8">
                    <p className="text-[12px] sm:text-[12px] md:text-[14px]">
                      {info.text1}
                    </p>
                  </div>
                  <div className="flex w-full justify-end items-center md:pr-4 ">
                    Add for just{" "}
                    <span className="text-[24px] md:text-[30px] font-[500] ml-2">
                      <PriceDisplay
                        priceUSD={parseFloat(info.offerPrice)}
                        countryCode={sessionData?.customerInfo?.country || "US"}
                        digits={2}
                      />
                    </span>
                  </div>
                </div>
              </div>
              <Image
                src={info.image2}
                width={900}
                height={440}
                className="hidden md:block"
                alt="background"
              />
              <Image
                src={info.image4}
                width={767}
                height={863}
                alt="background"
                className="md:hidden"
              />
              <div className="hidden md:flex w-full justify-end mt-[-130px] mb-[-90px] z-10 pointer-events-none">
                <Image
                  src={info.image3}
                  width={190}
                  height={245}
                  alt="order now arrow"
                />
              </div>
              <div className="flex md:hidden w-full justify-end mt-[-40px] mb-[-50px] ml-[20px] z-10 pointer-events-none">
                <Image
                  src={info.image3}
                  width={80}
                  height={123}
                  alt="order now arrow"
                  className="-rotate-45 "
                />
              </div>
              <button
                className="flex w-full max-w-[600px] bg-gradient-to-b from-[#ffa025] to-[#d77c00] text-center justify-center rounded-md hover:to-orange-800 cursor-pointer md:mb-6"
                onClick={acceptOffer}
              >
                <p className="text-[24px] md:text-[42px] text-white  font-[700] p-4 text-center uppercase text-shadow z-40">
                  {info.ctaText1}
                </p>
              </button>
            </div>
          </div>
          <div className="flex w-full justify-center items-center mt-4">
            <button
              className="bg-transparent border-none text-[12px] text-[#a1a1a1] cursor-default"
              onClick={declineOffer1}
            >
              {info.skipOfferText1}
            </button>
          </div>
          <div className="flex text-[14px] mt-12 text-center">
            <p className="flex flex-col items-center md:flex-row">
              Copyright {new Date().getFullYear()} - {siteProduct}{" "}
              <Image
                src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/4f72e2bd-5704-418f-080c-92afe34ee900/public"
                width={12}
                height={12}
                alt="heart icon"
                className="object-scale-down mr-[10px] ml-[10px]"
              />
              All Rights Reserved
            </p>
          </div>
          <div className="flex text-[14px] mt-4 underline">
            Accepted Payments
          </div>
          <Image
            src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/512e948f-3970-4b80-55ac-550669b77800/public"
            width={400}
            height={290}
            alt="Accepted Credit Cards"
            className="mt-6 mb-6"
          />
        </div>
      </div>
      {info.stickyCta && !showDownsell && (
        <div className="fixed bottom-0 left-0 w-full bg-[#00527]  text-center p-2 z-40 bg-white">
          <div className=" flex flex-col w-full items-center md:px-4">
            <button
              className="flex w-full max-w-[600px] bg-gradient-to-b from-[#ffa025] to-[#d77c00] text-center justify-center rounded-md hover:to-orange-800 cursor-pointer text-[24px] md:text-[42px] text-white  font-[700] p-4 uppercase text-shadow z-40"
              onClick={acceptOffer}
              // disabled={mins === 0 && secs === 0}
            >
              {info.ctaText1}
            </button>
            <button
              className="bg-transparent border-none  mt-4 text-[11px] md:text-[12px] pb-2 max-w-[900px] text-[#a1a1a1] cursor-default"
              onClick={declineOffer1}
            >
              {info.skipOfferText1}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default UpsellTemplate4;
