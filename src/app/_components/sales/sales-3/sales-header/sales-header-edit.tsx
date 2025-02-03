import React from "react";
import { siteProduct } from "@/lib/site-info";

import { SalesPageType } from "@/interfaces/salesPage";
import AppButton from "@/app/_components/sales/sales-3/_components/app-button";
import SalesHeaderCountDown from "@/app/_components/sales/sales-3/sales-header/sales-header-count-down";
import EditImage from "@/app/_components/edit-image";

type Props = {
  info: SalesPageType;
  setCurrentPost: (post: SalesPageType) => void;
};

const SalesHeaderEdit = ({ info, setCurrentPost }: Props) => {
  return (
    <>
        <div className={`w-full flex items-center py-2 md:p-[5px] bg-[#ffe56e] overflow-hidden`}>
            <SalesHeaderCountDown />
        </div>

        <div className="w-full sticky -top-[1px] z-50 h-[55px] md:h-[85px] flex justify-center items-center bg-[#1e305d]">
            <div className="w-full max-w-[1200px] px-4 py-2 flex justify-center md:justify-between items-center">
                <EditImage
                  src={info.logo}
                  alt={siteProduct}
                  width={142}
                  height={142}
                  post={info}
                  setPost={setCurrentPost}
                  field="logo"
                />
                <AppButton url={info.cta} classes={'hidden md:flex md:!h-[55px] rounded md:!text-[17px] !font-semibold !tracking-[0] shadow-[none]'}>
                  Claim 50% OFF Today
                </AppButton>
            </div>
        </div>
    </>
  );
};

export default SalesHeaderEdit;