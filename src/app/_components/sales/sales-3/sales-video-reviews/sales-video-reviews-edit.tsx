"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

import { SalesPageType } from "@/interfaces/salesPage";
import SectionTitle from "@/app/_components/sales/sales-3/_components/section-title";
import BuyButton from "@/app/_components/sales/sales-3/_components/buy-button";
import AppModal from "@/app/_components/sales/sales-3/_components/app-modal";
import AppSection from "@/app/_components/sales/sales-3/_components/app-section";
import SalesVideoReviewsSingleItemEdit
  from "@/app/_components/sales/sales-3/sales-video-reviews/sales-video-reviews-single-item-edit";

type Props = {
  info: SalesPageType;
  setCurrentPost: (post: SalesPageType) => void;
};

const SalesVideoReviewsEdit = ({ info, setCurrentPost }: Props) => {
  const [ activeVideo, setActiveVideo ] = useState<string | null>(null);

  const onModalClose = () => {
    setActiveVideo(null)
  }

  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow:3,
          infinite: true,
        }
      },
      {
        breakpoint: 767,
        settings: {
          dots: true,
          slidesToShow:1,
          variableWidth: true,
          centerMode: true,
          infinite: true,
        }
      },
    ]
  }

  return (
    <AppSection classes="bg-[linear-gradient(180deg,_#f4fbff_30%,_#b5dfed_95%)] md:bg-[linear-gradient(180deg,_#f4fbff_50%,_#b5dfed_95%)]">
      <div className="flex justify-center text-center w-[90%] sm:w-[80%] lg:max-w-[760px] mx-[auto] pt-[28px]">
        <SectionTitle>
          <span className="relative">
            <span className="absolute -left-[50px] md:-left-[60px] -top-[30px] md:-top-[37px] lg:-top-[45px] flex flex-col items-start text-[14px] md:text-[15px] lg:text-[18px] leading-[16px] md:leading-[20px] lg:leading-[24px] text-[#000] font-bold">
              <span className="mb-[12px] whitespace-nowrap">
                <input
                  className="editable-input"
                  onChange={(e) => {
                    setCurrentPost({
                      ...info,
                      slideshow: {
                        ...info.slideshow,
                        headingLabel: e.target.value,
                      },
                    });
                  }}
                  value={info.slideshow.headingLabel}
                  placeholder="Heading label"
                />
              </span>
              <Image
                className="w-[26px] md:w-[33px] lg:w-[40px] ml-[15px]"
                src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/5c716bf6-169f-40ca-0d06-ab8ba04c0a00/public" width={40} height={40} alt="Arrow icon"
              />
            </span>
          </span>
          <input
            className="editable-input"
            onChange={(e) => {
              setCurrentPost({
                ...info,
                video_reviews: {
                  ...info.video_reviews,
                  heading: e.target.value,
                },
              });
            }}
            value={info.video_reviews.heading}
            placeholder="Heading"
          />
        </SectionTitle>
      </div>

      <div className="md:w-full -mx-4 md:mx-[auto] mb-[12px] md:mb-[0]">
        <Slider className="video-reviews-slider slider" {...settings}>
          <div className="p-[15px_10px_0]">
            <SalesVideoReviewsSingleItemEdit
              info={info}
              setCurrentPost={setCurrentPost}
              image={info.video_reviews.image1}
              imageField="video_reviews.image1"
              title={info.video_reviews.text1}
              titleField="text1"
              video={info.video_reviews.video1}
              setActiveVideo={setActiveVideo} />
          </div>
          <div className="p-[15px_10px_0]">
            <SalesVideoReviewsSingleItemEdit
              info={info}
              setCurrentPost={setCurrentPost}
              image={info.video_reviews.image2}
              imageField="video_reviews.image2"
              title={info.video_reviews.text2}
              titleField="text2"
              video={info.video_reviews.video2}
              setActiveVideo={setActiveVideo} />
          </div>
          <div className="p-[15px_10px_0]">
            <SalesVideoReviewsSingleItemEdit
              info={info}
              setCurrentPost={setCurrentPost}
              image={info.video_reviews.image3}
              imageField="video_reviews.image3"
              title={info.video_reviews.text3}
              titleField="text3"
              video={info.video_reviews.video3}
              setActiveVideo={setActiveVideo} />
          </div>
          <div className="p-[15px_10px_0]">
            <SalesVideoReviewsSingleItemEdit
              info={info}
              setCurrentPost={setCurrentPost}
              image={info.video_reviews.image4}
              imageField="video_reviews.image4"
              title={info.video_reviews.text4}
              titleField="text4"
              video={info.video_reviews.video4}
              setActiveVideo={setActiveVideo} />
          </div>
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


      <div className="w-full max-w-[366px] md:max-w-[410px] mx-[auto] mt-[30px] md:mt-[40px]">
        <BuyButton info={info} />
      </div>
    </AppSection>
  );
};

export default SalesVideoReviewsEdit;