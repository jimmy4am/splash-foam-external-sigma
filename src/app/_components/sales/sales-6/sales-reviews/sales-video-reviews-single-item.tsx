"use client";

import React from "react";
import Image from "next/image";

type Props = {
  image: string;
  title: string;
  video: string;
  setActiveVideo: (val: string) => void;
};

const SalesVideoReviewsSingleItem = ({ image, title, video, setActiveVideo }: Props) => {
  return (
    <>
      <div className="relative aspect-[1/1.25]">
        <div className="absolute inset-0 z-10">
          <button
            onClick={() => setActiveVideo(video) }
            className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[60px] h-[60px] p-[0]">
            <Image
              src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/891152a1-dc91-4111-2688-dcc0730f0900/public"
              width={44}
              height={44}
              alt="Play video icon"
            />
          </button>
        </div>
        <Image className="w-full h-full object-cover" src={image} width={367} height={460} alt="Poster"/>
      </div>
      <div className="p-[15px_0] lg:p-[20px_10px]">
        <Image
          className="w-[78px] lg:w-[100px] mb-[10px] md:mb-[12px]"
          src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/7831a41c-f559-47f6-2c4f-d1ce30395a00/public"
          width={212}
          height={42}
          alt="Rating stars"
        />
        <p> {title}</p>
      </div>
    </>
  );
};

export default SalesVideoReviewsSingleItem;