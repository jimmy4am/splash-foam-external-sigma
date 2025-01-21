import React from "react";
import Image from "next/image";

import { SalesPageType } from "@/interfaces/salesPage";
import SectionTitle from "@/app/_components/sales/sales-3/_components/section-title";
import BuyButton from "@/app/_components/sales/sales-3/_components/buy-button";
import SalesComparisonItem from "@/app/_components/sales/sales-3/sales-comparison/sales-comparison-item";
import SalesComparisonHighlight from "@/app/_components/sales/sales-3/sales-comparison/sales-comparison-highlight";

type Props = {
    info: SalesPageType;
};

const SalesComparison = ({ info }: Props) => {
    return (
        <section className="w-full p-[30px_0_35px] md:p-[50px_0_60px] lg:p-[60px_0_70px] bg-[#e7f4f9]">
            <div className="w-full max-w-[1200px] mx-[auto] px-4">
                <div className="flex justify-center text-center pt-[28px]">
                    <SectionTitle>
                        {info.specgrid.heading}
                        <span className="absolute -right-[30px] md:-right-[100px] -top-[30px] md:-top-[37px] lg:-top-[45px] flex flex-col items-end text-[14px] md:text-[15px] lg:text-[18px] leading-[16px] md:leading-[20px] lg:leading-[24px] text-[#000] font-bold">
                            <span className="mb-[12px]">Compare & See</span>
                            <Image
                                style={{ transform: 'rotateY(190deg)'}}
                                className="w-[26px] md:w-[33px] lg:w-[40px] mr-[30px] md:mr-[55px] lg:mr-[45px]"
                                src="/images/template-3/common-heading-arw.png" width={40} height={40} alt="Arrow icon"
                            />
                        </span>
                        <br className="md:hidden"/>
                        {info.specgrid.headingend}
                    </SectionTitle>
                </div>
                <div className="relative w-full max-w-[770px] flex gap-[1px] mx-[auto] mb-[35px] md:mb-[45px] bg-[#dbdddd] border-[1px] border-[#dbdddd] rounded-[20px] overflow-hidden">
                    <span className="absolute top-[19%] md:top-[20%] left-[50%] -translate-x-[50%] w-[38px] md:w-[40px] h-[38px] md:h-[40px] bg-[#211f62] rounded-[50%] text-center text-[16px] leading-[38px] md:leading-[40px] text-[#fff] uppercase font-medium">vs</span>
                    <SalesComparisonItem info={info} img={info.specgrid.productImg} label="Splash Foam" classes="bg-[#fff]" icon="/images/template-3/compare-thik.png" />
                    <SalesComparisonItem info={info} img={info.specgrid.otherImg} label="Other Brands" classes="bg-[#eef4f7]" icon="/images/template-3/compare-wrong.png" />
                </div>

                <ul className="w-full max-w-[1060px] mx-[auto] flex flex-col md:flex-row gap-[20px] lg:gap-[30px] xl:gap-[40px]">
                    <SalesComparisonHighlight icon={info.highlights.icon1} title={info.highlights.head1} text={info.highlights.text1} />
                    <SalesComparisonHighlight icon={info.highlights.icon2} title={info.highlights.head2} text={info.highlights.text2} />
                    <SalesComparisonHighlight icon={info.highlights.icon3} title={info.highlights.head3} text={info.highlights.text3} />
                </ul>

                <div className="w-full max-w-[366px] md:max-w-[410px] mx-[auto]  mt-[30px] md:mt-[40px]">
                    <BuyButton info={info} />
                </div>
            </div>
        </section>
    );
};

export default SalesComparison;