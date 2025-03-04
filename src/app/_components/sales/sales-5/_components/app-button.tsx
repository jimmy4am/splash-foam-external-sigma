import React from "react";
import { Figtree } from "next/font/google";

const figtree = Figtree({ subsets: ["latin"] });

type Props = {
    url: string,
    classes?: string;
    children: React.ReactNode;
};

const AppButton = ({ url, classes = '', children, ...props}: Props) => {
    const baseClassName = `inline-flex p-[18px_20px] md:p-[20px] bg-[#e97900] rounded-[6px] ${figtree.className} text-[18px] md:text-[20px] leading-[18px] md:leading-[20px] text-[#fff] tracking-[0.5px] md:tracking-[0] font-extrabold uppercase transition ease-in-out duration-250 hover:opacity-80`;

    return <a {...props} className={`${baseClassName} ${classes}`} href={url}>{children}</a>
};

export default AppButton;