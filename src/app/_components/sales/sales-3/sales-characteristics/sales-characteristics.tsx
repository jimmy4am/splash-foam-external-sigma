import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import { SalesPageType } from "@/interfaces/salesPage";

type Props = {
  info: SalesPageType;
};

const SalesCharacteristicsItem = ({ icon, text }: { icon: string, text: string}) => (
  <div className="w-[145px] md:w-[105px] lg:w-[140px] xl:w-[165px] flex flex-col items-center px-[15px] md:px-[2px] xl:px-[15px] text-center">
  <Image className="w-[55px] mb-[10px]" src={icon} alt={text} width={55} height={45}/>
    <h3 className="text-[13px] lg:text-[15px] leading-[18px] lg:leading-[20px] font-semibold tracking-[0.5px]">{text}</h3>
  </div>
)

const SalesCharacteristics = ({ info }: Props) => {
  return (
    <section className="w-full p-[20px_0] md:p-[25px_0_20px] bg-[#fff] border-[1px] border-[#dbdbdb]">
      <div className="w-full max-w-[1200px] mx-[auto] px-4">
        <h2 className="mb-[20px] md:mb-[25px] text-center text-[18px] md:text-[20px] leading-[18px] md:leading-[20px] font-bold">{info.characteristics.heading}</h2>

        <Marquee autoFill={true} play={ window.innerWidth < 768 } className="sale-characteristics flex gap-[20px] -mx-4 md:mx-0 !w-auto">
          <SalesCharacteristicsItem icon={info.characteristics.icon1} text={info.characteristics.text1} />
          <SalesCharacteristicsItem icon={info.characteristics.icon2} text={info.characteristics.text2} />
          <SalesCharacteristicsItem icon={info.characteristics.icon3} text={info.characteristics.text3} />
          <SalesCharacteristicsItem icon={info.characteristics.icon4} text={info.characteristics.text4} />
          <SalesCharacteristicsItem icon={info.characteristics.icon5} text={info.characteristics.text5} />
          <SalesCharacteristicsItem icon={info.characteristics.icon6} text={info.characteristics.text6} />
          <SalesCharacteristicsItem icon={info.characteristics.icon7} text={info.characteristics.text7} />
        </Marquee>
      </div>
    </section>
  );
};

export default SalesCharacteristics;