"use client";

import React from "react";
import Image from "next/image";

import { UpsellPageType } from "@/interfaces/upsellPage";
import EditImage from "@/app/_components/edit-image";

type Props = {
  info: UpsellPageType;
  setCurrentUpsell: (info: UpsellPageType) => void;
};

const UpsellTemplate14Edit = ({ info, setCurrentUpsell }: Props) => {
  return (
    <div className="pt-[12px] sm:pt-[8px] bg-[#f1f1f1] text-[15px] leading-[1.25] font-arial">
      <header className="flex justify-center py-[20px] sm:py-[15px] bg-[#fff] border-b-[7px] border-b-[#0578a6] shadow-[0_-3px_6px_3px_#eee]">
        <EditImage
          className="w-[130px] sm:w-[281px]"
          src={info.logo}
          alt="logo"
          width={281}
          height={101}
          post={info}
          setPost={setCurrentUpsell}
          field="product"
        />
      </header>

      <div className="p-[15px_6px] sm:p-[40px_6px_0]">
        <div className="max-w-[1000px] m-[0_auto] bg-[#fff] lg:border-[1px] lg:border-[#d4d4d4]">
          {/*STEPs*/}
          <ul className="flex border-[0.1vw] border-[#5D778F] lg:border-0 text-center text-[9px] sm:text-[12px] lg:text-[18px] text-[#0578a6] uppercase font-bold">
            <li className="flex-1 flex items-center justify-center h-[35px] bg-[#d4d4d4]">Step 1 : Order page</li>
            <li className="flex-1 flex items-center justify-center h-[35px] bg-[#0578a6] text-[#fff]">Step 2 : Special offer</li>
            <li className="flex-1 flex items-center justify-center h-[35px] bg-[#d4d4d4]">Step 3 : Confirmation</li>
          </ul>

          <div className="bg-[#b4dae6]">
            <div className="p-[30px_0_0] md:p-[30px_10px_0] text-center text-[#363636]">
              <h1 className="text-[32px] sm:text-[46px] lg:text-[70px] leading-[1.15] font-black uppercase">
                <input
                  className="editable-input w-full"
                  onChange={(e) => {
                    setCurrentUpsell({
                      ...info,
                      title1: e.target.value,
                    });
                  }}
                  value={info.title1}
                  placeholder="title1"
                />
              </h1>
              <h2 className="text-[13px] md:text-[36px] leading-[1.15] font-black uppercase">
                <input
                  className="editable-input w-full"
                  onChange={(e) => {
                    setCurrentUpsell({
                      ...info,
                      title2: e.target.value,
                    });
                  }}
                  value={info.title2}
                  placeholder="title2"
                />
              </h2>

              <div className="sm:hidden w-[90%] mx-[auto] text-[15px] leading-[1.15] font-bold">
                <p>
                  <input
                    className="editable-input w-full"
                    onChange={(e) => {
                      setCurrentUpsell({
                        ...info,
                        text1: e.target.value,
                      });
                    }}
                    value={info.text1}
                    placeholder="text1"
                  />
                </p>
                <p>
                  <input
                    className="editable-input w-full"
                    onChange={(e) => {
                      setCurrentUpsell({
                        ...info,
                        text2: e.target.value,
                      });
                    }}
                    value={info.text2}
                    placeholder="text2"
                  />
                </p>
                <p className="text-[1.2em]">
                  <input
                    className="editable-input w-full"
                    onChange={(e) => {
                      setCurrentUpsell({
                        ...info,
                        text3: e.target.value,
                      });
                    }}
                    value={info.text3}
                    placeholder="text3"
                  />{" "}
                  <input
                    className="editable-input w-full"
                    onChange={(e) => {
                      setCurrentUpsell({
                        ...info,
                        offerPrice: e.target.value,
                      });
                    }}
                    value={info.offerPrice}
                    placeholder="offerPrice"
                  />
                </p>
              </div>
            </div>

            <EditImage
              src={info.image1}
              alt="Background Image"
              width={1000}
              height={404}
              post={info}
              setPost={setCurrentUpsell}
              field="image1"
            />

            <div className="flex flex-col lg:flex-row items-center gap-[10px] lg:gap-[30px] py-[10px] lg:px-[30px] bg-[#CFBFB2]">
              <div className="lg:flex-1">
                <button className="w-full p-[18px_15px] md:p-[23px_15px] bg-[linear-gradient(180deg,_#ffc616,_#d5810a)] border-[2px] border-[#fff] text-[24px] md:text-[30px] leading-[1] text-[#fff] font-bold uppercase italic -tracking-[2px] md:-tracking-[2.5px] hover:bg-[linear-gradient(180deg,_#d5810a,_#ffc616)]">
                  <input
                    className="editable-input w-full"
                    onChange={(e) => {
                      setCurrentUpsell({
                        ...info,
                        ctaText1: e.target.value,
                      });
                    }}
                    value={info.ctaText1}
                    placeholder="ctaText1"
                  />
                </button>
              </div>

              <button className="sm:hidden text-[12px] text-[#505050]">
                <input
                  className="editable-input w-full"
                  onChange={(e) => {
                    setCurrentUpsell({
                      ...info,
                      skipOfferText1: e.target.value,
                    });
                  }}
                  value={info.skipOfferText1}
                  placeholder="skipOfferText1"
                />
              </button>

              <div className="hidden sm:block sm:w-[85%] lg:flex-1 m-[0_auto] p-[0_10px] lg:p-[12px_0] text-center lg:text-left text-[#fff]">
                <p>
                  <input
                    className="editable-input w-full"
                    onChange={(e) => {
                      setCurrentUpsell({
                        ...info,
                        text1: e.target.value,
                      });
                    }}
                    value={info.text1}
                    placeholder="text1"
                  />
                </p>
                <p>
                  <input
                    className="editable-input w-full"
                    onChange={(e) => {
                      setCurrentUpsell({
                        ...info,
                        text2: e.target.value,
                      });
                    }}
                    value={info.text2}
                    placeholder="text2"
                  />
                </p>
                <p className="text-[1.2em]">
                  <input
                    className="editable-input w-full"
                    onChange={(e) => {
                      setCurrentUpsell({
                        ...info,
                        text3: e.target.value,
                      });
                    }}
                    value={info.text3}
                    placeholder="text3"
                  />{" "}
                  <input
                    className="editable-input w-full"
                    onChange={(e) => {
                      setCurrentUpsell({
                        ...info,
                        offerPrice: e.target.value,
                      });
                    }}
                    value={info.offerPrice}
                    placeholder="offerPrice"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:block max-w-[1000px] m-[0_auto] py-[20px] text-center">
        <div className="lg:w-1/2 px-[30px]">
          <button className="text-[12px]  sm:text-[#999]">
            <input
              className="editable-input w-full"
              onChange={(e) => {
                setCurrentUpsell({
                  ...info,
                  skipOfferText1: e.target.value,
                });
              }}
              value={info.skipOfferText1}
              placeholder="skipOfferText1"
            />
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center gap-[12px] py-[30px] text-center text-[12px] text-[#898989]">
        <p className="flex items-center md:flex-row">
          Copyright {new Date().getFullYear()} -
          <input
            className="editable-input"
            onChange={(e) => {
              setCurrentUpsell({
                ...info,
                product: e.target.value,
              });
            }}
            value={info.product}
            placeholder="product"
          />{" "} All Rights Reserved
        </p>
        <p>Accepted Payments</p>
        <ul className="flex justify-center gap-[15px]">
          <li>
            <Image
              src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/6db9f844-557c-4dd8-ad66-583a1b60d300/public"
              width={53}
              height={26}
              alt="Visa"
            />
          </li>
          <li>
            <Image
              src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/656ca63a-96b6-46e4-26ce-b012350c1e00/public"
              width={53}
              height={52}
              alt="Mastercard"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UpsellTemplate14Edit;