"use client";

import { UpsellPageType } from "@/interfaces/upsellPage";
import React, { useState } from "react";
import Image from "next/image";
import { siteProduct } from "@/lib/site-info";
import EditImage from "@/app/_components/edit-image";

type Props = {
  info: UpsellPageType;
  setCurrentUpsell: (info: UpsellPageType) => void;
};

const UpsellTemplate6Edit = ({ info, setCurrentUpsell }: Props) => {
  const [mins, setMins] = useState(3);
  const [secs, setSecs] = useState(0);

  const formatTime = (time: number) => {
    return time.toString().padStart(2, "0");
  };

  return (
    <div className="flex w-full min-h-screen bg-[#f6fbfe] relative">
      <Image
        src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/6f5c57b0-aede-4af9-27ef-c5c58ba8be00/public"
        fill
        className="w-full absolute object-scale-down"
        alt="background"
      />
      <div className="z-10 flex flex-col w-full items-center px-4">
        <div className="bg-white mt-4 md:mt-10 border-[1px] border-[#5D778F] flex flex-col items-center w-full max-w-[1100px]">
          <div className="flex w-full">
            <div className="w-1/3 bg-[#DCDCDC] text-[11px] md:text-[16px] text-center uppercase text-[#a7a7a7] p-2 font-[500]">
              Step 1: Order Page
            </div>
            <div className="w-1/3 text-[11px] md:text-[16px] text-center uppercase text-white p-2 font-bold bg-[#0083D2]">
              Step 2: Special Offer
            </div>
            <div className="w-1/3 bg-[#DCDCDC] text-[11px] md:text-[16px] text-center uppercase text-[#a7a7a7] p-2 font-[500]">
              Step 3: Confirmation
            </div>
          </div>
          <div className="flex w-full mt-2 flex-col items-center px-4">
            <h5 className="text-[#DC5B5B] text-[16px] md:text-[23px] font-[700] pt-2 italic text-center">
              WAIT! Don’t Checkout Without Taking ADVANTAGE of this SPECIAL
              OFFER
            </h5>
            <h1 className="text-[16px] md:text-[23px] font-[700] italic text-[#111] text-center py-2 md:py-0">
              <input
                className="editable-input w-full"
                onChange={(e) => {
                  setCurrentUpsell({
                    ...info,
                    title1: e.target.value,
                  });
                }}
                value={info.title1}
                placeholder="Title"
              />{" "}
              <span className="text-[#44b374]">
                <input
                  className="editable-input w-full"
                  onChange={(e) => {
                    setCurrentUpsell({
                      ...info,
                      title2: e.target.value,
                    });
                  }}
                  value={info.title2}
                  placeholder="Title"
                />
              </span>{" "}
            </h1>
            <p className="text-[#1481D6] text-[22px] text-center max-w-[650px] leading-tight font-[500]">
              As a special thank you for being our 100,000th Customer we want to
              offer you a DISCOUNTED {info.product}, We will even Pay for the
              Shipping!
            </p>
            <div className="flex w-full md:px-6">
              <div className="flex w-full mt-6 relative ">
                {/*TODO: TBD! issue with z-index on hover  */}
                <Image
                  src={info.image2!}
                  fill
                  className="w-full absolute"
                  alt="background"
                />
                <div className="flex w-full z-10 p-4">
                  <div className="hidden md:flex w-1/2 justify-center items-center">
                    <EditImage
                      className="object-scale-down"
                      src={info.image1}
                      alt={siteProduct}
                      width={350}
                      height={350}
                      post={info}
                      setPost={setCurrentUpsell}
                      field="image1"
                    />
                  </div>
                  <div className="flex w-full md:w-1/2 flex-col items-center md:items-start justify-center pr-2  text-center md:text-left">
                    <div className="flex w-full justify-center md:justify-start pb-2">
                      <EditImage
                        className="w-1/2 md:w-3/5"
                        src={info.logo}
                        alt={siteProduct}
                        width={270}
                        height={65}
                        post={info}
                        setPost={setCurrentUpsell}
                        field="logo"
                      />
                    </div>
                    <EditImage
                      className="w-1/2 md:hidden"
                      src={info.image1}
                      alt={siteProduct}
                      width={350}
                      height={350}
                      post={info}
                      setPost={setCurrentUpsell}
                      field="image1"
                    />
                    <p className="text-[14px] md:text-[20px]">
                      <input
                        className="editable-input"
                        onChange={(e) => {
                          setCurrentUpsell({
                            ...info,
                            title3: e.target.value,
                          });
                        }}
                        value={info.title3}
                        placeholder="Title"
                      />
                    </p>
                    <h2 className="text-[22px] md:text-[30px] font-bold uppercase py-2">
                      <input
                        className="editable-input"
                        onChange={(e) => {
                          setCurrentUpsell({
                            ...info,
                            product: e.target.value,
                          });
                        }}
                        value={info.product}
                        placeholder="Product"
                      />!
                    </h2>
                    <div className="flex justify-start items-end">
                      <div className="text-[22px] md:text-[30px] text-[#FD4631] line-through font-[500]">
                        <input
                          className="editable-input w-[60px]"
                          onChange={(e) => {
                            setCurrentUpsell({
                              ...info,
                              savings1: e.target.value,
                            });
                          }}
                          value={info.savings1}
                          placeholder="Price"
                        />
                      </div>
                      <div className="text-[#10B74A] text-[32px] md:text-[44px] font-[600] ml-4">
                        <input
                          className="editable-input w-[135px]"
                          onChange={(e) => {
                            setCurrentUpsell({
                              ...info,
                              offerPrice: e.target.value,
                            });
                          }}
                          value={info.offerPrice}
                          placeholder="Price"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-center mt-6 text-center">
              <p className="text-[#1481D6]  text-[16px] md:text-[22px] text-center max-w-[600px] leading-tight font-[500]">
                This Exclusive offer is only going to be available for a limited
                time. So Make sure to claim this GIFT Now!
              </p>

              {mins === 0 && secs === 0 ? (
                <>
                  <p className="text-[18px] md:text-[24px] text-[#FD594D] font-[500] mt-6">
                    This Offer has expired :
                  </p>
                  <button
                    className="w-[200px] bg-[#fd594d] text-white text-[16px] h-[60px] uppercase font-[600] flex items-center justify-center mt-4 mb-6 hover:bg-red-600 rounded-md"
                    onClick={() => setMins(2)}
                  >
                    Request Extension
                  </button>
                </>
              ) : (
                <>
                  <p className="text-[18px] md:text-[24px] text-[#FD594D] font-[500] mt-6">
                    This EXCLUSIVE Offer will be held for :
                  </p>
                  <div className="w-[200px] bg-[#fd594d] text-white text-[30px] h-[60px]  font-[600] flex items-center justify-center mt-4 mb-6">
                    {formatTime(mins)}:{formatTime(secs)}
                  </div>
                </>
              )}
              {!info.stickyCta && (
                <>
                  <button
                    className="bg-[#29af5c] text-[23px] uppercase   text-white p-2 md:p-4 flex  green-text-shadow  items-center hover:transform  font-bold md:w-[90%] justify-center max-w-[775px]  hover:bg-[#0ebf52] rounded-md disabled:opacity-40 disabled:pointer-events-none"
                    disabled={mins === 0 && secs === 0}
                  >
                    <input
                      className="editable-input"
                      onChange={(e) => {
                        setCurrentUpsell({
                          ...info,
                          ctaText1: e.target.value,
                        });
                      }}
                      value={info.ctaText1}
                      placeholder="Button text"
                    />
                  </button>
                  <button className="bg-transparent border-none  mt-4 text-[12px] pb-2 max-w-[900px] text-[#a1a1a1] cursor-default">
                    <input
                      className="editable-input"
                      onChange={(e) => {
                        setCurrentUpsell({
                          ...info,
                          skipOfferText1: e.target.value,
                        });
                      }}
                      value={info.skipOfferText1}
                      placeholder="Button text"
                    />
                  </button>
                </>
              )}
            </div>
          </div>
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
        <div className="flex text-[14px] mt-4 underline">Accepted Payments</div>
        <Image
          src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/512e948f-3970-4b80-55ac-550669b77800/public"
          width={400}
          height={290}
          alt="Accepted Credit Cards"
          className="mt-6 mb-6"
        />
      </div>

      {info.stickyCta && (
        <div className="fixed  bottom-0 left-0 w-full bg-[#00527]  text-center p-2 z-30 bg-white">
          <div className="flex flex-col w-full items-center md:px-4">
            <button
              className="bg-[#29af5c] text-[23px] uppercase  text-white p-2 md:p-4 flex  green-text-shadow  items-center hover:transform  font-bold md:w-[90%] justify-center max-w-[775px]  hover:bg-[#0ebf52] rounded-md disabled:opacity-40 disabled:pointer-events-none"
              disabled={mins === 0 && secs === 0}
            >
              <input
                className="editable-input"
                onChange={(e) => {
                  setCurrentUpsell({
                    ...info,
                    ctaText1: e.target.value,
                  });
                }}
                value={info.ctaText1}
                placeholder="Button text"
              />
            </button>
            <button className="bg-transparent border-none  mt-4 text-[11px] md:text-[12px] pb-2 max-w-[900px] text-[#a1a1a1] cursor-default">
              <input
                className="editable-input"
                onChange={(e) => {
                  setCurrentUpsell({
                    ...info,
                    skipOfferText1: e.target.value,
                  });
                }}
                value={info.skipOfferText1}
                placeholder="Button text"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpsellTemplate6Edit;
