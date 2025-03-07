import React from "react";

type Props = {
    url: string,
    classes?: string;
    children: React.ReactNode;
};

const AppButton = ({ url, classes = '', children, ...props}: Props) => {
    const baseClassName = `inline-flex items-center gap-[15px] justify-center h-[54px] md:h-[65px] p-[0_24px] md:p-[0_50px] bg-[#e97900] rounded-[100px] text-[18px] md:text-[22px] leading-[1] text-[#fff] tracking-[0.3px] font-extrabold uppercase transition ease-in-out duration-250 hover:opacity-80`;

    return <a {...props} className={`${baseClassName} ${classes}`} href={url}>{children}</a>
};

export default AppButton;