"use client";
import React, { useState, useEffect } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

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

      if (scrollPercentage > 30 && scrollTop + windowHeight < finalButtonTop) {
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
        <div className="fixed bottom-0 left-0 w-full bg-white  text-center p-2  shadow-xl">
          <a href={cta} className={`w-full ${montserrat.className}`}>
            <button className="bg-gradient-to-b from-[#edb52f] to-[#ffb74a] w-full  shadow-lg font-bold text-[#000] border-none px-6 py-4 text-[22px] cursor-pointer rounded-md hover:text-black hover:from-yellow-500 hover:to-yellow-300 hover:underline uppercase">
              Get Up To 60% OFF Now
            </button>
          </a>
        </div>
      )}
    </>
  );
};

export default StickyCta;
