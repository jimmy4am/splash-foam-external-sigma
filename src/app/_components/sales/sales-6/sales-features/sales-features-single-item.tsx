import React from "react";
import Image from "next/image";

type Props = {
  image: string;
  title: string;
  text: string;
};

const SalesFeaturesSingleItem = ({ image, title, text }: Props) => (
  <div className="flex items-start gap-[8px] lg:gap-[12px] py-[10px] md:py-[15px] lg:py-[20px] xl:py-[25px] pr-[145px] md:pr-[0] border-b-[1px] border-[#ccc]">
    <div className="flex flex-[0_0_30px] md:flex-[0_0_32px] lg:flex-[0_0_43px]">
      <Image
        className="w-full"
        src={image}
        width={370}
        height={256}
        alt={title}
      />
    </div>
    <div className="flex-[1_1_auto] text-[15px] md:text-[14px] lg:text-[16px] leading-[20px] md:leading-[22px] lg:leading-[26px]">
      <h3 className="mb-[2px] md:mb-[5px] text-[17px] md:text-[16px] lg:text-[18px] xl:text-[20px] leading-[25px] md:leading-[26px] lg:leading-[28px] font-bold capitalize">{title}</h3>
      <p>{text}</p>
    </div>
  </div>
)

export default SalesFeaturesSingleItem;