import React from "react";
import Image from "next/image";

type Props = {
  logo: string;
  productName: string;
};

const header2 = ({ logo, productName }: Props) => {
  return (
    <div className="flex w-full justify-center bg-[#b2e6fa] ">
      <div className="flex w-full max-w-[1100px] justify-start pt-1 md:pt-4 px-2 pb-1">
        <Image
          src={logo}
          width={100}
          height={100}
          className="object-scale-down max-w-[100px] "
          alt={productName}
        />
      </div>
    </div>
  );
};

export default header2;
