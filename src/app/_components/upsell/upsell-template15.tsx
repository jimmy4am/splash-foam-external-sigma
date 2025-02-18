"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Lato } from "next/font/google";

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

type slug = typeof templatesWithOtpDetails[number];

const templatesWithOtpDetails = ['barks-otp', 'breath-denta-otp', 'wifi-otp', 'denta-otp', 'jet-otp'] as const;

const data: Record<slug, { amount: string, price: number }[]> = {
  'barks-otp': [
    {
      amount: '1',
      price: 20,
    },
    {
      amount: '2-3',
      price: 18,
    },
    {
      amount: '4',
      price: 16,
    }
  ],
  'breath-denta-otp': [
    {
      amount: '1',
      price: 49,
    },
    {
      amount: '2-3',
      price: 44,
    },
    {
      amount: '4',
      price: 40,
    }
  ],
  'wifi-otp': [
    {
      amount: '1',
      price: 24,
    },
    {
      amount: '2',
      price: 21,
    },
    {
      amount: '2',
      price: 18,
    },
    {
      amount: '4',
      price: 15,
    }
  ],
  'denta-otp': [
    {
      amount: '1',
      price: 28,
    },
    {
      amount: '2-3',
      price: 26,
    },
    {
      amount: '4',
      price: 23,
    }
  ],
  'jet-otp': [
    {
      amount: '1',
      price: 28,
    },
    {
      amount: '2-3',
      price: 26,
    },
    {
      amount: '4',
      price: 23,
    }
  ]
}

const productImageWrapperClasses: Record<string, string> = {
  'barks-otp': 'justify-start md:pr-[50px]',
  'wifi-otp': 'justify-center md:px-[10px]',
}

const productImageClasses: Record<string, string> = {
  'barks-otp': 'max-w-[75%] md:max-w-[100%]',
  'wifi-otp': 'max-w-[100%] max-h-[none] -mt-[40px] md:-mt-[0] xl:-mt-[30px]',
}

const OneTimePurchaseDetails = ({ data, sessionData }: { data: { amount: string, price: number }[], sessionData: SessionDataType }) => (
  <div className="flex items-center justify-center gap-[3px] mb-[8px] leading-[26px] text-[#000] font-bold">
    {data.map((item, idx) => (
      <>
        <div className="flex">
          <span className="mr-[6px] text-[#DC5B5B]">{item.amount}: </span>
          <PriceDisplay priceUSD={item.price} countryCode={ sessionData?.customerInfo?.country || "US"} digits={0} />{" "}
          each
        </div>
        {idx + 1 < data.length && '|'}
      </>
    ))}
  </div>
)

const OneTimePurchaseRadio = ({ price, sessionData }: { price: string, sessionData: SessionDataType }) => (
  <label className="flex items-center mt-[15px] text-[14px] leading-[1.4] font-bold " htmlFor="price">
    <input className="w-[16px] h-[16px] mr-[8px]" type="radio" checked={true} />
    One Time Purchase
    <span className="ml-[4px] text-[#FFBA00]">
      <PriceDisplay priceUSD={Number(price)} countryCode={ sessionData?.customerInfo?.country || "US"} digits={0} />
    </span>
  </label>
)

