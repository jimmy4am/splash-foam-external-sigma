import React from "react";
import Image from "next/image";

type FbProps = {
  name: string;
  city: string;
  text: string;
  image: string;
  upvotes: string;
  time: string;
  indent?: string;
};
const FbReview = ({
  name,
  city,
  text,
  image,
  upvotes,
  time,
  indent,
}: FbProps) => {
  const indentNum = parseFloat(indent || "0");
  const indentSpace = indentNum * 40;
  return (
    <div className={`flex w-full flex-col mt-8 ${`pl-[${indentSpace}px]`}`}>
      <div className="flex w-full items-center">
        <Image src={image} width={50} height={50} alt={name} className="mr-4" />
        <h5 className="text-[18px] font-bold text-[#2969b0] mr-4">{name}</h5>
        <p className="text-[12px] text-[#999]">{city} 🇺🇸</p>
      </div>
      <p className="text-[18px] text-black py-4">{text}</p>
      <div className="flex w-full justify-start items-cente text-[14px] text-[#555]">
        <span className="hover:underline cursor-pointer mr-2">Like</span> ·{" "}
        <span className="hover:underline cursor-pointer ml-2 mr-2">Reply</span>·{" "}
        <Image
          src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/a8bb2842-870e-4bd3-45dd-fb906afb0100/public"
          width={12}
          height={12}
          alt="Like"
          className="object-scale-down ml-2"
        />
        {upvotes} · <span className=" ml-2 mr-2">{time}</span>
      </div>
    </div>
  );
};

export default FbReview;
