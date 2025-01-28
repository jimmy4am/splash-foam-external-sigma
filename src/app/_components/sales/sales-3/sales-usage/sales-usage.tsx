"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { Inter } from "next/font/google";

import { SalesPageType } from "@/interfaces/salesPage";
import SectionTitle from "@/app/_components/sales/sales-3/_components/section-title";
import BuyButton from "@/app/_components/sales/sales-3/_components/buy-button";
import SalesUsageSingleItem from "@/app/_components/sales/sales-3/sales-usage/sales-usage-single-item";
import AppSection from "@/app/_components/sales/sales-3/_components/app-section";

const inter = Inter({ subsets: ["latin"] });

type Props = {
    info: SalesPageType;
};

const SalesUsage = ({ info }: Props) => {
    const settings = {
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <button><Image className="" src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/c8d363ef-dadd-4654-0728-197ae1a4b900/public" width={38} height={38} alt="Next slide icon" /></button>,
        prevArrow: <button><Image className="" src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/64e9553b-9c3c-43c1-458b-1f70fc3e2600/public" width={38} height={38} alt="Prev slide icon" /></button>,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow:3,
            }
        }, {
            breakpoint: 1021,
            settings: {
                slidesToShow:2,
            }
        }, {
            breakpoint: 639,
            settings: {
                dots: true,
                slidesToShow:1,
                infinite: true,
                centerMode: true,
            }
        }]
    };

    return (
        <AppSection classes={`bg-[#fff] ${inter.className}`}>
            <div className="text-center">
                <SectionTitle>{info.fiveimagesplit.heading}</SectionTitle>
            </div>
            <p className="w-full max-w-[740px] mx-[auto] mb-[30px] md:mb-[40px] text-center text-[16px] md:text-[17px] lg:text-[18px] leading-[24px] md:leading-[25px] lg:leading-[26px] tracking-[0.2px] md:tracking-[0.3px]">{info.fiveimagesplit.subheading}</p>

            <div className="-mx-4 md:mx-0">
                <Slider className="usage-slider slider" {...settings}>
                    <SalesUsageSingleItem image={info.fiveimagesplit.img1} title={info.fiveimagesplit.text1} />
                    <SalesUsageSingleItem image={info.fiveimagesplit.img2} title={info.fiveimagesplit.text2} />
                    <SalesUsageSingleItem image={info.fiveimagesplit.img3} title={info.fiveimagesplit.text3} />
                    <SalesUsageSingleItem image={info.fiveimagesplit.img4} title={info.fiveimagesplit.text4} />
                    <SalesUsageSingleItem image={info.fiveimagesplit.img5} title={info.fiveimagesplit.text5} />
                </Slider>
            </div>

            <div className="w-full max-w-[366px] md:max-w-[410px] mx-[auto]  mt-[30px] md:mt-[40px]">
                <BuyButton info={info} />
            </div>
        </AppSection>
    );
};

export default SalesUsage;