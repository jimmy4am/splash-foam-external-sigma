import React from "react";

type Props = {
  num: string;
};

const Rating = ({ num }: Props) => {
  const ratingNumber = Number(num);
  let text = "Poor";
  if (ratingNumber > 5.5 && ratingNumber < 6) {
    text = "OK";
  } else if (ratingNumber > 5.5 && ratingNumber < 7) {
    text = "Good";
  } else if (ratingNumber > 5.5 && ratingNumber < 9) {
    text = "Great";
  } else if (ratingNumber > 5.5 && ratingNumber <= 10) {
    text = "Excellent";
  }
  return (
    <>
      <div className="flex text-[#316FF6] text-[14px] font-bold items-center">
        <div className="flex">{text}</div>
        <div className="flex bg-[#316FF6] ml-2 p-1 text-white text-[18px] rounded-md h-[35px] w-[35px] justify-center items-center">
          {ratingNumber}
        </div>
      </div>
    </>
  );
};

export default Rating;
