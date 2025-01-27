import React from "react";
import Image from "next/image";

type Props = {
  logo: string;
  productName: string;
};

const header2 = ({ logo, productName }: Props) => {
  return (
    <div className="flex w-full justify-center bg-blue-200 md:bg-blue-100/70">
      <div className="flex w-full max-w-[1250px] justify-start pt-2 md:pt-4 px-2 pb-1">
        <Image
          src={logo}
          width={150}
          height={150}
          className="object-scale-down max-w-[100px] md:max-w-[250px]"
          alt={productName}
        />
      </div>
    </div>
  );
};

export default header2;
