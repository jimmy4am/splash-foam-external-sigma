import React from "react";

import { SalesPageType } from "@/interfaces/salesPage";
import EditImage from "@/app/_components/edit-image";

type Props = {
  info: SalesPageType;
  setCurrentPost: (post: SalesPageType) => void;
  image: string;
  imageField: any;
};

const SalesReviewsImageItemEdit = ({ info, setCurrentPost, image, imageField }: Props) => {
  return (
    <div className="md:px-[10px]">
      <div className="flex aspect-square mb-[1px] border-[1px] border-[#3a89c2] rounded-[15px] overflow-hidden">
        <EditImage
          src={image}
          alt="Image"
          width={400}
          height={400}
          post={info}
          setPost={setCurrentPost}
          field={imageField}
        />
      </div>
    </div>
  );
};

export default SalesReviewsImageItemEdit;