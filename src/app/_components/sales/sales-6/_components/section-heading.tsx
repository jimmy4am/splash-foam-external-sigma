import React from "react";
import { Figtree } from "next/font/google";

const figtree = Figtree({ subsets: ["latin"] });

type Props = {
  classes?: string,
  children: React.ReactNode,
};

const SectionHeading = ({ classes, children }: Props) => {
  return (
    <h2 className={`text-center text-[29px] md:text-[36px] lg:text-[40px] xl:text-[42px] leading-[34px] md:leading-[44px] lg:leading-[48px] font-extrabold capitalize md:tracking-[0.5px] ${figtree.className} ${classes}`}>
      {children}
    </h2>
  )
};

export default SectionHeading;