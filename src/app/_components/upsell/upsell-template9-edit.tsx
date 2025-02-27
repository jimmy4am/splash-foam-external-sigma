"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { Lato } from "next/font/google";

import { UpsellPageType } from "@/interfaces/upsellPage";
import EditImage from "@/app/_components/edit-image";

const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"]
});

type Props = {
  info: UpsellPageType;
  setCurrentUpsell: (info: UpsellPageType) => void;
};

type ListItemType = 'success' | 'error';

const templatesWithPaymentIcons = ['glab-warranty', 'barks-warranty', 'oricle-warranty', 'wifi-warranty', 'denta-warranty', 'jet-warranty'];

const templatesWithHeader = ['glab-warranty', 'denta-warranty', 'jet-warranty'];

const ListItem = ({ type, children }: { type: ListItemType, children: React.ReactNode }) => {
  const urls: Record<ListItemType, { url: string, title: string }> = {
    success: {
      url: 'https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/15527918-3004-4ba5-4a57-cbe8badc2e00/public',
      title: 'Check icon'
    } ,
    error: {
      url: 'https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/b0ee0832-5467-4132-8224-af66251d0f00/public',
      title: 'Cross icon'
    }
  }

  return (
    <div className="flex items-center gap-[15px] md:gap-[20px] py-[12px] text-[18px] md:text-[20px]">
      <Image
        src={urls[type].url}
        width={41}
        height={41}
        alt={urls[type].title}
        className="flex-[0_0_41px]"
      />
      <p className="flex-[1_1_auto]">{children}</p>
    </div>
  )
}

