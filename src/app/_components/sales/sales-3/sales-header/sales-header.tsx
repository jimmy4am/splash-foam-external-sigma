"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { siteProduct } from "@/lib/site-info";

import { SalesPageType } from "@/interfaces/salesPage";
import AppButton from "@/app/_components/sales/sales-3/_components/app-button";
import SalesHeaderCountDown from "@/app/_components/sales/sales-3/sales-header/sales-header-count-down";

type Props = {
  info: SalesPageType;
};

const SalesHeader = ({ info }: Props) => {
  const [headerHeight, setHeaderHeight] = useState(42); // Initial height of the header bar

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos <= 42) {
        // Set header height to be inversely proportional to scroll position
        setHeaderHeight(42 - currentScrollPos);
      } else {
        // Set header height to 0 if scroll position is greater than 32
        setHeaderHeight(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headerHeight]);

  return (
    <div className="fixed z-50 w-full">
        <div
            className={`h-[48px] md:h-[42px] flex items-center bg-[#ffe56e] overflow-hidden`}
            style={{height: `${headerHeight}px`}}
        >
            <SalesHeaderCountDown />
        </div>

        <div className="sticky top-0 z-50 h-[55px] md:h-[85px] flex justify-center items-center bg-[#1e305d]">
            <div className="w-full max-w-[1200px] px-4 py-2 flex justify-center md:justify-between items-center">
                <Image src={info.logo} alt={siteProduct} width={142} height={142} className="w-[95px] md:w-[142px]" />
                <AppButton url={info.cta} classes={'hidden md:flex md:!h-[55px] rounded md:!text-[17px] !font-semibold !tracking-[0] shadow-[none]'}>
                  Claim 50% OFF Today
                </AppButton>
            </div>
        </div>
    </div>
  );
};

export default SalesHeader;
