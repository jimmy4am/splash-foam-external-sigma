import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  classes?: string;
  children: React.ReactNode;
}

const AppButton = ({ classes = '', children, ...props}: Props) => {
  const baseClassName = "group relative flex items-center justify-center h-[50px] p-[0_30px] bg-[#fff] border-[2px] border-[#ffa500] rounded-[8px] text-[19px] leading-[1] text-[#fff] tracking-[1px] uppercase font-bold transition ease-in-out duration-300 hover:text-[#ffa500]";

  return (
    <button {...props} className={`${baseClassName} ${classes}`}>
      <span className="group-hover:scale-x-0 absolute left-0 top-0 h-full w-full bg-[#ffa500] transition ease-in-out duration-300"></span>
      <span className="relative z-10">{children}</span>
    </button>
  )
};

export default AppButton;