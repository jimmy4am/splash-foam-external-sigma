import React from "react";
import { Inter } from "next/font/google";
import { siteProduct } from "@/lib/site-info";

import { SalesPageType } from "@/interfaces/salesPage";
import EditImage from "@/app/_components/edit-image";
import SalesHeroRating from "@/app/_components/sales/sales-3/sales-hero/sales-hero-rating";
import BuyButton from "@/app/_components/sales/sales-3/_components/buy-button";
import SalesHeroListEdit from "@/app/_components/sales/sales-3/sales-hero/sales-hero-list-edit";
import SalesHeroReviewEdit from "@/app/_components/sales/sales-3/sales-hero/sales-hero-review-edit";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  info: SalesPageType;
  setCurrentPost: (post: SalesPageType) => void;
};

const SalesHeroEdit = ({ info, setCurrentPost }: Props) => {
  return (
    <section className={`w-full pt-[15px] pb-[35px] md:pt-[40px] md:pb-[40px] lg:pt-[45px] lg:pb-[50px] bg-[linear-gradient(180deg,_#fff_30%,_#f4f7f9_50%)] md:bg-none md:bg-[#f4f7f9] ${inter.className}`}>
      <div className="w-full max-w-[1200px] mx-[auto] px-4">
        <div className="hidden md:flex w-full md:mb-[20px]">
          <SalesHeroRating />
        </div>

        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="md:w-[58%] lg:w-[55%] xl:w-[51%] flex flex-col items-center md:items-start">
            <h1 className="max-w-[100%] text-center md:text-left text-[34px] leading-[38px] md:text-[43px] md:leading-[52px] lg:text-[55px] lg:leading-[65px] xl:text-[60px] xl:leading-[62px] font-extrabold">
              <textarea
                className="editable-input w-full"
                onChange={(e) => {
                  setCurrentPost({
                    ...info,
                    h1_top: e.target.value,
                  });
                }}
                value={info.h1_top}
                placeholder="Hero title top line"
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
                placeholder="Hero title bottom line"
              />
            </h1>
            <div className="md:hidden mt-[15px]">
              <SalesHeroRating />
            </div>
            <div className="md:hidden mt-[15px]">
              <EditImage
                src={info.header.productImage}
                alt={siteProduct}
                width={1200}
                height={1200}
                post={info}
                setPost={setCurrentPost}
                field="header.productImage"
              />
            </div>
            <div className="w-full mt-[10px] md:mt-[20px] text-[16px] leading-[22px] md:text-[17px] md:leading-[25px] lg:text-[18px] lg:leading-[26px] md:tracking-[0.3px] text-[#000] font-medium">
              <textarea
                className="editable-input"
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
                placeholder="Top highlight"
              />
            </div>
            <div className="order-5 md:order-none max-w-[326px] md:max-w-[365px] mt-[15px]">
              <SalesHeroListEdit info={info} setCurrentPost={setCurrentPost} />
            </div>
            <div className="w-full max-w-[366px] md:max-w-[410px] mt-[30px] md:mt-[40px]">
              <BuyButton info={info} />
            </div>
            <div className="md:hidden order-10 w-full mt-[25px]">
              <SalesHeroReviewEdit info={info} setCurrentPost={setCurrentPost} />
            </div>
          </div>
          <div className="hidden md:block md:w-[38%] lg:w-[43%] xl:w-[47%]">
            <EditImage
              src={info.header.productImage}
              alt={siteProduct}
              width={1200}
              height={1200}
              post={info}
              setPost={setCurrentPost}
              field="header.productImage"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesHeroEdit;