import React from "react";
import Image from "next/image";

import { SalesPageType } from "@/interfaces/salesPage";
import EditImage from "@/app/_components/edit-image";

type Props = {
  info: SalesPageType;
  setCurrentPost: (post: SalesPageType) => void;
  classes: string;
  img: string;
  imgField: any;
  label: string;
  icon: string;
};

type ItemProps = {
  info: SalesPageType;
  setCurrentPost: (post: SalesPageType) => void;
  text: string;
  textField: string;
  icon: string ;
}

const SalesComparisonItemRowEdit = ({ info, setCurrentPost, text, textField, icon }: ItemProps) => (
  <li className="flex items-start gap-[10px] text-[15px] md:text-[18px] leading-[20px] md:leading-[24px] font-semibold text-[#000]">
    <div className="flex-[0_0_16px] md:flex-[0_0_21px] mt-[3px]">
      <Image src={icon} width={50} height={50} alt="Icon" />
    </div>
    <p>
      <input
        className="editable-input w-full"
        onChange={(e) => {
          setCurrentPost({
            ...info,
            specgrid: {
              ...info.specgrid,
              [textField]: e.target.value,
            },
          });
        }}
        value={text}
        placeholder="Text"
      />
    </p>
  </li>
)

const SalesComparisonItemEdit = ({ info, setCurrentPost, classes, img, imgField, label, icon }: Props) => {
  return (
    <div className={`flex flex-col items-center flex-1 p-[20px_10px_22px_10px] md:p-[25px_25px_30px_25px] ${classes}`}>
      <div className="relative mb-[15px] md:mb-[20px] p-[5px_11px_8px] md:p-[7px-25px_8px] bg-[#159bde] border-[1px] border-[#b5bdc5] rounded-[7px] text-[17px] md:text-[20px] text-[#fff] leading-[17px] md:leading-[20px] font-bold">
        {label}
        <div className="absolute left-[50%] -ml-[7px] md:-mt-[1px] w-[8px] md:w-[10px] h-[8px] md:h-[10px] origin-bottom-left rotate-45 transform border-[1px] border-[#b5bdc5] border-t-[0] border-l-[0] bg-[#159bde]"></div>
      </div>
      <div className="flex justify-center w-full h-[150px] md:h-[175px] mb-[22px] md:mb-[25px] border-[1px] border-[#dbdddd] rounded-[20px]">
        <EditImage
          className="object-contain h-[100%]"
          src={img}
          alt={label}
          width={130}
          height={175}
          post={info}
          setPost={setCurrentPost}
          field={imgField}
        />
      </div>
      <ul className="flex flex-col gap-[12px] md:gap-[15px]">
        <SalesComparisonItemRowEdit info={info} setCurrentPost={setCurrentPost} text={info.specgrid.text1} textField="text1" icon={icon} />
        <SalesComparisonItemRowEdit info={info} setCurrentPost={setCurrentPost} text={info.specgrid.text2} textField="text2" icon={icon} />
        <SalesComparisonItemRowEdit info={info} setCurrentPost={setCurrentPost} text={info.specgrid.text3} textField="text3" icon={icon} />
        <SalesComparisonItemRowEdit info={info} setCurrentPost={setCurrentPost} text={info.specgrid.text4} textField="text4" icon={icon} />
        <SalesComparisonItemRowEdit info={info} setCurrentPost={setCurrentPost} text={info.specgrid.text5} textField="text5" icon={icon} />
        <SalesComparisonItemRowEdit info={info} setCurrentPost={setCurrentPost} text={info.specgrid.text6} textField="text6" icon={icon} />
        <SalesComparisonItemRowEdit info={info} setCurrentPost={setCurrentPost} text={info.specgrid.text7} textField="text7" icon={icon} />
      </ul>
    </div>
  );
};

export default SalesComparisonItemEdit;