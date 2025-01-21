import React from "react";

import { SalesPageType } from "@/interfaces/salesPage";
import Image from "next/image";
import { Outfit, Inter } from "next/font/google";
import SalesReviewsSingleReview from "@/app/_components/sales/sales-3/sales-reviews/sales-reviews-single-review";
import BuyButton from "@/app/_components/sales/sales-3/_components/buy-button";
import SectionTitle from "@/app/_components/sales/sales-3/_components/section-title";


const outfit = Outfit({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

type Props = {
    info: SalesPageType;
};

const SalesReviews = ({ info }: Props) => {
    return (
        <section className={`w-full p-[30px_0_5px] md:p-[50px_0_10px] lg:p-[60px_0_10px] bg-[#fff] ${inter.className}`}>
            <div className="w-full max-w-[1200px] mx-[auto] px-4">
                <div className="text-center">
                    <p className="mb-[20px] text-[22px] md:text-[25px] leading-[22px] md:leading-[25px] font-bold">Customer Reviews</p>
                    <SectionTitle>What Daily Users Have To Say</SectionTitle>
                    <p className="flex flex-col md:flex-row items-center md:items-end justify-center">
                        <span className={`text-[40px] md:text-[50px] leading-[16px] md:leading-[18px] font-bold  ${outfit.className}`}>4.9</span>
                        <Image className="w-[110px] md:w-[138px] m-[20px_0_10px] md:m-[0_15px]" src="/images/template-3/star.svg" alt="rating stars" width={82} height={14} />
                        <span className="text-[16px] md:text-[18px] leading-[16px] md:leading-[18px] font-bold">Verified Reviews</span>
                    </p>
                </div>

                <ul className="w-full max-w-[970px] flex flex-col gap-[20px] mt-[30px] md:mt-[50px] mx-[auto]">
                    <SalesReviewsSingleReview title={info.reviews.title1} author={info.reviews.name1} text={info.reviews.text1} />
                    <SalesReviewsSingleReview title={info.reviews.title2} author={info.reviews.name2} text={info.reviews.text2} />
                    <SalesReviewsSingleReview title={info.reviews.title3} author={info.reviews.name3} text={info.reviews.text3} />
                    <SalesReviewsSingleReview title={info.reviews.title4} author={info.reviews.name4} text={info.reviews.text4} />
                </ul>

                <div className="w-full max-w-[366px] md:max-w-[410px] mx-[auto]  mt-[30px] md:mt-[40px]">
                    <BuyButton info={info} />
                </div>
            </div>
        </section>
    );
};

export default SalesReviews;
