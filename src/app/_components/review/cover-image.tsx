import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  // Create a new Date instance
  const currentDate = new Date();
  // Format the date to get a string like "Updated: January, 2024"
  const updateMonth = `Updated: ${currentDate.toLocaleString("default", {
    month: "long",
  })}, ${currentDate.getFullYear()}`;

  return (
    <div className="sm:mx-0 relative">
      <div
        className="min-h-fit md:h-48 bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${src})` }}
      >
        <div className="inset-0 flex flex-col items-center justify-center p-2">
          <div className="text-white text-[28px] md:text-[36px] font-bold text-shadow text-center px-4 max-w-[1200px]">
            {title}
          </div>
          <div className="flex text-white text-shadow mt-2 md:mt-8 text-lg italic   space-x-2">
            <Image
              src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/229dc531-21c2-4e38-9c36-f6f46cc14100/public"
              width={50}
              height={50}
              alt="check mark"
              className="w-[20px] h-[20px] mt-1 mr-2"
            />
            {updateMonth}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverImage;
