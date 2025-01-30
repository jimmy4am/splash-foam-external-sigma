import React from "react";
import { Inter, Red_Hat_Display } from "next/font/google";

import { ReviewPostType } from "@/interfaces/reviewPost";
import ReviewCard from "@/app/_components/review/review-5/review-body/review-card";
import { getReviewsData } from "@/app/_components/review/review-5/review-body/utils";
import { ReviewCardType } from "@/app/_components/review/review-5/review-body/types";

const redHatDisplay = Red_Hat_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

type Props = {
  post: ReviewPostType;
};

const ReviewBody = ({ post }: Props) => {
  const data: ReviewCardType[] = getReviewsData(post);

  return (
    <section className={`p-[30px_0_35px] md:p-[40px_0_70px] ${inter.className}`}>
      <div className="w-full max-w-[1200px] mx-[auto] px-4">
        <h2 className={`mb-[12px] lg:mb-[18px] text-[30px] lg:text-[38px] leading-[36px] lg:leading-[46px] font-black text-[#1a5d95] ${redHatDisplay.className}`}>Here Is Our Top GLP Providers Listed</h2>
        <p className="text-[16px] lg:text-[17px] leading-[24px] lg:leading-[25px]">Maecenas nec odio et ante tincidunt tempus donec vitae sapien ut libero </p>
        <div className="flex flex-col gap-[30px] mt-[60px] md:mt-[80px]">
          {data.map((item: ReviewCardType, idx: number) => (
            <ReviewCard
              key={item.cta}
              number={idx + 1}
              name={item.name}
              image={item.image}
              text={item.text}
              rating={item.rating}
              cta={item.cta}
              specialCta={item.specialCta}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewBody;