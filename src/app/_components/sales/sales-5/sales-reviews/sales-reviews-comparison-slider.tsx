"use client";

import React, { useState } from "react";
import Image from "next/image";

const SalesReviewsComparisonSlider = () => {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setPosition(percent);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging) return;

    const rect = event.currentTarget.getBoundingClientRect();
    handleMove(event.clientX, rect);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const rect = event.currentTarget.getBoundingClientRect();
    if (event.touches.length > 0) {
      const touch = event.touches[0];
      handleMove(touch.clientX, rect);
    }
  };

  const handleInteractionStart = () => setIsDragging(true);

  const handleInteractionEnd = () => setIsDragging(false);

  return (
    <div className="w-full relative" onMouseUp={handleInteractionEnd} onTouchEnd={handleInteractionEnd}>
      <div
        className="relative w-full aspect-[69/50] m-auto rounded-[5px] overflow-hidden select-none"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseDown={handleInteractionStart}
        onTouchStart={handleInteractionStart}
      >
        <div className="absolute inset-0 flex items-center justify-between px-[10px] bg-[rgba(0,0,0,0.5)] text-[13px] leading-[38px] text-[#fff] tracking-[1.3px] opacity-0 z-10 hover:opacity-100 transition-opacity duration-500 ease">
          <span className="px-[20px] bg-[rgba(255,255,255,0.2)] rounded-[2px]">Before</span>
          <span className="px-[20px] bg-[rgba(255,255,255,0.2)] rounded-[2px]">After</span>
        </div>
        <Image
          src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/a5c960bd-f240-4839-a453-6548c9c87f00/public"
          alt="Before"
          fill
          draggable={false}
          priority
        />
        <div className="absolute inset-0 aspect-[69/50] m-auto overflow-hidden select-none" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          <Image
            src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/3076dddf-2f08-4eca-8f54-327f1a722900/public"
            alt="Before"
            fill
            draggable={false}
            priority
          />
        </div>

        <div className="absolute top-0 bottom-0 w-[3px] flex flex-col cursor-pointer z-20" style={{ left: `calc(${position}% - 1px)` }}>
          <span className="flex-1 w-full bg-[#fff]"></span>
          <div className="-ml-[17.5px] flex-[0_0_38px] w-[38px] h-[38px] flex items-center justify-center gap-[10px] border-[3px] border-[#fff] rounded-[50%] shadow-[0_0_12px_rgba(51,51,51,0.6)]">
            <span className="border-r-[6px] border-r-[#fff] border-b-[6px] border-b-[transparent] border-t-[6px] border-t-[transparent]"></span>
            <span className="border-l-[6px] border-l-[#fff] border-b-[6px] border-b-[transparent] border-t-[6px] border-t-[transparent]"></span>
          </div>
          <span className="flex-1 w-full bg-[#fff]"></span>
        </div>
      </div>
    </div>
  );
};

export default SalesReviewsComparisonSlider;