import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { siteProduct } from "@/lib/site-info";

import { SalesPageType } from "@/interfaces/salesPage";
import SalesHeroRating from "@/app/_components/sales/sales-3/sales-hero/sales-hero-rating";
import BuyButton from "@/app/_components/sales/sales-3/_components/buy-button";
import SalesHeroList from "@/app/_components/sales/sales-3/sales-hero/sales-hero-list";
import SalesHeroReview from "@/app/_components/sales/sales-3/sales-hero/sales-hero-review";

const inter = Inter({ subsets: ["latin"] });

type Props = {
    info: SalesPageType;
};

const SalesHero = ({ info }: Props) => {
    return (
        <section className={`w-full pt-[15px] pb-[35px] md:pt-[40px] md:pb-[40px] lg:pt-[45px] lg:pb-[50px] bg-[linear-gradient(180deg,_#fff_30%,_#f4f7f9_50%)] md:bg-none md:bg-[#f4f7f9] ${inter.className}`}>
            <div className="w-full max-w-[1200px] mx-[auto] px-4">
                <div className="hidden md:flex w-full md:mb-[20px]">
                    <SalesHeroRating />
                </div>

                <div className="flex flex-col md:flex-row md:justify-between">
                    <div className="md:w-[58%] lg:w-[55%] xl:w-[51%] flex flex-col items-center md:items-start">
                        <h1 className="text-center md:text-left text-[34px] leading-[38px] md:text-[43px] md:leading-[52px] lg:text-[55px] lg:leading-[65px] xl:text-[60px] xl:leading-[62px] font-extrabold">
                            <span className="inline-flex">{info.h1_top}</span>
                            <span className="bg-[linear-gradient(180deg,_transparent_51%,_#ffe400_51%,_#ffe400_85%,_transparent_20%)]">{info.h1_bot}</span>
                        </h1>
                        <div className="md:hidden mt-[15px]">
                            <SalesHeroRating />
                        </div>
                        <div className="md:hidden mt-[15px]">
                            <Image src={info.header.productImage} alt={siteProduct} width={1200} height={1200} />
                        </div>
                        <div className="mt-[10px] md:mt-[20px] text-[16px] leading-[22px] md:text-[17px] md:leading-[25px] lg:text-[18px] lg:leading-[26px] md:tracking-[0.3px] text-[#000] font-medium">
                            {info.header.top_highlight}
                        </div>
                        <div className="order-5 md:order-none max-w-[326px] md:max-w-[365px] mt-[15px]">
                            <SalesHeroList info={info} />
                        </div>
                        <div className="w-full max-w-[366px] md:max-w-[410px] mt-[30px] md:mt-[40px]">
                            <BuyButton info={info} />
                        </div>
                        <div className="md:hidden order-10 w-full mt-[25px]">
                            <SalesHeroReview info={info} />
                        </div>
                    </div>
                    <div className="hidden md:block md:w-[38%] lg:w-[43%] xl:w-[47%]">
                        <Image src={info.header.productImage} alt={siteProduct} width={1200}  height={1200}  />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SalesHero;
