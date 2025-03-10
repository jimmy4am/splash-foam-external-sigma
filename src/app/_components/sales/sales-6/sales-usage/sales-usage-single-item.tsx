import React from "react";
import Image from "next/image";

type Props = {
  image: string;
  title: string;
};

const SalesUsageSingleItem = ({ image, title }: Props) => {
  return (
    <div className="p-[15px_10px_10px] bg-[#fff] shadow-[0_0_4px_0_rgba(0,0,0,0.2)] md:shadow-[0_0_5px_2px_rgba(0,0,0,0.5)]">
      <h3 className="mb-[13px] lg:mb-[15px] text-center text-[20px] lg:text-[22px] leading-[26px] lg:leading-[28px] text-[#000] font-bold tracking-[0.3px]">{title}</h3>
        <Image
          className="w-full aspect-square"
          src={image}
          width={349}
          height={349}
          alt={title}
        />
    </div>
  );
};

export default SalesUsageSingleItem;