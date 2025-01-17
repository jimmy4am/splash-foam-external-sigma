import React from "react";
import Image from "next/image";
import { Raleway, Work_Sans } from "next/font/google";
import { SalesPageType } from "@/interfaces/salesPage";
import BuyButton from "./buy-button";

const raleway = Raleway({ subsets: ["latin"] });
const workSans = Work_Sans({ subsets: ["latin"] });

type Props2 = {
  info: SalesPageType;
};

type ReviewProps = {
  name: string;
  title: string;
  text: string;
  first: boolean;
};

const IndividualReview = ({ name, title, text, first }: ReviewProps) => {
  return (
    <div
      className={`flex flex-col lg:flex-row w-full items-start px-4 lg:px-0 pb-4 pt-8 ${
        first || "border-t-[1px] border-[#dcdcdc]"
      }`}
    >
      <div className="flex w-full lg:w-[30%]">
        <div className="h-[60px] w-[60px] rounded-full bg-[#005279] flex justify-center items-center text-white text-[24px] font-bold mr-2">
          {name.charAt(0).toUpperCase()}
        </div>
        <div className="flex flex-col items-start justify-start flex1 px-2">
          <h6 className="font-bold text-[18px]">{name}</h6>
          <div className="flex items-center justify-start text-[#0bba34] font-bold text-[14px] mt-2">
            <Image
              src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/094c3017-312a-453f-27fb-b5d1ed73d800/public"
              width={13}
              height={16}
              alt="Verified Customer"
              className="mr-2"
            />
            Verified Buyer
          </div>
        </div>
      </div>
      <div className="flex w-full  pt-4 lg:pt-0 lg:w-[70%] items-start justify-start text-[20px]">
        <Image
          src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/e2c05410-dc65-43eb-8c7a-998b0e89ec00/public"
          width={25}
          height={20}
          alt="Quote icon"
          className="mr-4 min-w-[25px]
            "
        />
        <div className="flex flex-col flex1 items-start justify-start text-left">
          <h6 className="font-bold">{title}</h6>
          <p
            className={`text-[17px] lg:text-[20px] 
              
              py-4 ${workSans.className}`}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

const Reviews = ({ info }: Props2) => {
  return (
    <div className="flex flex-col items-center w-full pb-6 bg-blue-100 mt-[-120px] lg:mt-[-250px]">
      <svg
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full rotate-180 z-0"
      >
        <path
          fill="white"
          d="M0,128L48,133.3C96,139,192,149,288,170.7C384,192,480,224,576,224C672,224,768,192,864,154.7C960,117,1056,75,1152,85.3C1248,96,1344,160,1392,192L1440,224V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z"
        ></path>
      </svg>

      <div
        className={`flex flex-col items-center w-full  text-center max-w-[1024px] px-4 ${raleway.className}`}
        id="reviews"
      >
        <h5 className="w-full text-[26px] lg:text-[50px] font-bold   text-[#005279] mt-8 px-6 md:px-12  mb-10">
          We've Got{" "}
          <span className="text-[#0082c0]">{info.reviews.reviewcount}</span>{" "}
          Raving Customers And Still Counting!
        </h5>
        <IndividualReview
          name={info.reviews.name1}
          title={info.reviews.title1}
          text={info.reviews.text1}
          first={true}
        />
        <IndividualReview
          name={info.reviews.name2}
          title={info.reviews.title2}
          text={info.reviews.text2}
          first={false}
        />

        <IndividualReview
          name={info.reviews.name3}
          title={info.reviews.title3}
          text={info.reviews.text3}
          first={false}
        />
        <IndividualReview
          name={info.reviews.name4}
          title={info.reviews.title4}
          text={info.reviews.text4}
          first={false}
        />
        <div className="flex w-full justify-center mb-12">
          <BuyButton info={info} />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
