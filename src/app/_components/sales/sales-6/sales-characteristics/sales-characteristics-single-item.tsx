import React from "react";
import Image from "next/image";

type Props = {
  icon: string;
  title: string;
  text: string;
  shortTitle?: boolean;
  rightLine?: boolean;
  bottomLine?: boolean;
};

const SalesCharacteristicsSingleItem = ({ icon, title, text, shortTitle = false, rightLine = false, bottomLine = false }: Props) => (
  <li className="relative flex items-start gap-[15px] md:flex-col md:p-[25px_10px] lg:p-[30px_18px]">
    {rightLine && <span className="hidden md:block absolute w-[1px] h-[calc(100%-50px)] top-[25px] -right-[1px] bg-[#dcdcdc]" />}
    {bottomLine && <span className="hidden md:block absolute w-[calc(100%-50px)] h-[1px] left-[25px] -bottom-[1px] bg-[#dcdcdc]"></span>}
    <Image
      className="w-[55px] md:w-[50px] lg:w-[60px] mx-auto"
      src={icon}
      width={60}
      height={60}
      alt="Icon"
    />
    <div className="flex-[1_1_auto] text-left md:text-center">
      <h3 style={{maxWidth: shortTitle ? '130px' : '270px'}} className="w-[80%] md:w-full md:mx-auto mb-[8px] md:mb-[5px] lg:mb-[10px] xl:mb-[12px] text-[19px] md:text-[16px] lg:text-[20px] xl:text-[22px] leading-[24px] lg:leading-[28px] text-[#000] font-bold tracking-[0.3px]">{title}</h3>
      <p className="text-[15px] md:text-[14px] lg:text-[16px] xl:text-[17px] leading-[23px] md:leading-[24px] lg:leading-[26px] xl:leading-[27px]">{text}</p>
    </div>
  </li>
)

export default SalesCharacteristicsSingleItem;