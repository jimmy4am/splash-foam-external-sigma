import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
  text: string;
};

const SalesResultsSingleItem = ({ image, title, text }: Props) => (
  <li className="flex md:flex-col md:items-center gap-[15px] px-[5px] md:px-[9px]">
    <Image
      className="flex-[0_0_82px] md:flex-[0_0_65px] lg:flex-[0_0_80px]"
      src={image}
      width={80}
      height={75}
      alt={title}
    />
    <div className="md:text-center">
      <h4 className="mb-[6px] text-[20px] leading-[28px] text-[#000] font-bold">{title}</h4>
      <p>{text}</p>
    </div>
  </li>
)

export default SalesResultsSingleItem;