import React from "react";
import Image from "next/image";
import Slider from "react-slick";

import { SalesPageType } from "@/interfaces/salesPage";
import EditImage from "@/app/_components/edit-image";

type Props = {
  info: SalesPageType,
  setCurrentPost: (post: SalesPageType) => void;
};

type ItemProps = Props & {
  imageBefore: string;
  imageBeforeField: any;
  imageAfter: string;
  imageAfterField: any;
}

const SalesHeroSliderItemEdit = ({ info, setCurrentPost, imageBefore, imageBeforeField, imageAfter, imageAfterField }: ItemProps) => (
  <div className="p-[5px_16px_10px]">
    <div className="flex gap-[10px] p-[5px_5px_10px] bg-[#fff] rounded-[10px] shadow-[0px_5px_8px_2px_#d4d4d4]">
      <div className="flex-1">
        <EditImage
          className="mb-[7px] rounded-[9px]"
          src={imageBefore}
          alt="Before"
          width={320}
          height={446}
          post={info}
          setPost={setCurrentPost}
          field={imageBeforeField}
        />
        <p className="text-center text-[12px] leading-[12px] font-bold uppercase tracking-{0.5px}">Before</p>
      </div>
      <div className="flex-1">
        <EditImage
          className="mb-[7px] rounded-[9px]"
          src={imageAfter}
          alt="After"
          width={320}
          height={446}
          post={info}
          setPost={setCurrentPost}
          field={imageAfterField}
        />
        <p className="text-center text-[12px] leading-[12px] font-bold uppercase tracking-{0.5px}">After</p>
      </div>
    </div>
  </div>
)

const SalesHeroSliderEdit = ({ info, setCurrentPost }: Props) => {
  const settings = {
    nextArrow: <button><Image className="" src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/c8d363ef-dadd-4654-0728-197ae1a4b900/public" width={38} height={38} alt="Next slide icon" /></button>,
    prevArrow: <button><Image className="" src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/64e9553b-9c3c-43c1-458b-1f70fc3e2600/public" width={38} height={38} alt="Prev slide icon" /></button>,
  };

  return (
    <Slider {...settings} className="sales-hero-slider slider">
      <SalesHeroSliderItemEdit info={info} setCurrentPost={setCurrentPost} imageBefore={info.header.beforeImage1} imageBeforeField="header.beforeImage1" imageAfter={info.header.afterImage1} imageAfterField="header.afterImage1" />
      <SalesHeroSliderItemEdit info={info} setCurrentPost={setCurrentPost} imageBefore={info.header.beforeImage2} imageBeforeField="header.beforeImage2" imageAfter={info.header.afterImage2} imageAfterField="header.afterImage2" />
      <SalesHeroSliderItemEdit info={info} setCurrentPost={setCurrentPost} imageBefore={info.header.beforeImage3} imageBeforeField="header.beforeImage3" imageAfter={info.header.afterImage3} imageAfterField="header.afterImage3" />
    </Slider>
  );
};

export default SalesHeroSliderEdit;
