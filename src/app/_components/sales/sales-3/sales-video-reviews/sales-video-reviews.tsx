"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

import { SalesPageType } from "@/interfaces/salesPage";
import SectionTitle from "@/app/_components/sales/sales-3/_components/section-title";
import BuyButton from "@/app/_components/sales/sales-3/_components/buy-button";
import AppModal from "@/app/_components/sales/sales-3/_components/app-modal";
import SalesVideoReviewsSingleItem from "@/app/_components/sales/sales-3/sales-video-reviews/sales-video-reviews-single-item";

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
        <section className="w-full p-[30px_0_35px] md:p-[50px_0_60px] lg:p-[60px_0_70px] bg-[linear-gradient(180deg,_#f4fbff_30%,_#b5dfed_95%)] md:bg-[linear-gradient(180deg,_#f4fbff_50%,_#b5dfed_95%)]">
            <div className="w-full max-w-[1200px] mx-[auto] px-4">
                <div className="flex justify-center text-center w-[90%] sm:w-[80%] lg:max-w-[760px] mx-[auto] pt-[28px]">
                    <SectionTitle>
                        <span className="relative">
                            <span className="absolute -left-[50px] md:-left-[60px] -top-[30px] md:-top-[37px] lg:-top-[45px] flex flex-col items-start text-[14px] md:text-[15px] lg:text-[18px] leading-[16px] md:leading-[20px] lg:leading-[24px] text-[#000] font-bold">
                                <span className="mb-[12px] whitespace-nowrap">{info.slideshow.headingLabel}</span>
                                <Image
                                    className="w-[26px] md:w-[33px] lg:w-[40px] ml-[15px]"
                                    src="/images/template-3/common-heading-arw.png" width={40} height={40} alt="Arrow icon"
                                />
                            </span>
                        </span>
                        {info.video_reviews.heading}
                    </SectionTitle>
                </div>

                <div className="md:w-full -mx-4 md:mx-[auto] mb-[12px] md:mb-[0]">
                    <Slider className="video-reviews-slider slider" {...settings}>
                        <div className="p-[15px_10px_0]">
                            <SalesVideoReviewsSingleItem
                                image={info.video_reviews.image1}
                                title={info.video_reviews.text1}
                                video={info.video_reviews.video1}
                                setActiveVideo={setActiveVideo} />
                        </div>
                        <div className="p-[15px_10px_0]">
                            <SalesVideoReviewsSingleItem
                                image={info.video_reviews.image2}
                                title={info.video_reviews.text2}
                                video={info.video_reviews.video2}
                                setActiveVideo={setActiveVideo} />
                        </div>
                        <div className="p-[15px_10px_0]">
                            <SalesVideoReviewsSingleItem
                                image={info.video_reviews.image3}
                                title={info.video_reviews.text3}
                                video={info.video_reviews.video3}
                                setActiveVideo={setActiveVideo} />
                        </div>
                        <div className="p-[15px_10px_0]">
                            <SalesVideoReviewsSingleItem
                                image={info.video_reviews.image4}
                                title={info.video_reviews.text4}
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
            </div>
        </section>
    );
};

export default SalesVideoReviews;