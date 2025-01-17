import React from "react";
import Image from "next/image";

type Props = {
  cta: string;
};
const StickyCta = ({ cta }: Props) => {
  return (
    <>
      <div className="fixed lg:hidden bottom-0 left-0 w-full bg-[#005279]  text-center p-2 z-40">
        <a href={cta} className="w-full justify-center flex">
          <button className="bg-[#00c04e] text-[22px]  text-white px-2 py-2 rounded-md flex whitespace-nowrap green-text-shadow animate-grow-shrink items-center hover:transform hover:scale-110 hover:animate-none font-bold w-[90%] justify-center ">
            <p>
              {" "}
              Order Now &amp; <span className="text-[#ffe500]">Save 60%</span>
            </p>
            <Image
              src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/6f7f9340-d6f8-4aa2-0a2f-0627aa510900/public"
              width={10}
              height={10}
              alt="go arrow"
              className="ml-4"
            />
          </button>
        </a>
      </div>
    </>
  );
};

export default StickyCta;
