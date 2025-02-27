"use client";

import React from "react";
import Image from "next/image";
import { Inter, Lato } from "next/font/google";

import { siteProduct } from "@/lib/site-info";
import { UpsellPageType } from "@/interfaces/upsellPage";
import EditImage from "@/app/_components/edit-image";

const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"]
});
const inter = Inter({ subsets: ["latin"] });

type Props = {
  info: UpsellPageType;
  setCurrentUpsell: (info: UpsellPageType) => void;
};

const UpsellTemplate16Edit = ({ info, setCurrentUpsell }: Props) => {
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
                <input
                  className="editable-input w-full"
                  onChange={(e) => {
                    setCurrentUpsell({
                      ...info,
                      text5: e.target.value,
                    });
                  }}
                  value={info.text5}
                  placeholder="text5"
                />
              </h5>
              <h1 className="text-center text-[4.4vw] md:text-[16px] lg:text-[23px] font-bold italic text-[#606060]">
                <input
                  className="editable-input"
                  onChange={(e) => {
                    setCurrentUpsell({
                      ...info,
                      title1: e.target.value,
                    });
                  }}
                  value={info.title1}
                  placeholder="title1"
                />{" "}
                <span className="text-[#20A51D]">
                  <input
                    className="editable-input"
                    onChange={(e) => {
                      setCurrentUpsell({
                        ...info,
                        savings1: e.target.value,
                      });
                    }}
                    value={info.savings1}
                    placeholder="savings1"
                  />
                </span>{" "}
                <input
                  className="editable-input"
                  onChange={(e) => {
                    setCurrentUpsell({
                      ...info,
                      title2: e.target.value,
                    });
                  }}
                  value={info.title2}
                  placeholder="title2"
                />
              </h1>
            </div>

            <div className="relative mb-[15px] md:mb-[30px] p-[16px_0] md:p-[25px_20px]">
              {/*TODO: TBD! issue with z-index on hover  */}
              <Image
                src={info.image2}
                fill
                className="hidden md:block w-full absolute"
                alt="background desktop"
              />
              <Image
                src={info.image3}
                fill
                className="md:hidden w-full absolute"
                alt="background mobile"
              />
              <div className="relative flex flex-col md:flex-row items-center md:justify-between z-10">
                <div className="flex justify-center md:w-[43%]">
                  <EditImage
                    src={info.image1}
                    alt={siteProduct}
                    width={500}
                    height={500}
                    post={info}
                    setPost={setCurrentUpsell}
                    field="image1"
                  />
                </div>

                <div className="w-[88%] md:w-[50%] pt-[4vw] md:pt-[0] text-center md:text-left">
                  <EditImage
                    className="hidden md:block max-w-[290px] md:mb-[16px]"
                    src={info.logo}
                    alt={siteProduct}
                    width={290}
                    height={120}
                    post={info}
                    setPost={setCurrentUpsell}
                    field="logo"
                  />
                  <p className="mb-[16px] text-[3.8vw] md:text-[20px] leading-[4.6vw] md:leading-[26px]">
                    {info.slug === 'oricle-sub' ?
                      (<>One LAST CHANCE to get this exclusive discount for 6x <span className="font-bold">
                        <input
                          className="editable-input"
                          onChange={(e) => {
                            setCurrentUpsell({
                              ...info,
                              text2: e.target.value,
                            });
                          }}
                          value={info.text2}
                          placeholder="text2"
                        />
                      </span> for 50% OFF!</>) :
                      info.slug === 'denta-sub' ?
                        (<>One LAST CHANCE to get this exclusive discount for <span className="font-bold">
                          <input
                            className="editable-input"
                            onChange={(e) => {
                              setCurrentUpsell({
                                ...info,
                                text2: e.target.value,
                              });
                            }}
                            value={info.text2}
                            placeholder="text2"
                          />
                        </span> for 50% OFF!</>) :
                        (<>One LAST CHANCE to get this exclusive discount for a <span className="font-bold">
                          <input
                            className="editable-input"
                            onChange={(e) => {
                              setCurrentUpsell({
                                ...info,
                                text2: e.target.value,
                              });
                            }}
                            value={info.text2}
                            placeholder="text2"
                          />
                        </span> for your Family and Friends!</>)
                    }
                  </p>
                  <h2 className="w-full mb-[18px] text-[6vw] md:text-[30px] leading-[1.2] font-bold uppercase">
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
                    />!
                  </h2>
                  <h4 className="w-full flex justify-center md:justify-start items-end text-[#10B74A] text-[8.6vw] md:text-[40px] leading-[1] font-bold">
                    <span className="mr-[2vw] md:mr-[10px] text-[#FD4631] line-through text-[6.5vw] md:text-[30px]">
                      <input
                        className="editable-input w-[150px]"
                        onChange={(e) => {
                          setCurrentUpsell({
                            ...info,
                            text1: e.target.value,
                          });
                        }}
                        value={info.text1}
                        placeholder="text1"
                      />
                    </span>{" "}
                    <input
                      className="editable-input w-[150px]"
                      onChange={(e) => {
                        setCurrentUpsell({
                          ...info,
                          stickyprice1: e.target.value,
                        });
                      }}
                      value={info.stickyprice1}
                      placeholder="stickyprice1"
                    />
                  </h4>
                </div>
              </div>
            </div>

            <div className="w-full max-w-[675px] flex flex-col items-center mx-auto text-center">
              <p className={`w-[90%] mb-[15px] md:mb-[60px] text-[16px] lg:text-[14px] leading-[26px] text-[#5a5b5b] font-medium text-justify ${inter.className}`}>
                <textarea
                  rows={10}
                  className="editable-input w-full"
                  onChange={(e) => {
                    setCurrentUpsell({
                      ...info,
                      text3: e.target.value,
                    });
                  }}
                  value={info.text3}
                  placeholder="text3"
                />
              </p>
            </div>

            <div className="md:hidden sticky left-0 right-0 bottom-0 flex justify-center p-[10px_6px] bg-[#fff] z-20">
              <div className="flex flex-col w-full items-center md:px-4">
                <button
                  className="w-full max-w-[747px] p-[26px_40px] md:p-[20px_45px] bg-[#4AC27E] text-[23px] leading-[30px] uppercase text-[#fff] font-bold  hover:bg-[#0ebf52] disabled:opacity-40 disabled:pointer-events-none"
                >
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
                <button
                  className="mt-[10px] md:mt-[15px] pb-0 bg-transparent border-none text-[11px] md:text-[12px] text-[rgba(153,153,153,0.5)] cursor-default"
                >
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
          </div>
        </div>

        <div className="flex flex-col items-center gap-[15px] py-[2vw] md:py-[20px] text-[3vw] md:text-[14px] leading-[16px]">
          <nav>
            <ul className="flex flex-wrap justify-center gap-[10px] py-[5px] md:py-[0] text-[13px]">
              <li><a href="#" className="hover:underline cursor-pointer">Terms and Conditions</a></li>
              <li><a href="#" className="hover:underline cursor-pointer">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline cursor-pointer">Contact Us</a></li>
              <li><a href="#" className="hover:underline cursor-pointer">Shipping and Returns</a></li>
              <li><a href="#" className="hover:underline cursor-pointer">Become an Affiliate</a></li>
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

      <div className="hidden md:flex sticky left-0 right-0 bottom-0 justify-center p-[10px_6px] bg-[#fff] z-20">
        <div className="flex flex-col w-full items-center md:px-4">
          <button
            className="w-full max-w-[747px] p-[26px_45px] md:p-[20px_45px] bg-[#4AC27E] text-[23px] leading-[30px] uppercase text-[#fff] font-bold  hover:bg-[#0ebf52] disabled:opacity-40 disabled:pointer-events-none"
          >
            {info.ctaText1}
          </button>
          <button
            className="w-full max-w-[747px] mt-[10px] md:mt-[15px] pb-0 bg-transparent border-none text-[11px] md:text-[12px] text-[rgba(153,153,153,0.5)] cursor-default"
          >
            {info.skipOfferText1}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpsellTemplate16Edit;