import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

import { SalesPageType } from "@/interfaces/salesPage";
import EditImage from "@/app/_components/edit-image";

type Props = {
  info: SalesPageType;
  setCurrentPost: (post: SalesPageType) => void;
};

type ItemProps = Props & {
  icon: string;
  iconField: any;
  text: string;
  textField: string;
}

const SalesCharacteristicsItem = ({ info, setCurrentPost, icon, iconField, text, textField }: ItemProps) => (
  <div className="w-[145px] md:w-[145px] lg:w-[195px] flex flex-col items-center px-[15px] md:px-[2px] xl:px-[15px] text-center">
    <EditImage
      className="w-[55px] mb-[10px]"
      src={icon}
      alt={text}
      width={55}
      height={45}
      post={info}
      setPost={setCurrentPost}
      field={iconField}
    />
    <h3 className="text-[13px] lg:text-[15px] leading-[18px] lg:leading-[20px] font-semibold tracking-[0.5px]">
      <input
        className="editable-input w-full"
        onChange={(e) => {
          setCurrentPost({
            ...info,
            characteristics: {
              ...info.characteristics,
              [textField]: e.target.value,
            },
          });
        }}
        value={text}
        placeholder="Еext"
      />
    </h3>
  </div>
)

const SalesCharacteristics = ({ info, setCurrentPost }: Props) => {
  const [ windowWidth, setWindowWidth ] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <section className="w-full p-[20px_0] md:p-[25px_0_20px] bg-[#fff] border-[1px] border-[#dbdbdb]">
      <div className="w-full max-w-[1200px] mx-[auto] px-4">
        <h2 className="mb-[20px] md:mb-[25px] text-center text-[18px] md:text-[20px] leading-[18px] md:leading-[20px] font-bold">
          <input
            className="editable-input"
            onChange={(e) => {
              setCurrentPost({
                ...info,
                characteristics: {
                  ...info.characteristics,
                  heading: e.target.value,
                },
              });
            }}
            value={info.characteristics.heading}
            placeholder="Heading"
          />
        </h2>

        <Marquee autoFill={true} play={ windowWidth < 768 } className="sale-characteristics max-w-[970px] flex gap-[20px] -mx-4 md:mx-[auto] !w-auto">
          <SalesCharacteristicsItem info={info} setCurrentPost={setCurrentPost} icon={info.characteristics.icon1} iconField="characteristics.icon1" text={info.characteristics.text1} textField="text1" />
          <SalesCharacteristicsItem info={info} setCurrentPost={setCurrentPost} icon={info.characteristics.icon2} iconField="characteristics.icon2" text={info.characteristics.text2} textField="text2" />
          <SalesCharacteristicsItem info={info} setCurrentPost={setCurrentPost} icon={info.characteristics.icon3} iconField="characteristics.icon3" text={info.characteristics.text3} textField="text3" />
          <SalesCharacteristicsItem info={info} setCurrentPost={setCurrentPost} icon={info.characteristics.icon4} iconField="characteristics.icon4" text={info.characteristics.text4} textField="text4" />
          <SalesCharacteristicsItem info={info} setCurrentPost={setCurrentPost} icon={info.characteristics.icon5} iconField="characteristics.icon5" text={info.characteristics.text5} textField="text5" />
        </Marquee>
      </div>
    </section>
  );
};

export default SalesCharacteristics;