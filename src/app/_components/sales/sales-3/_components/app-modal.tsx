"use client";

import React from "react";
import Image from "next/image";

type Props = {
    isOpen: boolean,
    handleClose: () => void;
    children: React.ReactNode;
};

const AppModal = ({ isOpen, handleClose, children}: Props) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-[rgba(255_255_255_0.42)] backdrop-blur-[5px]" onClick={handleClose}></div>
            <div className="relative min-w-[300px] min-h-[400px] bg-[#fff] rounded-[10px] overflow-hidden">
                <button className="absolute top-[15px] right-[15px] w-[45px] h-[45px] p-[13px] bg-[#fff] rounded-[50%] z-50" onClick={handleClose}>
                    <Image className="" src="/images/template-3/close.png" width={30} height={30} alt="Close modal icon"/>
                </button>
                {children}
            </div>
        </div>
    );
};

export default AppModal;