import React from "react";
import Slider from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

import { CheckoutPageType } from "@/interfaces/checkoutPage";
import SectionTitle from "@/app/_components/checkout/checkout-2/_components/section-title";
import CheckoutReviewsSingleItem from "@/app/_components/checkout/checkout-2/checkout-reviews/checkout-reviews-single-item";

type Props = {
  info: CheckoutPageType;
};

const CheckoutReviews = ({ info }: Props) => {
  const settings = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          arrows: true,
          nextArrow: <button><ChevronRightIcon className="absolute w-[18px] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] " /></button>,
          prevArrow: <button><ChevronLeftIcon className=" absolute w-[18px] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] " /></button>,
          slidesToShow:2,
          infinite: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          dots: true,
          arrows: true,
          nextArrow: <button><ChevronRightIcon className="absolute w-[18px] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] " /></button>,
          prevArrow: <button><ChevronLeftIcon className="absolute w-[18px] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] " /></button>,
          slidesToShow:1,
          infinite: false,
        }
      },
    ]
  };

  return (
    <section className="py-[27px] md:py-[36px] overflow-hidden">
      <div className="w-full max-w-[1330px] mx-auto px-[15px]">
        <div className="text-center">
          <SectionTitle>Testimonials</SectionTitle>
        </div>

        <div className="-mx-[5px] md:-mx-[10px] lg:-mx-[20px]">
        <Slider className="mould-cleaner-reviews-slider mould-cleaner-slider" {...settings}>
          <CheckoutReviewsSingleItem
            image={info.mould_cleaner.reviews.review_1_image}
            rating={info.mould_cleaner.reviews.review_1_rating}
            text={info.mould_cleaner.reviews.review_1_text}
            author={info.mould_cleaner.reviews.review_1_author}
          />
          <CheckoutReviewsSingleItem
            image={info.mould_cleaner.reviews.review_2_image}
            rating={info.mould_cleaner.reviews.review_2_rating}
            text={info.mould_cleaner.reviews.review_2_text}
            author={info.mould_cleaner.reviews.review_2_author}
          />
          <CheckoutReviewsSingleItem
            image={info.mould_cleaner.reviews.review_3_image}
            rating={info.mould_cleaner.reviews.review_3_rating}
            text={info.mould_cleaner.reviews.review_3_text}
            author={info.mould_cleaner.reviews.review_3_author}
          />
        </Slider>
        </div>
      </div>
    </section>
  );
};

export default CheckoutReviews;