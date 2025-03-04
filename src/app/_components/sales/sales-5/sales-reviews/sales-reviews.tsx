import React from "react";
import Image from "next/image";

import { SalesPageType } from "@/interfaces/salesPage";
import SalesReviewsSingleItem from "@/app/_components/sales/sales-5/sales-reviews/sales-reviews-single-item";
import SectionHeading from "@/app/_components/sales/sales-5/_components/section-heading";
import AppSection from "@/app/_components/sales/sales-5/_components/app-section";
import BuyButton from "@/app/_components/sales/sales-5/_components/buy-button";
import SalesReviewsComparisonSlider
  from "@/app/_components/sales/sales-5/sales-reviews/sales-reviews-comparison-slider";

type Props = {
  info: SalesPageType;
};

const SalesReviews = ({ info }: Props) => {

  return (
    <AppSection classes="bg-[#f6f6f6]">
      <div className="mb-[25px] md:mb-[30px] lg:mb-[45px]">
        <SectionHeading
          title1="X-All Spin Scrubber"
          title2="What Our Customers Say"
          subtitle="Lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duissed amet
          nibh vulputate cursusMaecenas nec odio et ante tincidunt tempus."
        />
      </div>

      <div className="flex flex-col md:flex-row items-center gap-[25px] lg:gap-[40px] w-full max-w-[840px] m-[0_auto_30px] md:m-[0_auto_40px] lg:m-[0_auto_80px]">
        <div className="w-full md:w-auto flex-1 max-w-[402px]">
          <SalesReviewsComparisonSlider />
        </div>
        <div className="w-full md:w-auto flex-1 text-center md:text-left">
          <Image
            className="hidden md:block mb-[12px] w-[40px] lg:w-[55px]"
            src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/8b9bb84f-2702-4f10-3610-cc765c3b0100/public"
            width={55}
            height={43}
            alt="Quotes icon"
          />
          <p className="inline-flex gap-[2px] mb-[10px] text-[#ff9b26]">
            <svg className="w-[16px] h-[16px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
            </svg>
            <svg className="w-[16px] h-[16px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
            </svg>
            <svg className="w-[16px] h-[16px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
            </svg>
            <svg className="w-[16px] h-[16px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
            </svg>
            <svg className="w-[16px] h-[16px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
            </svg>
          </p>
          <p className="mb-[15px] md:mb-[25px] lg:mb-[30px] text-[16px] md:text-[17px] lg:text-[18px] leading-[24px] md:leading-[25px] lg:leading-[26px] text-[#000] font-medium italic tracking-[0.5px] lg:tracking-[0]">
            "{info.reviews.text5}?"
          </p>
          <p className="flex items-end justify-center md:justify-start text-[15px] leading-[21px] text-[#000] font-medium">
            <span className="mr-[10px] text-[17px] md:text-[18px] font-bold">{info.reviews.name5}</span>
            <span className="inline-flex items-center gap-[4px]">
              <Image
                className="flex-[0_0_12px]"
                src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/14b481e5-2f28-4caf-44f9-99a25425c200/public"
                width={24}
                height={28}
                alt="Image"
              />
              <span className="flex-1">Verified Buyer</span>
            </span>
          </p>
        </div>
      </div>

      <ul className="w-full max-w-[1080px] grid md:grid-cols-2 gap-[25px] lg:gap-[40px] m-[0_auto_25px] md:m-[0_auto_30px] lg:m-[0_auto_50px]">
        <SalesReviewsSingleItem
          image={info.reviews.image1 as string}
          author={info.reviews.name1}
          text={info.reviews.text1}
        />
        <SalesReviewsSingleItem
          image={info.reviews.image2 as string}
          author={info.reviews.name2}
          text={info.reviews.text2}
        />
        <SalesReviewsSingleItem
          image={info.reviews.image3 as string}
          author={info.reviews.name3}
          text={info.reviews.text3}
        />
        <SalesReviewsSingleItem
          image={info.reviews.image4 as string}
          author={info.reviews.name4}
          text={info.reviews.text4}
        />
      </ul>

      <div className="w-full max-w-[402px] mx-[auto]">
        <BuyButton info={info}/>
      </div>
    </AppSection>
  );
};

export default SalesReviews;