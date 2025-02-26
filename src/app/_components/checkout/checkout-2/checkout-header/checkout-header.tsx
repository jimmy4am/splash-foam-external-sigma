import React from "react";
import Image from "next/image";
import { BuildingStorefrontIcon } from "@heroicons/react/16/solid";

import { CheckoutPageType } from "@/interfaces/checkoutPage";

type Props = {
  info: CheckoutPageType;
};

const CheckoutHeader = ({ info }: Props) => {
  return (
    <header className="bg-[#fff] border-b-[1px] border-[rgba(18,18,18,.08)] z-[15]">
      <div className="p-[12px_15px] md:p-[16px_15px] bg-[#ffa500]">
        <p className="flex items-center justify-center gap-[6px] text-[16px] md:text-[20px] leading-[1.3] tracking-[1px] text-[#fdfbf7]">
          <BuildingStorefrontIcon className="flex-[0_0_20px] md:flex-[0_0_26px]" />
          <span>Worldwide Shipping</span>
        </p>
      </div>
      <div className="flex items-center justify-center p-[10px_15px] lg:p-[20px_15px]">
        <Image
          src={info.header.logo}
          alt={info.header.product}
          width={120}
          height={120}
        />
      </div>
    </header>
  )
};

export default CheckoutHeader;