import React from "react";
import { Outfit } from "next/font/google";

import { SalesPageType } from "@/interfaces/salesPage";
import EditImage from "@/app/_components/edit-image";

const outfit = Outfit({ subsets: ["latin"] });

type Props = {
  info: SalesPageType;
  setCurrentPost: (post: SalesPageType) => void;
  step: number;
  img: string;
  imgField: any;
  title: string;
  titleField: string;
  text: string;
  textField: string;
};

const SalesStepsSingleItemEdit = ({ info, setCurrentPost, step, img, imgField, title, titleField, text,textField  }: Props) => {
  return (
    <div className="md:flex-[1] flex items-start md:flex-col-reverse p-[10px] bg-[#fff] rounded-[10px]">
      <div className="flex-[1_1_auto] p-[0_5px] md:flex md:items-start md:p-[0]">
        <div className={`md:flex-[0_0_48px] xl:flex-[0_0_53px] mb-[10px] md:mb-[0] md:text-center text-[40px] leading-[40px] text-[#b7d2ed] font-medium ${outfit.className}`}>{step}</div>
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
      <div className="flex-[0_0_165px] md:flex-[0_1_auto] md:w-full md:mb-[20px] rounded-[10px] overflow-hidden">
        <EditImage
          className="w-full"
          src={img}
          alt={`Step ${step}`}
          width={213}
          height={213}
          post={info}
          setPost={setCurrentPost}
          field={imgField}
        />
      </div>
    </div>
  );
};

export default SalesStepsSingleItemEdit;