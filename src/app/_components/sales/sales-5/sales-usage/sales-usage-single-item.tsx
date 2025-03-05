import React from "react";
import Image from "next/image";

type Props = {
  image: string;
  title: string;
  text: string;
};

const SalesUsageSingleItem = ({ image, title, text }: Props) => {
  return (
    <div className="p-[0_15px] lg:p-[0_20px]">
      <div className="mb-[20px] md:mb-[25px] lg:mb-[35px]">
        <Image
          className="w-full object-cover aspect-[1/1.38]"
          src={image} width={357} height={492} alt={title}
        />
      </div>
      <h3 className="mb-[10px] lg:mb-[15px] text-[24px] md:text-[21px] lg:text-[28px] leading-[28px] md:leading-[30px] lg:leading-[32px] font-bold">{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default SalesUsageSingleItem;