const UpsellTemplate9Edit = ({ info, setCurrentUpsell }: Props) => {
  const settings = {
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: true,
          slidesToShow:1,
          centerMode: true,
          infinite: true,
        }
      },
    ]
  }

  return (
    <>
      {templatesWithHeader.includes(info.slug) ? (
        <header className="flex justify-center p-[5px_15px] bg-[#fff] border-b-[7px] border-b-[#F8ABA3]">
          <a href="#">
            <EditImage
              className="max-w-[195px] md:max-w-[none] md:w-auto"
              src={info.logo}
              alt={info.product}
              width={292}
              height={41}
              post={info}
              setPost={setCurrentUpsell}
              field="logo"
            />
          </a>
        </header>
      ) : null}
      <div className={`pt-[35px] bg-[#f6fbfe] text-[20px] leading-[24px] ${lato.className}`}>
        <div className="max-w-[1150px] m-[0_auto] px-[15px]">
          <div className="bg-[#fff] md:border-[1px] md:border-[#5D778F]">
            {/*STEPs*/}
            <ul className="flex text-center text-[11px] sm:text-[14px] md:text-[18px] leading-[13px] sm:leading-[18px] md:leading-[22px] text-[#A7A7A7] uppercase">
              <li className="flex-1 py-[7px] bg-[#DCDCDC]">Step 1 : Order page</li>
              <li className="flex-1 py-[7px] bg-[#1481D6] text-[#fff]">Step 2 : Special offer</li>
              <li className="flex-1 py-[7px] bg-[#DCDCDC]">Step 3 : Confirmation</li>
            </ul>

            {/*BODY*/}
            <div className="p-[40px_20px_30px] md:p-[60px_30px_30px] xl:p-[60px_60px_30px]">

              <div className="md:flex md:justify-between">
                <div className="md:flex-[0_0_38%] mb-[25px] md:mb-0">
                  <EditImage
                    src={info.image1}
                    alt="Logo"
                    width={373}
                    height={378}
                    post={info}
                    setPost={setCurrentUpsell}
                    field="image1"
                  />
                </div>
                <div className="md:flex-[0_0_60%] flex flex-col gap-[15px] text-center md:text-left">
                  <h1 className="text-[40px] leading-[48px] font-bold">
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
                  <p>
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
                  <p className="font-bold">
                    <input
                      className="editable-input w-full"
                      onChange={(e) => {
                        setCurrentUpsell({
                          ...info,
                          title3: e.target.value,
                        });
                      }}
                      value={info.title3}
                      placeholder="Text"
                    />
                    <span className="text-[#AD161B]">
                      <input
                        className="editable-input w-[75px]"
                        onChange={(e) => {
                          setCurrentUpsell({
                            ...info,
                            offerPrice: e.target.value,
                          });
                        }}
                        value={info.offerPrice}
                        placeholder="Price"
                      />
                    </span>.
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
                  </p>
                  <p>
                    <textarea
                      rows={3}
                      className="editable-input w-full"
                      onChange={(e) => {
                        setCurrentUpsell({
                          ...info,
                          title5: e.target.value,
                        });
                      }}
                      value={info.title5}
                      placeholder="Text"
                    />
                  </p>
                  <p>
                    <textarea
                      rows={3}
                      className="editable-input w-full"
                      onChange={(e) => {
                        setCurrentUpsell({
                          ...info,
                          title6: e.target.value,
                        });
                      }}
                      value={info.title6}
                      placeholder="Text"
                    />
                  </p>
                  <button className="w-full mt-[30px] p-[18px_10px] md:p-[22px_10px] bg-[#2CB548] rounded-[4px] text-[15px] md:text-[22px] leading-[18px] md:leading-[28px] text-[#fff] uppercase shadow-[0_3px_0_0_rgba(1,80,12,1)] hover:opacity-80 transition-all duration-250 ease-in-out">
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
                    />{" "}
                    <input
                      className="editable-input w-[80px]"
                      onChange={(e) => {
                        setCurrentUpsell({
                          ...info,
                          offerPrice: e.target.value,
                        });
                      }}
                      value={info.offerPrice}
                      placeholder="Price"
                    />
                  </button>
                </div>
              </div>

              <div className="md:w-full -mx-[35px] md:mx-[auto] pt-[50px] lg:p-[50px_30px_0]">
                <Slider className="upsell-slider slider" {...settings}>
                  {/*CARD*/}
                  <div className="rounded-[30px] overflow-hidden min-w-[0px] bg-[#f8f8f8]">
                    {/*CARD HEADING*/}
                    <div className="flex items-center justify-center gap-[5px] p-[12px_25px] bg-[#828482] text-[20px] leading-[36px] text-[#fff]">
                      <input
                        className="editable-input w-full"
                        onChange={(e) => {
                          setCurrentUpsell({
                            ...info,
                            title8: e.target.value,
                          });
                        }}
                        value={info.title8}
                        placeholder="Title"
                      />
                    </div>

                    {/*CARD BODY*/}
                    <div className="p-[15px_12px_35px] md:p-[15px_25px_35px]">
                      <ListItem type="success">{info.text1}</ListItem>

                      <p className="py-[12px] text-center font-black uppercase">{info.title10}:</p>

                      <div>
                        <ListItem type="error">NO {info.text2}</ListItem>
                        <ListItem type="error">NO {info.text3}</ListItem>
                        <ListItem type="error">NO {info.text4}</ListItem>
                        <ListItem type="error">NO {info.text5}</ListItem>
                        <ListItem type="error">NO {info.text6}</ListItem>
                      </div>

                      <div className="mt-[15px] px-[25px]">
                        <button className="w-full p-[6px_10px] bg-[transparent] border-[2px] border-[#8F8F8F] rounded-[4px] text-[15px] md:text-[22px] leading-[18px] md:leading-[28px] text-[#8F8F8F] uppercase hover:opacity-80 transition-all duration-250 ease-in-out">
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
                  </div>

                  {/*CARD*/}
                  <div className="rounded-[30px] overflow-hidden min-w-[0px] bg-[#F4EEEE] shadow-[4px_4px_4px_0_rgba(0,0,0,0.30)]">
                    {/*CARD HEADING*/}
                    <div className="flex items-center justify-center gap-[5px] p-[12px_25px] bg-[#2CB548] text-[20px] leading-[36px] text-[#fff]">
                      <Image
                        src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/c72a436a-588f-475d-5ce4-841cb098dc00/public"
                        width={31}
                        height={36}
                        alt="Warranty Icon"
                      />
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
                      <Image
                        src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/c72a436a-588f-475d-5ce4-841cb098dc00/public"
                        width={31}
                        height={36}
                        alt="Warranty Icon"
                      />
                    </div>

                    {/*CARD BODY*/}
                    <div className="p-[15px_12px_35px] md:p-[15px_25px_35px]">
                      <ListItem type="success">
                        <input
                          className="editable-input w-full"
                          onChange={(e) => {
                            setCurrentUpsell({
                              ...info,
                              text1: e.target.value,
                            });
                          }}
                          value={info.text1}
                          placeholder="Text 1"
                        />
                      </ListItem>

                      <p className="py-[12px] text-center font-black uppercase">{info.title9}:</p>

                      <div>
                        <ListItem type="success">
                          <input
                            className="editable-input w-full"
                            onChange={(e) => {
                              setCurrentUpsell({
                                ...info,
                                text2: e.target.value,
                              });
                            }}
                            value={info.text2}
                            placeholder="Text 2"
                          />
                        </ListItem>
                        <ListItem type="success">
                          <input
                            className="editable-input w-full"
                            onChange={(e) => {
                              setCurrentUpsell({
                                ...info,
                                text3: e.target.value,
                              });
                            }}
                            value={info.text3}
                            placeholder="Text 3"
                          />
                        </ListItem>
                        <ListItem type="success">
                          <input
                            className="editable-input w-full"
                            onChange={(e) => {
                              setCurrentUpsell({
                                ...info,
                                text4: e.target.value,
                              });
                            }}
                            value={info.text4}
                            placeholder="Text 4"
                          />
                        </ListItem>
                        <ListItem type="success">
                          <input
                            className="editable-input w-full"
                            onChange={(e) => {
                              setCurrentUpsell({
                                ...info,
                                text5: e.target.value,
                              });
                            }}
                            value={info.text5}
                            placeholder="Text 5"
                          />
                        </ListItem>
                        <ListItem type="success">
                          <input
                            className="editable-input w-full"
                            onChange={(e) => {
                              setCurrentUpsell({
                                ...info,
                                text6: e.target.value,
                              });
                            }}
                            value={info.text6}
                            placeholder="Text 6"
                          />
                        </ListItem>
                      </div>

                      <div className="mt-[15px] px-[25px]">
                        <button className="w-full max-w-[450px] p-[18px_10px] md:p-[22px_10px] bg-[#2CB548] rounded-[4px] text-[15px] md:text-[22px] leading-[18px] md:leading-[28px] text-[#fff] uppercase shadow-[0_3px_0_0_rgba(1,80,12,1)] hover:opacity-80 transition-all duration-250 ease-in-out">
                          <input
                            className="editable-input w-[160px]"
                            onChange={(e) => {
                              setCurrentUpsell({
                                ...info,
                                ctaText1: e.target.value,
                              });
                            }}
                            value={info.ctaText1}
                            placeholder="Button text"
                          />{" "}
                          <input
                            className="editable-input w-[80px]"
                            onChange={(e) => {
                              setCurrentUpsell({
                                ...info,
                                offerPrice: e.target.value,
                              });
                            }}
                            value={info.offerPrice}
                            placeholder="Price"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>

        <footer className="flex flex-col justify-center items-center gap-[10px] p-[25px_15px] text-center text-[12px] leading-[15px] text-[#222]">
          <p className="flex">
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
              className="object-scale-down mx-[10px]"
            />
            All Rights Reserved
          </p>
          <p>Accepted Payments</p>
          <Image
            src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/e6c4e39d-5796-4506-8db9-141156085500/public"
            width={135}
            height={28}
            alt="DMCA Protected icon"
          />
        </footer>

        <div className="sticky left-0 right-0 bottom-0 flex flex-col items-center justify-center p-[20px_15px] bg-[#1D1D1D]">
          <button className="w-full max-w-[450px] p-[18px_10px] md:p-[22px_10px] bg-[#2CB548] rounded-[4px] text-[15px] md:text-[22px] leading-[18px] md:leading-[28px] text-[#fff] uppercase shadow-[0_3px_0_0_rgba(1,80,12,1)] hover:opacity-80 transition-all duration-250 ease-in-out">
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
            />{" "}
            <input
              className="editable-input w-[80px]"
              onChange={(e) => {
                setCurrentUpsell({
                  ...info,
                  offerPrice: e.target.value,
                });
              }}
              value={info.offerPrice}
              placeholder="Price"
            />
          </button>

          {templatesWithPaymentIcons.includes(info.slug) ? (
            <ul className="flex justify-center gap-[15px] mt-[20px]">
              <li>
                <Image
                  src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/6db9f844-557c-4dd8-ad66-583a1b60d300/public"
                  width={64}
                  height={32}
                  alt="Visa"
                />
              </li>
              <li>
                <Image
                  src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/656ca63a-96b6-46e4-26ce-b012350c1e00/public"
                  width={64}
                  height={32}
                  alt="Mastercard"
                />
              </li>
              <li>
                <Image
                  src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/88047a78-c36e-4f46-a982-ffd581cf6b00/public"
                  width={64}
                  height={32}
                  alt="American Express"
                />
              </li>
            </ul>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default UpsellTemplate9Edit;