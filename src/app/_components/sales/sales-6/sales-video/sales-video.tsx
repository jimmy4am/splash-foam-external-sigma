"use client";

import React, { useState } from "react";
import Image from "next/image";

import { SalesPageType } from "@/interfaces/salesPage";
import SectionHeading from "@/app/_components/sales/sales-6/_components/section-heading";
import BuyButton from "@/app/_components/sales/sales-6/_components/buy-button";
import AppSection from "@/app/_components/sales/sales-6/_components/app-section";

type Props = {
  info: SalesPageType;
};

const SalesFaqs = ({ info }: Props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <AppSection classes="bg-[#f3f4f5]">
      <SectionHeading>{info.video.heading}</SectionHeading>

      <div className="w-full max-w-[940px] flex flex-col md:flex-col-reverse items-center gap-[15px] md:gap-[35px] mx-auto mt-[20px] md:mt-[15px] mb-[26px] md:mb-[35px] lg:mb-[40px]">
        <div className="relative w-full aspect-[1/0.564]">
          {!isActive ? (
            <>
              <Image
                className="absolute inset-0"
                src={info.video.image}
                fill
                alt="Poster"
              />
              <button
                onClick={() => setIsActive(true)}
                className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex rounded-[50%]"
              >
                <Image
                  className="pulsing w-[120px] md:w-[260px]"
                  src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/1d5db496-e98f-49fd-87c6-8592d82d9800/public"
                  width={259}
                  height={259}
                  alt="Play video icon"
                />
              </button>
            </>
          ) : (
            <video className="absolute inset-0" playsInline autoPlay loop muted width="100%" height="auto">
              {/*TODO: change source of video file*/}
              <source src="/images/template-5/hero-vdo.mp4" type="video/mp4"/>
            </video>
          )}
        </div>
        <p className="w-full max-w-[700px] mx-auto text-center">{info.video.subheading}</p>
      </div>

      <div className="w-full max-w-[420px] mx-[auto]">
        <BuyButton info={info} />
      </div>
    </AppSection>
  );
};

export default SalesFaqs;