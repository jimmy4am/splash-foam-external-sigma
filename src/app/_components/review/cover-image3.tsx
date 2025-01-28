import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  bestOverall?: string;
};

const CoverImage3 = ({ title, src, bestOverall }: Props) => {
  // Create a new Date instance
  const currentDate = new Date();
  // Format the date to get a string like "Updated: January, 2024"
  const updateMonth = `Last Updated: ${currentDate.toLocaleString("default", {
    month: "long",
  })}, ${currentDate.getFullYear()}`;

  return (
    <>
      <div className="flex w-full justify-center px-2">
        <div className="flex w-[1240px] bg-[#333] rounded-md overflow-hidden">
          <div className="flex  p-4 w-full md:w-1/2 flex-col justify-center items-center md:items-start">
            <div className="text-[#fff]  text-[28px] md:text-[36px] font-bold text-center md:text-left px-4 max-w-[1200px]">
              {title}
            </div>

            <p className="text-[#ccc] px-4 mt-6 md:mt-8 text-lg text-center md:text-left">
              {bestOverall}
            </p>

            <div className="flex px-4 text-white  mt-6 md:mt-8 md:text-lg italic   space-x-2 text-sm">
              <Image
                src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/229dc531-21c2-4e38-9c36-f6f46cc14100/public"
                width={20}
                height={20}
                alt="check mark"
                className="w-[15px] h-[15px] mt-1 mr-1 filter brightness-0 invert"
              />
              {updateMonth}
            </div>
          </div>
          <div className="hidden md:flex w-1/2 ">
            <Image
              src={src}
              alt={title}
              className="w-full h-full object-cover "
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CoverImage3;
