"use client";

import React from "react";
import Image from "next/image";
import { Lato } from "next/font/google";

import { siteProduct } from "@/lib/site-info";
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

type ListItemProps = Props & {
  icon: string;
  iconField: any;
  text: string;
  textField: string;
}

type OneTimePurchaseDetailsEditProps = {
  info: UpsellPageType;
  setCurrentUpsell: (info: UpsellPageType) => void;
  data: OtpDetailsType[];
}

type OtpDetailsType = { amount: string, price: number, priceField: string | string[] };

type slug = typeof templatesWithOtpDetails[number];

const templatesWithOtpDetails = ['glab-brush', 'denta-breath-otp'] as const;

const getOtpDetailsData = (info: UpsellPageType): OtpDetailsType[] => ([
  {
    amount: '1',
    price: Number(info.stickyprice5),
    priceField: 'stickyprice5',
  },
  ...(
    Number(info.stickyprice6)/2 === Number(info.stickyprice7)/3 ?
      [{
        amount: '2-3',
        price: Number(info.stickyprice6)/2,
        priceField: ['stickyprice6', 'stickyprice7'],
      }] :
      [{
        amount: '2',
        price: Number(info.stickyprice6)/2,
        priceField: 'stickyprice6',
      },{
        amount: '3',
        price: Number(info.stickyprice7)/3,
        priceField: 'stickyprice7',
      }]
  ),
  {
    amount: '4',
    price: Number(info.stickyprice8)/4,
    priceField: 'stickyprice8',
  },
]);

const OneTimePurchaseDetailsEdit = ({ info, setCurrentUpsell, data }: OneTimePurchaseDetailsEditProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: string | string[]) => {
    if (typeof field === 'string') {
      setCurrentUpsell({
        ...info,
        [field]: e.target.value,
      });
    } else {
      field?.forEach(el => {
        setCurrentUpsell({
          ...info,
          [el]: e.target.value,
        })
      })
    }
  };

  return (
    <div className="flex items-center justify-center gap-[3px] mb-[8px] leading-[26px] text-[#000] font-bold">
      {data.map((item, idx) => (
        <>
          <div className="flex items-center">
            <span className="mr-[6px] text-[#DC5B5B]">{item.amount}:</span>
            <input
              className="editable-input w-[60px] mx-[5px]"
              onChange={(e) => handleChange(e, item.priceField)}
              value={item.price}
              placeholder="price"
            />
            each
          </div>
          {idx + 1 < data.length && '|'}
        </>
      ))}
    </div>
  );
}

const ListItemEdit = ({ info, setCurrentUpsell, icon, iconField, text, textField }: ListItemProps) => (
  <li className="flex items-start gap-[2vw] md:gap-[10px] md:pr-[3vw] lg:pr-[0] text-[4vw] md:text-[1.6vw] lg:text-[18px] leading-[1.3] md:leading-[1.8vw] lg:leading-[20px] -tracking-[0.05vw] md:tracking-[0] font-bold">
    <EditImage
      className="flex-[0_0_21px]"
      src={icon}
      alt="List marker"
      width={25}
      height={25}
      post={info}
      setPost={setCurrentUpsell}
      field={iconField}
    />
    <input
      className="editable-input w-full"
      onChange={(e) => {
        setCurrentUpsell({
          ...info,
          [textField]: e.target.value,
        });
      }}
      value={text}
      placeholder={textField}
    />
  </li>
)

