"use client";
import { SalesPageType } from "@/interfaces/salesPage";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Raleway } from "next/font/google";
import BuyButton from "./buy-button";

const raleway = Raleway({ subsets: ["latin"] });

type Props = {
  info: SalesPageType;
};

const SalesSlideshow = ({ info }: Props) => {
  const [active, setActive] = useState(0);
  const [topImage, setTopImage] = useState("");
  const [bottomImage, setBottomImage] = useState(info.slideshow.image1);
  const [isHovered, setIsHovered] = useState(false);

  const getImage = (index: number) => {
    switch (index) {
      case 0:
        return info.slideshow.image1;
      case 1:
        return info.slideshow.image2;
      case 2:
        return info.slideshow.image3;
      case 3:
        return info.slideshow.image4;
      default:
        return info.slideshow.image1; // Fallback to the first image (optional)
    }
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      const nextActive = (active + 1) % 4;
      setActive(nextActive);
      // Set the next image to slide in
      setTopImage(getImage(nextActive));
    }, 5000);

    return () => clearInterval(interval);
  }, [active, isHovered]);

  useEffect(() => {
    // Once the top image is set, slide it in and then swap the images
    if (topImage) {
      setTimeout(() => {
        setBottomImage(topImage);
        setTopImage(""); // Clear top image to slide next one
      }, 1000); // Delay for the slide transition
    }
  }, [topImage]);

  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col w-full items-start lg:hidden p-4 max-w-[500px]">
        <h3
          className={`text-[26px] text-[#052f5b] font-bold pb-2 ${raleway.className}`}
        >
          {info.slideshow.title1}
        </h3>
        <Image
          src={info.slideshow.image1}
          alt={info.slideshow.title1}
          width={500}
          height={500}
        />
        <p className="text-[18px] py-2 mb-8 text-left">
          {info.slideshow.text1}
        </p>
        <h3
          className={`text-[26px] text-[#052f5b]  font-bold pb-2 ${raleway.className}`}
        >
          {info.slideshow.title2}
        </h3>
        <Image
          src={info.slideshow.image2}
          alt={info.slideshow.title2}
          width={500}
          height={500}
        />
        <p className="text-[18px] py-2 mb-8 text-left">
          {info.slideshow.text2}
        </p>
        <h3
          className={`text-[26px] text-[#052f5b]  font-bold pb-2 ${raleway.className}`}
        >
          {info.slideshow.title3}
        </h3>
        <Image
          src={info.slideshow.image3}
          alt={info.slideshow.title3}
          width={500}
          height={500}
        />
        <p className="text-[18px] py-2 mb-8 text-left">
          {info.slideshow.text3}
        </p>
        <h3
          className={`text-[26px] text-[#052f5b]  font-bold pb-2 ${raleway.className}`}
        >
          {info.slideshow.title4}
        </h3>
        <Image
          src={info.slideshow.image4}
          alt={info.slideshow.title4}
          width={500}
          height={500}
        />
        <p className="text-[18px] py-2 mb-8 text-left">
          {info.slideshow.text4}
        </p>
      </div>
      <div className="hidden lg:flex flex-col w-full lg:w-1/2 pr-4">
        <div
          className={`flex w-full cursor-pointer hover:bg-blue-100 rounded-md p-4 ${
            active === 0 ? "bg-blue-100/50" : ""
          }`}
          onClick={() => {
            setActive(0);
            setTopImage(info.slideshow.image1);
          }}
        >
          <Image
            src={info.slideshow.icon1}
            alt={info.slideshow.title1}
            width={50}
            height={50}
            className="object-scale-down"
          />
          <div className="flex px-4 flex1 flex-col items-start text-left">
            <h3 className={`text-[26px] font-bold pb-2 ${raleway.className}`}>
              {info.slideshow.title1}
            </h3>
            <p>{info.slideshow.text1}</p>
          </div>
        </div>
        <div
          className={`flex w-full cursor-pointer hover:bg-blue-100 rounded-md mt-12 p-4 ${
            active === 1 ? "bg-blue-100/50" : ""
          }`}
          onClick={() => {
            setActive(1);
            setTopImage(info.slideshow.image2);
          }}
        >
          <Image
            src={info.slideshow.icon2}
            alt={info.slideshow.title2}
            width={50}
            height={50}
            className="object-scale-down"
          />
          <div className="flex px-4 flex1 flex-col items-start text-left">
            <h3 className={`text-[26px] font-bold pb-2 ${raleway.className}`}>
              {info.slideshow.title2}
            </h3>
            <p>{info.slideshow.text2}</p>
          </div>
        </div>
        <div
          className={`flex w-full cursor-pointer hover:bg-blue-100 rounded-md mt-12 p-4 ${
            active === 2 ? "bg-blue-100/50" : ""
          }`}
          onClick={() => {
            setActive(2);
            setTopImage(info.slideshow.image3);
          }}
        >
          <Image
            src={info.slideshow.icon3}
            alt={info.slideshow.title3}
            width={50}
            height={50}
            className="object-scale-down"
          />
          <div className="flex px-4 flex1 flex-col items-start text-left">
            <h3 className={`text-[26px] font-bold pb-2 ${raleway.className}`}>
              {info.slideshow.title3}
            </h3>
            <p className="">{info.slideshow.text3}</p>
          </div>
        </div>
        <div
          className={`flex w-full cursor-pointer hover:bg-blue-100 rounded-md mt-12 p-4 ${
            active === 3 ? "bg-blue-100/50" : ""
          }`}
          onClick={() => {
            setActive(3);
            setTopImage(info.slideshow.image4);
          }}
        >
          <Image
            src={info.slideshow.icon4}
            alt={info.slideshow.title4}
            width={50}
            height={50}
            className="object-scale-down"
          />
          <div className="flex px-4 flex1 flex-col items-start">
            <h3 className={`text-[26px] font-bold pb-2 ${raleway.className}`}>
              {info.slideshow.title4}
            </h3>
            <p>{info.slideshow.text4}</p>
          </div>
        </div>
      </div>
      <div
        className="hidden lg:flex w-1/2 justify-center items-center relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)} // Pause on hover
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={bottomImage}
          alt="Slideshow Bottom Image"
          fill
          className="transition-opacity duration-1000 ease-in-out w-full object-contain"
        />
        {topImage && (
          <div
            className="absolute top-0 left-full w-full h-full transition-transform duration-1000 ease-in-out transform"
            style={{ translate: topImage ? "-100%" : "0%" }}
          >
            <Image
              src={topImage}
              alt="Slideshow Top Image"
              fill
              className="slide-down w-full object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
};

const Slideshow = ({ info }: Props) => {
  return (
    <div className="flex w-full px-4 pt-6  justify-center" id="features">
      <div className="flex flex-col w-full max-w-[1260px] items-center text-center">
        <h4
          className={`text-[26px] leading-tight lg:text-[50px] font-bold text-[#005279] mt-8 ${raleway.className} `}
        >
          {info.slideshow.heading}
        </h4>
        <p className="text-[18px] lg:text-[20px] pt-4 pb-6">
          {info.slideshow.subheading}
        </p>
        <SalesSlideshow info={info} />
        <div className="flex w-full py-8 justify-center">
          <BuyButton info={info} />
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
