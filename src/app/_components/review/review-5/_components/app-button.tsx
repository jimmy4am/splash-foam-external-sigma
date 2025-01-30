import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type AppButtonType =  'filled' | 'outlined';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  type?: AppButtonType,
  url: string,
  classes?: string;
  children: React.ReactNode;
};

const AppButton = ({ type = 'filled', url, classes = '', children, ...props}: Props) => {
  const baseClassName = `inline-flex items-center justify-center h-[56px] px-[40px] rounded-[5px] ${inter.className} text-[17px] leading-[24px] font-bold uppercase transition ease-in-out duration-250`;

  const additionalClassName: Record<AppButtonType, string> = {
    filled: 'bg-[#11d237] border-[2px] border-[#11d237] text-[#fff] shadow-[0px_0px_6px_2px_rgba(0,0,0,.2)] hover:shadow-[none]',
    outlined: 'bg-[#fff] border-[2px] border-[#000] text-[#000] shadow-[0px_0px_6px_2px_rgba(0,0,0,.2)] hover:shadow-[none]'
  }

  return <a {...props} className={`${baseClassName} ${additionalClassName[type]} ${classes}`} href={url}>{children}</a>
};

export default AppButton;
