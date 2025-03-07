"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

import { SalesPageType } from "@/interfaces/salesPage";
import AppModal from "@/app/_components/sales/sales-6/_components/app-modal";
import SalesVideoReviewsSingleItem from "@/app/_components/sales/sales-6/sales-reviews/sales-video-reviews-single-item";

type Props = {
  info: SalesPageType;
};

const SalesVideoReviews = ({ info }: Props) => {
  const [ activeVideo, setActiveVideo ] = useState<string | null>(null);

  const onModalClose = () => {
    setActiveVideo(null)
  }

  const settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <button><Image className="" src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/00fec5de-c6dc-4bfd-792a-b5c23a1a6100/public" width={35} height={35} alt="Next slide icon" /></button>,
    prevArrow: <button><Image className="" src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/b627af96-556f-469e-de03-abaab1cffe00/public" width={35} height={35} alt="Prev slide icon" /></button>,
    infinite: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 639,
        settings: {
          arrows: false,
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '50px',
        }
      },
    ]
  }

  return (
    <>
      <div className=" -mx-[15px] sm:-mx-[10px] mb-[40px]">
        <Slider className="power-scrubber-video-reviews-slider slider" {...settings}>
          <SalesVideoReviewsSingleItem
            image={info.video_reviews.image1}
            title={info.video_reviews.text1}
            video={info.video_reviews.video1}
            setActiveVideo={setActiveVideo} />
          <SalesVideoReviewsSingleItem
            image={info.video_reviews.image2}
            title={info.video_reviews.text2}
            video={info.video_reviews.video2}
            setActiveVideo={setActiveVideo} />
          <SalesVideoReviewsSingleItem
            image={info.video_reviews.image3}
            title={info.video_reviews.text3}
            video={info.video_reviews.video3}
            setActiveVideo={setActiveVideo} />
          <SalesVideoReviewsSingleItem
            image={info.video_reviews.image4}
            title={info.video_reviews.text4}
            video={info.video_reviews.video4}
            setActiveVideo={setActiveVideo} />
        </Slider>
      </div>

      <AppModal isOpen={!!activeVideo} handleClose={onModalClose}>
        <div className="w-[360px] aspect-[9/16] overflow-hidden">
          <iframe
            src={activeVideo as string}
            width="100%"
            height="100%"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 z-10">
          </iframe>
        </div>
      </AppModal>
    </>
  );
};

export default SalesVideoReviews;