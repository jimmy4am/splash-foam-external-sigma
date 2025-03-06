import React from "react";
import Image from "next/image";

type Props = {
  image: string;
  title: string;
};

const SalesReasonsSingleItem = ({ image, title }: Props) => (
  <li className="flex flex-col items-center p-[15px_5px] lg:p-[20px_5px] bg-[#090909] border-[1px] border-[#560404]">
    <Image
      className="w-[45px] lg:w-[63px] mb-[5px]"
      src={image}
      width={190}
      height={270}
      alt={title}
    />
    <h3 className="text-center text-[16px] md:text-[15px] lg:text-[18px] leading-[1] text-[#fff] font-bold">{title}</h3>
  </li>
);

export default SalesReasonsSingleItem;