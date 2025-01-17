import React from "react";
import Image from "next/image";
import { Raleway } from "next/font/google";
import { SalesPageType } from "@/interfaces/salesPage";

const raleway = Raleway({ subsets: ["latin"] });

type Props2 = {
  info: SalesPageType;
};

const SimpleImageStrip = ({ info }: Props2) => {
  return (
    <>
      <div
        className={`flex flex-col bg-gray-100  w-full justify-center items-center ${raleway.className}`}
      >
        <div className="flex w-full max-w-[1600px] ">
          <div className="w-1/3 md:w-1/6 ">
            <Image
              src={info.strip_images.img1}
              alt="img1"
              width={400}
              height={400}
              className="w-full "
            />
          </div>
          <div className="w-1/3 md:w-1/6 ">
            <Image
              src={info.strip_images.img2}
              alt="img2"
              width={400}
              height={400}
              className="w-full "
            />
          </div>
          <div className="w-1/3 md:w-1/6 ">
            <Image
              src={info.strip_images.img3}
              alt="img3"
              width={400}
              height={400}
              className="w-full "
            />
          </div>
          <div className="hidden md:block w-1/3 md:w-1/6 ">
            <Image
              src={info.strip_images.img4}
              alt="img4"
              width={400}
              height={400}
              className="w-full "
            />
          </div>
          <div className="hidden md:block w-1/3 md:w-1/6 ">
            <Image
              src={info.strip_images.img5}
              alt="img5"
              width={400}
              height={400}
              className="w-full "
            />
          </div>
          <div className="hidden md:block w-1/3 md:w-1/6 ">
            <Image
              src={info.strip_images.img6}
              alt="img6"
              width={400}
              height={400}
              className="w-full "
            />
          </div>
        </div>
        <div className="flex md:hidden  w-full max-w-[1600px] ">
          <div className="w-1/3 md:w-1/6 ">
            <Image
              src={info.strip_images.img4}
              alt="img4"
              width={400}
              height={400}
              className="w-full "
            />
          </div>
          <div className="w-1/3 md:w-1/6 ">
            <Image
              src={info.strip_images.img5}
              alt="img5"
              width={400}
              height={400}
              className="w-full "
            />
          </div>
          <div className="w-1/3 md:w-1/6 ">
            <Image
              src={info.strip_images.img6}
              alt="img6"
              width={400}
              height={400}
              className="w-full "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SimpleImageStrip;
