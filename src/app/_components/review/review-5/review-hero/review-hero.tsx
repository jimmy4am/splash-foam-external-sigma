import React from "react";
import Image from "next/image";
import { Inter, Red_Hat_Display } from "next/font/google";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";

import { ReviewPostType } from "@/interfaces/reviewPost";

const redHatDisplay = Red_Hat_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

type Props = {
  post: ReviewPostType;
};

const ReviewHero = ({ post }: Props) => {
  const currentDate = new Date();

  const updateMonth = `${currentDate.toLocaleString("default", {
    month: "long",
  })}, ${currentDate.getFullYear()}`;

  return (
    <div className={`bg-[#197dd0] p-[20px_0_0_0] md:p-[40px_0_60px] lg:p-[50px_0_65px] ${inter.className} overflow-hidden`}>
      <div className="w-full max-w-[1200px] mx-[auto] px-4 md:flex md:items-center">
        <div className="md:flex-[0_0_57.26%]">
          <h1 className={`mb-[10px] text-[30px] md:text-[36px] lg:text-[45px] leading-[36px] md:leading-[40px] lg:leading-[55px] text-[#fff] font-black ${redHatDisplay.className}`}>{post.title}</h1>
          <p className="text-[16px] lg:text-[17px] leading-[25px] text-[#fff]">{post.bestoverall}</p>
          <div className="md:hidden flex justify-center mt-[30px]">
            <Image
              src={post.product1.logo as string}
              width={160}
              height={160}
              alt={post.product1.name}
              className="w-auto"
            />
          </div>
          <div className="-mx-5 px-5 bg-[linear-gradient(180deg,_#197dd0_50%,_#fff_50%)] md:mx-[0px] md:px-[0px] md:bg-none">
            <div className="max-w-[556px] mt-[35px] p-[15px] md:p-[20px] bg-[#f1f9ff] rounded-[6px] md:rounded-[10px]">
              <p className="text-[15px] leading-[22px] font-bold uppercase">
                Last update:
                <CalendarDaysIcon className="inline-block w-[20px] h-[20px] text-[#2282d2] mx-[5px] -mt-[4px]" />
                {updateMonth}
              </p>
              <p className="mt-[8px] text-[14px] leading-[20px]">Lorem ipsum dolor sit amet, consectetuer adipiscing elitenean commodo ligula eget dolor penean massa cum sociis natoque</p>
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:flex-[1_1_auto] md:justify-center md:px-[20px]">
          <Image
            src={post.product1.logo as string}
            width={160}
            height={160}
            alt={post.product1.name}
            className="w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewHero;