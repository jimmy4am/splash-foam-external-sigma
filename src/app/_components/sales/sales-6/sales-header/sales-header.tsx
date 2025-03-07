import React from "react";
import Image from "next/image";

import { SalesPageType } from "@/interfaces/salesPage";
import {CountDownKeysType} from "@/app/_components/sales/CountDown/types";
import useCountDown from "@/app/_components/sales/CountDown/useCountDown";

type Props = {
  info: SalesPageType;
};

const names: Record<CountDownKeysType, string> = {
  hours: 'hrs.',
  minutes: 'min.',
  seconds: 'sec.',
}

const SalesHeader = ({ info }: Props) => {
  const { data, message } = useCountDown({initialLimit: {hours: 7, minutes: 0, seconds: 0}});

  return (
    <header>
      <div className="py-[10px] bg-[#ffe56e]">
        <div className="max-w-[380px] sm:max-w-[330px] md:max-w-[none] mx-[auto] flex justify-center items-center gap-[15px] md:gap-[20px]">
          <p className="flex items-center gap-[8px] md:gap-[6px] text-[13px] leading-[16px] md:text-[14px] md:leading-[18px] tracking-[0.5px] font-semibold text-[#000] uppercase">
            <Image
              className="w-[20px] md:w-[19px]"
              src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/e33c6bf4-cdfd-4ba5-53dd-5ab7d33dd500/public"
              alt="Sale icon"
              width={38}
              height={38}
            />
            <span>Limited Time Offer <br className="md:hidden" /> Save Up To 70% Off</span>
          </p>

          {message ? (
            <p className="w-[50%] md:w-[auto] text-[11px] leading-[14px] md:text-[14px] tracking-[0.5px] font-bold text-[#000] uppercase">{message}</p>
          ) : (
            <div className="inline-flex justify-start items-center gap-[10px]">
              {Object.keys(data).map((key) => (
                <div className={`w-[35px] h-[35px] flex flex-col justify-center items-center py-[2px] bg-[#fff] rounded-[5px] shadow-[0px_0px_8px_2px_rgba(0,0,0,.2)]`}>
                  <span className="text-[16px] leading-[18px] text-[#1f1f1f] font-bold">{data[key as CountDownKeysType]}</span>
                  <span className="text-[8px] leading-[10px] text-[#1f1f1f] font-bold uppercase tracking-[0.5px]">{names[key as CountDownKeysType]}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="py-[10px] md:py-[18px] bg-[#000]">
        <div className="w-full max-w-[1200px] flex items-center justify-between mx-[auto] px-[15px]">
          <a className="flex" href="#">
            <Image
              className="w-[80px] lg:w-[94px]"
              src={info.logo}
              width={188}
              height={96}
              alt={info.name}
            />
          </a>
          <a href={info.cta} className="h-[35px] md:h-[48px] p-[0_24px] md:p-[0_50px] bg-[#e97900] rounded-[100px] text-[14px] md:text-[17px] leading-[35px] md:leading-[48px] text-[#fff] tracking-[0.5px] font-bold uppercase shadow-[0_3px_3px_1px_rgba(0,0,0,0.2)] transition ease-in-out duration-250 hover:opacity-80">
            order now
          </a>
        </div>
      </div>
    </header>
  );
};

export default SalesHeader;