import React from "react";
import Image from "next/image";
import { Raleway } from "next/font/google";
import { SalesPageType } from "@/interfaces/salesPage";
import EditImage from "../edit-image";

const raleway = Raleway({ subsets: ["latin"] });

type Props2 = {
  info: SalesPageType;
  setCurrentPost: (post: SalesPageType) => void;
};

const ImageStripEdit = ({ info, setCurrentPost }: Props2) => {
  return (
    <>
      <div
        className={`flex flex-col w-full px-4 py-4 justify-center items-center ${raleway.className}`}
      >
        <div className="flex w-full max-w-[1600px] ">
          <div className="w-1/3 md:w-1/6 px-[13px]">
            <EditImage
              src={info.strip_images.img1}
              alt="img1"
              width={400}
              height={400}
              className="w-full rounded-xl"
              post={info}
              setPost={setCurrentPost}
              field="strip_images.img1"
            />
          </div>
          <div className="w-1/3 md:w-1/6 px-[13px]">
            <EditImage
              src={info.strip_images.img2}
              alt="img2"
              width={400}
              height={400}
              className="w-full rounded-xl"
              post={info}
              setPost={setCurrentPost}
              field="strip_images.img2"
            />
          </div>
          <div className="w-1/3 md:w-1/6 px-[13px]">
            <EditImage
              src={info.strip_images.img3}
              alt="img3"
              width={400}
              height={400}
              className="w-full rounded-xl"
              post={info}
              setPost={setCurrentPost}
              field="strip_images.img3"
            />
          </div>
          <div className="hidden md:block w-1/3 md:w-1/6 px-[13px]">
            <EditImage
              src={info.strip_images.img4}
              alt="img4"
              width={400}
              height={400}
              className="w-full rounded-xl"
              post={info}
              setPost={setCurrentPost}
              field="strip_images.img4"
            />
          </div>
          <div className="hidden md:block w-1/3 md:w-1/6 px-[13px]">
            <EditImage
              src={info.strip_images.img5}
              alt="img5"
              width={400}
              height={400}
              className="w-full rounded-xl"
              post={info}
              setPost={setCurrentPost}
              field="strip_images.img5"
            />
          </div>
          <div className="hidden md:block w-1/3 md:w-1/6 px-[13px]">
            <EditImage
              src={info.strip_images.img6}
              alt="img6"
              width={400}
              height={400}
              className="w-full rounded-xl"
              post={info}
              setPost={setCurrentPost}
              field="strip_images.img6"
            />
          </div>
        </div>
        <div className="flex md:hidden pt-4 w-full max-w-[1600px] ">
          <div className="w-1/3 md:w-1/6 px-[13px]">
            <EditImage
              src={info.strip_images.img4}
              alt="img4"
              width={400}
              height={400}
              className="w-full rounded-xl"
              post={info}
              setPost={setCurrentPost}
              field="strip_images.img4"
            />
          </div>
          <div className="w-1/3 md:w-1/6 px-[13px]">
            <EditImage
              src={info.strip_images.img5}
              alt="img5"
              width={400}
              height={400}
              className="w-full rounded-xl"
              post={info}
              setPost={setCurrentPost}
              field="strip_images.img5"
            />
          </div>
          <div className="w-1/3 md:w-1/6 px-[13px]">
            <EditImage
              src={info.strip_images.img6}
              alt="img6"
              width={400}
              height={400}
              className="w-full rounded-xl"
              post={info}
              setPost={setCurrentPost}
              field="strip_images.img1"
            />
          </div>
        </div>
      </div>
      <div
        className={`flex flex-wrap w-full bg-[#096d9c] justify-center text-white font-bold text-[17px] py-2 ${raleway.className}`}
      >
        <div className="flex flex-col items-center text-center md:flex-row px-4">
          <EditImage
            src={info.strip_images.icon1}
            width={150}
            height={150}
            alt={info.strip_images.text1}
            className="mr-4 object-scale-down"
            post={info}
            setPost={setCurrentPost}
            field="strip_images.icon1"
          />
          {/* {info.strip_images.text1} */}
          <input
            className="ml-2 font-bold px-2 border-2 border-yellow-500 border-dashed flex w-full text-center text-black "
            onChange={(e) => {
              setCurrentPost({
                ...info,
                strip_images: {
                  ...info.strip_images,
                  text1: e.target.value,
                },
              });
            }}
            value={info.strip_images.text1}
            placeholder="Point 1"
          />
        </div>
        <div className="flex flex-col items-center text-center md:flex-row px-4">
          <EditImage
            src={info.strip_images.icon2}
            width={150}
            height={150}
            alt={info.strip_images.text2}
            className="mr-4 object-scale-down"
            post={info}
            setPost={setCurrentPost}
            field="strip_images.icon2"
          />
          {/* {info.strip_images.text2} */}
          <input
            className="ml-2 font-bold px-2 border-2 border-yellow-500 border-dashed flex w-full text-center text-black "
            onChange={(e) => {
              setCurrentPost({
                ...info,
                strip_images: {
                  ...info.strip_images,
                  text2: e.target.value,
                },
              });
            }}
            value={info.strip_images.text2}
            placeholder="Point 2"
          />
        </div>
        <div className="flex flex-col items-center text-center md:flex-row px-4">
          <EditImage
            src={info.strip_images.icon3}
            width={150}
            height={150}
            alt={info.strip_images.text3}
            className="mr-4 object-scale-down"
            post={info}
            setPost={setCurrentPost}
            field="strip_images.icon3"
          />
          {/* {info.strip_images.text3} */}
          <input
            className="ml-2 font-bold px-2 border-2 border-yellow-500 border-dashed flex w-full text-center text-black "
            onChange={(e) => {
              setCurrentPost({
                ...info,
                strip_images: {
                  ...info.strip_images,
                  text3: e.target.value,
                },
              });
            }}
            value={info.strip_images.text3}
            placeholder="Point 2"
          />
        </div>
      </div>
    </>
  );
};

export default ImageStripEdit;
