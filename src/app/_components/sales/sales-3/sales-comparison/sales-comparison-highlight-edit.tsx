import React from "react";
import { Outfit } from "next/font/google";

import {SalesPageType} from "@/interfaces/salesPage";
import EditImage from "@/app/_components/edit-image";

const outfit = Outfit({ subsets: ["latin"] });

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

const SalesComparisonHighlightEdit = ({ info, setCurrentPost, icon, iconField, title, titleField, text, textField}: Props) => {
  return (
    <div className="flex flex-col items-center justify-start flex-1 gap-[10px] p-[25px_35px_22px] md:p-[25px_15px_30px] bg-[#fff] border-[1px] border-[#2079ba] rounded-[10px] text-center">
      <EditImage
        src={icon}
        alt={title}
        width={50}
        height={50}
        post={info}
        setPost={setCurrentPost}
        field={iconField}
      />
      <h3 className={`text-[24px] leading-[28px] font-bold ${outfit.className}`}>
        <input
          className="editable-input w-full"
          onChange={(e) => {
            setCurrentPost({
              ...info,
              highlights: {
                ...info.highlights,
                [titleField]: e.target.value,
              },
            });
          }}
          value={title}
          placeholder="Title"
        />
      </h3>
      <p className="w-full min-h-[96px] text-[16px] leading-[24px] font-medium">
        <textarea
          rows={4}
          className="editable-input w-full"
          onChange={(e) => {
            setCurrentPost({
              ...info,
              highlights: {
                ...info.highlights,
                [textField]: e.target.value,
              },
            });
          }}
          value={text}
          placeholder="Text"
        />
      </p>
    </div>
  );
};

export default SalesComparisonHighlightEdit;