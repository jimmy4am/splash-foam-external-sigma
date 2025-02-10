import React from "react";
import { Outfit } from "next/font/google";

import { SalesPageType } from "@/interfaces/salesPage";
import EditImage from "@/app/_components/edit-image";

const outfit = Outfit({ subsets: ["latin"] });

type Props = {
  info: SalesPageType;
  setCurrentPost: (post: SalesPageType) => void;
  icon: string;
  iconField: any;
  title: string;
  titleField: string;
  text?: string;
  textField: string;
  image: string;
  imageField: any;
};

const SalesFeaturesSingleItemEdit = ({ info, setCurrentPost, icon, iconField, title, titleField, text, textField, image, imageField }: Props) => {
  return (
    <li className="w-full p-[10px] md:p-[10px_15px] bg-[#dcf6ff] rounded-[10px]">
      <div className="relative flex rounded-[10px] shadow-[0px_5px_8px_2px_#d4d4d4]">
        <EditImage
          className="object-cover w-full rounded-[10px]"
          src={image}
          alt={title}
          width={325}
          height={195}
          post={info}
          setPost={setCurrentPost}
          field={imageField}
        />
        <span className="absolute right-[10px] -bottom-[20px] lg:-bottom-[22px] w-[50px] h-[50px] md:w-[42px] md:h-[42px] lg:w-[50px] lg:h-[50px] bg-[#fff] rounded-[50%] flex items-center justify-center p-[10px] shadow-[0px_2px_5px_1px_#d4d4d4]">
          <EditImage
            className="w-[29px] md:w-[22px] lg:w-[29px]"
            src={icon}
            alt="Icon"
            width={58}
            height={60}
            post={info}
            setPost={setCurrentPost}
            field={iconField}
          />
        </span>
      </div>
      <div className="p-[20px_15px_10px] md:p-[27px_0px_15px] lg:p-[27px_10px_15px]">
        <h3 className={`text-[24px] md:text-[20px] lg:text-[24px] leading-[30px] md:leading-[26px] lg:leading-[30px] text-[#0064a9] font-bold ${outfit.className}`}>
          <input
            className="editable-input w-full"
            onChange={(e) => {
              setCurrentPost({
                ...info,
                features: {
                  ...info.features,
                  [titleField]: e.target.value,
                },
              });
            }}
            value={title}
            placeholder="Title"
          />
        </h3>
        {text ? (<p className="mt-[6px] text-[16px] md:text-[17px] lg:text-[18px] leading-[24px] md:leading-[25px] lg:leading-[26px]">
          <input
            className="editable-input w-full"
            onChange={(e) => {
              setCurrentPost({
                ...info,
                features: {
                  ...info.features,
                  [textField]: e.target.value,
                },
              });
            }}
            value={text}
            placeholder="Text"
          />
        </p>) : null}
      </div>
    </li>
  );
};

export default SalesFeaturesSingleItemEdit;