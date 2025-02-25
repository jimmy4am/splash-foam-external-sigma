import React from "react";
import Image from "next/image";

import Rating from "@/app/_components/checkout/checkout-2/_components/rating";

type Props = {
  image: string;
  rating: number;
  text: string;
  author: string;
};

const CheckoutReviewsSingleItem = ({ image, rating, text, author }: Props) => {
  return (
    <div className="rounded-[24px] overflow-hidden">
      <div className="aspect-square">
        <Image
          src={image}
          width={407}
          height={407}
          alt={`Photo by ${author}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative p-[12px_20px] bg-[#f5f5f5] text-center">
        <span className="absolute right-[20px] top-0 -translate-y-[50%] flex items-center justify-center w-[50px] h-[50px] rounded-[50%] bg-[#ffa500] text-[50px] text-[rgba(253,251,247,.9)]">
          <svg className="w-[55%]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M119.472 66.59C53.489 66.59 0 120.094 0 186.1c0 65.983 53.489 119.487 119.472 119.487c0 0-0.578 44.392-36.642 108.284c-4.006 12.802 3.135 26.435 15.945 30.418c9.089 2.859 18.653 0.08 24.829-6.389c82.925-90.7 115.385-197.448 115.385-251.8C238.989 120.094 185.501 66.59 119.472 66.59z"></path>
            <path fill="currentColor" d="M392.482 66.59c-65.983 0-119.472 53.505-119.472 119.51c0 65.983 53.489 119.487 119.472 119.487c0 0-0.578 44.392-36.642 108.284c-4.006 12.802 3.136 26.435 15.945 30.418c9.089 2.859 18.653 0.08 24.828-6.389C479.539 347.2 512 240.452 512 186.1C512 120.094 458.511 66.59 392.482 66.59z"></path>
          </svg>
        </span>
        <div className="inline-flex mb-[6px]">
          <Rating rating={rating}/>
        </div>
        <p className="mb-[8px]">"{text}"</p>
        <h3 className="pt-[10px] border-t-[1px] border-[rgba(18,18,18,.06)] text-[14px] leading-[1.1] font-bold">{author}</h3>
      </div>
    </div>
  );
};

export default CheckoutReviewsSingleItem;