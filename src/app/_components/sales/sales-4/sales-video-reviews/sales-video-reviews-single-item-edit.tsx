"use client";

import React, { useState } from "react";
import Image from "next/image";

import {SalesPageType} from "@/interfaces/salesPage";
import EditImage from "@/app/_components/edit-image";

type Props = {
  info: SalesPageType;
  image: string;
  imageField: any;
  title: string;
  titleField: string;
  video: string;
  setActiveVideo: (val: string) => void;
  setCurrentPost: (post: SalesPageType) => void;
};

const SalesVideoReviewsSingleItemEdit = ({ info, image, imageField, title, titleField, video, setActiveVideo, setCurrentPost }: Props) => {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <>
      <div className="relative overflow-hidden rounded-[7px] shadow-[0_3px_8px_2px_rgba(0,0,0,0.1)] aspect-[1/1.5]">
        {showPlayer ? (
          <iframe
            src={video}
            width="100%"
            height="100%"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 z-10">
          </iframe>
        ) : (
          <>
            <div className="absolute inset-0 z-10 transition-bg duration-500 ease-in-out hover:bg-[rgba(32,41,80,0.4)]">
              <button
                onClick={() => setActiveVideo(video) }
                className="lg:hidden absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[60px] h-[60px] p-[0]">
                <Image className="" src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/c2d2bd70-661a-4645-bf31-d564a8c56b00/public" width={60} height={60} alt="Play video icon"/>
              </button>
              <button
                onClick={() => setShowPlayer(true)}
                className="hidden lg:flex absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[60px] h-[60px] p-[0]">
                <Image className="" src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/c2d2bd70-661a-4645-bf31-d564a8c56b00/public" width={60} height={60} alt="Play video icon"/>
              </button>
            </div>
            <div className="relative z-[100]">
              <EditImage
                className="object-cover h-[100%]"
                src={image}
                alt={title}
                width={280}
                height={412}
                post={info}
                setPost={setCurrentPost}
                field={imageField}
              />
            </div>
          </>
        )}
      </div>
      <h3 className="flex justify-center items-center gap-[10px] mt-[20px] text-[16px] leading-[16px] md:text-[18px] md:leading-[18px] text-[#28aae0] font-bold">
        <input
          className="editable-input min-w-0"
          onChange={(e) => {
            setCurrentPost({
              ...info,
              video_reviews: {
                ...info.video_reviews,
                [titleField]: e.target.value,
              },
            });
          }}
          value={title}
          placeholder="Review author"
        />
        <Image className="w-[94px] md:w-[105px]" src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/49253e46-369e-4742-d9f4-c870b1722100/public" alt="rating stars" width={82} height={14} />
      </h3>
    </>
  );
};

export default SalesVideoReviewsSingleItemEdit;