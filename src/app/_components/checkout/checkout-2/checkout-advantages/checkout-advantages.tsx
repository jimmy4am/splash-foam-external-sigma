import React from "react";
import Slider from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

import { CheckoutPageType } from "@/interfaces/checkoutPage";
import SectionTitle from "@/app/_components/checkout/checkout-2/_components/section-title";
import CheckoutAdvantagesSingleItem from "@/app/_components/checkout/checkout-2/checkout-advantages/checkout-advantages-single-item";


type Props = {
  info: CheckoutPageType;
};

const CheckoutAdvantages = ({ info }: Props) => {
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
    <section className="py-[27px] md:py-[36px] bg-[#ffa500] text-[rgba(253,251,247,1)] overflow-hidden">
      <div className="w-full max-w-[1330px] mx-auto px-[15px]">
        <div className="text-center">
          <SectionTitle>Why Our Customers are in love with this!</SectionTitle>
        </div>

        <div className="-mx-[5px] md:-mx-[10px] lg:-mx-[20px]">
          <Slider className="mould-cleaner-simple-slider mould-cleaner-slider" {...settings}>
            <CheckoutAdvantagesSingleItem title={info.mould_cleaner.advantages.adv_1_title} text={info.mould_cleaner.advantages.adv_1_text} />
            <CheckoutAdvantagesSingleItem title={info.mould_cleaner.advantages.adv_2_title} text={info.mould_cleaner.advantages.adv_2_text} />
            <CheckoutAdvantagesSingleItem title={info.mould_cleaner.advantages.adv_3_title} text={info.mould_cleaner.advantages.adv_3_text} />
          </Slider>
        </div>
      </div>
    </section>
  )
};

export default CheckoutAdvantages;