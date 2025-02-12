import React from "react";
import { Outfit } from "next/font/google";

import { SalesPageType } from "@/interfaces/salesPage";
import EditImage from "@/app/_components/edit-image";

const outfit = Outfit({ subsets: ["latin"] });

type Props = {
  step: number;
  info: SalesPageType;
  setCurrentPost: (post: SalesPageType) => void;
  img: string;
  imgField: any;
  title: string;
  titleField: string;
  text: string;
  textField: string;
};

const SalesStepsSingleItemEdit = ({ step, info, setCurrentPost, img, imgField, title, titleField, text, textField }: Props) => {
  return (
    <div className="flex-1 flex items-start md:flex-col md:items-stretch gap-[20px] md:p-[10px_10px_35px_] md:bg-[#fff] md:rounded-[10px]">
      <div className="flex-[0_0_150px] md:flex-[0_1_auto] flex p-[3px] md:p-[0] bg-[#fff] md:bg-[transparent] border-[1px] md:border-[0] border-[#168ccd] rounded-[10px] overflow-hidden">
        <EditImage
          className="md:w-full md:h-[310px] rounded-[8px] object-cover"
          src={img}
          alt={`Step ${step}`}
          width={213}
          height={213}
          post={info}
          setPost={setCurrentPost}
          field={imgField}
        />
      </div>

      <div className="flex-[1_1_auto] md:flex md:items-start">
        <div className={`w-[24px] h-[24px] mb-[14px] bg-[#0f85d3] rounded-[50%] text-center text-[16px] leading-[24px] text-[#fff] md:flex-[0_0_48px] xl:flex-[0_0_53px]md: md:bg-[transparent] md:text-center md:text-[40px] md:leading-[40px] md:text-[#b7d2ed] font-medium ${outfit.className}`}>{step}</div>
        <div className="md:flex-[1_1_auto]">
          <h3 className={`mb-[5px] md:mb-[10px] text-[24px] leading-[24px] text-[#0073b7] font-extrabold uppercase ${outfit.className}`}>
            <input
              className="editable-input w-full"
              onChange={(e) => {
                setCurrentPost({
                  ...info,
                  splitcompare: {
                    ...info.splitcompare,
                    [titleField]: e.target.value,
                  },
                });
              }}
              value={title}
              placeholder="Title"
            />
          </h3>
          <p className="text-[16px] leading-[24px] tracking-[0.2px]">
            <textarea
              rows={5}
              className="editable-input w-full"
              onChange={(e) => {
                setCurrentPost({
                  ...info,
                  splitcompare: {
                    ...info.splitcompare,
                    [textField]: e.target.value,
                  },
                });
              }}
              value={text}
              placeholder="Text"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default SalesStepsSingleItemEdit;