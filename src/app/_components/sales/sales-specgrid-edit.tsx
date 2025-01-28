import React from "react";
import Image from "next/image";
import { Raleway } from "next/font/google";
import { SalesPageType } from "@/interfaces/salesPage";
import { siteProduct } from "@/lib/site-info";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import BuyButton from "./buy-button";
import EditImage, { Path } from "../edit-image";

const raleway = Raleway({ subsets: ["latin"] });

type Props2 = {
  info: SalesPageType;
  setCurrentPost: (post: SalesPageType) => void;
};

type SpecGridRowProps = {
  text: string;
  icon: string;
  num: number;
  info: SalesPageType;
  setCurrentPost: (post: SalesPageType) => void;
};
const SpecGridRow = ({
  text,
  icon,
  num,
  info,
  setCurrentPost,
}: SpecGridRowProps) => {
  const iconField = `specgrid.icon${num}` as Path<SalesPageType>;
  return (
    <div className="flex w-full border-t-[1px] border-[#dcdcdc]">
      <div className="w-1/2 lg:w-2/3 flex items-center justify-start p-2">
        <EditImage
          src={icon}
          width={150}
          height={150}
          // className="object-scale-down w-[30px] lg:w-[45px] lg:min-w-[40px] mr-2"
          alt={text}
          post={info}
          setPost={setCurrentPost}
          field={iconField}
        />
        <textarea
          className="ml-2 mt-4 text-[16px] lg:text-[20px]  text-[#005279] font-bold px-2 border-2 border-yellow-500 border-dashed w-full text-left"
          onChange={(e) => {
            setCurrentPost({
              ...info,
              specgrid: {
                ...info.specgrid,
                [`text${num}`]: e.target.value,
              },
            });
          }}
          value={text}
          placeholder={`Text ${num}`}
          rows={3}
        />
        {/* <p className="text-[16px] lg:text-[20px]  text-[#005279] font-bold px-2 text-left">
          {text}
        </p> */}
      </div>
      <div className="w-1/4 justify-center lg:w-1/6 flex items-center md:justify-start p-2 text-[16px] lg:text-[20px] font-bold text-[#005279] border-r-[1px] border-l-[1px] border-[#dcdcdc]">
        <CheckCircleIcon className="h-8 w-8 lg:h-12 lg:w-12 text-[#0082c0] min-h-4 min-w-4 lg:min-w-10 lg:min-h-10 ml-4 mr-4" />{" "}
        <span className="hidden sm:block">Yes</span>
      </div>
      <div className="w-1/4 justify-cetner lg:w-1/6 flex items-center md:justify-start p-2 text-[16px] lg:text-[20px] font-bold text-[#333] ">
        <XCircleIcon className="h-8 w-8 lg:h-12 lg:w-12 text-red-600 min-h-4 min-w-4 lg:min-w-10 lg:min-h-10 ml-4 mr-4" />{" "}
        <span className="hidden sm:block"> No</span>
      </div>
    </div>
  );
};
const SpecGridEdit = ({ info, setCurrentPost }: Props2) => {
  return (
    <div className="flex flex-col items-center w-full pb-6 z-10">
      <div
        className={`flex flex-col items-center w-full  text-center max-w-[1024px] px-4 ${raleway.className}`}
      >
        <textarea
          className="mt-4 text-[26px] lg:text-[50px] font-bold  text-[#0082c0] px-2 border-2 border-yellow-500 border-dashed text-center"
          onChange={(e) => {
            setCurrentPost({
              ...info,
              specgrid: {
                ...info.specgrid,
                heading: e.target.value,
              },
            });
          }}
          value={info.specgrid.heading}
          placeholder="Spec Grid Heading"
          rows={1}
        />
        <textarea
          className="mt-4 text-[26px] lg:text-[50px] font-bold  text-[#005279] px-2 border-2 border-yellow-500 border-dashed text-center"
          onChange={(e) => {
            setCurrentPost({
              ...info,
              specgrid: {
                ...info.specgrid,
                headingend: e.target.value,
              },
            });
          }}
          value={info.specgrid.headingend}
          placeholder="Spec Grid Heading End"
          rows={1}
        />
        {/* <h5 className="w-full text-[26px] lg:text-[50px] font-bold  text-[#0082c0] mt-8 px-6 md:px-20 xl:px-36">
          {info.specgrid.heading}{" "}
          <span className="text-[#005279]">{info.specgrid.headingend}</span>
        </h5> */}
        <div className="flex flex-col w-full rounded-lg spec-grid-shadow mt-10 bg-white">
          <div className="flex w-full">
            <div className="w-1/2 lg:w-1/3" />
            <div className="w-1/2 lg:w-2/3 flex items-center mt-[-20px] justify-center">
              <div className="flex flex-col lg:flex-row items-center w-1/2">
                <EditImage
                  src={info.specgrid.productImg}
                  width={150}
                  height={150}
                  className="mr-2"
                  alt={siteProduct}
                  post={info}
                  setPost={setCurrentPost}
                  field="specgrid.productImg"
                />
                <h5 className="text-[20px] lg:text-[26px] text-[#005279] font-bold">
                  {siteProduct}
                </h5>
              </div>
              <Image
                src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/3bb0ead2-26e0-4ed9-d0ff-c8394409fd00/public"
                width={42}
                height={42}
                alt="verses icon"
              />

              <div className="flex flex-col lg:flex-row items-center w-1/2">
                <EditImage
                  src={info.specgrid.otherImg}
                  width={150}
                  height={150}
                  className="mr-2"
                  alt="Competitor Product"
                  post={info}
                  setPost={setCurrentPost}
                  field="specgrid.otherImg"
                />
                <h5 className="text-[20px] lg:text-[26px] text-[#787878] font-bold">
                  Others
                </h5>
              </div>
            </div>
          </div>
          <SpecGridRow
            text={info.specgrid.text1}
            icon={info.specgrid.icon1}
            num={1}
            info={info}
            setCurrentPost={setCurrentPost}
          />
          <SpecGridRow
            text={info.specgrid.text2}
            icon={info.specgrid.icon2}
            num={2}
            info={info}
            setCurrentPost={setCurrentPost}
          />
          <SpecGridRow
            text={info.specgrid.text3}
            icon={info.specgrid.icon3}
            num={3}
            info={info}
            setCurrentPost={setCurrentPost}
          />
          <SpecGridRow
            text={info.specgrid.text4}
            icon={info.specgrid.icon4}
            num={4}
            info={info}
            setCurrentPost={setCurrentPost}
          />
          <SpecGridRow
            text={info.specgrid.text5}
            icon={info.specgrid.icon5}
            num={5}
            info={info}
            setCurrentPost={setCurrentPost}
          />
          <SpecGridRow
            text={info.specgrid.text6}
            icon={info.specgrid.icon6}
            num={6}
            info={info}
            setCurrentPost={setCurrentPost}
          />
          <SpecGridRow
            text={info.specgrid.text7}
            icon={info.specgrid.icon7}
            num={7}
            info={info}
            setCurrentPost={setCurrentPost}
          />
        </div>
        <div className="flex w-full justify-center mt-8">
          <BuyButton info={info} />
        </div>
      </div>
    </div>
  );
};

export default SpecGridEdit;
