"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { siteProduct } from "@/lib/site-info";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Raleway } from "next/font/google";
import { SalesPageType } from "@/interfaces/salesPage";

const raleway = Raleway({ subsets: ["latin"] });

type Props = {
  info: SalesPageType;
};

interface ScrollButtonProps {
  targetRef: React.RefObject<HTMLDivElement>;
  children: React.ReactNode;
}

const SalesHeader = ({ info }: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(32); // Initial height of the header bar
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [animationDuration, setAnimationDuration] = useState("9s");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos <= 32) {
        // Set header height to be inversely proportional to scroll position
        setHeaderHeight(32 - currentScrollPos);
      } else {
        // Set header height to 0 if scroll position is greater than 32
        setHeaderHeight(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headerHeight, prevScrollPos]);

  useEffect(() => {
    const handleResize = () => {
      // Adjust animation duration based on screen width
      const screenWidth = window.innerWidth;
      if (screenWidth < 400) {
        setAnimationDuration("6s");
      } else if (screenWidth < 640) {
        setAnimationDuration("9s"); // Adjust for smaller screens (example)
      } else if (screenWidth < 900) {
        setAnimationDuration("12s"); // Adjust for medium-sized screens (example)
      } else {
        setAnimationDuration("20s"); // Default for larger screens
      }
    };

    handleResize(); // Initial call
    window.addEventListener("resize", handleResize); // Listen to resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener
    };
  }, []);

  const scrolltoHash = function (element_id: string) {
    if (showMenu) setShowMenu(false);
    const element = document.getElementById(element_id);
    if (element) {
      // Calculate the target position with the added margin
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY - 75;

      // Scroll to the calculated position smoothly
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const cta = info.cta;
  return (
    <div className="fixed z-50 shadow flex flex-col w-full">
      {headerHeight > 0 && (
        <div
          className={`bg-[#ff0000] pt-2 flex justify-center text-center font-bold text-white ${raleway.className}`}
          style={{
            height: `${headerHeight}px`,
            overflow: "hidden", // Ensure text doesn't overflow
            position: "relative",
          }}
        >
          <p
            className="ticker-text lg:animate-none"
            style={{ animationDuration }}
          >
            <span className="text-[#fff000]">Congratulations!</span> You've
            Pre-Qualified For a 60% Discount!
          </p>
        </div>
      )}
      <div className="sticky top-0 z-50 bg-white shadow-lg flex justify-center h-[75px]">
        <div className="flex w-full max-w-[1260px] justify-between items-center px-4">
          <div className="flex py-2">
            <Image src={info.logo} alt={siteProduct} width={160} height={160} />
          </div>
          <div className={`hidden lg:flex items-center ${raleway.className}`}>
            <button
              className="bg-none text-black hover:text-blue-900 cursor-pointer font-bold border-r-[1px] border-[#777] px-4"
              onClick={() => scrolltoHash("overview")}
            >
              Overview
            </button>

            <button
              className="bg-none text-black hover:text-blue-900 cursor-pointer font-bold border-r-[1px] border-[#777] px-4"
              onClick={() => scrolltoHash("features")}
            >
              Features
            </button>

            <button
              className="bg-none text-black hover:text-blue-900 cursor-pointer font-bold border-r-[1px] border-[#777] px-4"
              onClick={() => scrolltoHash("how-it-works")}
            >
              How It Works
            </button>

            <button
              className="bg-none text-black hover:text-blue-900 cursor-pointer font-bold px-4"
              onClick={() => scrolltoHash("reviews")}
            >
              Reviews
            </button>
            <a href={cta}>
              <button className="bg-[#00c04e] green-text-shadow text-[18px] font-bold text-white px-6 py-2 rounded-md hover:bg-green-600 ml-2">
                Order Now
              </button>
            </a>
          </div>
          <div className="flex lg:hidden">
            {!showMenu ? (
              <Bars3Icon
                className="h-8 w-8 text-black cursor-pointer hover:text-[#777]"
                onClick={() => setShowMenu(true)}
              />
            ) : (
              <XMarkIcon
                className="h-8 w-8 text-black cursor-pointer hover:text-[#777]"
                onClick={() => setShowMenu(false)}
              />
            )}
          </div>
        </div>
      </div>
      {showMenu && (
        <div className="bg-[#eee] flex flex-col text-center">
          <div className="flex w-full p-2 border-b-[1px] border-[#777]">
            <button
              className="bg-none text-black hover:text-blue-900 cursor-pointer font-bold w-full border-[#777] px-4"
              onClick={() => scrolltoHash("overview")}
            >
              Overview
            </button>
          </div>
          <div className="flex w-full p-2 border-b-[1px] border-[#777]">
            <button
              className="bg-none text-black hover:text-blue-900 cursor-pointer font-bold w-full border-[#777] px-4"
              onClick={() => scrolltoHash("features")}
            >
              Features
            </button>
          </div>
          <div className="flex w-full p-2 border-b-[1px] border-[#777]">
            <button
              className="bg-none text-black hover:text-blue-900 cursor-pointer font-bold w-full border-[#777] px-4"
              onClick={() => scrolltoHash("how-it-works")}
            >
              How It Works
            </button>
          </div>
          <div className="flex w-full p-2 border-b-[1px] border-[#777]">
            <button
              className="bg-none text-black hover:text-blue-900 cursor-pointer font-bold w-full border-[#777] px-4"
              onClick={() => scrolltoHash("reviews")}
            >
              Reviews
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SalesHeader;
