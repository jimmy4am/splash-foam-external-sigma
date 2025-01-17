import React from "react";
import Image from "next/image";
import { Raleway } from "next/font/google";
import { SalesPageType } from "@/interfaces/salesPage";
import BuyButton from "./buy-button";

const raleway = Raleway({ subsets: ["latin"] });

type Props2 = {
  info: SalesPageType;
};

const FiveImageSplit = ({ info }: Props2) => {
  return (
    <div className="flex flex-col items-center w-full pb-6">
      <div className="flex flex-col w-full max-w-[1360px] items-center">
        <h4
          className={`text-center text-[26px] lg:text-[50px] font-bold text-[#0082c0] mt-8 px-6 lg:px-20 xl:px-36 ${raleway.className}`}
        >
          {info.fiveimagesplit.heading}
        </h4>
        <p className="text-center max-w-[1200px] px-6 text-[20px] pt-4 pb-6 ">
          {info.fiveimagesplit.subheading}
        </p>
        <div className="flex flex-wrap max-w-[800px] justify-center items-center w-full pb-4 lg:hidden">
          <div className="w-full flex justify-center p-2 pb-4">
            <Image
              src={info.fiveimagesplit.mobile1}
              alt={info.fiveimagesplit.text1}
              width={800}
              height={400}
              className="w-full object-cover max-w-[600px]"
            />
          </div>
          <div className="w-1/2 flex justify-center p-2 pb-4">
            <Image
              src={info.fiveimagesplit.mobile2}
              alt={info.fiveimagesplit.text2}
              width={200}
              height={200}
            />
          </div>
          <div className="w-1/2 flex justify-center p-2 pb-4">
            <Image
              src={info.fiveimagesplit.mobile3}
              alt={info.fiveimagesplit.text3}
              width={200}
              height={200}
            />
          </div>
          <div className="w-1/2 flex justify-center p-2 pb-4">
            <Image
              src={info.fiveimagesplit.mobile4}
              alt={info.fiveimagesplit.text4}
              width={200}
              height={200}
            />
          </div>
          <div className="w-1/2 flex justify-center p-2 pb-4">
            <Image
              src={info.fiveimagesplit.mobile5}
              alt={info.fiveimagesplit.text5}
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="hidden lg:flex w-full">
          <div className="flex flex-col items-center w-1/5">
            <Image
              src={info.fiveimagesplit.img1}
              alt="img1"
              width={400}
              height={400}
              className="w-full "
            />
            <p className="uppercase text-[24px] 2xl:text-[30px] text-white text-shadow z-10 mt-[-200px] text-center font-bold h-[50px] mb-[-50px]">
              {info.fiveimagesplit.text1}
            </p>
            <Image
              src={info.fiveimagesplit.icon1}
              width={69}
              height={69}
              alt={info.fiveimagesplit.text1}
              className="z-10 mt-[110px] mb-[10px]"
            />
          </div>
          <div className="flex flex-col items-center w-1/5">
            <Image
              src={info.fiveimagesplit.img2}
              alt="img1"
              width={400}
              height={400}
              className="w-full "
            />
            <p className="uppercase text-[24px] 2xl:text-[30px] text-white text-shadow z-10 mt-[-200px] text-center font-bold h-[50px] mb-[-50px]">
              {info.fiveimagesplit.text2}
            </p>
            <Image
              src={info.fiveimagesplit.icon2}
              width={69}
              height={69}
              alt={info.fiveimagesplit.text2}
              className="z-10 mt-[70px]"
            />
          </div>
          <div className="flex flex-col items-center w-1/5">
            <Image
              src={info.fiveimagesplit.img3}
              alt="img1"
              width={400}
              height={400}
              className="w-full "
            />
            <p className="uppercase text-[24px] 2xl:text-[30px] text-white text-shadow z-10 mt-[-200px] text-center font-bold h-[50px] mb-[-50px]">
              {info.fiveimagesplit.text3}
            </p>
            <Image
              src={info.fiveimagesplit.icon3}
              width={69}
              height={69}
              alt={info.fiveimagesplit.text3}
              className="z-10 mt-[60px]"
            />
          </div>
          <div className="flex flex-col items-center w-1/5">
            <Image
              src={info.fiveimagesplit.img4}
              alt="img1"
              width={400}
              height={400}
              className="w-full "
            />
            <p className="uppercase text-[24px] 2xl:text-[30px] text-white text-shadow z-10 mt-[-200px] text-center font-bold h-[50px] mb-[-50px]">
              {info.fiveimagesplit.text4}
            </p>
            <Image
              src={info.fiveimagesplit.icon4}
              width={69}
              height={69}
              alt={info.fiveimagesplit.text4}
              className="z-10 mt-[70px]"
            />
          </div>
          <div className="flex flex-col items-center w-1/5">
            <Image
              src={info.fiveimagesplit.img5}
              alt="img1"
              width={400}
              height={400}
              className="w-full "
            />
            <p className="uppercase text-[24px] 2xl:text-[30px] text-white text-shadow z-10 mt-[-200px] text-center font-bold h-[50px] mb-[-50px]">
              {info.fiveimagesplit.text5}
            </p>
            <Image
              src={info.fiveimagesplit.icon2}
              width={69}
              height={69}
              alt={info.fiveimagesplit.text2}
              className="z-10 mt-[110px] mb-[10px]"
            />
          </div>
        </div>
        <Image
          src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/3cdfbab4-132c-4c4f-da1b-bc2827865000/public"
          width={1200}
          height={100}
          className="hidden lg:block w-full mt-[-100px]  h-[100px]"
          alt="White semi circle"
        />
      </div>
      <div
        className={`flex flex-col items-center w-full justify-start px-4 bg-white ${raleway.className}`}
      >
        <p className="text-[17px] lg:text-[20px] text-center mt-[-20px] font-[600] ">
          {info.fiveimagesplit.undertext}
        </p>

        <p className="text-[17px] lg:text-[20px] text-center font-[600]">
          {info.fiveimagesplit.undertext2}
        </p>
        <BuyButton info={info} />
      </div>
    </div>
  );
};

export default FiveImageSplit;
