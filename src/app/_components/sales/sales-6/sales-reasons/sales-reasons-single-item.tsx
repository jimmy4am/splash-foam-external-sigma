import React from "react";
import Image from "next/image";

type Props = {
  title: string;
};

const SalesReasonsSingleItem = ({ title }: Props) => (
  <li className="flex items-center gap-[15px] lg:gap-[20px]">
    <Image
      src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/5f364b1a-9773-463d-360f-7f1d589ad000/public"
      width={15}
      height={15}
      alt="Cross icon"
    />
    <h3>{title}</h3>
  </li>
);

export default SalesReasonsSingleItem;