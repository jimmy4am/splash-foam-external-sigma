"use client";
import React, { useState, useEffect } from "react";

type Props = {
  cta: string;
};
const StickyCta = ({ cta }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const finalButton = document.querySelector("#final-button");
      const finalButtonTop = finalButton
        ? finalButton.getBoundingClientRect().top + window.scrollY
        : 0;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage =
        (scrollTop / (documentHeight - windowHeight)) * 100;

      if (scrollPercentage > 40 && scrollTop + windowHeight < finalButtonTop) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-0 left-0 w-full bg-green-600  text-center p-2 hover:bg-green-500">
          <a href={cta} className="w-full">
            <button className="bg-[#efefef] w-full max-w-[600px] shadow-lg font-bold text-[#333] border-none px-6 py-3 text-lg cursor-pointer rounded-md hover:text-black hover:bg-white hover:underline">
              Apply Discount &amp; Check Availability
            </button>
          </a>
        </div>
      )}
    </>
  );
};

export default StickyCta;
