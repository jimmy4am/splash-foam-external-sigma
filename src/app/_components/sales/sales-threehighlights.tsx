import React from "react";
import Image from "next/image";
import { Raleway } from "next/font/google";
import { SalesPageType } from "@/interfaces/salesPage";

const raleway = Raleway({ subsets: ["latin"] });

type Props2 = {
  info: SalesPageType;
};

export const ThreeHighlighs = ({ info }: Props2) => {
  return (
    <div className="flex w-full px-4  justify-center mt-4 border-b-[1px] border-[#dcdcdc] pb-4 md:pt-4">
      <div className="flex flex-wrap w-full max-w-[1260px]">
        <div className="flex flex-col items-center justify-start w-full md:w-1/3 pt-6 md:pt-0">
          <Image
            src={info.highlights.icon1}
            alt="icon1"
            width={42}
            height={42}
          />
          <div className="flex flex-col items-center px-4 md:px-8">
            <h3
              className={`text-[20px] lg:text-[24px] font-bold py-4 lg:pt-2 lg:pb-2 text-center ${raleway.className}`}
            >
              {info.highlights.head1}
            </h3>
            <p className="text-[17px] md:text-[19px] text-center">
              {info.highlights.text1}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full md:w-1/3 pt-6 md:pt-0">
          <Image
            src={info.highlights.icon2}
            alt="icon1"
            width={42}
            height={42}
          />
          <div className="flex flex-col items-center md:border-r-[1px] md:border-l-[1px] border-[#dcdcdc] px-4 md:px-8 mt-4 lg:mt-0">
            <h3
              className={`text-[20px] lg:text-[24px] font-bold md:pb-4 lg:pt-2 lg:pb-2 text-center ${raleway.className}`}
            >
              {info.highlights.head2}
            </h3>
            <p className="text-[17px] md:text-[19px] text-center">
              {info.highlights.text2}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full md:w-1/3 pt-6 md:pt-0">
          <Image
            src={info.highlights.icon3}
            alt="icon1"
            width={42}
            height={42}
          />
          <div className="flex flex-col items-center px-4 md:px-8">
            <h3
              className={`text-[20px] lg:text-[24px] font-bold text-center py-4 lg:pt-2 lg:pb-2  ${raleway.className}`}
            >
              {info.highlights.head3}
            </h3>
            <p className="text-[17px] md:text-[19px] text-center">
              {info.highlights.text3}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeHighlighs;
