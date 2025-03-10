"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";

import { SalesPageType } from "@/interfaces/salesPage";
import SectionHeading from "@/app/_components/sales/sales-6/_components/section-heading";
import BuyButton from "@/app/_components/sales/sales-6/_components/buy-button";
import AppSection from "@/app/_components/sales/sales-6/_components/app-section";

type Props = {
  info: SalesPageType;
};

const SalesResults = ({ info }: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <button><Image className="" src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/00fec5de-c6dc-4bfd-792a-b5c23a1a6100/public" width={35} height={35} alt="Next slide icon" /></button>,
    prevArrow: <button><Image className="" src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/b627af96-556f-469e-de03-abaab1cffe00/public" width={35} height={35} alt="Prev slide icon" /></button>,
    responsive: [{
      breakpoint: 1023,
      settings: {
        slidesToShow:2,
      }
    }, {
      breakpoint: 639,
      settings: {
        slidesToShow:1,
      }
    }]
  };

  return (
    <AppSection>
      <SectionHeading>{info.strip_images.heading}</SectionHeading>

      <div className="md:-mx-[10px] mt-[30px] md:mt-[40px] mb-[26px] md:mb-[35px] lg:mb-[40px]">
        <Slider className="power-scrubber-results-slider-2 slider" {...settings}>
          <Image
            className="h-[300px] object-cover object-bottom md:h-auto md:rounded-[10px]"
            src={info.strip_images.img1}
            width={370}
            height={343}
            alt="Image"
          />
          <Image
            className="h-[300px] object-cover object-bottom md:h-auto md:rounded-[10px]"
            src={info.strip_images.img2}
            width={370}
            height={343}
            alt="Image"
          />
          <Image
            className="h-[300px] object-cover object-bottom md:h-auto md:rounded-[10px]"
            src={info.strip_images.img3}
            width={370}
            height={343}
            alt="Image"
          />
          <Image
            className="h-[300px] object-cover object-bottom md:h-auto md:rounded-[10px]"
            src={info.strip_images.img4}
            width={370}
            height={343}
            alt="Image"
          />
        </Slider>
      </div>

      <div className="w-full max-w-[420px] mx-[auto]">
        <BuyButton info={info} />
      </div>
    </AppSection>
  );
};

export default SalesResults;