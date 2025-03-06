"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";

import { SalesPageType } from "@/interfaces/salesPage";
import SectionHeading from "@/app/_components/sales/sales-5/_components/section-heading";
import BuyButton from "@/app/_components/sales/sales-5/_components/buy-button";
import AppSection from "@/app/_components/sales/sales-5/_components/app-section";
import SalesResultsSingleItem from "@/app/_components/sales/sales-5/sales-results/sales-results-single-item";

type Props = {
  info: SalesPageType;
};

const SalesResults = ({ info }: Props) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <button><Image className="" src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/b057407e-24d9-47bf-52ba-6c6f7df12800/public" width={16} height={28} alt="Next slide icon" /></button>,
    prevArrow: <button><Image className="" src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/11b9def3-3d92-41cf-2499-26913c7b3d00/public" width={16} height={28} alt="Prev slide icon" /></button>,
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
      <div className="flex flex-col items-center -mt-[55px] md:-mt-[90px] lg:-mt-[123px] mb-[25px] md:mb-[30px]">
        <div className="w-[1px] md:w-[2px] h-[53px] md:h-[85px] lg:h-[106px] bg-[#1686e6]"></div>
        <div className="w-[10px] h-[10px] border-[1px] md:w-[15px] md:h-[15px] md:border-[2px] lg:w-[20px] lg:h-[20px] border-[#1686e6] rounded-[50%]"></div>
      </div>
      <div className="relative pr-[115px] md:pr-[0]">
        <SectionHeading
          title1={info.strip_images.heading}
          title2={info.strip_images.heading2}
          classes="!text-left md:!text-center !items-start md:!items-center"
        />
        <Image
          className="md:hidden absolute -top-[47px] -right-[32px] w-[190px] h-[270px] z-10"
          src={info.strip_images.img5}
          width={190}
          height={270}
          alt="Image"
        />
      </div>

      <div className="hidden md:block w-full max-w-[1000px] mx-[auto] text-center text-[17px] lg:text-[18px] leading-[25px] lg:leading-[26px]">
        <p className="mt-[15px] lg:mt-[20px]">{info.strip_images.subheading}</p>
      </div>

      <div className="mt-[30px] lg:mt-[45px] mb-[25px] md:mb-[30px] lg:mb-[50px]">
        <div className="-mx-[15px] md:mx-0">
          <Slider className="power-scrubber-results-slider slider" {...settings}>
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

        <div className="md:hidden text-[16px] leading-[24px]">
          <p className="mt-[30px]">{info.strip_images.subheading}</p>
        </div>

        <div className="mt-[25px] md:mt-[35px] lg:mt-[40px]">
          <h3 className="mb-[20px] md:mb-[30px] lg:mb-[40px] md:text-center text-[22px] md:text-[25px] lg:text-[30px] leading-[30px] md:leading-[25px] lg:leading-[30px] text-[#000] font-bold tracking-[0.3px] md:tracking-[0]">
            Multiple Brush Heads For Corners & Smooth Surfaces
          </h3>
          <ul className="grid md:grid-cols-4 gap-[25px] md:gap-[0]">
            <SalesResultsSingleItem image={info.strip_images.icon1} title={info.strip_images.title1} text={info.strip_images.text1} />
            <SalesResultsSingleItem image={info.strip_images.icon2} title={info.strip_images.title2} text={info.strip_images.text2} />
            <SalesResultsSingleItem image={info.strip_images.icon3} title={info.strip_images.title3} text={info.strip_images.text3} />
            <SalesResultsSingleItem image={info.strip_images.icon4} title={info.strip_images.title4} text={info.strip_images.text4} />
          </ul>
        </div>
      </div>

      <div className="w-full max-w-[402px] mx-[auto]">
        <BuyButton info={info} />
      </div>
    </AppSection>
  );
};

export default SalesResults;