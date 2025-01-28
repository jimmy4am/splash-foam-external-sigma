import React from "react";
import Image from "next/image";

import { SalesPageType } from "@/interfaces/salesPage";
import SectionTitle from "@/app/_components/sales/sales-4/_components/section-title";
import BuyButton from "@/app/_components/sales/sales-4/_components/buy-button";
import SalesStepsSingleItem from "@/app/_components/sales/sales-4/sales-steps/sales-steps-single-item";
import AppSection from "@/app/_components/sales/sales-4/_components/app-section";

type Props = {
    info: SalesPageType;
};

const SalesSteps = ({ info }: Props) => {
    return (
        <AppSection classes="bg-[#e7f4f9]">
            <div className="flex justify-center text-center pt-[28px]">
                <SectionTitle>
                    {info.splitcompare.heading2top}
                    <span className="absolute right-[20px] md:-right-[10px] lg:-right-[0] -top-[30px] md:-top-[37px] lg:-top-[45px] flex flex-col items-end text-[14px] md:text-[15px] lg:text-[18px] leading-[16px] md:leading-[20px] lg:leading-[24px] text-[#000] font-bold">
                        <span className="mb-[12px]">{info.splitcompare.headingLabel}</span>
                        <Image
                            style={{ transform: 'rotateY(190deg)'}}
                            className="w-[26px] md:w-[33px] lg:w-[40px] mr-[15px] md:mr-[55px] lg:mr-[45px]"
                            src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/5c716bf6-169f-40ca-0d06-ab8ba04c0a00/public" width={40} height={40} alt="Arrow icon"
                        />
                    </span>
                    <br/>
                    {info.splitcompare.heading2bot}
                </SectionTitle>
            </div>
            <p className="w-full max-w-[740px] mx-[auto] mb-[30px] md:mb-[40px] text-center text-[16px] md:text-[17px] lg:text-[18px] leading-[24px] md:leading-[25px] lg:leading-[26px] tracking-[0.2px] md:tracking-[0.3px]">{info.splitcompare.subheading2}</p>
            <div className="w-full max-w-[1080px] mx-[auto] flex flex-col md:flex-row gap-[20px] lg:gap-[30px] xl:gap-[40px] mb-[10px]">
                <SalesStepsSingleItem step={1} img={info.splitcompare.step1Img} title={info.splitcompare.step1Title} text={info.splitcompare.step1Text} />
                <SalesStepsSingleItem step={2} img={info.splitcompare.step2Img} title={info.splitcompare.step2Title} text={info.splitcompare.step2Text} />
                <SalesStepsSingleItem step={3} img={info.splitcompare.step3Img} title={info.splitcompare.step3Title} text={info.splitcompare.step3Text} />
            </div>

            <div className="w-full max-w-[366px] md:max-w-[410px] mx-[auto]  mt-[30px] md:mt-[40px]">
                <BuyButton info={info} />
            </div>
        </AppSection>
    );
};

export default SalesSteps;