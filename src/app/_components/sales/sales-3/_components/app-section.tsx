import React from "react";

type Props = {
    classes?: string;
    children: React.ReactNode;
};

const AppSection = ({ classes = '', children}: Props) => {
    return (
        <section className={`w-full p-[30px_0_35px] md:p-[50px_0_60px] lg:p-[60px_0_70px] ${classes}`}>
            <div className="w-full max-w-[1200px] mx-[auto] px-4">
                {children}
            </div>
        </section>
    )
};

export default AppSection;
