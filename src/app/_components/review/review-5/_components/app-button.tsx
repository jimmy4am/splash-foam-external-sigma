import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type AppButtonType =  'info' | 'success';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  type?: AppButtonType,
  url: string,
  classes?: string;
  children: React.ReactNode;
}

const AppButton = ({ type = 'success', url, classes = '', children, ...props}: Props) => {
  const baseClassName = `inline-flex items-center justify-center h-[56px] px-[40px] border-[2px] rounded-[5px] ${inter.className} text-[17px] leading-[24px] font-bold uppercase shadow-[0px_0px_6px_2px_rgba(0,0,0,.2)] hover:shadow-[none] transition ease-in-out duration-250`;

  const additionalClass: Record<AppButtonType, string> = {
    info: 'bg-[#fff] border-[#000] text-[#000]',
    success: 'bg-[#11d237] border-[#11d237] text-[#fff] ',
  }

  return <a {...props} className={`${baseClassName} ${additionalClass[type]} ${classes}`} href={url}>{children}</a>
};

export default AppButton;
