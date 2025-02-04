import React from "react";
import Image from "next/image";
import { Outfit } from "next/font/google";

import { CountDownKeysType } from "@/app/_components/sales/CountDown/types";
import useCountDown from "@/app/_components/sales/CountDown/useCountDown";

const outfit = Outfit({ subsets: ["latin"] });

const SalesHeaderCountDown = () => {
  const { data, message } = useCountDown();

  return (
    <div className="max-w-[380px] sm:max-w-[330px] md:max-w-[none] mx-[auto] flex justify-center items-center gap-6">
      <p className="flex items-center gap-2 text-[12px] leading-[16px] md:text-[14px] md:leading-[14px] tracking-[0.5px] font-bold text-[#000] uppercase">
        <Image src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/e33c6bf4-cdfd-4ba5-53dd-5ab7d33dd500/public" alt="Sale icon" width={23} height={23} />
        <span>Limited Time Offer <br className="md:hidden" /> Save Up To 60% Off</span>
      </p>

      {message ? (
        <p className="w-[50%] md:w-[auto] text-[11px] leading-[14px] md:text-[14px] tracking-[0.5px] font-bold text-[#000] uppercase">{message}</p>
      ) : (
        <div className="w-[140px] flex justify-start items-center gap-2">
          {Object.keys(data).map((key) => (
            <div className={`w-[32px] h-[32px] flex flex-col justify-center items-center bg-[#fff] rounded-md ${outfit.className} shadow-[0px_0px_8px_2px_#c7b356]`}>
              <span className="text-[12px] leading-[12px] text-[#000] font-bold">{data[key as CountDownKeysType]}</span>
              <span className="text-[6px] leading-[10px] text-[#444] uppercase">{key}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
};

export default SalesHeaderCountDown;
