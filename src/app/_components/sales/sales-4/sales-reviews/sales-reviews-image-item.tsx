import React from "react";
import Image from "next/image";

type Props = {
  image: string;
};

const SalesReviewsImageItem = ({ image }: Props) => {
  return (
    <div className="md:px-[10px]">
      <div className="flex aspect-square mb-[1px] border-[1px] border-[#3a89c2] rounded-[15px] overflow-hidden">
        <Image src={image} width={400} height={400} alt="Image" />
      </div>
    </div>
  );
};

export default SalesReviewsImageItem;