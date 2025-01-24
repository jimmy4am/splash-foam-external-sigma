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

export const ThreeHighlightsEdit = ({ info, setCurrentPost }: Props2) => {
  return (
    <div className="flex w-full px-4  justify-center mt-4 border-b-[1px] border-[#dcdcdc] pb-4 md:pt-4">
      <div className="flex flex-wrap w-full max-w-[1260px]">
        <div className="flex flex-col items-center justify-start w-full md:w-1/3 pt-6 md:pt-0">
          <EditImage
            src={info.highlights.icon1}
            alt="icon1"
            width={150}
            height={150}
            post={info}
            setPost={setCurrentPost}
            field="highlights.icon1"
          />
          <div className="flex flex-col items-center px-4 md:px-8">
            {/* <h3
              className={`text-[20px] lg:text-[24px] font-bold py-4 lg:pt-2 lg:pb-2 text-center ${raleway.className}`}
            >
              {info.highlights.head1}
            </h3> */}
            <input
              className=" mt-4 text-[20px] lg:text-[24px] font-bold ml-2  text-xl  px-2 border-2 border-yellow-500 border-dashed flex w-full text-center"
              onChange={(e) => {
                setCurrentPost({
                  ...info,
                  highlights: {
                    ...info.highlights,
                    head1: e.target.value,
                  },
                });
              }}
              value={info.highlights.head1}
              placeholder="Highlight 1"
            />
            <textarea
              className="text-[17px] md:text-[19px] text-center pt-2  text-xl  px-2 border-2 border-yellow-500 border-dashed flex w-full  leading-normal mt-1"
              onChange={(e) => {
                setCurrentPost({
                  ...info,
                  highlights: {
                    ...info.highlights,
                    text1: e.target.value,
                  },
                });
              }}
              value={info.highlights.text1}
              rows={4}
              placeholder="Highlight 1 Bottom Text"
            />
            {/* <p className="text-[17px] md:text-[19px] text-center">
              {info.highlights.text1}
            </p> */}
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full md:w-1/3 pt-6 md:pt-0">
          <EditImage
            src={info.highlights.icon2}
            alt="icon2"
            width={150}
            height={150}
            post={info}
            setPost={setCurrentPost}
            field="highlights.icon2"
          />
          <div className="flex flex-col items-center md:border-r-[1px] md:border-l-[1px] border-[#dcdcdc] px-4 md:px-8 mt-4 lg:mt-0">
            {/* <h3
              className={`text-[20px] lg:text-[24px] font-bold md:pb-4 lg:pt-2 lg:pb-2 text-center ${raleway.className}`}
            >
              {info.highlights.head2}
            </h3>
            <p className="text-[17px] md:text-[19px] text-center">
              {info.highlights.text2}
            </p> */}
            <input
              className=" mt-4 text-[20px] lg:text-[24px] font-bold ml-2  text-xl  px-2 border-2 border-yellow-500 border-dashed flex w-full text-center"
              onChange={(e) => {
                setCurrentPost({
                  ...info,
                  highlights: {
                    ...info.highlights,
                    head2: e.target.value,
                  },
                });
              }}
              value={info.highlights.head2}
              placeholder="Highlight 2"
            />
            <textarea
              className="text-[17px] md:text-[19px] text-center pt-2  text-xl  px-2 border-2 border-yellow-500 border-dashed flex w-full  leading-normal mt-1"
              onChange={(e) => {
                setCurrentPost({
                  ...info,
                  highlights: {
                    ...info.highlights,
                    text2: e.target.value,
                  },
                });
              }}
              value={info.highlights.text2}
              rows={4}
              placeholder="Hightlight 2 Bottom Text"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full md:w-1/3 pt-6 md:pt-0">
          <EditImage
            src={info.highlights.icon3}
            alt="icon3"
            width={150}
            height={150}
            post={info}
            setPost={setCurrentPost}
            field="highlights.icon3"
          />
          <div className="flex flex-col items-center px-4 md:px-8">
            {/* <h3
              className={`text-[20px] lg:text-[24px] font-bold text-center py-4 lg:pt-2 lg:pb-2  ${raleway.className}`}
            >
              {info.highlights.head3}
            </h3>
            <p className="text-[17px] md:text-[19px] text-center">
              {info.highlights.text3}
            </p> */}
            <input
              className=" mt-4 text-[20px] lg:text-[24px] font-bold ml-2  text-xl  px-2 border-2 border-yellow-500 border-dashed flex w-full text-center"
              onChange={(e) => {
                setCurrentPost({
                  ...info,
                  highlights: {
                    ...info.highlights,
                    head3: e.target.value,
                  },
                });
              }}
              value={info.highlights.head3}
              placeholder="Highlight 3"
            />
            <textarea
              className="text-[17px] md:text-[19px] text-center pt-2  text-xl  px-2 border-2 border-yellow-500 border-dashed flex w-full  leading-normal mt-1"
              onChange={(e) => {
                setCurrentPost({
                  ...info,
                  highlights: {
                    ...info.highlights,
                    text3: e.target.value,
                  },
                });
              }}
              value={info.highlights.text3}
              rows={4}
              placeholder="Highlight 3 Bottom Text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeHighlightsEdit;
