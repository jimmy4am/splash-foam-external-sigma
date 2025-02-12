import React from "react";
import Image from "next/image";
import { Inter, Red_Hat_Display } from "next/font/google";
import { CheckCircleIcon } from "@heroicons/react/24/outline";


import { ReviewPostType } from "@/interfaces/reviewPost";
import { getPoints } from "@/app/_components/review/review-6/review-body/utils";
import AppButton from "@/app/_components/review/review-6/_components/app-button";

const redHatDisplay = Red_Hat_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

type Props = {
  post: ReviewPostType;
};

const AchievementItem = ({ number, text, isLastItem = false }: { number: string, text: string, isLastItem?: boolean }) => (
  <li className={`md:flex-1 md:px-[30px] ${!isLastItem && 'md:border-r-[1px] md:border-r-[#e6e6e6]'}`}>
    <span className="flex items-center gap-[5px] md:gap-[7px]">
      <CheckCircleIcon className="w-[20px] md:w-[25px]" />
      <span className="text-[19px] md:text-[26px] leading-[30px] font-bold uppercase">{number}</span>
    </span>
    <span className="md:mt-[10px] text-[14px] md:text-[16px] leading-[20px] md:leading-[22px]">{text}</span>
  </li>
)

const ReviewWinningProduct = ({ post }: Props) => {
  return (
    <section className={`py-[20px] md:py-[60px] bg-[#f6fbff] ${inter.className}`}>
      <div className="md:flex md:flex-wrap md:justify-between w-full max-w-[1200px] mx-[auto] px-4">
        <div className="md:flex-[0_0_55%] lg:flex-[0_0_65.81%] mb-[25px] md:mb-[0px] overflow-hidden">
          <h2 className={`mb-[12px] lg:mb-[18px] text-[30px] lg:text-[38px] leading-[36px] lg:leading-[46px] font-black text-[#1a5d95] ${redHatDisplay.className}`}>Top Weight Loss Medication Plans 2025</h2>
          <p className="mt-[12px] lg:mt-[18px] text-[16px] lg:text-[17px] leading-[24px] lg:leading-[25px]">Navigating the world of weight loss medication can be complex, but we’re here to make it easier for you. Our Essential Guide to Weight Loss Medication Plans offers a thorough overview of the leading medications, personalized meal plans, and expert dietician coaching available today.</p>
          <p className="mt-[12px] lg:mt-[18px] text-[16px] lg:text-[17px] leading-[24px] lg:leading-[25px]">Whether you’re starting your weight loss journey or seeking to enhance your current plan, this guide will equip you with all the information you need to make an informed choice.</p>
          <p className="mt-[12px] lg:mt-[18px] text-[16px] lg:text-[17px] leading-[24px] lg:leading-[25px]">We’ll explore everything from the benefits of top weight loss medications to detailed reviews of personalized plans, ensuring you clearly understand your options. So, let’s get started, or jump straight to our top recommendations.</p>

          <ul className="flex flex-col md:flex-row gap-[15px] md:gap-[0px] max-w-[220px] m-[10px_auto_0] md:max-w-[660px] md:mt-[35px] md:-mx-[30px]">
            <AchievementItem number="10k" text="Nam quam nunlandit velemeter" />
            <AchievementItem number="125+" text="Nam quam nunlandit velemeter" />
            <AchievementItem number="5k" text="Nam quam nunlandit velemeter" isLastItem />
          </ul>
        </div>
        <div className="md:flex-[0_0_40%] lg:flex-[0_0_31%]">
          <div className="relative bg-[#fff] border-[3px] border-[#1b7dd8] rounded-[10px] shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
            <div className="absolute top-[15px] -left-[14px] flex items-center h-[42px] p-[0_28px_0_22px] bg-[#1b7dd8] text-[17px] md:text-[22px] leading-[20px] md:leading-[22px] text-[#fff] font-bold">
              <span className="absolute left-[0px] -bottom-[12px] border-t-[12px] border-t-[#1160aa] border-l-[12px] border-l-[transparent]"></span>
              Editor Choice 2025
              <span className="absolute -right-[17px] flex -rotate-90 w-0 h-0 border-[21px] border-b-[#fff] border-t-[0px] border-b-[8px] border-[transparent]"></span>
            </div>
            <div className="p-[80px_20px_25px] rounded-[10px_10px_0_0]">
              <Image
                src={post.product1.logo as string}
                width={328}
                height={148}
                alt="Top seal"
                className="max-w-[188px] mx-[auto] mb-[25px]"
              />
              <div className="text-center">
                <span className="text-[15px] leading-[15px] font-semibold">Excellent</span>
                <span className="inline-flex mx-[6px] p-[10px_8px] bg-[#1b7dd8] rounded-[2px] text-[16px] leading-[16px] text-[#fff] font-bold">{post.product1.rating}</span>
                <span className="text-[11px] leading-[15px] text-[#636363]">Based on 147 reviews</span>
              </div>
            </div>
            <div className="flex flex-col items-center p-[20px_20px_30px] bg-[#f9f9f9] rounded-[0_0_10px_10px]">
              <ul className="flex flex-col gap-[8px] mb-[20px]">
                {getPoints(post.product1).map((el) => (
                  <li key={el} className="flex items-start gap-[10px] text-[15px] lg:text-[16px] leading-[20px]">
                    <Image
                      src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/f78a7475-4711-4fef-6bb4-5f430844a600/public"
                      width={30}
                      height={30}
                      alt="Check icon"
                      className="w-[14px] md:w-[12px] lg:w-[17px] mt-[2px] md:mt-[3px] lg:mt-[4px]"
                    />
                    {el}
                  </li>
                ))}
              </ul>
              <AppButton classes="w-full max-w-[196px]" url={post.product1.cta} target="_blank">Visit</AppButton>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ReviewWinningProduct;