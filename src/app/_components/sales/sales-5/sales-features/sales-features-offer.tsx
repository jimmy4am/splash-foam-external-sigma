import React from "react";
import Image from "next/image";
import { Figtree } from "next/font/google";

import { SalesPageType } from "@/interfaces/salesPage";
import { CountDownKeysType } from "@/app/_components/sales/CountDown/types";
import useCountDown from "@/app/_components/sales/CountDown/useCountDown";
import AppRating from "@/app/_components/sales/sales-5/_components/app-rating";
import AppButton from "@/app/_components/sales/sales-5/_components/app-button";

const figtree = Figtree({ subsets: ["latin"] });

type Props = {
  info: SalesPageType;
};

const names: Record<CountDownKeysType, string> = {
  hours: 'hrs.',
  minutes: 'min.',
  seconds: 'sec.',
}

const SalesFeaturesOffer = ({ info }: Props) => {
  const { data } = useCountDown({initialLimit: {hours: 10, minutes: 0, seconds: 0}});

  return (
    <div className="md:hidden -mx-[15px] p-[40px_15px_30px] bg-[#f6f6f6]">
      <div className="relative flex flex-col items-center p-[20px_20px_25px] border-[1px] border-[#000] text-center">
        <span className="absolute top-0 left-[50%] -translate-x-[50%] -translate-y-[50%] p-[9px_14px] bg-[#fff] border-[1px] border-[#000] text-[10px] leading-[1] font-semibold tracking-[1px] uppercase">Limited Time Offer!!!</span>
        <Image
          className="mb-[10px]"
          src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/4ca09c94-d756-4cb0-1cbc-c48096c85a00/public"
          width={166}
          height={197}
          alt="Image"
        />
        <h3 className={`mb-[15px] text-[27px] leading-[35px] text-[#000] ${figtree.className}`}>Shop XAll Spin Scrubber & Save 70% OFF!</h3>
        <div className="flex items-start justify-center mb-[20px]">
          {Object.keys(data).map((key) => (
            <>
              <div className={`w-[50px]`}>
                <span className="w-full h-[38px] flex items-center justify-center bg-[#000] text-[18px] leading-[18px] text-[#fff] font-bold">{data[key as CountDownKeysType]}</span>
                <span className="mt-[6px] text-[10px] leading-[10px] text-[#000] uppercase font-bold">{names[key as CountDownKeysType]}</span>
              </div>
              {key !== 'seconds' && <span className="w-[20px] text-center text-[18px] leading-[38px] text-[#000] font-bold">:</span>}
            </>
          ))}
        </div>
        <p className="flex items-center justify-center gap-[5px] mb-[10px] text-[14px] leading-[1] text-[#000] font-medium">
          <AppRating />
          Over 40,000+ Pairs Sold
        </p>
        <AppButton classes="w-full justify-center !bg-[#000] rounded-[0]" url={info.cta}>Claim Offer Now</AppButton>
      </div>
    </div>
  );
};

export default SalesFeaturesOffer;