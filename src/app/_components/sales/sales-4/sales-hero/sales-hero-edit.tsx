import React from "react";
import Image from "next/image";
import { Inter, Outfit } from "next/font/google";

import { siteProduct } from "@/lib/site-info";
import { SalesPageType } from "@/interfaces/salesPage";
import BuyButton from "@/app/_components/sales/sales-4/_components/buy-button";
import SalesHeroListEdit from "@/app/_components/sales/sales-4/sales-hero/sales-hero-list-edit";
import SalesHeroStepsEdit from "@/app/_components/sales/sales-4/sales-hero/sales-hero-steps-edit";
import SalesHeroSliderEdit from "@/app/_components/sales/sales-4/sales-hero/sales-hero-slider-edit";
import EditImage from "@/app/_components/edit-image";

const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });

type Props = {
  info: SalesPageType;
  setCurrentPost: (post: SalesPageType) => void;
};

const SalesHeroEdit = ({ info, setCurrentPost }: Props) => {
  return (
    <section className={`w-full pt-[15px] pb-[35px] md:pt-[40px] md:pb-[40px] lg:pt-[45px] lg:pb-[50px] bg-[linear-gradient(180deg,_#fff_30%,_#f4f7f9_50%)] md:bg-none md:bg-[#f4f7f9] ${inter.className}`}>
      <div className="w-full max-w-[1200px] mx-[auto] px-4">
        <div className="flex flex-col md:flex-row-reverse md:justify-between">
          <div className="md:w-[38%] lg:w-[43%] xl:w-[42%] mb-[30px]">
            <EditImage
              src={info.header.productImage}
              alt={siteProduct}
              width={1200}
              height={1200}
              post={info}
              setPost={setCurrentPost}
              field="header.productImage"
            />
            <div className="hidden md:block">
              <SalesHeroStepsEdit info={info} setCurrentPost={setCurrentPost} />
            </div>
          </div>

          <div className="md:w-[58%] lg:w-[55%] flex flex-col items-center md:items-start">
            <div className="flex items-center justify-center gap-[8px] md:gap-[10px] mb-[16px] md:mb-[20px]">
              <Image className="w-[75px] md:w-[105px]" src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/49253e46-369e-4742-d9f4-c870b1722100/public" alt="Star rating" width={75}  height={12}  />
              <p className="text-[12px] md:text-[18px] leading-[12px] md:leading-[18px] font-bold tracking-[0.5px]">4.9 by 21,952+ Reviews</p>
            </div>
            <h1 className={`bg-[#0262b4] bg-[linear-gradient(90deg,_#0262b4_5%,_#1b96d3_30%,_#1b96d3_60%,_#0262b4_95%)] text-[transparent] bg-clip-text text-center md:text-left text-[28px] leading-[35px] md:text-[34px] md:leading-[40px] lg:text-[46px] lg:leading-[54px] xl:text-[53px] xl:leading-[57px] font-extrabold uppercase ${outfit.className}`}>
              <textarea
                className="editable-input w-full"
                onChange={(e) => {
                  setCurrentPost({
                    ...info,
                    h1_top: e.target.value,
                  });
                }}
                value={info.h1_top}
                placeholder="Title top"
              />
              <textarea
                className="editable-input w-full"
                onChange={(e) => {
                  setCurrentPost({
                    ...info,
                    h1_bot: e.target.value,
                  });
                }}
                value={info.h1_bot}
                placeholder="Title bottom"
              />
            </h1>
            <div className="w-full mt-[10px] md:mt-[20px] text-center md:text-left text-[14px] leading-[20px] md:text-[17px] md:leading-[25px] lg:text-[18px] lg:leading-[26px] tracking-[0.2px] md:tracking-[0.5px] font-medium">
              <textarea
                className="editable-input w-full"
                onChange={(e) => {
                  setCurrentPost({
                    ...info,
                    header: {
                      ...info.header,
                      top_highlight: e.target.value,
                    },
                  });
                }}
                value={info.header.top_highlight}
                placeholder="Highlight"
              />
            </div>
            <div className="flex items-start justify-between w-full lg:gap-[15px] xl:gap-[30px]">
              <div className="w-full md:max-w-[353px] lg:max-w-[400px] mt-[15px]">
                <SalesHeroListEdit info={info} setCurrentPost={setCurrentPost} />
              </div>
              <div className="hidden lg:flex flex-col gap=[12px] mt-[15px] p-[10px] xl:p[15px] rounded-[10px] shadow-[0px_5px_8px_2px_#d4d4d4]">
                <div>
                  <EditImage
                    className="mb-[7px] rounded-[9px]"
                    src={info.header.beforeImageSm1}
                    alt="Before"
                    width={143}
                    height={122}
                    post={info}
                    setPost={setCurrentPost}
                    field="header.beforeImageSm1"
                  />
                  <p className="text-center text-[12px] leading-[12px] font-bold uppercase tracking-{0.5px}">Before</p>
                </div>
                <div>
                  <EditImage
                    className="mb-[7px] rounded-[9px]"
                    src={info.header.afterImageSm1}
                    alt="After"
                    width={143}
                    height={122}
                    post={info}
                    setPost={setCurrentPost}
                    field="header.afterImageSm1"
                  />
                  <p className="text-center text-[12px] leading-[12px] font-bold uppercase tracking-{0.5px}">After</p>
                </div>
              </div>
            </div>
            <div className="md:hidden -mx-4 mt-[30px]">
              <SalesHeroStepsEdit info={info} setCurrentPost={setCurrentPost} />
            </div>
            <div className="w-full max-w-[366px] md:max-w-[410px] mt-[30px] md:mt-[40px]">
              <BuyButton info={info} />
            </div>
            <div className="md:hidden w-full mt-[25px]">
              <SalesHeroSliderEdit info={info} setCurrentPost={setCurrentPost} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesHeroEdit;