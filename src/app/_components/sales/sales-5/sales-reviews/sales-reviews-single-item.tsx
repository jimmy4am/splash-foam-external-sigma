import React from "react";
import Image from "next/image";

type Props = {
  image: string;
  author: string;
  text: string;
};

const SalesReviewsSingleItem = ({ image, author, text }: Props) => {
  return (
    <li className="relative w-full p-[25px_20px_20px] md:p-[30px_20px_25px] lg:p-[30px_32px] bg-[#fff] border-[1px] border-[#d6eaf7] rounded-[3px] shadow-[0_5px_10px_0_#d6eaf7] lg:shadow-[0_5px_20px_0_#d6eaf7]">
      <Image
        className="absolute top-0 right-[20px] -translate-y-[50%] flex items-center justify-center w-[35px] h-[35px] rounded-[50%] border-[1px] border-[#d6eaf7] shadow-[0_5px_15px_0_#d6eaf7]"
        src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/1759e964-8024-4e7b-e286-2aa147119100/public"
        width={35}
        height={35}
        alt="Quotes icon"
      />

      <div className="flex items-start gap-[10px] lg:gap-[17px] mb-[20px] lg:mb-[25px]">
        <div className="flex-[0_0_45px] md:flex-[0_0_50px] lg:flex-[0_0_58px] rounded-[50%] overflow-hidden">
          <Image
            src={image}
            width={58}
            height={56}
            alt="Image"
          />
        </div>
        <div className="flex-1">
          <p className="inline-flex gap-[2px] mb-[7px] text-[#ff9b26]">
            <svg className="w-[16px] h-[16px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
            </svg>
            <svg className="w-[16px] h-[16px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
            </svg>
            <svg className="w-[16px] h-[16px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
            </svg>
            <svg className="w-[16px] h-[16px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
            </svg>
            <svg className="w-[16px] h-[16px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
            </svg>
          </p>
          <p className="flex items-end text-[14px] leading-[20px] text-[#000] font-medium">
            <span className="mr-[10px] text-[17px] font-bold">{author}</span>
            <span className="inline-flex items-center gap-[4px]">
              <Image
                className="flex-[0_0_12px]"
                src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/14b481e5-2f28-4caf-44f9-99a25425c200/public"
                width={24}
                height={28}
                alt="Image"
              />
              <span className="flex-1">Verified Buyer</span>
            </span>
          </p>
        </div>
      </div>
      <div className="text-[#000] italic font-medium tracking-[0.3px] lg:tracking-[0]">"{text}"</div>
    </li>
  );
};

export default SalesReviewsSingleItem;