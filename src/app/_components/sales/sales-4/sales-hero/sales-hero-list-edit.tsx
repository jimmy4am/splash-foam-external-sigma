import React from "react";
import Image from "next/image";

import { SalesPageType } from "@/interfaces/salesPage";

type Props = {
  info: SalesPageType,
  setCurrentPost: (post: SalesPageType) => void;
};

type ItemProps = Props & {
  text: string;
  textField: string;
}

const SalesHeroListItemEdit = ({ info, setCurrentPost, text, textField }: ItemProps) => {
  return (
    <li className="flex items-start gap-[10px] py-[7px]  border-b-[1px] border-b-[#ccc] text-[16px] md:text-[17px] lg:text-[18px] leading-[24px] md:leading-[25px] lg:leading-[24px] font-semibold tracking-[0.5px]">
      <Image className="mt-[3px]" src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/42fc9570-58bf-4996-8f1f-05992315fc00/public" alt="check icon" width={19} height={19} />
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
    </li>
  );
};

const SalesHeroListEdit = ({ info, setCurrentPost }: Props) => {
  return (
    <ul>
      <SalesHeroListItemEdit info={info} setCurrentPost={setCurrentPost} text={info.header.pro1} textField="pro1" />
      <SalesHeroListItemEdit info={info} setCurrentPost={setCurrentPost} text={info.header.pro2} textField="pro2" />
      <SalesHeroListItemEdit info={info} setCurrentPost={setCurrentPost} text={info.header.pro3} textField="pro3" />
      <SalesHeroListItemEdit info={info} setCurrentPost={setCurrentPost} text={info.header.pro4} textField="pro4" />
      <SalesHeroListItemEdit info={info} setCurrentPost={setCurrentPost} text={info.header.pro5} textField="pro5" />
    </ul>
  );
};

export default SalesHeroListEdit;