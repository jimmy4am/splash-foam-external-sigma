import React from "react";
import Image from "next/image";

import { SalesPageType } from "@/interfaces/salesPage";

type Props = {
  info: SalesPageType,
  setCurrentPost: (post: SalesPageType) => void;
};

const SalesHeroListItemEdit = ({ text, onSetCurrentPost }: { text: string, onSetCurrentPost: (value: string) => void }) => {
  return (
    <li className="flex items-start gap-[10px] py-[7px]  border-b-[1px] border-b-[#ccc] text-[16px] md:text-[18px] leading-[24px] font-semibold tracking-[0.5px]">
      <Image className="mt-[3px]" src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/42fc9570-58bf-4996-8f1f-05992315fc00/public" alt="check icon" width={19} height={19} />
      <textarea
        className="editable-input"
        onChange={(e) => onSetCurrentPost(e.target.value)}
        value={text}
        placeholder="Text"
      />
    </li>
  );
};

const SalesHeroListEdit = ({ info, setCurrentPost }: Props) => {
  const onSetCurrentPost = (key: string, value: string) => {
    setCurrentPost({
      ...info,
      header: {
        ...info.header,
        [key]: value,
      },
    });
  }

  return (
    <ul className="">
      <SalesHeroListItemEdit text={info.header.pro1} onSetCurrentPost={(value) => onSetCurrentPost('pro1', value)} />
      <SalesHeroListItemEdit text={info.header.pro2} onSetCurrentPost={(value) => onSetCurrentPost('pro2', value)} />
      <SalesHeroListItemEdit text={info.header.pro3} onSetCurrentPost={(value) => onSetCurrentPost('pro3', value)} />
      <SalesHeroListItemEdit text={info.header.pro4} onSetCurrentPost={(value) => onSetCurrentPost('pro4', value)} />
      <SalesHeroListItemEdit text={info.header.pro5} onSetCurrentPost={(value) => onSetCurrentPost('pro5', value)} />
    </ul>
  );
};

export default SalesHeroListEdit;