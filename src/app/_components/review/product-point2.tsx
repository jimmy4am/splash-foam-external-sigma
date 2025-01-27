import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

type Props = {
  point: string;
  pointBold: boolean;
};

const ProductPoint2 = ({ point, pointBold }: Props) => {
  return (
    <div className={`text-[14px] mb-1 ${pointBold && "font-bold"} flex`}>
      <div>
        <CheckCircleIcon className="h-6 w-6 mr-2 inline-block text-green-600" />
      </div>
      <div>{point}</div>
    </div>
  );
};

export default ProductPoint2;
