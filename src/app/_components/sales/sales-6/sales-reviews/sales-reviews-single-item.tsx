import React from "react";
import Image from "next/image";

type Props = {
  image: string;
  author: string;
  text: string;
};

const SalesReviewsSingleItem = ({ image, author, text }: Props) => {
  return (
    <li className="w-full md:flex md:items-center md:justify-between md:p-[15px] lg:p-[20px] md:border-[1px] border-[#c6c6c6] text-center md:text-left">
      <div className="md:flex-[0_0_40%] xl:flex-[0_0_39.5%] mb-[15px] md:mb-0">
        <Image
          className="mx-auto"
          src={image}
          width={367}
          height={261}
          alt="Image"
        />
      </div>

      <div className="md:flex-[0_0_56%] lg:flex-[0_0_55%]">
        <Image
          className="inline-flex w-[80px] md:w-[84px] lg:w-[94px] mb-[10px] lg:mb-[15px]"
          src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/7831a41c-f559-47f6-2c4f-d1ce30395a00/public"
          width={367}
          height={261}
          alt="Image"
        />
        <p className="mb-[20px] md:mb-[16px] lg:mb-[20px]">{text}</p>
        <p className="inline-flex items-center justify-center">
          <span className="mr-[10px] text-[16px] leading-[20px] font-bold">{author}</span>
          <span className="inline-flex items-center gap-[5px]">
            <Image
              className="flex-[0_0_12px] max-w-[12px]"
              src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/14b481e5-2f28-4caf-44f9-99a25425c200/public"
              width={24}
              height={26}
              alt="Image"
            />
            <span className="text-[12px] leading-[14px] text-[#0ab83f]">Verified Buyer</span>
          </span>
        </p>
      </div>
    </li>
  );
};

export default SalesReviewsSingleItem;