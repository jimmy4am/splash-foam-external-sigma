import React from "react";
import Image from "next/image";

import {SalesPageType} from "@/interfaces/salesPage";
import AppRating from "@/app/_components/sales/sales-5/_components/app-rating";
import BuyButton from "@/app/_components/sales/sales-5/_components/buy-button";
import SectionHeading from "@/app/_components/sales/sales-5/_components/section-heading";

type Props = {
  info: SalesPageType;
};

const ListItem = ({ text }: { text: string }) => (
  <li className="flex items-center gap-[8px] text-[16px] md:text-[17px] lg:text-[18px] leading-[22px] md:leading-[25px] lg:leading-[24px] text-[#00]">
    <Image
      className="flex-[0_0_14px] md:flex-[0_0_16px] max-w-[14px] md:max-w-[14px]"
      src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/edbd0fe4-8134-491d-5deb-d589c7ced300/public"
      width={32}
      height={24}
      alt="Check icon"
    />
    {text}
  </li>
)

const ImageItem = ({ image }: { image: string }) => (
  <Image
    src={image}
    width={90}
    height={90}
    alt="Image"
  />
)

const SalesHero = ({ info }: Props) => {
  return (
    <section className="p-[0_0_25px] md:p-[40px_0] lg:p-[50px_0_60px] bg-[#f6f6f6]">
      <div className="w-full max-w-[1200px] mx-[auto] px-[15px]">
        <div className="flex flex-col md:flex-row-reverse md:justify-between md:items-start gap-[20px] md:gap-0">
          <div className="md:flex-[0_0_41%] lg:flex-[0_0_45%] -mx-[15px] md:mx-0">
            <video className="md:h-[410px] lg:h-[430px] xl:h-[470px] md:rounded-[10px] object-cover" playsInline autoPlay loop muted width="100%" height="auto">
              <source src="/images/template-5/hero-vdo.mp4" type="video/mp4"/>
            </video>
          </div>
          <div className="md:flex-[0_0_56%] lg:flex-[0_0_52%] xl:flex-[0_0_50%]">
            <div className="flex items-center gap-[5px] mb-[10px] text-[13px] md:text-[15px] lg:text-[17px] leading-[1] text-[#000] font-semibold">
              <AppRating />
              <p>Over 25,000+ Pairs Sold</p>
            </div>

            <SectionHeading
              title1={info.h1_top}
              title2={info.h1_bot}
              classes="!text-left !items-start mb-[12px]"
            />
            
            <div className="flex gap-[10px] mb-[15px] p-[10px_8px_8px] md:p-[10px_8px] lg:p-[10px] bg-[#efefef] text-[12px] md:text-[14px] lg:text-[15px] leading-[1] text-[#000] font-medium tracking-[0.3px]">
              <div className="flex items-center gap-[5px]">
                <span className="breath w-[14px] h-[14px] bg-[#12cd1a] border-[4px] border-[#b1e9c1] rounded-[50%]"></span>
                <p>Sale: Live For 24 Hours</p>
              </div>
              <span>|</span>
              <div className="flex items-center gap-[5px]">
                <Image
                  className="rotate w-[10px]"
                  src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/5ad0f27e-a972-4bc2-0b68-8bb5f8e4eb00/public"
                  width={20}
                  height={24}
                  alt="Hourglass icon"
                />
                Stock:
                <span className="text-[#f00] uppercase">low</span>
                <div className="flex gap-[2px]">
                  <span className="fade w-[9px] md:w-[12px] h-[9px] md:h-[12px] bg-[#f80000] border-[1.5px] border-[#505050]"></span>
                  <span className="w-[9px] md:w-[12px] h-[9px] md:h-[12px] bg-[#fff] border-[1.5px] border-[#505050]"></span>
                  <span className="w-[9px] md:w-[12px] h-[9px] md:h-[12px] bg-[#fff] border-[1.5px] border-[#505050]"></span>
                  <span className="w-[9px] md:w-[12px] h-[9px] md:h-[12px] bg-[#fff] border-[1.5px] border-[#505050]"></span>
                  <span className="w-[9px] md:w-[12px] h-[9px] md:h-[12px] bg-[#fff] border-[1.5px] border-[#505050]"></span>
                </div>
              </div>
            </div>

            <ul className="flex flex-col gap-[10px] mb-[20px] lg:mb-[25px]">
              <ListItem text={info.header.pro1} />
              <ListItem text={info.header.pro2} />
              <ListItem text={info.header.pro3} />
              <ListItem text={info.header.pro4} />
              <ListItem text={info.header.pro5} />
            </ul>

            <div className="w-full max-w-[402px]">
              <BuyButton info={info}/>
            </div>

            <div className="md:hidden mt-[25px] text-center">
              <div className="grid grid-cols-4 gap-[10px] mb-[20px]">
                <ImageItem image={info.header.image1} />
                <ImageItem image={info.header.image2} />
                <ImageItem image={info.header.image3} />
                <ImageItem image={info.header.image4} />
                <ImageItem image={info.header.image5} />
                <ImageItem image={info.header.image6} />
                <ImageItem image={info.header.image7} />
                <ImageItem image={info.header.image8} />
              </div>
              <p className="mb-[10px] text-[20px] leading-[24px] font-extrabold text-[#000]">Join Over 20,000 People</p>
              <p className="px-[50px] text-[14px] leading-[20px] text-[#000]">Lorem quis bibendum auctor, nisi elit consequat ipsum sagittis.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SalesHero;