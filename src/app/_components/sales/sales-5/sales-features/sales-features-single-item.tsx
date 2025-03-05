import React from "react";
import Image from "next/image";

type Props = {
  image: string;
  title: string;
  text: string;
};

const SalesFeaturesSingleItem = ({ image, title, text }: Props) => (
  <li className="">
    <div className="flex -mx-[15px] md:mx-auto mb-[20px] lg:mb-[25px]">
      <Image
        className="w-full"
        src={image}
        width={370}
        height={256}
        alt={title}
      />
    </div>

    <h3 className="mb-[10px] md:mb-[8px] lg:mb-[10px] text-[24px] md:text-[20px] lg:text-[26px] leading-[28px] md:leading-[26px] lg:leading-[32px] text-[#000] font-bold">{title}</h3>
    <p className="pr-[36px] md:pr-[0] lg:pr-[25px]">{text}</p>
  </li>
)

export default SalesFeaturesSingleItem;