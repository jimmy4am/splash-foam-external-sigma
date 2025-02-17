"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Inter, Lato } from "next/font/google";

import { siteProduct } from "@/lib/site-info";
import { UpsellPageType } from "@/interfaces/upsellPage";
import { SessionDataType } from "@/interfaces/sessionData";
import { PriceDisplay } from "./upsell-price-display";

const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"]
});

type Props = {
  info: UpsellPageType;
  nextStep: (upsell?: any) => Promise<void>;
  sessionData: SessionDataType;
};

interface Prices {
  [key: number]: string;
}

const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-[2vw] md:gap-[10px] md:pr-[3vw] lg:pr-[0] text-[4vw] md:text-[1.6vw] lg:text-[18px] leading-[1.3] md:leading-[1.8vw] lg:leading-[20px] -tracking-[0.05vw] md:tracking-[0] font-bold">
    <Image
      className="flex-[0_0_21px]"
      src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/b3602d35-e5e1-405b-307b-44ef651b5c00/public"
      width={21}
      height={21}
      alt="Check icon"
    />
    {children}
  </li>
)

const UpsellTemplate13 = ({ info, nextStep, sessionData }: Props) => {
  const [productNum, setProductNum] = useState<number>(1);

  const oneTimePrices: Prices = {
    1: Number(info.stickyprice5).toFixed(0).toString(),
    2: Number(info.stickyprice6).toFixed(0).toString(),
    3: Number(info.stickyprice7).toFixed(0).toString(),
    4: Number(info.stickyprice8).toFixed(0).toString(),
  };
  const oneTimeIds: Prices = {
    1: info.stickyid5 || "",
    2: info.stickyid6 || "",
    3: info.stickyid7 || "",
    4: info.stickyid8 || "",
  };

  const oneTimeNames: Prices = {
    1: info.stickyname5 || "",
    2: info.stickyname6 || "",
    3: info.stickyname7 || "",
    4: info.stickyname8 || "",
  };

  const oneTimeBillings: Prices = {
    1: info.stickybilling5 || "",
    2: info.stickybilling6 || "",
    3: info.stickybilling7 || "",
    4: info.stickybilling8 || "",
  };

  const oneTimeOfferIds: Prices = {
    1: info.stickyoffer5 || "",
    2: info.stickyoffer6 || "",
    3: info.stickyoffer7 || "",
    4: info.stickyoffer8 || "",
  };

  const acceptOffer = async () => {
    const upsell = {
      offerName: oneTimeNames[productNum],
      offerPrice: parseFloat(oneTimePrices[productNum]),
      offerId: oneTimeIds[productNum],
      offerBilling: oneTimeBillings[productNum],
      offerOfferId: oneTimeOfferIds[productNum],
    };
    await nextStep(upsell);
  };

  const declineOffer = async () => {
    await nextStep();
  };

  return (
    <div className={`p-[2vw] md:p-[40px_0_0] bg-[linear-gradient(0deg,_rgba(246,170,162,0.1),_rgba(246,170,162,0.1))] text-[14px] leading-[1] ${lato.className}`}>
      <div className="md:w-[98%] max-w-[1024px] m-[0_auto]">
        <div className="md:mb-[33px] bg-[#fff] md:border-[1px] md:border-[#5D778F]">
          {/*STEPs*/}
          <ul className="flex border-[0.1vw] border-[#5D778F] md:border-0 text-center text-[2.2vw] md:text-[18px] text-[#A7A7A7] uppercase tracking-[0.5px]">
            <li className="flex-1 p-[3vw_0] md:p-[10px] bg-[#DCDCDC]">Step 1 : Order page</li>
            <li className="flex-1 p-[3vw_0] md:p-[10px] bg-[#F6AAA2] text-[#fff]">Step 2 : Special offer</li>
            <li className="flex-1 p-[3vw_0] md:p-[10px] bg-[#DCDCDC]">Step 3 : Confirmation</li>
          </ul>

          <div className="flex w-full flex-col items-center">
            <div className="p-[6vw_6vw_0] md:p-[27px_16px_0] text-center font-bold italic">
              <h5 className="mb-[2.5vw] md:mb-[10px] text-[#DC5B5B] text-[4.9vw] md:text-[23px] leading-[6vw] md:leading-[26px]">
                CONGRATULATIONS! You Are the 100,000th Customer!
              </h5>
              <h1 className="mb-[5vw] md:mb-[0] text-[4.6vw] md:text-[23px] leading-[5.1vw] md:leading-[26px] text-[#606060]">
                {info.title1}{" "}
                <span className="text-[#20A51D]">{info.savings1}{" "}{info.title2}!</span>
              </h1>
            </div>

            <div className="relative md:flex md:items-center md:justify-between md:m-[30px] p-[2.35vw] md:p-[10px]">
              <Image
                src={info.image2!}
                fill
                className="w-full absolute z-0"
                alt="background"
              />
              <div className="relative flex justify-center w-full md:w-[39%] lg:w-[43%] mb-[4vw] md:mb-[0]">
                <Image
                  src={info.image1}
                  width={393}
                  height={382}
                  alt={siteProduct}
                />
              </div>

                <ul className="relative md:w-[53%] flex flex-col gap-[5vw] md:gap-[2vw] lg:gap-[20px] md:mr-[10px] md:pr-[3%]">
                  <ListItem>{info.text1}</ListItem>
                  <ListItem>{info.text2}</ListItem>
                  <ListItem>{info.text3}</ListItem>
                  <ListItem>{info.text4}</ListItem>
                  <ListItem>{info.text5}</ListItem>
                </ul>
            </div>

            <div className="mt-[4vw] mb-[4vw] md:mt-[0] md:mb-[25px]">
              <div className="flex items-center justify-center gap-[3px] leading-[26px] text-[#000] font-bold">
                <div className="flex">
                  <span className="mr-[6px] text-[#DC5B5B]">1: </span>
                  <span>
                  <PriceDisplay
                    priceUSD={15}
                    countryCode={
                      sessionData?.customerInfo?.country || "US"
                    }
                    digits={2}
                  />{" "}
                    each
                </span>
                </div>
                |
                <div className="flex">
                  <span className="mr-[6px] text-[#DC5B5B]">2-3: </span>
                  <span>
                  <PriceDisplay
                    priceUSD={13}
                    countryCode={
                      sessionData?.customerInfo?.country || "US"
                    }
                    digits={2}
                  />{" "}
                    each
                </span>
                </div>
                |
                <div className="flex">
                  <span className="mr-[6px] text-[#DC5B5B]">4: </span>
                  <span>
                  <PriceDisplay
                    priceUSD={11}
                    countryCode={
                      sessionData?.customerInfo?.country || "US"
                    }
                    digits={2}
                  />{" "}
                    each
                </span>
                </div>
              </div>

              <select
                name="productId"
                value={productNum}
                onChange={(e) => setProductNum(parseInt(e.target.value))}
                className="flex w-full max-w-[255px] md:max-w-[300px] h-[45px] m-[5px_auto] md:m-[0_auto] p-[5px] bg-[#E9E9ED] border-[2px] border-[#c5c5c5] text-[16px] md:text-[20px] font-bold"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>

            <div className="w-full flex flex-col items-center pb-[7vw] md:pb-[50px]">
              <button onClick={acceptOffer} className="w-full max-w-[95%] md:max-w-[500px] mb-[35px] p-[4vw_1vw] md:p-[25px_33px] bg-[#4AC27E] text-[4vw] md:text-[17px] leading-[6.5vw] md:leading-[26px] text-[#fff] font-bold tracking-[0.5px] uppercase shadow-[0vw_0.1vw_0.4vw_0.1vw_rgba(58,84,214,0.40)] md:shadow-[0px_1px_4px_1px_rgba(58,84,214,0.40)]">
                <span className="md:text-[26px]">{info.ctaText1}</span>{" "}
                {info.ctaText2}
              </button>
              <button onClick={declineOffer} className="text-[3vw] md:text-[14px] text-[#999]">{info.skipOfferText1}</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-[15px] py-[20px]">
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
    </div>
  );
};

export default UpsellTemplate13;
