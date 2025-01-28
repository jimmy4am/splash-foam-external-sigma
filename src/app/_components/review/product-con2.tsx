import React from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

type Props = {
  point: string;
  pointBold: boolean;
};

const ProductCon2 = ({ point, pointBold }: Props) => {
  return (
    <div className={`text-[14px] mb-1 ${pointBold && "font-bold"} flex`}>
      <div>
        <XCircleIcon className="h-6 w-6 mr-2 inline-block text-red-600" />
      </div>
      <div>{point}</div>
    </div>
  );
};

export default ProductCon2;
