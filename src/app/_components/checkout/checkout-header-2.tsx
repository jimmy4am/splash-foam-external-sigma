import React from "react";
import { CheckoutPageType } from "@/interfaces/checkoutPage";
import Image from "next/image";
import { siteProduct } from "@/lib/site-info";

type Props = {
  info: CheckoutPageType;
};
const CheckoutHeader2 = ({ info }: Props) => {
  return (
    <header className="flex items-center justify-center w-full h-[78px] shadow-[0_3px_4px_0_rgba(0,0,0,0.1)] px-4">
      <div className="flex w-full justify-center md:justify-between max-w-[1170px]">
        <Image
          src={info.header.logo}
          alt={siteProduct}
          width={280}
          height={107}
          className="w-[140px]"
        />
        <Image
          src={info.header.safeCheckout}
          alt=""
          width={338}
          height={98}
          className="w-[169px] hidden md:block"
        />
      </div>
    </header>
  );
};

export default CheckoutHeader2;
