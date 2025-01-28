import React, { useState } from "react";

type Props = {
  reviewNum: number;
  setReviewNum: (num: number) => void;
};

const StarRating: React.FC<Props> = ({ reviewNum, setReviewNum }) => {
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const [reviewBump, setReviewBump] = useState(false);

  const highlightStars = (index: number) => {
    setHighlightedIndex(index);
  };

  const resetStars = () => {
    setHighlightedIndex(null);
  };

  const handleStarClick = (index: number) => {
    setClickedIndex(index);
    if (index === 5) {
      fiveStarClick();
    } else if (reviewBump) {
      setReviewNum(reviewNum - 1);
      setReviewBump(false);
    }
  };

  const fiveStarClick = () => {
    if (!reviewBump) {
      setReviewNum(reviewNum + 1);
      setReviewBump(true);
    }
  };

  const renderStars = () => {
    return [1, 2, 3, 4, 5].map((index) => (
      <span
        key={index}
        className="star text-yellow-500"
        data-index={index}
        onMouseOver={() => highlightStars(index)}
        onMouseOut={resetStars}
        onClick={() => handleStarClick(index)}
        style={{ cursor: "pointer" }}
      >
        {highlightedIndex !== null
          ? highlightedIndex >= index
            ? "★"
            : "☆"
          : clickedIndex !== null && clickedIndex >= index
          ? "★"
          : "☆"}
      </span>
    ));
  };

  return <div>{renderStars()}</div>;
};

export default StarRating;