const UpsellTemplate15 = ({ info, nextStep, sessionData }: Props) => {
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
      offerPrice: parseFloat(oneTimePrices[6]),
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
    <div className={`p-[2vw] md:p-[40px_0_0] bg-[#f6fbfe] text-[14px] leading-[1] ${lato.className}`}>
      <div className="md:w-[98%] max-w-[1024px] m-[0_auto]">
        <div className="md:mb-[33px] bg-[#fff] md:border-[1px] md:border-[#5D778F]">
          {/*STEPs*/}
          <ul className="flex border-[0.1vw] border-[#5D778F] md:border-0 text-center text-[2.2vw] md:text-[18px] text-[#A7A7A7] uppercase tracking-[0.5px]">
            <li className="flex-1 p-[3vw_0] md:p-[10px] bg-[#DCDCDC]">Step 1 : Order page</li>
            <li className="flex-1 p-[3vw_0] md:p-[10px] bg-[#0083D2] text-[#fff]">Step 2 : Special offer</li>
            <li className="flex-1 p-[3vw_0] md:p-[10px] bg-[#DCDCDC]">Step 3 : Confirmation</li>
          </ul>

          <div className="w-full">
            <div className="p-[4vw_6vw_0] md:p-[27px_16px_0] text-center font-bold italic">
              <h5 className="mb-[1vw] md:mb-[0] text-[#DC5B5B] text-[4.3vw] md:text-[23px] leading-[5.5vw] md:leading-[26px] font-black">
                You Can't Leave Without Taking ADVANTAGE of this SPECIAL OFFER!
              </h5>
              <h1 className="mb-[5vw] md:mb-[0] text-[4.0vw] md:text-[23px] leading-[5.9vw] md:leading-[26px] text-[#000] font-black">
                {info.title1}{" "}
                <span className="text-[#20A51D]">
                  {info.title2}{" "}
                  <PriceDisplay priceUSD={Number(info.savings1)} countryCode={ sessionData?.customerInfo?.country || "US"} digits={0} />!
                </span>
              </h1>
            </div>

            <div className="relative md:m-[30px]">
              <div className="relative z-10 flex justify-end p-[10px] md:p-[10px_20px]">
                <Image
                  src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/ddc84d4d-22b7-4d61-40c8-8123beacee00/public"
                  width={183}
                  height={93}
                  className="absolute z-10 top-0 w-[134px] md:w-[145px] -left-[8px] md:-left-[18px]"
                  alt="Flash sale icon"
                />
                <Image
                  src={info.logo}
                  width={200}
                  height={50}
                  className="max-w-[150px] max-h-[50px] md:max-w-none md:max-h-none md:w-auto md:h-auto"
                  alt="logo"
                />
              </div>
              <Image
                src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/299ceee7-a54e-4b5f-9d10-07a7a911b800/public"
                fill
                className="absolute inset-0 object-cover md:hidden"
                alt="background mobile"
              />
              <Image
                src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/851adf4f-10f4-4c09-df6b-e71bfa10e400/public"
                fill
                className="absolute inset-0 object-cover hidden md:block"
                alt="background desktop"
              />

              <div className="md:flex md:items-start">
                <div className={`${productImageWrapperClasses[info.slug] || 'justify-center md:px-[20px]'} relative flex w-full md:w-[40%] mb-[20px] md:mb-[0]`}>
                  <Image
                    src={info.image1}
                    width={393}
                    height={382}
                    alt={siteProduct}
                    className={`${productImageClasses[info.slug] || 'max-w-[250px] max-h-[340px]'}`}
                  />
                </div>

                <div className="relative md:w-[60%] md:px-[20px]">
                  <div className="p-[20px_30px] md:p-[20px_0] text-center md:text-left">
                    <p className="mb-[20px] md:mb-[12px] text-[22px] leading-[26px] text-[#212529]">
                      {info.title3} <span className="font-bold">{info.product}</span> {info.title4}
                    </p>
                    <p className="text-[28px] lg:text-[34px] text-[#000] font-extrabold uppercase">{info.product}!</p>
                  </div>
                  <div className="flex gap-[15px] md:gap-[30px] p-[0_10px_20px] md:p-[0_0_20px]">
                    <div className="rounded-[50%] overflow-hidden">
                      <Image
                        src={info.image2}
                        width={152}
                        height={152}
                        alt="Image 1"
                      />
                    </div>
                    <div className="rounded-[50%] overflow-hidden">
                      <Image
                        src={info.image3}
                        width={152}
                        height={152}
                        alt="Image 2"
                      />
                    </div>
                    <div className="rounded-[50%] overflow-hidden">
                      <Image
                        src={info.image4}
                        width={152}
                        height={152}
                        alt="Image 3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-[4vw] mb-[4vw] md:mt-[0] md:mb-[25px]">
              {templatesWithOtpDetails.includes(info.slug as slug) && <OneTimePurchaseDetails data={data[info.slug as slug]} sessionData={sessionData}/>}

              <div className="w-full max-w-[255px] md:max-w-[300px] mx-auto">
                <select
                  name="productId"
                  value={productNum}
                  onChange={(e) => setProductNum(parseInt(e.target.value))}
                  className="flex w-full m-[5px_auto] md:m-[0_auto] p-[5px] bg-[#E9E9ED] border-[2px] border-[#c5c5c5] text-[16px] leading-[18px] font-bold"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>

                {(info.slug === 'pee-tablets-otp' || info.slug === 'breath-otp') && <OneTimePurchaseRadio price={oneTimePrices[productNum]} sessionData={sessionData} />}
              </div>
            </div>

            <div className="w-full flex flex-col items-center pb-[7vw] md:pb-[50px]">
              <button onClick={acceptOffer} className="w-full max-w-[95%] md:max-w-[470px] mb-[35px] p-[4vw_1vw] md:p-[20px_13px] bg-[#4AC27E] text-[5vw] md:text-[20px] leading-[6.5vw] md:leading-[26px] text-[#fff] tracking-[0.5px] italic uppercase shadow-[0vw_0.1vw_0.4vw_0.1vw_rgba(58,84,214,0.40)] md:shadow-[0px_1px_4px_1px_rgba(58,84,214,0.40)] hover:bg-[#23814c]">
                {info.ctaText1}
              </button>
              <button onClick={declineOffer} className="text-[3vw] md:text-[14px] text-[#999] hover:text-[#0056b3] hover:underline">
                {info.skipOfferText1}
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-[15px] py-[2vw] md:py-[20px] text-[3vw] md:text-[14px] leading-[16px]">
          <nav>
            <ul className="flex flex-wrap justify-center gap-[10px] py-[5px] md:py-[0] text-[13px]">
              <li><a href="#" className="hover:underline cursor-pointer">Terms and Conditions</a></li>
              <li><a href="#" className="hover:underline cursor-pointer">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline cursor-pointer">Contact Us</a></li>
              <li><a href="#" className="hover:underline cursor-pointer">Shipping and Returns</a></li>
            </ul>
          </nav>
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

export default UpsellTemplate15;