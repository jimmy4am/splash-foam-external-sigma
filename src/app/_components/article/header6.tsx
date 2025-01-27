//HH Template Header
import React from "react";
import Image from "next/image";

type Props = {
  productName: string;
};

const Header6 = ({ productName }: Props) => {
  return (
    <div className="flex w-full justify-center bg-[#f6f4f0]">
      <div className="flex w-full px-2 md:px-6 justify-start pt-2 md:pt-4 pb-1">
        <Image
          src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/5c49af78-2064-4149-2a6f-885e1b324600/public"
          width={100}
          height={100}
          className="object-scale-down max-w-[60px]  md:max-w-[100px]"
          alt={productName}
        />
      </div>
    </div>
  );
};

export default Header6;
