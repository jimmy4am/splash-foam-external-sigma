import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

import AppButton from "@/app/_components/review/review-6/_components/app-button";
import { getRatingImage, getRatingName } from "@/app/_components/review/review-6/review-body/utils";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  number: number;
  name: string;
  image: string;
  text: string[];
  rating: string;
  cta: string;
  specialCta?: string;
};

const ReviewCard = ({ number, name, image, text, rating, cta, specialCta }: Props) => {
  const topProduct = number === 1;

  return (
    <div className="flex-[1_1_auto] flex items-center gap-[15px]">
      <div className={`hidden md:flex items-center justify-center flex-[0_0_40px] w-[40px] h-[40px] border-[2px] rounded-[50%] md:text-[28px] lg:text-[30px] leading-[34px] lg:leading-[35px] font-bold ${topProduct ? 'text-[#197dd0] border-[#197dd0]' : 'text-[#000] border-[#000]'}`}>{number}</div>

      <div className={`relative flex-[1_1_auto] md:flex xl:justify-between p-[12px_15px_20px] md:p-[25px_15px] lg:p-[25px_20px_25px] bg-[#fff] rounded-[10px] ${inter.className} ${topProduct ? 'border-[2px] border-[#028fd6] shadow-[0_0px_25px_-5px_rgba(0,0,0,0.5)]' : 'border-[1px] border-[#ccc]'}`}>
        <div className="md:flex-[0_0_28%] lg:flex-[0_0_20%] flex items-center md:justify-center md:flex-col gap-[15px] mb-[32px] md:mb-[0] p-[0_0_12px_0] md:p-[0_15px_0_0] border-b-[1px] md:border-b-[0px] md:border-r-[1px] border-[#e8e8e8]">
          <div className={`md:hidden flex items-center justify-center flex-[0_0_30px] w-[30px] h-[30px] border-[2px] rounded-[50%] text-[20px] leading-[24px] font-bold ${topProduct ? 'text-[#197dd0] border-[#197dd0]' : 'text-[#000] border-[#000]'}`}>{number}</div>
          <div className="flex flex-col md:items center">
            {topProduct && <div className="absolute left-[30px] -top-[12px] md:static max-w-[150px] md:max-w-[none] flex items-center justify-center h-[25px] md:mb-[25px] px-[19px] bg-[#ffa018] rounded-[100px] text-[13px] md:text-[15px] leading-[15px] md:leading-[17px] text-[#fff] uppercase font-semibold">Top choice</div>}
            <Image
              src={image}
              width={160}
              height={160}
              alt={name}
              className="w-[auto] h-[40px] md:mb-[15px]"
            />
            {specialCta && (
              <a href={cta} className="text-center text-[14px] md:text-[18px] leading-[14px] md:leading-[18px] text-[#107fdc] underline hover:no-underline">
                {specialCta}
              </a>
            )}
          </div>
          <div className="md:hidden flex items-center justify-center flex-[0_0_85px] w-[85px] aspect-square border-[1px] ml-[auto]">
            NEW ICON
          </div>
        </div>

        <div className="md:self-center md:flex-[0_0_42%] lg:flex-[0_0_47%] mb-[25px] md:mb-[0px] md:pl-[15px] lg:pl-[30px]">
          <p className="mb-[15px] text-[14px] md:text-[12px] lg:text-[15px] leading-[22px] md:leading-[17px] lg:leading-[23px]">Lorem ipsum dolor sit am consectetuer adipiscing elitenean commodo ligula eget dolor. Aenean massa.  </p>
          <div className="md:flex md:items-center">
            <ul className="md:flex-[1_1_auto] flex flex-col gap-[7px] lg:gap-[6px]">
              {text.map((el) => (
                <li key={el} className="flex items-start gap-[10px] text-[15px] md:text-[12px] lg:text-[16px] leading-[17px] lg:leading-[24px]">
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
            <div className="hidden md:flex md:items-center justify-center md:flex-[0_0_85px] lg:flex-[0_0_115px] aspect-square border-[1px]">
              NEW ICON
            </div>
          </div>
        </div>

        <div className="md:self-center md:flex-[0_0_29%] md:px-[15px] lg:px-[30px]">
          <div className="flex flex-col items-center p-[15px_15px_20px] md:p-[10px] lg:p-[15px_20px_20px] bg-[#fcfcfc] border-[1px] border-[#e7e7e7] rounded-[8px]">
            <div className="text-[#ffb22b] text-[18px]">{getRatingImage(Number(rating))}</div>
            <p className={`m-[3px_auto_6px] md:m-[6px_auto] text-[26px] lg:text-[32px] leading-[26px] lg:leading-[34px] font-bold ${topProduct ? 'text-[#197dd0]' : 'text-[#000]'}`}>{rating}/10</p>
            <p className="mb-[10px] md:mb-[20px] text-[14px] lg:text-[16px] leading-[18px] lg:leading-[20px]">{getRatingName(Number(rating))}</p>
            <AppButton classes="w-full" type={topProduct ? 'error' : 'info'} url={cta} target="_blank">Visit site</AppButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;