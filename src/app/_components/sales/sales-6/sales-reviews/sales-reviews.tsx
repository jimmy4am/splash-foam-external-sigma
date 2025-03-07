import React from "react";

import { SalesPageType } from "@/interfaces/salesPage";
import SectionHeading from "@/app/_components/sales/sales-6/_components/section-heading";
import BuyButton from "@/app/_components/sales/sales-6/_components/buy-button";
import AppSection from "@/app/_components/sales/sales-6/_components/app-section";
import SalesReviewsSingleItem from "@/app/_components/sales/sales-6/sales-reviews/sales-reviews-single-item";
import SalesVideoReviews from "@/app/_components/sales/sales-6/sales-reviews/sales-video-reviews";

type Props = {
  info: SalesPageType;
};

const SalesReviews = ({ info }: Props) => {
  return (
    <AppSection classes="bg-[#fff]">
      <SectionHeading classes="mb-[24px] md:mb-[40px]">{info.reviews.heading}</SectionHeading>

      <SalesVideoReviews info={info} />

      <ul className="flex flex-col gap-[40px] md:gap-[18px] lg:gap-[20px] max-w-[570px] md:max-w-[970px] mx-[auto] mb-[26px] md:mb-[35px] lg:mb-[40px]">
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

      <div className="w-full max-w-[420px] mx-[auto]">
        <BuyButton info={info} />
      </div>
    </AppSection>
  );
};

export default SalesReviews;