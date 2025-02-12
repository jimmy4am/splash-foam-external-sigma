import React from "react";
import { Outfit } from "next/font/google";

import { siteProduct } from "@/lib/site-info";
import { SalesPageType } from "@/interfaces/salesPage";
import AppButton from "@/app/_components/sales/sales-4/_components/app-button";
import EditImage from "@/app/_components/edit-image";

const outfit = Outfit({ subsets: ["latin"] });

type Props = {
  info: SalesPageType;
  setCurrentPost: (post: SalesPageType) => void;
};

const SalesHeaderEdit = ({ info, setCurrentPost }: Props) => {
  return (
    <>
      <div className={`w-full p-[10px_0_8px] text-center bg-[#ffe56e] text-[12px] md:text-[14px] leading-[16px] md:leading-[17px] tracking-[0.5px] font-bold uppercase ${outfit.className}`}>
        Save Up To 50% + Get Free Shipping
      </div>

      <div className="w-full sticky -top-[1px] z-50 h-[55px] md:h-[85px] flex justify-center items-center bg-[#fff] shadow-[0_3px_4px_0px_rgba(0,0,0,0.1)]">
        <div className="w-full max-w-[1200px] px-4 py-2 flex justify-center md:justify-between items-center">
          <EditImage
            className="w-[95px] md:w-[142px]"
            src={info.logo}
            alt={siteProduct}
            width={142}
            height={142}
            post={info}
            setPost={setCurrentPost}
            field="logo"
          />
          <AppButton url={info.cta} classes={'hidden md:flex md:!h-[55px] md:!text-[17px] !font-bold !tracking-[0]'}>
            Claim 50% OFF Today
          </AppButton>
        </div>
      </div>
    </>
  );
};

export default SalesHeaderEdit;