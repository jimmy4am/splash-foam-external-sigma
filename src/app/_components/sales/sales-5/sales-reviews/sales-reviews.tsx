import React from "react";
import Image from "next/image";

import { SalesPageType } from "@/interfaces/salesPage";
import SectionHeading from "@/app/_components/sales/sales-5/_components/section-heading";
import AppSection from "@/app/_components/sales/sales-5/_components/app-section";
import AppRating from "@/app/_components/sales/sales-5/_components/app-rating";
import BuyButton from "@/app/_components/sales/sales-5/_components/buy-button";
import SalesReviewsSingleItem from "@/app/_components/sales/sales-5/sales-reviews/sales-reviews-single-item";
import SalesReviewsComparisonSlider
  from "@/app/_components/sales/sales-5/sales-reviews/sales-reviews-comparison-slider";

type Props = {
  info: SalesPageType;
};

const SalesReviews = ({ info }: Props) => {

  return (
    <AppSection classes="bg-[#fff]">
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
          <AppRating />
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