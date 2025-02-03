import React from "react";

import { SalesPageType } from "@/interfaces/salesPage";
import EditImage from "@/app/_components/edit-image";

type Props = {
  info: SalesPageType;
  setCurrentPost: (post: SalesPageType) => void;
};

const SalesCharacteristicsEdit = ({ info, setCurrentPost }: Props) => {
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
            placeholder="Сharacteristics section title"
          />
        </h2>

        <div className="sale-characteristics flex gap-[20px] -mx-4 md:mx-0 !w-auto">
          <div className="w-[145px] md:w-[105px] lg:w-[140px] xl:w-[165px] flex flex-col items-center px-[15px] md:px-[2px] xl:px-[15px] text-center">
            <EditImage
              src={info.characteristics.icon1}
              alt={info.characteristics.text1}
              width={55}
              height={45}
              post={info}
              setPost={setCurrentPost}
              field="characteristics.icon1"
            />
            <h3 className="text-[13px] lg:text-[15px] leading-[18px] lg:leading-[20px] font-semibold tracking-[0.5px]">
              <textarea
                className="editable-input"
                onChange={(e) => {
                  setCurrentPost({
                    ...info,
                    characteristics: {
                      ...info.characteristics,
                      text1: e.target.value,
                    },
                  });
                }}
                value={info.characteristics.text1}
                placeholder="Сharacteristic 1"
              />
            </h3>
          </div>
          <div className="w-[145px] md:w-[105px] lg:w-[140px] xl:w-[165px] flex flex-col items-center px-[15px] md:px-[2px] xl:px-[15px] text-center">
            <EditImage
              src={info.characteristics.icon2}
              alt={info.characteristics.text2}
              width={55}
              height={45}
              post={info}
              setPost={setCurrentPost}
              field="characteristics.icon2"
            />
            <h3 className="text-[13px] lg:text-[15px] leading-[18px] lg:leading-[20px] font-semibold tracking-[0.5px]">
              <textarea
                className="editable-input"
                onChange={(e) => {
                  setCurrentPost({
                    ...info,
                    characteristics: {
                      ...info.characteristics,
                      text2: e.target.value,
                    },
                  });
                }}
                value={info.characteristics.text2}
                placeholder="Сharacteristic 2"
              />
            </h3>
          </div>
          <div className="w-[145px] md:w-[105px] lg:w-[140px] xl:w-[165px] flex flex-col items-center px-[15px] md:px-[2px] xl:px-[15px] text-center">
            <EditImage
              src={info.characteristics.icon3}
              alt={info.characteristics.text3}
              width={55}
              height={45}
              post={info}
              setPost={setCurrentPost}
              field="characteristics.icon3"
            />
            <h3 className="text-[13px] lg:text-[15px] leading-[18px] lg:leading-[20px] font-semibold tracking-[0.5px]">
              <textarea
                className="editable-input"
                onChange={(e) => {
                  setCurrentPost({
                    ...info,
                    characteristics: {
                      ...info.characteristics,
                      text3: e.target.value,
                    },
                  });
                }}
                value={info.characteristics.text3}
                placeholder="Сharacteristic 3"
              />
            </h3>
          </div>
          <div className="w-[145px] md:w-[105px] lg:w-[140px] xl:w-[165px] flex flex-col items-center px-[15px] md:px-[2px] xl:px-[15px] text-center">
            <EditImage
              src={info.characteristics.icon4}
              alt={info.characteristics.text4}
              width={55}
              height={45}
              post={info}
              setPost={setCurrentPost}
              field="characteristics.icon4"
            />
            <h3 className="text-[13px] lg:text-[15px] leading-[18px] lg:leading-[20px] font-semibold tracking-[0.5px]">
              <textarea
                className="editable-input"
                onChange={(e) => {
                  setCurrentPost({
                    ...info,
                    characteristics: {
                      ...info.characteristics,
                      text4: e.target.value,
                    },
                  });
                }}
                value={info.characteristics.text4}
                placeholder="Сharacteristic 4"
              />
            </h3>
          </div>
          <div className="w-[145px] md:w-[105px] lg:w-[140px] xl:w-[165px] flex flex-col items-center px-[15px] md:px-[2px] xl:px-[15px] text-center">
            <EditImage
              src={info.characteristics.icon5}
              alt={info.characteristics.text5}
              width={55}
              height={45}
              post={info}
              setPost={setCurrentPost}
              field="characteristics.icon5"
            />
            <h3 className="text-[13px] lg:text-[15px] leading-[18px] lg:leading-[20px] font-semibold tracking-[0.5px]">
              <textarea
                className="editable-input"
                onChange={(e) => {
                  setCurrentPost({
                    ...info,
                    characteristics: {
                      ...info.characteristics,
                      text5: e.target.value,
                    },
                  });
                }}
                value={info.characteristics.text5}
                placeholder="Сharacteristic 5"
              />
            </h3>
          </div>
          <div className="w-[145px] md:w-[105px] lg:w-[140px] xl:w-[165px] flex flex-col items-center px-[15px] md:px-[2px] xl:px-[15px] text-center">
            <EditImage
              src={info.characteristics.icon6}
              alt={info.characteristics.text6}
              width={55}
              height={45}
              post={info}
              setPost={setCurrentPost}
              field="characteristics.icon6"
            />
            <h3 className="text-[13px] lg:text-[15px] leading-[18px] lg:leading-[20px] font-semibold tracking-[0.5px]">
              <textarea
                className="editable-input"
                onChange={(e) => {
                  setCurrentPost({
                    ...info,
                    characteristics: {
                      ...info.characteristics,
                      text6: e.target.value,
                    },
                  });
                }}
                value={info.characteristics.text6}
                placeholder="Сharacteristic 6"
              />
            </h3>
          </div>
          <div className="w-[145px] md:w-[105px] lg:w-[140px] xl:w-[165px] flex flex-col items-center px-[15px] md:px-[2px] xl:px-[15px] text-center">
            <EditImage
              src={info.characteristics.icon7}
              alt={info.characteristics.text7}
              width={55}
              height={45}
              post={info}
              setPost={setCurrentPost}
              field="characteristics.icon7"
            />
            <h3 className="text-[13px] lg:text-[15px] leading-[18px] lg:leading-[20px] font-semibold tracking-[0.5px]">
                <textarea
                  className="editable-input"
                  onChange={(e) => {
                    setCurrentPost({
                      ...info,
                      characteristics: {
                        ...info.characteristics,
                        text7: e.target.value,
                      },
                    });
                  }}
                  value={info.characteristics.text7}
                  placeholder="Сharacteristic 7"
                />
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesCharacteristicsEdit;