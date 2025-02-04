import React from "react";

import { SalesPageType } from "@/interfaces/salesPage";
import EditImage from "@/app/_components/edit-image";

type Props = {
  info: SalesPageType;
  setCurrentPost: (post: SalesPageType) => void;
  icon: string;
  iconField: any;
  title: string;
  titleField: string;
  text: string;
  textField: string;
};

const SalesFeaturesSingleItemEdit = ({ info, setCurrentPost, icon, iconField, title, titleField, text, textField }: Props) => {
  return (
    <li className="w-full flex">
      <div className="flex-[0_0_77px] md:flex-[0_0_95px] flex items-center justify-center p-[5px] bg-[#d3eaf4] rounded-[10px]">
        <EditImage
          src={icon}
          alt={title}
          width={60}
          height={60}
          post={info}
          setPost={setCurrentPost}
          field={iconField}
        />
      </div>
      <div className="flex-[1_1_auto] p-[15px_15px_17px] md:p-[20px_15px_22px] bg-[#ebf8ff] rounded-[10px]">
        <h3 className="mb-[10px] text-[22px] lg:text-[23px] leading-[28px] lg:leading-[30px] font-bold">
          <input
            className="editable-input w-full"
            onChange={(e) => {
              setCurrentPost({
                ...info,
                slideshow: {
                  ...info.slideshow,
                  [titleField]: e.target.value,
                },
              });
            }}
            value={title}
            placeholder="Title"
          />
        </h3>
        <p className="text-[16px] md:text-[17px] lg:text-[18px] leading-[24px] md:leading-[25px] lg:leading-[26px] tracking-[0.3px]">
          <textarea
            className="editable-input w-full"
            onChange={(e) => {
              setCurrentPost({
                ...info,
                slideshow: {
                  ...info.slideshow,
                  [textField]: e.target.value,
                },
              });
            }}
            value={text}
            placeholder="Text"
          />
        </p>
      </div>
    </li>
  );
};

export default SalesFeaturesSingleItemEdit;