import React from "react";
import Image from "next/image";
import { Raleway } from "next/font/google";
import { SalesPageType } from "@/interfaces/salesPage";
import { siteProduct } from "@/lib/site-info";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import BuyButton from "./buy-button";

const raleway = Raleway({ subsets: ["latin"] });

type Props2 = {
  info: SalesPageType;
};

const SalesHero = ({ info }: Props2) => {
  return (
    <div className="flex flex-col items-center w-full pt-2 md:pt-6 bg-blue-100 justify-center relative mt-[105px]">
      <div className="hidden lg:block lg:absolute inset-0 z-0 ">
        <Image
          src={info.header.background}
          alt="background"
          fill
          className="w-full h-full object-cover object-bottom-left"
          priority
        />
      </div>
      <div className="flex w-full justify-center z-10 lg:px-4">
        <div className="flex w-full max-w-[1260px] flex-wrap ">
          <div className="flex w-[100%] lg:w-[70%] flex-col items-center lg:px-4">
            <h1
              className={`text-center pb-4 lg:pb-0 px-4 md:px-8 lg:text-left text-[23px] md:text-[30px] lg:text-[42px] xl:text-[50px] text-[#005279] font-bold leading-tight ${raleway.className} w-full`}
            >
              <span className="text-[30px] md:text-[36px] lg:text-[42px] xl:text-[50px] text-[#0082c0]">
                {info.h1_top}
              </span>
              <br /> {info.h1_bot}
            </h1>
            <div className="flex w-full relative justify-center">
              <div className=" lg:hidden absolute inset-0 z-0">
                <Image
                  src={info.header.background}
                  alt="background"
                  fill
                  className="w-full h-full object-cover object-bottom-left"
                  priority
                />
              </div>
              <Image
                src={info.header.productImage}
                width={500}
                height={500}
                alt={siteProduct}
                className="p-4 lg:hidden sm:ml-[40px] sm:mr-[-40px] z-10 max-h-[420px] object-contain max-w-[65%]"
                priority
              />
            </div>
            <p className="text-[17px] lg:hidden pt-2 text-center px-4">
              {" "}
              {info.header.top_highlight}
            </p>
            <div className="bg-white hidden lg:flex rounded-lg rounded-tl-3xl w-full mt-6">
              <div className="flex w-[83px]">
                <Image
                  src={info.header.top_icon}
                  alt={siteProduct}
                  width={83}
                  height={65}
                />
              </div>
              <div className="flex flex1 py-2 px-6 text-[20px] items-center bg-white">
                {info.header.top_highlight}
              </div>
              <div className="flex md:mt-[-30px] md:mr-[-15px] md:mb-[-15px] md:ml-[-7px] xl:mt-[-40px] xl:mr-[-20px] xl:mb-[-20px] xl:ml-[-10px]">
                <Image
                  src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/774044ae-f41d-447c-0861-f8a4a9b89900/public"
                  alt="Best Product of 2024"
                  width={150}
                  height={150}
                  className="object-scale-down"
                />
              </div>
            </div>
            <div
              className={`flex flex-col w-full  text-[17px] lg:text-[22px] px-4  pb-6 md:pb-0 lg:px-0 mt-6 font-bold ${raleway.className}`}
            >
              <div className="flex pb-2">
                <CheckCircleIcon className="h-8 w-8 text-[#0082c0] min-w-8 min-h-8" />
                <h5 className="text-black  pl-4">{info.header.pro1}</h5>
              </div>
              <div className="flex pb-2">
                <CheckCircleIcon className="h-8 w-8 text-[#0082c0] min-w-8 min-h-8" />
                <h5 className="text-black  pl-4">{info.header.pro2}</h5>
              </div>
              <div className="flex pb-2">
                <CheckCircleIcon className="h-8 w-8 text-[#0082c0] min-w-8 min-h-8" />
                <h5 className="text-black pl-4">{info.header.pro3}</h5>
              </div>
              <div className="flex pb-2">
                <CheckCircleIcon className="h-8 w-8 text-[#0082c0] min-w-8 min-h-8" />
                <h5 className="text-black  pl-4">{info.header.pro4}</h5>
              </div>
              <div className="flex pb-2">
                <CheckCircleIcon className="h-8 w-8 text-[#0082c0] min-w-8 min-h-8" />
                <h5 className="text-black  pl-4">{info.header.pro5}</h5>
              </div>
              <div className="hidden lg:flex w-full justify-center lg:justify-start">
                <BuyButton info={info} />
              </div>
            </div>
          </div>
          <div className="hidden lg:flex w-[30%] flex-col justify-center items-center ">
            <Image
              src={info.header.productImage}
              alt={siteProduct}
              width={1200}
              height={1200}
              className="xl:scale-110 ml-6"
            />
          </div>
        </div>
      </div>
      <svg
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden md:block w-full mt-[10px] lg:mt-[-80px] 2xl:mt-[-110px] z-0 "
      >
        <path
          d="M1440 44C1280 44 1120 16 960 16C800 16 640 44 480 44C320 44 160 16 0 16V100H1440V44Z"
          className="fill-current text-white"
        ></path>
      </svg>
    </div>
  );
};
export default SalesHero;
