import React from "react";
import Image from "next/image";
import { Raleway } from "next/font/google";
import { SalesPageType } from "@/interfaces/salesPage";
import BuyButton from "./buy-button";
import EditImage from "../edit-image";

const raleway = Raleway({ subsets: ["latin"] });

type Props2 = {
  info: SalesPageType;
  setCurrentPost: (post: SalesPageType) => void;
};

const FiveImageSplitEdit = ({ info, setCurrentPost }: Props2) => {
  return (
    <div className="flex flex-col items-center w-full pb-6">
      <div className="flex flex-col w-full max-w-[1360px] items-center">
        <textarea
          className="mt-4 text-[26px] leading-tight lg:text-[50px]  text-[#0082c0] font-bold text-xl  px-2 border-2 border-yellow-500 border-dashed w-full text-center"
          onChange={(e) => {
            setCurrentPost({
              ...info,
              fiveimagesplit: {
                ...info.fiveimagesplit,
                heading: e.target.value,
              },
            });
          }}
          value={info.fiveimagesplit.heading}
          placeholder="Five Image Split Heading"
          rows={1}
        />
        <textarea
          className="mt-4 mb-4 text-[20px] px-2 border-2 border-yellow-500 border-dashed w-full text-center"
          onChange={(e) => {
            setCurrentPost({
              ...info,
              fiveimagesplit: {
                ...info.fiveimagesplit,
                subheading: e.target.value,
              },
            });
          }}
          value={info.fiveimagesplit.subheading}
          placeholder="Five Image Split Subheading"
          rows={5}
        />
        {/* <h4
          className={`text-center text-[26px] lg:text-[50px] font-bold text-[#0082c0] mt-8 px-6 lg:px-20 xl:px-36 ${raleway.className}`}
        >
          {info.fiveimagesplit.heading}
        </h4> */}
        {/* <p className="text-center max-w-[1200px] px-6 text-[20px] pt-4 pb-6 ">
          {info.fiveimagesplit.subheading}
        </p> */}
        <div className="flex flex-wrap max-w-[800px] justify-center items-center w-full pb-4  bg-slate-100 rounded-md mb-6">
          <p className="text-xl font-bold underline">Mobile Layout</p>
          <div className="w-full flex justify-center p-2 pb-4">
            <EditImage
              src={info.fiveimagesplit.mobile1}
              alt={info.fiveimagesplit.text1}
              width={600}
              height={400}
              className=""
              post={info}
              setPost={setCurrentPost}
              field="fiveimagesplit.mobile1"
            />
          </div>
          <div className="w-1/2 flex justify-center p-2 pb-4">
            <EditImage
              src={info.fiveimagesplit.mobile2}
              alt={info.fiveimagesplit.text2}
              width={200}
              height={200}
              post={info}
              setPost={setCurrentPost}
              field="fiveimagesplit.mobile2"
            />
          </div>
          <div className="w-1/2 flex justify-center p-2 pb-4">
            <EditImage
              src={info.fiveimagesplit.mobile3}
              alt={info.fiveimagesplit.text3}
              width={200}
              height={200}
              post={info}
              setPost={setCurrentPost}
              field="fiveimagesplit.mobile3"
            />
          </div>
          <div className="w-1/2 flex justify-center p-2 pb-4">
            <EditImage
              src={info.fiveimagesplit.mobile4}
              alt={info.fiveimagesplit.text4}
              width={200}
              height={200}
              post={info}
              setPost={setCurrentPost}
              field="fiveimagesplit.mobile4"
            />
          </div>
          <div className="w-1/2 flex justify-center p-2 pb-4">
            <EditImage
              src={info.fiveimagesplit.mobile5}
              alt={info.fiveimagesplit.text5}
              width={200}
              height={200}
              post={info}
              setPost={setCurrentPost}
              field="fiveimagesplit.mobile5"
            />
          </div>
        </div>
        <div className="hidden lg:flex w-full">
          <div className="flex flex-col items-center w-1/5">
            <EditImage
              src={info.fiveimagesplit.img1}
              alt="img1"
              width={400}
              height={400}
              post={info}
              setPost={setCurrentPost}
              field="fiveimagesplit.img1"
            />
            <textarea
              className="mt-4 mb-2 p-2 text-[24px] 2xl:text-[30px] text-white text-shadow font-bold text-xl  px-2 border-2 border-yellow-500 border-dashed w-full text-center bg-black/80"
              onChange={(e) => {
                setCurrentPost({
                  ...info,
                  fiveimagesplit: {
                    ...info.fiveimagesplit,
                    text1: e.target.value,
                  },
                });
              }}
              value={info.fiveimagesplit.text1}
              placeholder="Text 1"
              rows={1}
            />
            <EditImage
              src={info.fiveimagesplit.icon1}
              width={150}
              height={150}
              alt={info.fiveimagesplit.text1}
              // className="z-10 mt-[110px] mb-[10px]"
              post={info}
              setPost={setCurrentPost}
              field="fiveimagesplit.icon1"
            />
          </div>
          <div className="flex flex-col items-center w-1/5">
            <EditImage
              src={info.fiveimagesplit.img2}
              alt="img1"
              width={400}
              height={400}
              // className="w-full "
              post={info}
              setPost={setCurrentPost}
              field="fiveimagesplit.img2"
            />
            <textarea
              className="mt-4 mb-2 p-2 text-[24px] 2xl:text-[30px] text-white text-shadow font-bold text-xl  px-2 border-2 border-yellow-500 border-dashed w-full text-center bg-black/80"
              onChange={(e) => {
                setCurrentPost({
                  ...info,
                  fiveimagesplit: {
                    ...info.fiveimagesplit,
                    text2: e.target.value,
                  },
                });
              }}
              value={info.fiveimagesplit.text2}
              placeholder="Text 2"
              rows={1}
            />
            <EditImage
              src={info.fiveimagesplit.icon2}
              width={150}
              height={150}
              alt={info.fiveimagesplit.text2}
              // className="z-10 mt-[70px]"
              post={info}
              setPost={setCurrentPost}
              field="fiveimagesplit.icon2"
            />
          </div>
          <div className="flex flex-col items-center w-1/5">
            <EditImage
              src={info.fiveimagesplit.img3}
              alt="img1"
              width={400}
              height={400}
              // className="w-full "
              post={info}
              setPost={setCurrentPost}
              field="fiveimagesplit.img3"
            />
            <textarea
              className="mt-4 mb-2 p-2 text-[24px] 2xl:text-[30px] text-white text-shadow font-bold text-xl  px-2 border-2 border-yellow-500 border-dashed w-full text-center bg-black/80"
              onChange={(e) => {
                setCurrentPost({
                  ...info,
                  fiveimagesplit: {
                    ...info.fiveimagesplit,
                    text3: e.target.value,
                  },
                });
              }}
              value={info.fiveimagesplit.text3}
              placeholder="Text 3"
              rows={1}
            />
            {/* <p className="uppercase text-[24px] 2xl:text-[30px] text-white text-shadow z-10 mt-[-200px] text-center font-bold h-[50px] mb-[-50px]">
              {info.fiveimagesplit.text3}
            </p> */}
            <EditImage
              src={info.fiveimagesplit.icon3}
              width={150}
              height={150}
              alt={info.fiveimagesplit.text3}
              // className="z-10 mt-[60px]"
              post={info}
              setPost={setCurrentPost}
              field="fiveimagesplit.icon3"
            />
          </div>
          <div className="flex flex-col items-center w-1/5">
            <EditImage
              src={info.fiveimagesplit.img4}
              alt="img1"
              width={400}
              height={400}
              // className="w-full "
              post={info}
              setPost={setCurrentPost}
              field="fiveimagesplit.img4"
            />
            <textarea
              className="mt-4 mb-2 p-2 text-[24px] 2xl:text-[30px] text-white text-shadow font-bold text-xl  px-2 border-2 border-yellow-500 border-dashed w-full text-center bg-black/80"
              onChange={(e) => {
                setCurrentPost({
                  ...info,
                  fiveimagesplit: {
                    ...info.fiveimagesplit,
                    text4: e.target.value,
                  },
                });
              }}
              value={info.fiveimagesplit.text4}
              placeholder="Text 4"
              rows={1}
            />
            {/* <p className="uppercase text-[24px] 2xl:text-[30px] text-white text-shadow z-10 mt-[-200px] text-center font-bold h-[50px] mb-[-50px]">
              {info.fiveimagesplit.text4}
            </p> */}
            <EditImage
              src={info.fiveimagesplit.icon4}
              width={150}
              height={150}
              alt={info.fiveimagesplit.text4}
              // className="z-10 mt-[70px]"
              post={info}
              setPost={setCurrentPost}
              field="fiveimagesplit.icon4"
            />
          </div>
          <div className="flex flex-col items-center w-1/5">
            <EditImage
              src={info.fiveimagesplit.img5}
              alt="img1"
              width={400}
              height={400}
              // className="w-full "
              post={info}
              setPost={setCurrentPost}
              field="fiveimagesplit.img5"
            />
            <textarea
              className="mt-4 mb-2 p-2 text-[24px] 2xl:text-[30px] text-white text-shadow font-bold text-xl  px-2 border-2 border-yellow-500 border-dashed w-full text-center bg-black/80"
              onChange={(e) => {
                setCurrentPost({
                  ...info,
                  fiveimagesplit: {
                    ...info.fiveimagesplit,
                    text5: e.target.value,
                  },
                });
              }}
              value={info.fiveimagesplit.text2}
              placeholder="Text 5"
              rows={1}
            />
            {/* <p className="uppercase text-[24px] 2xl:text-[30px] text-white text-shadow z-10 mt-[-200px] text-center font-bold h-[50px] mb-[-50px]">
              {info.fiveimagesplit.text5}
            </p> */}
            <EditImage
              src={info.fiveimagesplit.icon2}
              width={150}
              height={150}
              alt={info.fiveimagesplit.text2}
              // className="z-10 mt-[110px] mb-[10px]"
              post={info}
              setPost={setCurrentPost}
              field="fiveimagesplit.icon5"
            />
          </div>
        </div>
        <Image
          src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/3cdfbab4-132c-4c4f-da1b-bc2827865000/public"
          width={1200}
          height={100}
          className="hidden lg:block w-full mt-[-100px]  h-[100px]"
          alt="White semi circle"
        />
      </div>
      <div
        className={`flex flex-col items-center w-full justify-start px-4 bg-white ${raleway.className}`}
      >
        {/* <p className="text-[17px] lg:text-[20px] text-center mt-[20px] font-[600] ">
          {info.fiveimagesplit.undertext}
        </p> */}
        <textarea
          className="mt-4 mb-2 p-2 text-[17px] lg:text-[20px] text-centertext-shadow font-[600]  px-2 border-2 border-yellow-500 border-dashed w-full max-w-[800px] text-center "
          onChange={(e) => {
            setCurrentPost({
              ...info,
              fiveimagesplit: {
                ...info.fiveimagesplit,
                undertext: e.target.value,
              },
            });
          }}
          value={info.fiveimagesplit.undertext}
          placeholder="Text 2"
          rows={1}
        />
        <textarea
          className=" mb-2 p-2 text-[17px] lg:text-[20px] text-centertext-shadow font-[600]  px-2 border-2 border-yellow-500 border-dashed w-full max-w-[800px] text-center "
          onChange={(e) => {
            setCurrentPost({
              ...info,
              fiveimagesplit: {
                ...info.fiveimagesplit,
                undertext2: e.target.value,
              },
            });
          }}
          value={info.fiveimagesplit.undertext2}
          placeholder="Under Text 2"
          rows={1}
        />
        {/* <p className="text-[17px] lg:text-[20px] text-center font-[600]">
          {info.fiveimagesplit.undertext2}
        </p> */}
        <BuyButton info={info} />
      </div>
    </div>
  );
};

export default FiveImageSplitEdit;
