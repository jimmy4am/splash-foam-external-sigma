import React from "react";
import { Outfit } from "next/font/google";

import { SalesPageType } from "@/interfaces/salesPage";
import EditImage from "@/app/_components/edit-image";

const outfit = Outfit({ subsets: ["latin"] });

type Props = {
  info: SalesPageType,
  setCurrentPost: (post: SalesPageType) => void;
};

type StepProps = Props & {
  text: string;
  textField: string;
  image: string;
  imageField: any;
}

const SalesHeroStepEdit = ({ info, setCurrentPost, text, textField, image, imageField }: StepProps) => (
  <div className="flex-1 p-[5px_5px_10px] lg:p-[10px] bg-[#188fcf] rounded-[10px] lg:rounded-[15px]">
    <EditImage
      className="mb-[7px] rounded-[8px] lg:rounded-[13px]"
      src={image}
      alt={text}
      width={115}
      height={84}
      post={info}
      setPost={setCurrentPost}
      field={imageField}
    />
    <p className="text-center text-[13px] md:text-[12px] ld:text-[15px] leading-[16px] md:leading-[15px] ld:leading-[18px] text-[#fff] font-semibold">
      <input
        className="editable-input w-full"
        onChange={(e) => {
          setCurrentPost({
            ...info,
            header: {
              ...info.header,
              [textField]: e.target.value,
            },
          });
        }}
        value={text}
        placeholder="Text"
      />
    </p>
  </div>
)

const SalesHeroStepsEdit = ({ info, setCurrentPost }: Props) => {
  return (
    <>
      <div className="flex items-center gap-[10px] mb-[15px]">
        <span className="flex-[1_1_auto] h-[2px] bg-[#c9cdcf]"></span>
        <p className={`flex-[0_1_auto] text-[18px] md:text-[20px] lg:text-[23px] leading-[18px] md:leading-[20px] lg:leading-[23px] uppercase font-semibold ${outfit.className}`}>
          <input
            className="editable-input min-w-0"
            onChange={(e) => {
              setCurrentPost({
                ...info,
                header: {
                  ...info.header,
                  stepTitle: e.target.value,
                },
              });
            }}
            value={info.header.stepTitle}
            placeholder="Title"
          />
        </p>
        <span className="flex-[1_1_auto] h-[2px] bg-[#c9cdcf]"></span>
      </div>
      <div className="flex gap-[15px] md:gap-[10px] lg:md:gap-[15px] max-w-[430px] mx-[auto] px-[16px] md:px-[0px]">
        <SalesHeroStepEdit info={info} setCurrentPost={setCurrentPost} text={info.header.stepText1} textField="stepText1" image={info.header.stepImage1} imageField="header.stepImage1" />
        <SalesHeroStepEdit info={info} setCurrentPost={setCurrentPost} text={info.header.stepText2} textField="stepText2" image={info.header.stepImage2} imageField="header.stepImage2" />
        <SalesHeroStepEdit info={info} setCurrentPost={setCurrentPost} text={info.header.stepText3} textField="stepText3" image={info.header.stepImage3} imageField="header.stepImage3" />
      </div>
    </>
  );
};

export default SalesHeroStepsEdit;
