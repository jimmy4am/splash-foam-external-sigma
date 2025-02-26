import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  classes?: string;
  children: React.ReactNode;
}

const AppButton = ({ variant = 'primary', classes = '', children, ...props}: Props) => {
  const baseClassName = "group relative flex items-center justify-center h-[50px] p-[0_30px] bg-[transparent] border-[2px] rounded-[8px] text-[19px] leading-[24px] tracking-[1px] font-bold transition ease-in-out duration-300";

  const additionalClassName = {
    primary: 'border-[#ffa500] text-[#fff] hover:text-[#ffa500]',
    secondary: 'border-[#fff] text-[#ffa500] hover:text-[#fff]'
  }

  const additionalClassNameForSpan = {
    primary: 'bg-[#ffa500]',
    secondary: 'bg-[#fff]'
  }

  return (
    <button {...props} className={`${baseClassName} ${additionalClassName[variant]} ${classes}`}>
      <span className={`group-hover:scale-x-0 absolute left-0 top-0 h-full w-full ${additionalClassNameForSpan[variant]}  transition ease-in-out duration-300`}></span>
      <span className="relative mt-[4px] z-10">{children}</span>
    </button>
  )
};

export default AppButton;