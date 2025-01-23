import React from "react";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

type Props = {
    url: string,
    classes?: string;
    children: React.ReactNode;
};

const AppButton = ({ url, classes = '', children, ...props}: Props) => {
    const baseClassName = `h-[55px] md:h-[66px] flex justify-center items-center gap-[12px] md:gap-[15px] px-6 py-2 bg-[#4abb12] rounded-md ${outfit.className} text-[20px] md:text-[24px] text-[#fff] tracking-[0.5px] font-extrabold uppercase shadow-[0px_5px_8px_2px_#d4d4d4] transition ease-in-out duration-250 hover:shadow-[none]`;

    return <a {...props} className={`${baseClassName} ${classes}`} href={url}>{children}</a>
};

export default AppButton;
