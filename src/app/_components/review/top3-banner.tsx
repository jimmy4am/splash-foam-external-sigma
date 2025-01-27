import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Rating from "./rating";
import { ReviewPostType } from "@/interfaces/reviewPost";

type Props = {
  content: ReviewPostType;
};
const Top3Banner = ({ content }: Props) => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col w-full bg-[#eee] p-2">
      <p className="text-[#222] text-[16px] font-bold w-full text-center md:text-left pt-2 ">
        The Top 3 Picks
      </p>
      <div className="flex w-full flex-wrap md:flex-nowrap space-y-3 md:space-x-2 md:space-y-0 items-end">
        <div className="hidden md:flex flex-col w-full md:w-1/3 bg-[#fff] px-2 py-2 shadow-lg border-2 border-[#fff] hover:border-[#999] cursor-pointer hover">
          <a href={content.product2.cta}>
            <div className="flex w-full justify-between items-center">
              <div className="flex w-1/2 pr-2">
                <Image
                  src={content.product2.logo || content.product2.image}
                  width={200}
                  height={200}
                  alt={content.product2.name}
                  className="mt-2 max-h-[75px] object-contain"
                />
              </div>
              <Rating num={content.product2.rating} />
            </div>
            <div className="flex w-full justify-between items-end mt-2">
              <p className="text-[#222] text-[14px] mt-4 font-thin">
                {content.product2.point2}
              </p>
              <button className="bg-transparent px-2  border-none text-orange-600 font-bold hover:underline text-[14px] whitespace-nowrap">
                Learn More &gt;
              </button>
            </div>
          </a>
        </div>
        <div className="flex flex-col w-full md:w-1/3 bg-[#fff] px-2 py-2 shadow-lg border-2 border-[#222] hover:border-[#000] cursor-pointer hover">
          <a href={content.product1.cta}>
            <div className="flex w-full ml-[-12px] mt-[-12px] mb-2 justify-start">
              <div className="bg-green-700 text-white px-3 py-1 flex text-sm font-bold">
                Our #1 Pick
              </div>
            </div>
            <div className="flex w-full justify-between items-center">
              <div className="flex w-1/2 pr-2">
                <Image
                  src={content.product1.logo || content.product1.image}
                  width={200}
                  height={200}
                  alt={content.product1.name}
                  className="mt-2 max-h-[200px] object-contain"
                />
              </div>
              <Rating num={content.product1.rating} />
            </div>
            <div className="flex w-full justify-between items-end mt-2">
              <p className="text-[#222] text-[14px] mt-4 font-thin">
                {content.product1.point2}
              </p>
              <button className="bg-transparent px-2  border-none text-orange-600 font-bold hover:underline text-[14px] whitespace-nowrap">
                Learn More &gt;
              </button>
            </div>
          </a>
        </div>

        <div className="hidden md:flex flex-col w-full md:w-1/3 bg-[#fff] px-2 py-2 shadow-lg border-2 border-[#fff] hover:border-[#999] cursor-pointer hover">
          <a href={content.product3.cta}>
            <div className="flex w-full justify-between items-center">
              <div className="flex w-1/2 pr-2">
                <Image
                  src={content.product3.logo || content.product3.image}
                  width={200}
                  height={200}
                  alt={content.product3.name}
                  className="mt-2  max-h-[75px] object-contain"
                />
              </div>
              <Rating num={content.product3.rating} />
            </div>
            <div className="flex w-full justify-between items-end mt-2">
              <p className="text-[#222] text-[14px] mt-4 font-thin">
                {content.product3.point2}
              </p>
              <button className="bg-transparent px-2  border-none text-orange-600 font-bold hover:underline text-[14px] whitespace-nowrap">
                Learn More &gt;
              </button>
            </div>
          </a>
        </div>
        {(!show && (
          <div className="flex md:hidden w-full py-2">
            <button
              onClick={() => setShow(true)}
              className="flex w-full justify-center text-center items-center px-2 py-1 text-[14px] border-[2px] text-[#666] border-[#999] rounded-md hover:border-[#555] hover:text-[#333]"
            >
              Show #2 and #3
            </button>
          </div>
        )) || (
          <>
            <div className="flex md:hidden flex-col w-full md:w-1/3 bg-[#fff] px-2 py-2 shadow-lg border-2 border-[#fff] hover:border-[#999] cursor-pointer hover">
              <a href={content.product2.cta}>
                <div className="flex w-full justify-between items-center">
                  <div className="flex w-1/2 pr-2">
                    <Image
                      src={content.product2.logo || content.product2.image}
                      width={200}
                      height={200}
                      alt={content.product2.name}
                      className="mt-2"
                    />
                  </div>
                  <Rating num={content.product2.rating} />
                </div>
                <div className="flex w-full justify-between items-end mt-2">
                  <p className="text-[#222] text-[14px] mt-4 font-thin">
                    {content.product2.point2}
                  </p>
                  <button className="bg-transparent px-2  border-none text-orange-600 font-bold hover:underline text-[14px] whitespace-nowrap">
                    Learn More &gt;
                  </button>
                </div>
              </a>
            </div>
            <div className="flex md:hidden flex-col w-full md:w-1/3 bg-[#fff] px-2 py-2 shadow-lg border-2 border-[#fff] hover:border-[#999] cursor-pointer hover">
              <a href={content.product3.cta}>
                <div className="flex w-full justify-between items-center">
                  <div className="flex w-1/2 pr-2">
                    <Image
                      src={content.product3.logo || content.product3.image}
                      width={200}
                      height={200}
                      alt={content.product3.name}
                      className="mt-2"
                    />
                  </div>
                  <Rating num={content.product3.rating} />
                </div>
                <div className="flex w-full justify-between items-end mt-2">
                  <p className="text-[#222] text-[14px] mt-4 font-thin">
                    {content.product3.point2}
                  </p>
                  <button className="bg-transparent px-2  border-none text-orange-600 font-bold hover:underline text-[14px]">
                    Learn More &gt;
                  </button>
                </div>
              </a>
            </div>
            <div className="flex md:hidden w-full pt-6">
              <button
                onClick={() => setShow(false)}
                className="flex w-full justify-center text-center items-center px-2 py-1 text-[14px] border-[2px] text-[#666] border-[#999] rounded-md hover:border-[#555] hover:text-[#333]"
              >
                Hide #2 and #3
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Top3Banner;
