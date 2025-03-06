"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";

import { SalesPageType } from "@/interfaces/salesPage";
import SectionHeading from "@/app/_components/sales/sales-5/_components/section-heading";
import AppSection from "@/app/_components/sales/sales-5/_components/app-section";
import BuyButton from "@/app/_components/sales/sales-5/_components/buy-button";
import SalesUsageSingleItem from "@/app/_components/sales/sales-5/sales-usage/sales-usage-single-item";

type Props = {
  info: SalesPageType;
};

const SalesUsage = ({ info }: Props) => {
  const settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <button><Image className="" src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/b057407e-24d9-47bf-52ba-6c6f7df12800/public" width={22} height={42} alt="Next slide icon" /></button>,
    prevArrow: <button><Image className="" src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/11b9def3-3d92-41cf-2499-26913c7b3d00/public" width={22} height={42} alt="Prev slide icon" /></button>,
    responsive: [{
      breakpoint: 1200,
      settings: {
        arrows: true,
        slidesToShow:3,
      }
    }, {
      breakpoint: 1023,
      settings: {
        arrows: false,
        slidesToShow:2,
      }
    }, {
      breakpoint: 639,
      settings: {
        arrows: false,
        slidesToShow:1,
        infinite: true,
        centerMode: true,
        centerPadding: '50px',
      }
    }]
  };

  return (
    <AppSection classes="bg-[#000] text-[#fff]">
      <div className="mb-[20px] md:mb-[30px] lg:mb-[45px]">
        <SectionHeading
          title1={info.slideshow.heading}
          title2={info.slideshow.heading2}
          subtitle={info.slideshow.subheading}
          dark
        />
      </div>

      <div className="-mx-[15px] md:mx-0 mb-[25px] md:mb-[30px] lg:mb-[50px]">
        <Slider className="power-scrubber-usage-slider slider" {...settings}>
          <SalesUsageSingleItem image={info.slideshow.image1} title={info.slideshow.title1} text={info.slideshow.text1} />
          <SalesUsageSingleItem image={info.slideshow.image2} title={info.slideshow.title2} text={info.slideshow.text2} />
          <SalesUsageSingleItem image={info.slideshow.image3} title={info.slideshow.title3} text={info.slideshow.text3} />
          <SalesUsageSingleItem image={info.slideshow.image4} title={info.slideshow.title4} text={info.slideshow.text4} />
        </Slider>
      </div>

      <div className="w-full max-w-[402px] mx-[auto]">
        <BuyButton info={info} dark />
      </div>
    </AppSection>
  );
};

export default SalesUsage;