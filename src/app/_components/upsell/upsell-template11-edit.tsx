"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Lato, Roboto, Roboto_Condensed, Anton } from "next/font/google";

import { UpsellPageType } from "@/interfaces/upsellPage";
import EditImage from "@/app/_components/edit-image";

const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"]
});

const roboto_condensed = Roboto_Condensed({
  weight: ["400", "700", "900"],
  subsets: ["latin"]
});

const roboto = Roboto({
  weight: ["400", "700", "900"],
  subsets: ["latin"]
});

const anton = Anton({
  weight: ["400"],
  subsets: ["latin"]
});

type Props = {
  info: UpsellPageType;
  setCurrentUpsell: (info: UpsellPageType) => void;
};

type DownsellProps = {
  info: UpsellPageType;
  setCurrentUpsell: (info: UpsellPageType) => void;
};

const templatesWithFooterMenu = ['oricle-exp-processing', 'wifi-exp-processing', 'denta-exp-processing'];

const DownsellPop = ({
  info,
  setCurrentUpsell,
}: DownsellProps) => {
  return (
    <>
      {" "}
      <div className={`fixed h-screen w-screen overflow-auto bg-black/75 py-2 md:px-4 md:py-6 flex flex-col items-center justify-center z-30 ${lato.className}`}>
        <div className="flex flex-col items-center w-full max-w-[95%] md:max-w-[650px] p-[40px_0_20px] bg-[#fff] border-[3px] border-dashed border-[#f06522] text-center">
          <h3 className="mb-[10px] text-[7vw] md:text-[26px] leading-[1.2] uppercase text-[rgba(47,47,47,1)] font-bold -tracking-[0.5px]">
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
          </h3>
          <p className="w-full max-w-[89%] md:max-w-[100%] mb-[15px] text-center text-[3vw] md:text-[16px] leading-[4vw] md:leading-[1.2] text-[#222] -tracking-[0.1vw] md:-tracking-[0.5px] font-bold">
            <input
              className="editable-input"
              onChange={(e) => {
                setCurrentUpsell({
                  ...info,
                  text3: e.target.value,
                });
              }}
              value={info.text3}
              placeholder="Text"
            />{" "}
            <input
              className="editable-input w-[70px]"
              onChange={(e) => {
                setCurrentUpsell({
                  ...info,
                  stickyprice2: e.target.value,
                });
              }}
              value={info.stickyprice2}
              placeholder="Price"
            />
            <input
              className="editable-input"
              onChange={(e) => {
                setCurrentUpsell({
                  ...info,
                  text5: e.target.value,
                });
              }}
              value={info.text5}
              placeholder="Text"
            />
          </p>
          <button className="h-[16vw] md:h-[70px] flex items-center justify-center w-[95%] max-w-[88%] md:max-w-[480px] bg-[linear-gradient(0deg,_#d77c00,_#ffa025)] rounded-[5px] text-[7vw] md:text-[34px] text-[#fff] tracking-[1px] text-shadow-[0px_4px_4px_rgba(0,0,0,0.18)] shadow-[0_1px_5px_rgba(58,84,214,0.4)] hover:bg-[linear-gradient(180deg,_#e17f00,_#ab6200)] cursor-pointer"
          >
            <input
              className="editable-input"
              onChange={(e) => {
                setCurrentUpsell({
                  ...info,
                  ctaText2: e.target.value,
                });
              }}
              value={info.ctaText2}
              placeholder="Button text"
            />
          </button>
          <div className="py-[20px]">
            <button className="bg-transparent border-none text-[2.8vw] md:text-[16px] text-[rgba(47,47,47,1)] font-bold -tracking-[0.5px]">
              <input
                className="editable-input"
                onChange={(e) => {
                  setCurrentUpsell({
                    ...info,
                    skipOfferText2: e.target.value,
                  });
                }}
                value={info.skipOfferText2}
                placeholder="Button text"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const UpsellTemplate11Edit = ({ info, setCurrentUpsell }: Props) => {
  const [showDownsell, setShowDownsell] = useState(false);

  const declineOffer1 = async () => {
    setShowDownsell(true);
  };

  return (
    <>
      {showDownsell && (
        <DownsellPop
          info={info}
          setCurrentUpsell={setCurrentUpsell}
        />
      )}

      {info.slug === 'barks-exp-processing' ? (
        <header className="flex justify-center mt-[12px] sm:mt-0 p-[15px_15px_10px] sm:p-[10px_15px_5px] bg-[#fff] border-b-[7px] border-b-[#00B0F0] shadow-[0_-3px_6px_3px_#EEE]">
          <EditImage
            className="max-w-[120px] sm:max-w-[157px]"
            src={info.logo}
            alt="Logo"
            width={157}
            height={48}
            post={info}
            setPost={setCurrentUpsell}
            field="logo"
          />
        </header>
      ) : null}

      <div className={`relative flex flex-col items-center w-full min-h-screen p-[10px] md:p-[30px_15px] text-[16px] leading-[1.5] text-[#212529] ${lato.className} overflow-hidden`}>
        <div className="flex flex-col items-center w-full max-w-[772px] p-[4vw_3vw] md:p-[28px_45px] bg-[#fff] border-[2px] border-[#5D778F]">

          <div className="flex w-full justify-center flex-col items-center text-center text-[#363636] uppercase">
            <h1 className={`mb-[4px] md:mb-[0px] text-[8.1vw] md:text-[64px] leading-[1] md:leading-[0.85] font-bold ${roboto_condensed.className} md:-tracking-[2.5px]`}>
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
              />
            </h1>
            <h2 className="mb-[12px] text-[5.4vw] md:text-[37px] leading-[1] -tracking-[1px] font-normal">
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
            </h2>
          </div>

          <div className="flex w-full mb-[12px] md:mb-[16px] border-[1px] border-[#000] rounded-[2px] text-[3.5vw] md:text-[18px] overflow-hidden">
            <div className="flex-1 h-[40px] flex items-center justify-center p-1 bg-[linear-gradient(180deg,_#fcfbfb,_#b5b6b6)] border-r-[1px] border-r-[#000] text-[#000]">
              1: Shipping Info
            </div>
            <div className="flex-1 h-[40px] flex items-center justify-center p-1 bg-[linear-gradient(180deg,_#fcfbfb,_#b5b6b6)] border-r-[1px] border-r-[#000] text-[#000]">
              2: Finish Order
            </div>
            <div className="flex-1 h-[40px] flex items-center justify-center p-1 bg-[#868686] text-[#fff] shadow-[inset_0px_0px_15px_-5px_#000]">
              3: Summary
            </div>
          </div>

          <div className="relative flex w-full flex-col items-center mb-[3vw] md:mb-[25px]">
            <div className={`z-20 absolute top-0 left-0 md:left-[auto] right-0 md:w-[330px] md:pr-[34px] ${roboto_condensed.className}`}>
              <div className="p-[4vw_3vw] md:p-[35px_0] text-[3.5vw] md:text-[14px] leading-[1.3]">
                <p className="">
                  <textarea
                    rows={3}
                    className="editable-input w-[300px]"
                    onChange={(e) => {
                      setCurrentUpsell({
                        ...info,
                        text1: e.target.value,
                      });
                    }}
                    value={info.text1}
                    placeholder="Text"
                  />
                </p>
                <div className={`flex w-full justify-end items-center md:items-end ${roboto.className}`}>
                  Add for just{" "}
                  <span className="text-[5vw] md:text-[25px] md:leading-[1]">
                    <input
                      className="editable-input w-[70px] ml-[10px]"
                      onChange={(e) => {
                        setCurrentUpsell({
                          ...info,
                          offerPrice: e.target.value,
                        });
                      }}
                      value={info.offerPrice}
                      placeholder="Price"
                    />
                  </span>
                </div>
              </div>
            </div>
            {/*BACkGROUND IMAGE DESKTOP*/}
            <EditImage
              className="hidden md:flex"
              src={info.image2}
              alt="background"
              width={900}
              height={440}
              post={info}
              setPost={setCurrentUpsell}
              field="image2"
            />
            {/*BACkGROUND IMAGE MOBILE*/}
            <EditImage
              className="md:hidden"
              src={info.image4}
              alt="background"
              width={767}
              height={863}
              post={info}
              setPost={setCurrentUpsell}
              field="image4"
            />
          </div>

          <div className="relative flex w-full flex-col items-center">
            {/*ARROW IMAGE DESKTOP*/}
            <div className="hidden md:flex absolute w-[190px] h-[245px] bottom-0 right-0 translate-x-[25px] translate-y-[10px]">
              <EditImage
                src={info.image3}
                alt="order now arrow"
                width={190}
                height={245}
                post={info}
                setPost={setCurrentUpsell}
                field="image3"
              />
            </div>
            {/*ARROW IMAGE MOBILE*/}
            <div className="md:hidden absolute bottom-0 right-0 -rotate-[32deg] translate-x-[4vw] -translate-y-[6vw]">
              <EditImage
                src={info.image3}
                alt="order now arrow"
                width={80}
                height={123}
                post={info}
                setPost={setCurrentUpsell}
                field="image3"
              />
            </div>

            <button className={`h-[16vw] md:h-[100px] flex items-center justify-center gap-[10px] w-full max-w-[500px] m-[auto] md:pr-[20px] bg-[linear-gradient(180deg,_#ffa025,_#d77c00)] rounded-[5px] text-[8vw] sm:text-[42px] text-[#fff] tracking-[1px] uppercase text-shadow-[1px_2px_7px_rgba(0,0,0,0.22)] shadow-[1px_2px_3px_rgba(0,0,0 0.22)] hover:bg-[linear-gradient(180deg,_#e17f00,_#ab6200)] cursor-pointer ${anton.className}`}>
              <Image
                src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/22693ce4-10ea-438b-8e5d-f862193a6900/public"
                width={31}
                height={44}
                alt="arrow"
                className="w-[6vw] md:w-[25px]"
              />
              <input
                className="editable-input w-[300px]"
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
          </div>
        </div>

        <div className="flex w-full justify-center items-center py-[10px]">
          <div className="relative">
            <input
              className="editable-input absolute left-[20px] top-[16px] w-[180px] cursor-text"
              onChange={(e) => {
                setCurrentUpsell({
                  ...info,
                  skipOfferText1: e.target.value,
                });
              }}
              value={info.skipOfferText1}
              placeholder="Button text"
            />
            <button
              className="w-[220px] h-[60px] border-2 border-yellow-500 cursor-pointer border-dashed bg-transparent text-[3vw] md:text-[15px] text-[#000] tracking-[0.2px] underline"
              onClick={declineOffer1}
            ></button>
          </div>
        </div>

        <footer className="flex flex-col items-center gap-[10px] py-[2vw] md:py-[20px] text-[3vw] md:text-[12px] text-center">
          {templatesWithFooterMenu.includes(info.slug) && (
            <nav>
              <ul className="flex flex-wrap justify-center gap-[10px] py-[5px] md:py-[0] text-[13px]">
                <li><a href="#" className="hover:underline cursor-pointer">Terms and Conditions</a></li>
                <li><a href="#" className="hover:underline cursor-pointer">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline cursor-pointer">Contact Us</a></li>
                <li><a href="#" className="hover:underline cursor-pointer">Shipping and Returns</a></li>
                <li><a href="#" className="hover:underline cursor-pointer">Become an Affiliate</a></li>
              </ul>
            </nav>
          )}
          <p className="flex items-center justify-center text-[12px] leading-[15px] text-[#222]">
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
              placeholder="Product"
            />
            {" "}
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
            height={25}
            alt="DMCA protected"
          />
        </footer>
      </div>
    </>
  );
};

export default UpsellTemplate11Edit;