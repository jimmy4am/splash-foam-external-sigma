"use client";
import React, { useEffect, useState } from "react";
import { UpsellPageType } from "@/interfaces/upsellPage";
import Image from "next/image";
import { siteProduct } from "@/lib/site-info";
import { Poppins } from "next/font/google";
import markdownToHtml from "@/app/_utils/markdownToHtml";
import markdownStyles from "../sales/markdown-sales-styles.module.css";
import { useSession } from "@/app/_context/SessionContext";
import { PriceDisplay } from "./upsell-price-display";
import { sendGAEvent } from "@next/third-parties/google";
import { SessionDataType } from "@/interfaces/sessionData";

const poppins = Poppins({
  weight: ["100", "300", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

type Props = {
  info: UpsellPageType;
  nextStep: (upsell?: any) => void;
  sessionData: SessionDataType;
};

type InfoProps = {
  info: UpsellPageType;
};

const UpsellHeader1 = ({ info }: InfoProps) => {
  return (
    <div className="flex w-full bg-[#224f34] justify-center">
      <div className="flex w-full max-w-[1200px] flex-col items-center px-4 text-center">
        <Image
          src={info.logo}
          width={280}
          height={130}
          alt={siteProduct}
          className="mt-6 mb-2 md:mb-6 max-w-[120px] sm:max-w-[200px] lg:max-w-none"
        />
        <Image
          src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/e21aec18-9619-42ab-6105-6d1cfd2e3100/public"
          width={750}
          height={146}
          alt="order steps"
          className="hidden sm:block mb-6"
        />
        <h2 className="text-[#eefe3c] text-[22px] md:text-[36px] lg:text-[40px] font-[500]">
          WAIT! Do Not Close This Page!
        </h2>
        <p className="text-[18px] md:text-[24px] font-[300] text-white mb-2 md:mb-8">
          It may cause errors in your order
        </p>
      </div>
    </div>
  );
};

type YellowBoxProps = {
  info: UpsellPageType;
  showSkipOffer: boolean;
  acceptOffer: () => void;
  declineOffer: () => void;
  sessionData?: any | null;
};
const YellowBox = ({
  info,
  showSkipOffer,
  acceptOffer,
  declineOffer,
  sessionData,
}: YellowBoxProps) => {
  return (
    <div className="bg-[#f9f8da] border-[#e7303f] border-[4px] border-dashed rounded-md py-6 px-2 md:p-6 flex flex-col items-center w-full mt-20">
      <div className="flex w-full mt-2 flex-wrap">
        <div className="flex w-full md:w-[50%] p-2 justify-center">
          <Image
            src={info.image1}
            width={405}
            height={144}
            alt={siteProduct}
            className="md:mt-2 object-scale-down"
          />
        </div>
        <div className="w-full md:w-[50%] flex flex-col items-center text-center justify-start px-4 md:px-12">
          <h4 className="leading-tight text-[22px] md:text-[40px] font-[300] uppercase text-[#a1a1a1] mt-2 md:mt-0">
            Savings Today:{" "}
            <span className="text-[#fc0037] font-[500]">
              <PriceDisplay
                priceUSD={parseFloat(info.savings1)}
                countryCode={sessionData?.customerInfo?.country || "US"}
                digits={0}
              />
            </span>
          </h4>
          <p className="text-[24px]   font-[500]">
            {info.text4}{" "}
            <span className="text-[40px]">
              <PriceDisplay
                priceUSD={parseFloat(info.offerPrice)}
                countryCode={sessionData?.customerInfo?.country || "US"}
                digits={0}
                smallSymbol
              />
            </span>
          </p>
          <h5 className="leading-tight text-[22px] md:text-[40px] font-[300] uppercase text-[#a1a1a1]">
            One Time Fee <br /> No Subscription
          </h5>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center mt-4">
        <button
          className="bg-[#FFE24F] rounded-lg text-[#003FE2] border-[#003FE2] border-[4px] px-2 sm:px-6 py-2 text-[20px] sm:text-[28px] lg:text-[36px] font-[500] mt-8 hover:scale-105 transition-all"
          onClick={acceptOffer}
        >
          {info.ctaText1}
        </button>

        <button
          className="bg-transparent border-none underline mt-4 text-[17px] md:text-[20px] max-w-[900px] text-[#003fe2]"
          onClick={acceptOffer}
        >
          {info.ctaText2}
        </button>
        <Image
          src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/cdc7a4f4-e0a7-430b-1fe1-bd49c4719c00/public"
          width={300}
          height={30}
          alt="Accepted Credit Cards"
          className="mt-6"
        />
        {showSkipOffer && (
          <button
            className="bg-transparent border-none  mt-4 text-[16px]  max-w-[900px] text-[#272727] cursor-default"
            onClick={declineOffer}
          >
            No thanks, I understand this is the very last time I'll ever be able
            to stock up on {info.product}. I understood I'll never see this page
            or discount again.{" "}
            <span className="underline">I'll pass on this offer.</span>
          </button>
        )}
      </div>
    </div>
  );
};
const DownsellYellowBox = ({
  info,
  showSkipOffer,
  acceptOffer,
  declineOffer,
  sessionData,
}: YellowBoxProps) => {
  return (
    <div className="bg-[#f9f8da] border-[#e7303f] border-[4px] border-dashed rounded-md py-6 px-2 md:p-6 flex flex-col items-center w-full mt-20">
      <div className="flex w-full mt-2 flex-wrap">
        <div className="flex w-full md:w-[50%] p-2 justify-center">
          <Image
            src={info.image3}
            width={405}
            height={144}
            alt={siteProduct}
            className="md:mt-2 object-scale-down"
          />
        </div>
        <div className="w-full md:w-[50%] flex flex-col items-center text-center justify-start px-4 md:px-12">
          <h4 className="leading-tight text-[22px] md:text-[40px] font-[300] uppercase text-[#a1a1a1] mt-2 md:mt-0">
            Savings Today:{" "}
            <span className="text-[#fc0037] font-[500]">
              <PriceDisplay
                priceUSD={parseFloat(info.savings2)}
                countryCode={sessionData?.customerInfo?.country || "US"}
                digits={0}
              />
            </span>
          </h4>
          <p className="text-[24px]   font-[500]">
            {info.text6} $
            <span className="text-[40px]">
              <PriceDisplay
                priceUSD={parseFloat(info.text7)}
                countryCode={sessionData?.customerInfo?.country || "US"}
                digits={0}
              />
            </span>
          </p>
          <h5 className="leading-tight text-[22px] md:text-[40px] font-[300] uppercase text-[#a1a1a1]">
            One Time Fee <br /> No Subscription
          </h5>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center mt-4">
        <button
          className="bg-[#FFE24F] rounded-lg text-[#003FE2] border-[#003FE2] border-[4px] px-2 sm:px-6 py-2 text-[20px] sm:text-[28px] lg:text-[36px] font-[500] mt-8 hover:scale-105 transition-all"
          onClick={acceptOffer}
        >
          {info.ctaText1}
        </button>

        <button
          className="bg-transparent border-none underline mt-4 text-[17px] md:text-[20px] max-w-[900px] text-[#003fe2]"
          onClick={acceptOffer}
        >
          {info.ctaText2}
        </button>
        <Image
          src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/cdc7a4f4-e0a7-430b-1fe1-bd49c4719c00/public"
          width={300}
          height={30}
          alt="Accepted Credit Cards"
          className="mt-6"
        />
        {showSkipOffer && (
          <button
            className="bg-transparent border-none  mt-4 text-[16px]   max-w-[900px] text-[#272727] cursor-default "
            onClick={declineOffer}
          >
            No thanks, I understand this is the very last time I'll ever be able
            to stock up on {info.product}. I understood I'll never see this page
            or discount again.{" "}
            <span className="underline">I'll pass on this offer.</span>
          </button>
        )}
      </div>
    </div>
  );
};

type DownsellPopProps = {
  info: UpsellPageType;
  acceptOffer: () => void;
  declineOffer: () => void;
  sessionData?: any | null;
};
const DownsellPop = ({
  info,
  acceptOffer,
  declineOffer,
  sessionData,
}: DownsellPopProps) => {
  return (
    <>
      <div className="fixed h-screen w-screen overflow-auto bg-black/60 px-2 py-2 md:px-4 md:py-6 flex flex-col items-center">
        <div className="flex flex-col items-center max-w-[1140px]">
          <UpsellHeader1 info={info} />

          <div className="flex w-full bg-white justify-center pb-6">
            <div className="flex w-full max-w-[1200px] flex-col items-center px-4">
              <div className="flex w-full flex-col items-center pt-6 ">
                <h1 className="leading-tight text-[25px] md:text-[40px] font-[500]">
                  {info.title5}
                </h1>
                <div className="flex flex-col items-start">
                  {" "}
                  <p className="text-[18px] md:text-[24px] mt-4 font-[500] ">
                    {info.title6}
                  </p>
                  <p className="text-[18px] md:text-[24px] mt-2">
                    {info.text5}
                  </p>
                </div>
              </div>
              <div className="flex w-full mt-4 md:mt-12 flex-wrap">
                <div className="w-full justify-center md:w-[40%] md:justify-start p-2 mb-4 md:mb-0">
                  <Image
                    src={info.image3}
                    width={405}
                    height={144}
                    alt={siteProduct}
                    className="md:mt-2 object-scale-down w-full"
                  />
                </div>
                <div className="w-full md:w-[60%] flex flex-col items-start justify-start px-2 md:px-12">
                  <h1 className="leading-tight text-[25px] md:text-[40px] font-[500] text-center md:text-left w-full">
                    {info.title7} <br className="block md:hidden" />{" "}
                    <span className="text-[32px] md:text-[40px]">
                      <PriceDisplay
                        priceUSD={parseFloat(info.title8)}
                        countryCode={sessionData?.customerInfo?.country || "US"}
                        digits={2}
                      />
                    </span>
                  </h1>
                  <p className="text-[18px] md:text-[24px] mt-2 w-full uppercase text-center md:text-left">
                    Each Bag
                  </p>
                  <p className="text-[18px] md:text-[24px] mt-2 w-full text-center md:text-left">
                    Savings:{" "}
                    <PriceDisplay
                      priceUSD={parseFloat(info.savings2)}
                      countryCode={sessionData?.customerInfo?.country || "US"}
                      digits={0}
                    />{" "}
                    off Retail
                  </p>
                  <p className="text-[18px] md:text-[24px] mt-4 w-full md:w-[85%]">
                    This is the{" "}
                    <span className="font-[500]">biggest discount</span> we've
                    ever offered! And it's a{" "}
                    <span className="font-[500]">limited time offer</span>. So
                    take advantage of this while you can and
                  </p>
                </div>
              </div>

              <button
                className="bg-[#FFE24F] rounded-lg text-[#003FE2] border-[#003FE2] border-[4px] px-2 sm:px-6 py-2 text-[24px] sm:text-[32px] lg:text-[43px] font-[500] mt-8 hover:scale-105 transition-all"
                onClick={acceptOffer}
              >
                {info.ctaText1}
              </button>

              <button
                className="bg-transparent border-none underline text-[#272727] mt-12 text-[16px] cursor-default"
                onClick={declineOffer}
              >
                {info.skipOfferText1}
              </button>

              <div className="bg-[#f5f5f5] rounded-md p-6 flex flex-col items-center w-full mt-20">
                <h4 className="flex items-center text-[#007953] text-[26px] md:text-[34px] font-[500] text-center">
                  ✓ Only Available On This Page!
                </h4>
                <p className="text-[20px]  sm:px-6 mt-4 mb-4">
                  {info.product} is not sold in stores or anywhere else online
                  and will never be. It is only available for purchase on this
                  page ONLY. In fact,{" "}
                  <span className="font-[500]">this is the very last time</span>{" "}
                  you'll be able to buy {info.product} again!{" "}
                </p>
              </div>
              <h5 className="text-[28px] md:text-[40px]  text-center mt-20 font-[500]">
                Remember: Your Order Is 100% Risk-Free!
              </h5>
              <p className="text-[18px] md:text-[24px] text-center mt-2 font-[500] ">
                You're Protected By Our Iron-Clad 30-Day Money-Back Guarantee.
              </p>
              <DownsellYellowBox
                info={info}
                showSkipOffer={true}
                acceptOffer={acceptOffer}
                declineOffer={declineOffer}
                sessionData={sessionData}
              />
            </div>
          </div>
        </div>
      </div>
      {info.stickyCta && (
        <div className="fixed bottom-0 left-0 w-full bg-[#00527]  text-center p-2 z-40 bg-white">
          <div className=" flex flex-col w-full items-center md:px-4">
            <button
              className="bg-[#FFE24F] rounded-lg text-[#003FE2] border-[#003FE2] border-[4px] px-2 sm:px-6 py-2 text-[24px] sm:text-[32px] lg:text-[43px] font-[500] mt-2 hover:scale-105 transition-all"
              onClick={acceptOffer}
              // disabled={mins === 0 && secs === 0}
            >
              {info.ctaText1}
            </button>
            <button
              className="bg-transparent border-none  mt-4 text-[11px] md:text-[12px] pb-2 max-w-[900px] text-[#a1a1a1] cursor-default"
              onClick={declineOffer}
            >
              {info.skipOfferText1}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
const UpsellBody1 = ({ info, nextStep, sessionData }: Props) => {
  const { sessionId } = useSession();
  const [para1, setPara1] = useState<string>("");
  const [para2, setPara2] = useState<string>("");
  const [showDownsell, setShowDownsell] = useState(false);

  useEffect(() => {
    const convertMarkdown = async () => {
      const convertedPara1 = await markdownToHtml(info.text1 || "");
      const convertedPara2 = await markdownToHtml(info.text3 || "");
      setPara1(convertedPara1);
      setPara2(convertedPara2);
    };

    convertMarkdown();
  }, [info.text1, info.text2]);

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

  const declineOffer1 = () => {
    sendGAEvent("event", `decline_upsell${sessionData?.currentStep || "1"}`, {
      sessionId: sessionId,
    });
    setShowDownsell(true);
  };

  const declineDownsell = async () => {
    await nextStep();
  };

  return (
    <>
      {showDownsell && (
        <DownsellPop
          info={info}
          acceptOffer={acceptOffer2}
          declineOffer={declineDownsell}
          sessionData={sessionData}
        />
      )}
      <div className="flex w-full bg-white justify-center">
        <div className="flex w-full max-w-[1200px] flex-col items-center px-4">
          <div className="flex w-full mt-4 md:mt-12 flex-wrap">
            <div className="w-full justify-center md:w-[40%] md:justify-start p-2 mb-4 md:mb-0">
              <Image
                src={info.image1}
                width={405}
                height={144}
                alt={siteProduct}
                className="md:mt-2 object-scale-down w-full"
              />
            </div>
            <div className="w-full md:w-[60%] flex flex-col items-start justify-start px-2 md:px-12">
              <h1 className="leading-tight text-[25px] md:text-[40px] font-[500]">
                {info.title1}{" "}
                <PriceDisplay
                  priceUSD={parseFloat(info.title8)}
                  countryCode={sessionData?.customerInfo?.country || "US"}
                  digits={0}
                />{" "}
                {info.title9}
              </h1>
              <p className="text-[18px] md:text-[24px] mt-4 w-full md:w-[85%]">
                This is the <span className="font-[500]">biggest discount</span>{" "}
                we've ever offered! And it's a{" "}
                <span className="font-[500]">limited time offer</span>. So take
                advantage of this while you can and
              </p>
            </div>
          </div>

          <button
            className="bg-[#FFE24F] rounded-lg text-[#003FE2] border-[#003FE2] border-[4px] px-2 sm:px-6 py-2 text-[24px] sm:text-[32px] lg:text-[43px] font-[500] mt-8 hover:scale-105 transition-all"
            onClick={acceptOffer}
          >
            {info.ctaText1}
          </button>

          <button
            className="bg-transparent border-none underline text-[#272727] mt-12 text-[16px] cursor-default"
            onClick={declineOffer1}
          >
            {info.skipOfferText1}
          </button>

          <div className="bg-[#f5f5f5] rounded-md p-6 flex flex-col items-center w-full mt-20">
            <h4 className="flex items-center text-[#007953] text-[26px] md:text-[34px] font-[500] text-center">
              ✓ Only Available On This Page!
            </h4>
            <p className="text-[20px]  sm:px-6 mt-4 mb-4">
              {info.product} is not sold in stores or anywhere else online and
              will never be. It is only available for purchase on this page
              ONLY. In fact,{" "}
              <span className="font-[500]">this is the very last time</span>{" "}
              you'll be able to buy {info.product} again!{" "}
            </p>
          </div>
          <h5 className="text-[28px] md:text-[40px]  text-center mt-20 font-[500]">
            Remember: Your Order Is 100% Risk-Free!
          </h5>
          <p className="text-[18px] md:text-[24px] text-center mt-2 font-[500] ">
            You're Protected By Our Iron-Clad 30-Day Money-Back Guarantee.
          </p>
          <YellowBox
            info={info}
            showSkipOffer={true}
            acceptOffer={acceptOffer}
            declineOffer={declineOffer1}
            sessionData={sessionData}
          />
          <p className="text-[#e7303f] mt-20 text-[20px] text-center mb-4 md:mb-0">
            {info.title2}
          </p>
          <h5 className="text-[26px] md:text-[40px] font-[500] text-center ">
            {info.title3}
          </h5>
          <div className="flex w-full mt-4 flex-wrap">
            <div className="w-full md:w-1/5">
              <Image
                src={info.image2!}
                width={250}
                height={170}
                alt={siteProduct}
                className="mt-6 w-full"
              />
            </div>
            <div className="w-full md:w-4/5 flex flex-col px-6">
              <div
                dangerouslySetInnerHTML={{ __html: para1 }}
                className={`${markdownStyles["markdown"]}`}
              />
            </div>
          </div>
          <YellowBox
            info={info}
            showSkipOffer={false}
            acceptOffer={acceptOffer}
            declineOffer={declineOffer1}
            sessionData={sessionData}
          />

          <button
            className="bg-transparent border-none  max-w-[900px] text-[#999797] text-[16px] mt-8 cursor-default"
            onClick={declineOffer1}
          >
            No thank you, I would not like to get this exclusive discount.
          </button>
          <p className="text-[20px] mt-12">{info.text2}</p>
          <h5 className="text-[26px] md:text-[40px] text-center w-full mt-8 font-[500]">
            {info.title4}
          </h5>
          <div
            dangerouslySetInnerHTML={{ __html: para2 }}
            className={`${markdownStyles["markdown"]}`}
          />
          <h5 className="text-[26px] md:text-[40px] text-center w-full mt-8 font-[500]">
            Just Click The Button Below <br className="hidden sm:block" /> And
            Upgrade Your Order!
          </h5>
          <YellowBox
            info={info}
            showSkipOffer={false}
            acceptOffer={acceptOffer}
            declineOffer={declineOffer1}
            sessionData={sessionData}
          />
        </div>
      </div>
      {info.stickyCta && !showDownsell && (
        <div className="fixed bottom-0 left-0 w-full bg-[#00527]  text-center p-2 z-40 bg-white">
          <div className=" flex flex-col w-full items-center md:px-4">
            <button
              className="bg-[#FFE24F] rounded-lg text-[#003FE2] border-[#003FE2] border-[4px] px-2 sm:px-6 py-2 text-[24px] sm:text-[32px] lg:text-[43px] font-[500] mt-2 hover:scale-105 transition-all"
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

const UpsellFooter = ({ info }: InfoProps) => {
  return (
    <div className="bg-[#ccc] flex justify-center px-6 py-4 w-full mt-20 text-center">
      Copyright {new Date().getFullYear()} © {info.product}{" "}
      <span className="hidden md:block px-2">|</span>
      <br className="md:hidden" /> All Rights Reserved
    </div>
  );
};

const UpsellTemplate1 = ({ info, nextStep, sessionData }: Props) => {
  return (
    <div
      className={`flex w-full flex-col items-center ${
        poppins.className
      } font-[300] ${info.stickyCta && "mb-40"}`}
    >
      <UpsellHeader1 info={info} />
      <UpsellBody1 info={info} nextStep={nextStep} sessionData={sessionData} />
      <UpsellFooter info={info} />
    </div>
  );
};

export default UpsellTemplate1;
