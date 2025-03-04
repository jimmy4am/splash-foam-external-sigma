import React from "react";

type Props = {
  classes?: string;
  children: React.ReactNode;
};

const AppSection = ({ classes = '', children}: Props) => {
  return (
    <section className={`w-full p-[30px_0] md:p-[40px_0] lg:p-[60px_0] ${classes}`}>
      <div className="w-full max-w-[1200px] mx-[auto] px-[15px]">
        {children}
      </div>
    </section>
  )
};

export default AppSection;