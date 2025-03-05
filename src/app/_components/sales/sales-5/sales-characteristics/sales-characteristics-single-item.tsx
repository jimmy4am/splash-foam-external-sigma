import React from "react";
import Image from "next/image";

type Props = {
  icon: string;
  title: string;
  text: string;
};

const SalesCharacteristicsSingleItem = ({ icon, title, text }: Props) => (
  <li className="p-[23px_30px] md:p-[25px_15px] lg:p-[28px_15px] xl:p-[27px_25px] bg-[#c6e8ff] rounded-[5px] text-center">
    <Image
      className="w-[45px] md:w-[50px] lg:w-[55px] m-[0_auto_10px]"
      src={icon}
      width={55}
      height={51}
      alt="Icon"
    />

    <h3 className="mb-[10px] text-[22px] md:text-[20px] lg:text-[22px] xl:text-[23px] leading-[26px] md:leading-[26px] lg:leading-[30px] xl:leading-[31px] text-[#000] font-bold tracking-[0.3px] lg:tracking-[0]">{title}</h3>
    <p className="pr-[36px] md:pr-[0] lg:pr-[25px]">{text}</p>
  </li>
)

export default SalesCharacteristicsSingleItem;