import React from "react";
import Image from "next/image";

import AppRating from "@/app/_components/sales/sales-5/_components/app-rating";

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
          <AppRating />
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