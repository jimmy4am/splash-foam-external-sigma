import React from "react";

import { ReviewPostType } from "@/interfaces/reviewPost";
import ReviewCard from "@/app/_components/review/review-5/review-body/review-card";
import { getReviewsData } from "@/app/_components/review/review-5/review-body/utils";
import { ReviewCardType } from "@/app/_components/review/review-5/review-body/types";

type Props = {
    post: ReviewPostType;
};

const ReviewBody = ({ post }: Props) => {
    const data: ReviewCardType[] = getReviewsData(post);

    return (
        <div className="w-full max-w-[1200px] mx-[auto] px-4">
            <div className="flex flex-col gap-[30px]">
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
    );
};

export default ReviewBody;