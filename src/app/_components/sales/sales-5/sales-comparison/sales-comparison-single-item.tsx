import React from "react";
import Image from "next/image";

type Props = {
  text: string;
  isLastItem?: boolean
};

const SalesComparisonSingleItem = ({ text, isLastItem = false }: Props) => (
  <li className={`w-full flex ${!isLastItem && 'border-b-[1px] border-b-[#e1e1e1]'}`}>
    <div className="flex-[0_0_18%] md:flex-[0_0_32%] flex justify-center items-center">
      <Image
        src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/c404d3ca-f0f3-4c16-2031-4a898455d300/public"
        width={32}
        height={32}
        alt="Thumb up"
      />
    </div>

    <div className="flex-[0_0_64%] md:flex-[0_0_36%] min-h-[55px] md:min-h-[65px] flex items-center justify-center text-center px-[10px]">
      <h3 className="text-[16px] md:text-[20px] leading-[22px] md:leading-[26px] font-bold">{text}</h3>
    </div>

    <div className="flex-[0_0_18%] md:flex-[0_0_32%] flex justify-center items-center">
      <Image
        src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/ae3aa4fe-ab21-4db9-8bdb-09a257594f00/public"
        width={34}
        height={32}
        alt="Thumb down"
      />
    </div>
  </li>
);

export default SalesComparisonSingleItem;