"use client";

import React from "react";
import { Outfit } from "next/font/google";

import { SalesPageType } from "@/interfaces/salesPage";
import EditImage from "@/app/_components/edit-image";

const outfit = Outfit({ subsets: ["latin"] });

type Props = {
  info: SalesPageType;
  setCurrentPost: (post: SalesPageType) => void;
  image: string;
  imageField: any;
  title: string;
  titleField: string;
};

const SalesUsageSingleItemEdit = ({ info, setCurrentPost, image, imageField, title, titleField }: Props) => {
  return (
    <div className="p-[0_16px] md:p-[0_10px]">
      <div className="mb-[25px] rounded-[20px] md:rounded-[0] overflow-hidden">
        <EditImage
          className="w-full object-cover aspect-[1/1.15] md:aspect-[1/0.85]"
          src={image}
          alt={title}
          width={400}
          height={400}
          post={info}
          setPost={setCurrentPost}
          field={imageField}
        />
      </div>
      <h3 className={`text-[24px] leading-[24px] md:text-[21px] md:leading-[25px] lg:text-[25px] font-bold ${outfit.className}`}>
        <input
          className="editable-input w-full"
          onChange={(e) => {
            setCurrentPost({
              ...info,
              fiveimagesplit: {
                ...info.fiveimagesplit,
                [titleField]: e.target.value,
              },
            });
          }}
          value={title}
          placeholder="Title"
        />
      </h3>
    </div>
  );
};

export default SalesUsageSingleItemEdit;