import React from "react";
import Image from "next/image";
import { Inter, Outfit } from "next/font/google";

import { siteProduct } from "@/lib/site-info";
import { SalesPageType } from "@/interfaces/salesPage";
import BuyButton from "@/app/_components/sales/sales-4/_components/buy-button";
import SalesHeroList from "@/app/_components/sales/sales-4/sales-hero/sales-hero-list";
import SalesHeroSteps from "@/app/_components/sales/sales-4/sales-hero/sales-hero-steps";
import SalesHeroSlider from "@/app/_components/sales/sales-4/sales-hero/sales-hero-slider";

const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });

type Props = {
  info: SalesPageType;
};

const SalesHero = ({ info }: Props) => {
  return (
    <section className={`w-full pt-[15px] pb-[35px] md:pt-[40px] md:pb-[40px] lg:pt-[45px] lg:pb-[50px] bg-[linear-gradient(180deg,_#fff_30%,_#f4f7f9_50%)] md:bg-none md:bg-[#f4f7f9] ${inter.className}`}>
      <div className="w-full max-w-[1200px] mx-[auto] px-4">
        <div className="flex flex-col md:flex-row-reverse md:justify-between">
          <div className="md:w-[38%] lg:w-[43%] xl:w-[42%] mb-[30px]">
            <Image src={info.header.productImage} alt={siteProduct} width={1200}  height={1200}  />
            <div className="hidden md:block">
              <SalesHeroSteps info={info} />
            </div>
          </div>

          <div className="md:w-[58%] lg:w-[55%] flex flex-col items-center md:items-start">
            <div className="flex items-center justify-center gap-[8px] md:gap-[10px] mb-[16px] md:mb-[20px]">
              <Image className="w-[75px] md:w-[105px]" src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/49253e46-369e-4742-d9f4-c870b1722100/public" alt="Star rating" width={75}  height={12}  />
              <p className="text-[12px] md:text-[18px] leading-[12px] md:leading-[18px] font-bold tracking-[0.5px]">4.9 by 21,952+ Reviews</p>
            </div>
            <h1 className={`bg-[#0262b4] bg-[linear-gradient(90deg,_#0262b4_5%,_#1b96d3_30%,_#1b96d3_60%,_#0262b4_95%)] text-[transparent] bg-clip-text text-center md:text-left text-[28px] leading-[35px] md:text-[34px] md:leading-[40px] lg:text-[46px] lg:leading-[54px] xl:text-[53px] xl:leading-[57px] font-extrabold uppercase ${outfit.className}`}>
              {info.h1_top} {info.h1_bot}
            </h1>
            <div className="mt-[10px] md:mt-[20px] text-center md:text-left text-[14px] leading-[20px] md:text-[17px] md:leading-[25px] lg:text-[18px] lg:leading-[26px] tracking-[0.2px] md:tracking-[0.5px] font-medium">
              {info.header.top_highlight}
            </div>
            <div className="flex items-start justify-between w-full lg:gap-[15px] xl:gap-[30px]">
              <div className="md:max-w-[353px] lg:max-w-[400px] mt-[15px]">
                <SalesHeroList info={info} />
              </div>
              <div className="hidden lg:flex flex-col gap=[12px] mt-[15px] p-[10px] xl:p[15px] rounded-[10px] shadow-[0px_5px_8px_2px_#d4d4d4]">
                <div>
                  <Image className="mb-[7px] rounded-[9px]" src={info.header.beforeImageSm1} width={143} height={122} alt="Before" />
                  <p className="text-center text-[12px] leading-[12px] font-bold uppercase tracking-{0.5px}">Before</p>
                </div>
                <div>
                  <Image className="mb-[7px] rounded-[9px]" src={info.header.afterImageSm1} width={143} height={122} alt="After" />
                  <p className="text-center text-[12px] leading-[12px] font-bold uppercase tracking-{0.5px}">After</p>
                </div>
              </div>
            </div>
            <div className="md:hidden -mx-4 mt-[30px]">
              <SalesHeroSteps info={info} />
            </div>
            <div className="w-full max-w-[366px] md:max-w-[410px] mt-[30px] md:mt-[40px]">
              <BuyButton info={info} />
            </div>
            <div className="md:hidden w-full mt-[25px]">
              <SalesHeroSlider info={info} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesHero;