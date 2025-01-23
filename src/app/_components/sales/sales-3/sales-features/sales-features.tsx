import React from "react";
import Image from "next/image";

import { SalesPageType } from "@/interfaces/salesPage";
import SectionTitle from "@/app/_components/sales/sales-3/_components/section-title";
import BuyButton from "@/app/_components/sales/sales-3/_components/buy-button";
import SalesFeaturesSingleItem from "@/app/_components/sales/sales-3/sales-features/sales-features-single-item";
import AppSection from "../_components/app-section";

type Props = {
    info: SalesPageType;
};

const SalesFeatures = ({ info }: Props) => {
    return (
        <AppSection>
            <div className="max-w-[380px] md:max-w-[590px] mx-[auto] flex justify-center text-center pt-[28px]">
                <SectionTitle>
                    <span className="relative">
                        <span className="absolute -left-[50px] md:-left-[60px] -top-[30px] md:-top-[37px] lg:-top-[45px] flex flex-col items-start text-[14px] md:text-[15px] lg:text-[18px] leading-[16px] md:leading-[20px] lg:leading-[24px] text-[#000] font-bold">
                            <span className="mb-[12px] whitespace-nowrap">{info.slideshow.headingLabel}</span>
                            <Image
                                className="w-[26px] md:w-[33px] lg:w-[40px] ml-[15px]"
                                src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/5c716bf6-169f-40ca-0d06-ab8ba04c0a00/public" width={40} height={40} alt="Arrow icon"
                            />
                        </span>
                    </span>
                    {info.slideshow.heading}
                </SectionTitle>
            </div>
            <p className="w-full max-w-[500px] mx-[auto] mb-[30px] md:mb-[40px] text-center text-[16px] md:text-[17px] lg:text-[18px] leading-[24px] md:leading-[25px] lg:leading-[26px] tracking-[0.2px] md:tracking-[0.3px]">{info.slideshow.subheading}</p>

            <div className="w-full max-w-[1050px] mx-[auto] grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                <SalesFeaturesSingleItem icon={info.slideshow.icon1} title={info.slideshow.title1} text={info.slideshow.text1} />
                <SalesFeaturesSingleItem icon={info.slideshow.icon2} title={info.slideshow.title2} text={info.slideshow.text2} />
                <SalesFeaturesSingleItem icon={info.slideshow.icon3} title={info.slideshow.title3} text={info.slideshow.text3} />
                <SalesFeaturesSingleItem icon={info.slideshow.icon4} title={info.slideshow.title4} text={info.slideshow.text4} />
            </div>

            <div className="w-full max-w-[366px] md:max-w-[410px] mx-[auto]  mt-[30px] md:mt-[40px]">
                <BuyButton info={info} />
            </div>
        </AppSection>
    );
};

export default SalesFeatures;