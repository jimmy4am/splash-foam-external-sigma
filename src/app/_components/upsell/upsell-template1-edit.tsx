"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

import { UpsellPageType } from "@/interfaces/upsellPage";
import { siteProduct } from "@/lib/site-info";
import EditImage from "@/app/_components/edit-image";

const poppins = Poppins({
  weight: ["100", "300", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

type Props = {
  info: UpsellPageType;
  setCurrentUpsell: (info: UpsellPageType) => void;
};

type YellowBoxProps = Props & {
  showSkipOffer: boolean;
  declineOffer?: () => void;
};

const UpsellHeaderEdit = ({ info, setCurrentUpsell }: Props) => {
  return (
    <div className="flex w-full bg-[#224f34] justify-center">
      <div className="flex w-full max-w-[1200px] flex-col items-center px-4 text-center">
        <EditImage
          className="mt-6 mb-2 md:mb-6 max-w-[120px] sm:max-w-[200px] lg:max-w-none"
          src={info.logo}
          alt={siteProduct}
          width={280}
          height={130}
          post={info}
          setPost={setCurrentUpsell}
          field="logo"
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

const YellowBoxEdit = ({
  info,
  setCurrentUpsell,
  showSkipOffer,
  declineOffer,
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
              <input
                className="editable-input w-[100px]"
                onChange={(e) => {
                  setCurrentUpsell({
                    ...info,
                    savings1: e.target.value,
                  });
                }}
                value={info.savings1}
                placeholder="Price"
              />
            </span>
          </h4>
          <p className="text-[24px] font-[500]">
            <input
              className="editable-input"
              onChange={(e) => {
                setCurrentUpsell({
                  ...info,
                  text4: e.target.value,
                });
              }}
              value={info.text4}
              placeholder="Text"
            />{" "}
            <span className="text-[40px]">
              <input
                className="editable-input w-[140px]"
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
          </p>
          <h5 className="leading-tight text-[22px] md:text-[40px] font-[300] uppercase text-[#a1a1a1]">
            One Time Fee <br /> No Subscription
          </h5>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center mt-4">
        <button className="bg-[#FFE24F] rounded-lg text-[#003FE2] border-[#003FE2] border-[4px] px-2 sm:px-6 py-2 text-[20px] sm:text-[28px] lg:text-[36px] font-[500] mt-8 hover:scale-105 transition-all">
          {info.ctaText1}
        </button>

        <button className="bg-transparent border-none underline mt-4 text-[17px] md:text-[20px] max-w-[900px] text-[#003fe2]">
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

const DownsellYellowBoxEdit = ({
  info,
  setCurrentUpsell,
  showSkipOffer,
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
              <input
                className="editable-input w-[50px]"
                onChange={(e) => {
                  setCurrentUpsell({
                    ...info,
                    savings2: e.target.value,
                  });
                }}
                value={info.savings2}
                placeholder="Price"
              />
            </span>
          </h4>
          <p className="text-[24px] font-[500]">
            <input
              className="editable-input"
              onChange={(e) => {
                setCurrentUpsell({
                  ...info,
                  text6: e.target.value,
                });
              }}
              value={info.text6}
              placeholder="Text"
            />
            <span className="text-[40px]">
              <input
                className="editable-input w-[140px]"
                onChange={(e) => {
                  setCurrentUpsell({
                    ...info,
                    text7: e.target.value,
                  });
                }}
                value={info.text7}
                placeholder="Price"
              />
            </span>
          </p>
          <h5 className="leading-tight text-[22px] md:text-[40px] font-[300] uppercase text-[#a1a1a1]">
            One Time Fee <br /> No Subscription
          </h5>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center mt-4">
        <button className="bg-[#FFE24F] rounded-lg text-[#003FE2] border-[#003FE2] border-[4px] px-2 sm:px-6 py-2 text-[20px] sm:text-[28px] lg:text-[36px] font-[500] mt-8 hover:scale-105 transition-all">
          {info.ctaText1}
        </button>

        <button className="bg-transparent border-none underline mt-4 text-[17px] md:text-[20px] max-w-[900px] text-[#003fe2]">
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
          <button className="bg-transparent border-none  mt-4 text-[16px]   max-w-[900px] text-[#272727] cursor-default ">
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

const DownsellPopEdit = ({
  info,
  setCurrentUpsell,
}: Props) => {
  return (
    <>
      <div className="fixed h-screen w-screen overflow-auto bg-black/60 px-2 py-2 md:px-4 md:py-6 flex flex-col items-center z-10">
        <div className="flex flex-col items-center max-w-[1140px]">
          <UpsellHeaderEdit info={info} setCurrentUpsell={setCurrentUpsell} />

          <div className="flex w-full bg-white justify-center pb-6">
            <div className="flex w-full max-w-[1200px] flex-col items-center px-4">
              <div className="flex w-full flex-col items-center pt-6 ">
                <h1 className="leading-tight text-[25px] md:text-[40px] font-[500]">
                  <input
                    className="editable-input w-full"
                    onChange={(e) => {
                      setCurrentUpsell({
                        ...info,
                        title5: e.target.value,
                      });
                    }}
                    value={info.title5}
                    placeholder="Title"
                  />
                </h1>
                <div className="flex flex-col items-start">
                  {" "}
                  <p className="text-[18px] md:text-[24px] mt-4 font-[500] ">
                    <input
                      className="editable-input w-full"
                      onChange={(e) => {
                        setCurrentUpsell({
                          ...info,
                          title6: e.target.value,
                        });
                      }}
                      value={info.title6}
                      placeholder="Title"
                    />
                  </p>
                  <p className="text-[18px] md:text-[24px] mt-2">
                    <input
                      className="editable-input w-full"
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
                </div>
              </div>
              <div className="flex w-full mt-4 md:mt-12 flex-wrap">
                <div className="w-full justify-center md:w-[40%] md:justify-start p-2 mb-4 md:mb-0">
                  <EditImage
                    className="md:mt-2 object-scale-down w-full"
                    src={info.image3}
                    alt={siteProduct}
                    width={405}
                    height={144}
                    post={info}
                    setPost={setCurrentUpsell}
                    field="image3"
                  />
                </div>
                <div className="w-full md:w-[60%] flex flex-col items-start justify-start px-2 md:px-12">
                  <h1 className="leading-tight text-[25px] md:text-[40px] font-[500] text-center md:text-left w-full">
                    <input
                      className="editable-input w-full"
                      onChange={(e) => {
                        setCurrentUpsell({
                          ...info,
                          title7: e.target.value,
                        });
                      }}
                      value={info.title7}
                      placeholder="Title"
                    />
                    <br className="block md:hidden" />{" "}
                    <span className="text-[32px] md:text-[40px]">
                      <input
                        className="editable-input w-[130px]"
                        onChange={(e) => {
                          setCurrentUpsell({
                            ...info,
                            title8: e.target.value,
                          });
                        }}
                        value={info.title8}
                        placeholder="Price"
                      />
                    </span>
                  </h1>
                  <p className="text-[18px] md:text-[24px] mt-2 w-full uppercase text-center md:text-left">
                    Each Bag
                  </p>
                  <p className="text-[18px] md:text-[24px] mt-2 w-full text-center md:text-left">
                    Savings:{" "}
                    <input
                      className="editable-input w-[50px]"
                      onChange={(e) => {
                        setCurrentUpsell({
                          ...info,
                          savings2: e.target.value,
                        });
                      }}
                      value={info.savings2}
                      placeholder="Price"
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

              <button className="bg-[#FFE24F] rounded-lg text-[#003FE2] border-[#003FE2] border-[4px] px-2 sm:px-6 py-2 text-[24px] sm:text-[32px] lg:text-[43px] font-[500] mt-8 hover:scale-105 transition-all">
                {info.ctaText1}
              </button>

              <button className="bg-transparent border-none underline text-[#272727] mt-12 text-[16px] cursor-default">
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
              <DownsellYellowBoxEdit
                info={info}
                setCurrentUpsell={setCurrentUpsell}
                showSkipOffer={true}
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
              // disabled={mins === 0 && secs === 0}
            >
              {info.ctaText1}
            </button>
            <button className="bg-transparent border-none  mt-4 text-[11px] md:text-[12px] pb-2 max-w-[900px] text-[#a1a1a1] cursor-default">
              {info.skipOfferText1}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const UpsellBodyEdit = ({ info, setCurrentUpsell }: Props) => {
  const [showDownsell, setShowDownsell] = useState(false);

  const declineOffer1 = () => {
    setShowDownsell(true);
  };

  return (
    <>
      {showDownsell && (
        <DownsellPopEdit
          info={info}
          setCurrentUpsell={setCurrentUpsell}
        />
      )}
      <div className="flex w-full bg-white justify-center">
        <div className="flex w-full max-w-[1200px] flex-col items-center px-4">
          <div className="flex w-full mt-4 md:mt-12 flex-wrap">
            <div className="w-full justify-center md:w-[40%] md:justify-start p-2 mb-4 md:mb-0">
              <EditImage
                className="md:mt-2 object-scale-down w-full"
                src={info.image1}
                alt={siteProduct}
                width={405}
                height={144}
                post={info}
                setPost={setCurrentUpsell}
                field="image1"
              />
            </div>
            <div className="w-full md:w-[60%] flex flex-col items-start justify-start px-2 md:px-12">
              <h1 className="leading-tight text-[25px] md:text-[40px] font-[500]">
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
                <input
                  className="editable-input w-[135px]"
                  onChange={(e) => {
                    setCurrentUpsell({
                      ...info,
                      title8: e.target.value,
                    });
                  }}
                  value={info.title8}
                  placeholder="Price"
                />{" "}
                <input
                  className="editable-input w-full"
                  onChange={(e) => {
                    setCurrentUpsell({
                      ...info,
                      title9: e.target.value,
                    });
                  }}
                  value={info.title9}
                  placeholder="Title"
                />
              </h1>
              <p className="text-[18px] md:text-[24px] mt-4 w-full md:w-[85%]">
                This is the <span className="font-[500]">biggest discount</span>{" "}
                we've ever offered! And it's a{" "}
                <span className="font-[500]">limited time offer</span>. So take
                advantage of this while you can and
              </p>
            </div>
          </div>

          <button className="bg-[#FFE24F] rounded-lg text-[#003FE2] border-[#003FE2] border-[4px] px-2 sm:px-6 py-2 text-[24px] sm:text-[32px] lg:text-[43px] font-[500] mt-8 hover:scale-105 transition-all">
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

          <div className="relative mt-12">
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
              className="w-[220px] h-[60px] border-2 border-yellow-500 cursor-pointer border-dashed bg-transparent underline text-[#272727] text-[16px]"
              onClick={declineOffer1}
            ></button>
          </div>

          <div className="bg-[#f5f5f5] rounded-md p-6 flex flex-col items-center w-full mt-20">
            <h4 className="flex items-center text-[#007953] text-[26px] md:text-[34px] font-[500] text-center">
              ✓ Only Available On This Page!
            </h4>
            <p className="text-[20px]  sm:px-6 mt-4 mb-4">
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
              is not sold in stores or anywhere else online and
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
          <YellowBoxEdit
            info={info}
            setCurrentUpsell={setCurrentUpsell}
            showSkipOffer={true}
            declineOffer={declineOffer1}
          />
          <p className="text-[#e7303f] mt-20 text-[20px] text-center mb-4 md:mb-0">
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
          </p>
          <h5 className="text-[26px] md:text-[40px] font-[500] text-center ">
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
          </h5>
          <div className="flex w-full mt-4 flex-wrap">
            <div className="w-full md:w-1/5">
              <EditImage
                className="mt-6 w-full"
                src={info.image2}
                alt={siteProduct}
                width={250}
                height={170}
                post={info}
                setPost={setCurrentUpsell}
                field="image2"
              />
            </div>
            <div className="w-full md:w-4/5 flex flex-col px-6">
              <textarea
                rows={7}
                className="editable-input w-full"
                onChange={(e) => {
                  setCurrentUpsell({
                    ...info,
                    text1: e.target.value,
                  });
                }}
                value={info.text1}
                placeholder="Text"
              />
            </div>
          </div>
          <YellowBoxEdit
            info={info}
            setCurrentUpsell={setCurrentUpsell}
            showSkipOffer={false}
            declineOffer={declineOffer1}
          />

          <button
            className="bg-transparent border-none  max-w-[900px] text-[#999797] text-[16px] mt-8 cursor-default"
            onClick={declineOffer1}
          >
            No thank you, I would not like to get this exclusive discount.888888
          </button>
          <p className="text-[20px] mt-12">
            <input
              className="editable-input w-full"
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
          <h5 className="text-[26px] md:text-[40px] text-center w-full mt-8 font-[500]">
            <input
              className="editable-input w-full"
              onChange={(e) => {
                setCurrentUpsell({
                  ...info,
                  title4: e.target.value,
                });
              }}
              value={info.title4}
              placeholder="Text"
            />
          </h5>
          <textarea
            rows={7}
            className="editable-input w-full"
            onChange={(e) => {
              setCurrentUpsell({
                ...info,
                text3: e.target.value,
              });
            }}
            value={info.text3}
            placeholder="Text"
          />
          <h5 className="text-[26px] md:text-[40px] text-center w-full mt-8 font-[500]">
            Just Click The Button Below <br className="hidden sm:block" /> And
            Upgrade Your Order!
          </h5>
          <YellowBoxEdit
            info={info}
            setCurrentUpsell={setCurrentUpsell}
            showSkipOffer={false}
            declineOffer={declineOffer1}
          />
        </div>
      </div>

      {info.stickyCta && !showDownsell && (
        <div className="fixed bottom-0 left-0 w-full bg-[#00527]  text-center p-2 z-40 bg-white">
          <div className=" flex flex-col w-full items-center md:px-4">
            <button
              className="bg-[#FFE24F] rounded-lg text-[#003FE2] border-[#003FE2] border-[4px] px-2 sm:px-6 py-2 text-[24px] sm:text-[32px] lg:text-[43px] font-[500] mt-2 hover:scale-105 transition-all"
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

const UpsellFooterEdit = ({ info }: { info: UpsellPageType }) => {
  return (
    <div className="bg-[#ccc] flex justify-center px-6 py-4 w-full mt-20 text-center">
      Copyright {new Date().getFullYear()} © {info.product}{" "}
      <span className="hidden md:block px-2">|</span>
      <br className="md:hidden" /> All Rights Reserved
    </div>
  );
};

const UpsellTemplate1Edit = ({ info, setCurrentUpsell }: Props) => {
  return (
    <div
      className={`flex w-full flex-col items-center ${
        poppins.className
      } font-[300] ${info.stickyCta && "mb-40"}`}
    >
      <UpsellHeaderEdit info={info} setCurrentUpsell={setCurrentUpsell} />
      <UpsellBodyEdit info={info} setCurrentUpsell={setCurrentUpsell} />
      <UpsellFooterEdit info={info} />
    </div>
  );
};

export default UpsellTemplate1Edit;