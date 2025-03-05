import React from "react";
import Image from "next/image";
import { Figtree } from "next/font/google";

import { SalesPageType } from "@/interfaces/salesPage";

const figtree = Figtree({ subsets: ["latin"] });

type Props = {
  info: SalesPageType;
};

const SalesHeader = ({ info }: Props) => {
  return (
    <header>
      <div className="py-[6px] md:py-[10px] lg:py-[15px] bg-[#000]">
        <div className="w-full max-w-[1200px] flex items-center justify-between mx-[auto] px-[15px]">
          <a className="flex" href="#">
            <Image
              className="w-[88px] lg:w-[94px]"
              src={info.logo}
              width={200}
              height={102}
              alt={info.name}
            />
          </a>
          <a href={info.cta} className={`inline-flex p-[0_20px] md:p-[0_26px] bg-[#e97900] rounded-[3px] ${figtree.className} text-[14px] md:text-[16px] leading-[36px] md:leading-[42px] text-[#fff] tracking-[0.5px] font-bold uppercase transition ease-in-out duration-250 hover:opacity-80`}>
            order now
          </a>
        </div>
      </div>
      <div className="py-[5px] md:py-[6px] bg-[#fff]">
        <div className="w-full max-w-[1200px] flex items-center justify-between mx-[auto] px-[15px] text-[10px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[22px] lg:leading-[24px] text-#[000] font-medium tracking-[0.3px] uppercase">
          <div className="flex items-center gap-[2px] md:gap-[5px]">
            <Image
              className="w-[15px] md:w-[23px]"
              src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/6b031546-6437-4b84-49a4-21ac345e8700/public"
              width={46}
              height={36}
              alt="Free Shipping"
            />
            <span>Free Shipping</span>
          </div>
          <div className="flex items-center gap-[2px] md:gap-[5px]">
            <Image
              className="w-[15px] md:w-[23px]"
              src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/220a3178-32af-4c6b-2bbf-6294f8654800/public"
              width={46}
              height={36}
              alt="100% Guarantee"
            />
            <span>100% Guarantee</span>
          </div>
          <div className="flex items-center gap-[2px] md:gap-[5px]">
            <Image
              className="w-[15px] md:w-[23px]"
              src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/88f39484-790e-436e-8c8b-ac6ba4862100/public"
              width={46}
              height={36}
              alt="Easy Return"
            />
            <span>Easy Return</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SalesHeader;