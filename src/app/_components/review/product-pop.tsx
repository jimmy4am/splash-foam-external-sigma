import React, { useState, useEffect } from "react";
import ProductType from "@/interfaces/products";
import Image from "next/image";
import Link from "next/link";

type Props = {
  product: ProductType;
};

const ProductPop = ({ product }: Props) => {
  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  const names = [
    "Edgar D.",
    "Dave M.",
    "Chris R.",
    "John D.",
    "Samantha W.",
    "Nick U.",
    "Linda T.",
    "Jack M.",
    "Sarah E.",
    "Adrian S.",
    "Kyle T.",
  ];

  const femaleNames = [
    "Samantha W.",
    "Linda T.",
    "Sarah E.",
    "Kylie M.",
    "Sasha R.",
    "Megan L.",
    "Ally K.",
    "Nancy S.",
    "Sydnee L.",
    "Mary C.",
    "Jenny M.",
  ];

  const times = [
    "2 minutes ago",
    "30 seconds ago",
    "5 minutes ago",
    "10 seconds ago",
    "3 minutes ago",
    "2 minutes ago",
    "25 seconds ago",
    "3 minutes ago",
    "35 seconds ago",
    "45 seconds ago",
    "1 minute ago",
  ];

  const productName = product?.shortname || product.name;

  useEffect(() => {
    // This interval just starts the show/hide process
    const interval = setInterval(() => {
      setVisible(true); // Show the popup
      setCurrentIndex((i) => (i + 1) % names.length); // Change the name and time every time it shows
    }, 28000); // Wait for the total of the visible duration and the desired interval between popups

    return () => clearInterval(interval);
  }, [names.length]); // Only re-run if names.length changes

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;

    if (visible) {
      timeout = setTimeout(() => {
        setVisible(false);
      }, 12000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [visible]);

  const femaleProduct = product?.gender === "female";

  return (
    <a href={product.cta}>
      <div
        className={`fixed flex bottom-0 left-0 w-full md:w-fit md:left-6 md:bottom-6 bg-[#D9D8D8] p-2 rounded-lg  transition-opacity duration-1000 ${
          visible ? "opacity-100" : "opacity-0"
        } hover:bg-[#b1b1b1] cursor-pointer z-50`}
        style={{ animation: `${visible ? "fadeIn" : "fadeOut"} 1s` }}
      >
        <div className="flex w-24 h-24 justify-center items-center  bg-white rounded-md">
          <Image
            src={product.image}
            alt={product.name}
            width={40}
            height={40}
            className="object-scale-down"
          />
        </div>
        <div className="flex flex-col pl-4 pr-6 justify-center">
          <span className="text-[16px] font-bold">
            {(femaleProduct && femaleNames[currentIndex]) ||
              names[currentIndex]}{" "}
            purchased
          </span>
          <span className="text-[22px] font-bold">{productName}</span>
          <span className="text-[16px] text-[#777]">{times[currentIndex]}</span>
        </div>
      </div>
    </a>
  );
};

export default ProductPop;
