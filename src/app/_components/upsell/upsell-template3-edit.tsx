"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

import { UpsellPageType } from "@/interfaces/upsellPage";
import { siteProduct } from "@/lib/site-info";
import EditImage from "@/app/_components/edit-image";

type Props = {
  info: UpsellPageType;
  setCurrentUpsell: (info: UpsellPageType) => void;
};

const UpsellTemplate3 = ({ info, setCurrentUpsell }: Props) => {
  const [productNum, setProductNum] = useState<number>(1);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="flex w-full min-h-screen bg-[#f6fbfe] relative">
      <Image
        src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/6f5c57b0-aede-4af9-27ef-c5c58ba8be00/public"
        fill
        className="w-full absolute object-scale-down"
        alt="background"
      />
      <div className="z-10 flex flex-col w-full items-center px-2 md:px-4">
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
              You Can't Leave Without Taking ADVANTAGE of this SPECIAL OFFER!
            </h5>
            <h1 className="text-[16px] pt-2 md:pt-0 md:text-[23px] font-[700] italic text-[#111] text-center">
              <input
                className="editable-input"
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
                  className="editable-input"
                  onChange={(e) => {
                    setCurrentUpsell({
                      ...info,
                      title2: e.target.value,
                    });
                  }}
                  value={info.title2}
                  placeholder="Title"
                />{" "}
                <input
                  className="editable-input w-[70px]"
                  onChange={(e) => {
                    setCurrentUpsell({
                      ...info,
                      title6: e.target.value,
                    });
                  }}
                  value={info.title6}
                  placeholder="Price"
                />
                <input
                  className="editable-input"
                  onChange={(e) => {
                    setCurrentUpsell({
                      ...info,
                      title7: e.target.value,
                    });
                  }}
                  value={info.title7}
                  placeholder="Title"
                />
              </span>{" "}
            </h1>
            <div className="flex w-full md:px-6">
              <div className="flex w-full mt-2 md:mt-6 relative ">
                {/*TODO: TBD! issue with z-index on hover  */}
                <Image
                  src={info.image2!}
                  fill
                  className="w-full absolute"
                  alt="background"
                />
                <div className="flex w-full z-10 p-2 md:p-4">
                  <div className="hidden md:flex w-1/2 justify-center items-center">
                    <EditImage
                      src={info.image1}
                      alt={siteProduct}
                      width={350}
                      height={350}
                      post={info}
                      setPost={setCurrentUpsell}
                      field="image1"
                    />
                  </div>
                  <div className="flex w-full md:w-1/2 flex-col items-center md:*:items-start justify-center pr-2 text-center md:text-left">
                    <div className="flex w-full justify-end pb-2">
                      <EditImage
                        className="w-2/5 max-w-[170px]"
                        src={info.logo}
                        alt={siteProduct}
                        width={170}
                        height={65}
                        post={info}
                        setPost={setCurrentUpsell}
                        field="logo"
                      />
                    </div>
                    <EditImage
                      className="md:hidden w-1/2"
                      src={info.image1}
                      alt={siteProduct}
                      width={350}
                      height={350}
                      post={info}
                      setPost={setCurrentUpsell}
                      field="image1"
                    />
                    <p className="w-full text-[16px] md:text-[20px]">
                      <input
                        className="editable-input w-full"
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
                    <h2 className="w-full text-[20px] md:text-[30px] font-bold uppercase py-2">
                      <input
                        className="editable-input w-full"
                        onChange={(e) => {
                          setCurrentUpsell({
                            ...info,
                            product: e.target.value,
                          });
                        }}
                        value={info.product}
                        placeholder="Product"
                      />
                      !
                    </h2>
                    <div className="flex w-full">
                      <div className="flex w-1/3 justify-center items-center p-2">
                        <EditImage
                          src={info.image3}
                          alt={siteProduct}
                          width={145}
                          height={145}
                          post={info}
                          setPost={setCurrentUpsell}
                          field="image3"
                        />
                      </div>
                      <div className="flex w-1/3 justify-center items-center p-2">
                        <EditImage
                          src={info.image4}
                          alt={siteProduct}
                          width={145}
                          height={145}
                          post={info}
                          setPost={setCurrentUpsell}
                          field="image4"
                        />
                      </div>
                      <div className="flex w-1/3 justify-center items-center p-2">
                        <EditImage
                          src={info.image5}
                          alt={siteProduct}
                          width={145}
                          height={145}
                          post={info}
                          setPost={setCurrentUpsell}
                          field="image5"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-[300px] flex-col mt-8 max-w-full">
              <p className="font-[500] text-[14px] w-full text-center mb-2">
                Select Your Quantity
              </p>
              <div className="relative w-full mb-4">
                <select
                  name="year"
                  value={productNum}
                  onChange={(e) => setProductNum(parseInt(e.target.value))}
                  className="w-full border-[1px] border-[#333]  px-4 py-2 text-[16px] sm:text-[14px] rounded-md bg-[#eee]"
                >
                  <option disabled value="" className="text-[#ccc]">
                    Choose Your Quantity
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <ChevronDownIcon className="w-4 h-4 text-[#555]" />
                </span>
              </div>
              {/* <div className="flex w-full items-center">
                <input
                  type="radio"
                  checked={subscribe}
                  className="mr-2"
                  onChange={() => setSubscribe(!subscribe)}
                />
                <div className="flex flex-col justify-start items-start">
                  <p className="font-[500] text-[14px]">
                    Subscribe & Purchase -{" "}
                    <span className="text-[#00A046]">
                      {info.savings1} Discount
                    </span>
                  </p>
                  <p className="text-[14px] text-[#FFBA00]">
                    <PriceDisplay
                      priceUSD={parseFloat(subPrices[productNum])}
                      countryCode={sessionData?.customerInfo?.country || "US"}
                      digits={0}
                    />{" "}
                    {info.text1}{" "}
                    <button
                      className="bg-transparent border-none text-[#0066C0]"
                      onClick={() => setShowInfo(!showInfo)}
                    >
                      Learn More
                    </button>
                  </p>
                </div>
              </div> */}
              {/* <div className="flex w-full items-center">
             
                <div className="flex flex-col justify-start items-start">
                  <p className="font-[500] text-[14px]">One Time Purchase</p>
                  <p className="text-[14px] text-[#FFBA00]">
                    <PriceDisplay
                      priceUSD={parseFloat(oneTimePrices[productNum])}
                      countryCode={sessionData?.customerInfo?.country || "US"}
                      digits={0}
                    />
                  </p>
                </div>
              </div> */}
            </div>
            <div className="flex flex-col w-full items-center md:px-4 mt-4">
              {!info.stickyCta && (
                <>
                  <button className="bg-[#29af5c] text-[23px] uppercase  text-white py-2 px-4 md:py-4 flex  green-text-shadow  items-center hover:transform  font-bold md:w-[90%] justify-center max-w-[775px]  hover:bg-[#0ebf52] rounded-md">
                    <input
                      className="editable-input w-full"
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
                      className="editable-input w-full"
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
            <Image
              src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/645f8e19-3b68-428e-1eb3-dfad6e385000/public"
              width={200}
              height={80}
              alt="Secure Checkout"
              className="mt-4 mb-6"
            />
            {showInfo && (
              <div className="flex w-full text-[10px] mt-4 flex-col items-center text-center max-w-[500px] border-[1px] border-blue-900 p-4 mb-4">
                <h5 className="font-bold">
                  Save
                  {/*{info.savings1}*/}
                  <input
                    className="editable-input"
                    onChange={(e) => {
                      setCurrentUpsell({
                        ...info,
                        savings1: e.target.value,
                      });
                    }}
                    value={info.savings1}
                    placeholder="Text"
                  />
                  with auto-deliveries
                </h5>
                <p className="text-justify">
                  {/*{info.text2}*/}
                  <input
                    className="editable-input"
                    onChange={(e) => {
                      setCurrentUpsell({
                        ...info,
                        text2: e.target.value,
                      });
                    }}
                    value={info.text2}
                    placeholder="Text"
                  />
                </p>
              </div>
            )}
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
        <div className="fixed bottom-0 left-0 w-full bg-[#00527]  text-center p-2 z-40 bg-white">
          <div className=" flex flex-col w-full items-center md:px-4">
            <button
              className="bg-[#29af5c] text-[23px] uppercase  text-white p-2 md:p-4 flex  green-text-shadow  items-center hover:transform  font-bold md:w-[90%] justify-center max-w-[775px]  hover:bg-[#0ebf52] rounded-md disabled:opacity-40 disabled:pointer-events-none"
              // onClick={acceptOffer}
              // disabled={mins === 0 && secs === 0}
            >
              {/*{info.ctaText1}*/}
              <input
                className="editable-input w-full"
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
            <button
              className="bg-transparent border-none  mt-4 text-[11px] md:text-[12px] pb-2 max-w-[900px] text-[#a1a1a1] cursor-default"
              // onClick={declineOffer}
            >
              {/*{info.skipOfferText1}*/}
              <input
                className="editable-input w-full"
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

export default UpsellTemplate3;
