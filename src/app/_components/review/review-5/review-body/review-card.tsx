import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

import AppButton from "@/app/_components/review/review-5/_components/app-button";
import ReviewCardRating from "@/app/_components/review/review-5/review-body/review-card-rating";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  number: number;
  name: string;
  image: string;
  text: string[];
  rating: string;
  cta: string;
  specialCta?: string;
  numbered?: boolean;
};

const ReviewCard = ({ number, name, image, text, rating, cta, specialCta, numbered = true }: Props) => {
  const topProduct = number === 1;

  return (
    <div className="flex-[1_1_auto] flex items-center gap-[12px]">
      {numbered && (
        <div className={`hidden md:flex pl-[8px] md:text-[38px] lg:text-[56px] leading-[38px] lg:leading-[56px] font-bold ${topProduct ? 'text-[#197dd0]' : 'text-[#000]'}`}>{number}</div>
      )}
      <div className={`relative flex-[1_1_auto] md:flex xl:justify-between p-[12px_15px_20px] md:p-[25px_15px] lg:p-[25px_20px_25px] bg-[#fff] rounded-[10px] ${inter.className} ${topProduct ? 'border-[2px] border-[#028fd6] shadow-[0_0px_25px_-5px_rgba(0,0,0,0.5)]' : 'border-[1px] border-[#ccc]'}`}>
        {topProduct && <div className="absolute left-[30px] -top-[34px] flex items-center h-[34px] px-[30px] rounded-[8px_8px_0_0] bg-[linear-gradient(129deg,_#20d6e1_0%,_#018ed6_100%)] text-[16px] leading-[20px] text-[#fff] uppercase font-bold">Top choice</div>}
        <div className="md:flex-[0_0_20%] flex items-center md:justify-center md:flex-col gap-[15px] mb-[20px] md:mb-[0] p-[0_0_12px_0] md:p-[0_15px_0_0] border-b-[1px] md:border-b-[0px] md:border-r-[1px] border-[#e8e8e8]">
          {numbered ? (
            <div className={`md:hidden text-[36px] leading-[38px] font-bold ${topProduct ? 'text-[#197dd0]' : 'text-[#000]'}`}>{number}</div>
          ) : (
            <Image
              src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/c1f91173-6b64-439e-18d0-1ec18ba45e00/public"
              width={176}
              height={176}
              alt="Top seal"
              className="w-[50px] md:w-[88px]"
            />
          )}
          <Image
            src={image}
            width={160}
            height={160}
            alt={name}
            className="w-auto"
          />
          <div className="md:hidden ml-[auto]">
            <ReviewCardRating rating={rating} topProduct={topProduct} />
          </div>
        </div>

        <div className="md:self-center md:flex-[0_0_33%] lg:flex-[0_0_32%]">
          {specialCta && (
            <p className="flex items-start mb-[15px] gap-[8px] md:pl-[15px] lg:pl-[30px] text-[15px] md:text-[12px] lg:text-[16px] leading-[17px] lg:leading-[24px] text-[#d91821]">
              <Image
                src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/e2c927d5-af0b-4b86-ec32-6cd7b6714f00/public"
                width={30}
                height={30}
                alt="Tag icon"
                className="w-[14px] md:w-[12px] lg:w-[17px] mt-[2px] md:mt-[3px] lg:mt-[4px]"
              />
              {specialCta}
            </p>
          )}
          <ul className="flex flex-col gap-[7px] lg:gap-[6px] mb-[20px] md:mb-[0] md:pl-[15px] lg:pl-[30px]">
            {text.map((el) => (
              <li key={el} className="flex items-start gap-[10px] text-[15px] md:text-[12px] lg:text-[16px] leading-[17px] lg:leading-[24px]">
                <Image
                  src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/42fc9570-58bf-4996-8f1f-05992315fc00/public"
                  width={30}
                  height={30}
                  alt="Check icon"
                  className="w-[14px] md:w-[12px] lg:w-[17px] mt-[2px] md:mt-[3px] lg:mt-[4px]"
                />
                {el}
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:block md:self-center md:flex-[0_0_20%] md:px-[15px] lg:px-[30px]">
          <ReviewCardRating rating={rating} topProduct={topProduct} />
        </div>

        <div className="md:self-center md:w-[180px] lg:w-[226px]">
          {/*TODO: discuss if we can add new fields 'price scale' (coloured dollar signs) and 'availability' to .md file. Also 'price scale' can be calculated based on price of each product*/}
          <div className="flex items-center justify-evenly md:flex-col mb-[10px] md:mb-[20px]">
            <div className="flex items-center gap-[10px]">
              <span className="text-[13px] lg:text-[14px] leading-[16px] font-bold">Cost: </span>
              <span className="text-[14px] leading-[16px] text-[#c2c2c2] tracking-[0.3px]"><span className="text-[#3cb40d]">$</span>$$$$</span>
              {/*<span className="text-[14px] leading-[16px] text-[#c2c2c2] tracking-[0.3px]"><span className="text-[#ffa42d]">$$</span>$$$</span>*/}
              {/*<span className="text-[14px] leading-[16px] text-[#c2c2c2] tracking-[0.3px]"><span className="text-[#ff0000]">$$$$</span>$</span>*/}
            </div>

            <div className="flex items-center gap-[10px]">
              <span className="text-[13px] lg:text-[14px] leading-[16px] font-bold">Availability: </span>
              <span className="flex items-center gap-[5px]">
                <Image
                  src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/f78a7475-4711-4fef-6bb4-5f430844a600/public"
                  width={10}
                  height={10}
                  alt="Check icon"
                />
                In stock
              </span>
            </div>
          </div>
          <AppButton classes="w-full" type={topProduct ? 'filled' : 'outlined'} url={cta} target="_blank">Visit</AppButton>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;