const UpsellTemplate13Edit = ({ info, setCurrentUpsell }: Props) => {
  return (
    <div className={`p-[2vw] md:p-[40px_0_0] text-[14px] leading-[1] ${info.slug === 'denta-breath-otp' ? 'bg-[#f6fbfe]' : 'bg-[linear-gradient(0deg,_rgba(246,170,162,0.1),_rgba(246,170,162,0.1))]'} ${lato.className}`}>
      <div className="md:w-[98%] max-w-[1024px] m-[0_auto]">
        <div className="md:mb-[33px] bg-[#fff] md:border-[1px] md:border-[#5D778F]">
          {/*STEPs*/}
          <ul className="flex border-[0.1vw] border-[#5D778F] md:border-0 text-center text-[2.2vw] md:text-[18px] text-[#A7A7A7] uppercase tracking-[0.5px]">
            <li className="flex-1 p-[3vw_0] md:p-[10px] bg-[#DCDCDC]">Step 1 : Order page</li>
            <li className={`flex-1 p-[3vw_0] md:p-[10px] ${info.slug === 'denta-breath-otp' ? 'bg-[#0083D2]' : 'bg-[#F6AAA2]'} text-[#fff]`}>Step 2 : Special offer</li>
            <li className="flex-1 p-[3vw_0] md:p-[10px] bg-[#DCDCDC]">Step 3 : Confirmation</li>
          </ul>

          <div className="flex w-full flex-col items-center">
            <div className="p-[6vw_6vw_0] md:p-[27px_16px_0] text-center font-bold italic">
              <h5 className="mb-[2.5vw] md:mb-[10px] text-[#DC5B5B] text-[4.9vw] md:text-[23px] leading-[6vw] md:leading-[26px]">
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
              </h5>
              <h1 className="mb-[5vw] md:mb-[0] text-[4.6vw] md:text-[23px] leading-[5.1vw] md:leading-[26px] text-[#606060]">
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
                  />!</span>
              </h1>
            </div>

            <div className="relative md:flex md:items-center md:justify-between md:m-[30px] p-[2.35vw] md:p-[10px]">
              {/*TODO: TBD! issue with z-index on hover  */}
              <Image
                src={info.image2!}
                fill
                className="w-full absolute z-0"
                alt="background"
              />
              <div className="relative flex justify-center w-full md:w-[39%] lg:w-[43%] mb-[4vw] md:mb-[0]">
                <EditImage
                  src={info.image1}
                  alt={siteProduct}
                  width={393}
                  height={382}
                  post={info}
                  setPost={setCurrentUpsell}
                  field="image1"
                />
              </div>

                <ul className="relative md:w-[53%] flex flex-col gap-[5vw] md:gap-[2vw] lg:gap-[20px] md:mr-[10px] md:pr-[3%]">
                  <ListItemEdit
                    info={info}
                    setCurrentUpsell={setCurrentUpsell}
                    icon={info.image3}
                    iconField="image3"
                    text={info.text1}
                    textField="text1" />
                  <ListItemEdit
                    info={info}
                    setCurrentUpsell={setCurrentUpsell}
                    icon={info.image3}
                    iconField="image3"
                    text={info.text2}
                    textField="text2" />
                  <ListItemEdit
                    info={info}
                    setCurrentUpsell={setCurrentUpsell}
                    icon={info.image3}
                    iconField="image3"
                    text={info.text3}
                    textField="text3" />
                  <ListItemEdit
                    info={info}
                    setCurrentUpsell={setCurrentUpsell}
                    icon={info.image3}
                    iconField="image3"
                    text={info.text4}
                    textField="text4" />
                  <ListItemEdit
                    info={info}
                    setCurrentUpsell={setCurrentUpsell}
                    icon={info.image3}
                    iconField="image3"
                    text={info.text5}
                    textField="text5" />
                </ul>
            </div>

            <div className="mt-[4vw] mb-[4vw] md:mt-[0] md:mb-[25px]">
              {templatesWithOtpDetails.includes(info.slug as slug) && <OneTimePurchaseDetailsEdit info={info} setCurrentUpsell={setCurrentUpsell} data={getOtpDetailsData(info)} />}

              <select
                name="productId"
                className={`flex w-full m-[5px_auto] md:m-[0_auto] p-[5px] bg-[#E9E9ED] border-[2px] border-[#c5c5c5] text-[16px] leading-[18px] font-bold bg-[url(https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/c9b2ee84-d091-4e97-4e97-9a70180eda00/public)] bg-no-repeat bg-[auto_10px] bg-[95%_50%]`}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>

            <div className="w-full flex flex-col items-center pb-[7vw] md:pb-[50px]">
              <button className="w-full max-w-[95%] md:max-w-[500px] flex items-end mb-[35px] p-[4vw_1vw] md:p-[25px_33px] bg-[#4AC27E] text-[4vw] md:text-[17px] leading-[6.5vw] md:leading-[26px] text-[#fff] font-bold tracking-[0.5px] uppercase shadow-[0vw_0.1vw_0.4vw_0.1vw_rgba(58,84,214,0.40)] md:shadow-[0px_1px_4px_1px_rgba(58,84,214,0.40)]">
                <span className="w-1/3 md:text-[26px]">
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
                </span>{" "}
                <input
                  className="editable-input w-full"
                  onChange={(e) => {
                    setCurrentUpsell({
                      ...info,
                      ctaText2: e.target.value,
                    });
                  }}
                  value={info.ctaText2}
                  placeholder="ctaText2"
                />
              </button>
              <button className="w-full max-w-[95%] md:max-w-[500px] text-[3vw] md:text-[14px] text-[#999]">
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

        <footer className="flex flex-col items-center gap-[15px] py-[2vw] md:py-[20px] text-[3vw] md:text-[14px] leading-[16px]">
          {info.slug === 'denta-breath-otp' && (
            <nav>
              <ul className="flex flex-wrap justify-center gap-[10px] py-[5px] md:py-[0] text-[13px]">
                <li><a href="#" className="hover:underline cursor-pointer">Terms and Conditions</a></li>
                <li><a href="#" className="hover:underline cursor-pointer">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline cursor-pointer">Contact Us</a></li>
                <li><a href="#" className="hover:underline cursor-pointer">Shipping and Returns</a></li>
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
              placeholder="product"
            />{" "}
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
        </footer>
      </div>
    </div>
  );
};

export default UpsellTemplate13Edit;