"use client";

import React, { useEffect, useRef, useState } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";

type Props = {
  q: string;
  a: string;
  index: number;
  active: number;
  setActive: (index: number) => void;
  isLastItem?: boolean
};

const SalesFaqsSingleItem = ({ q, a, index, active, setActive, isLastItem }: Props) => {
  const [open, setOpen] = useState(index === active);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(index === active)
  }, [index, active]);

  return (
    <div className={`flex w-full flex-col  ${!isLastItem ? 'border-b-[1px] border-[#000]' : undefined}`}>
      <div
        className={`flex w-full justify-between items-center p-[15px_16px_15px_0] md:p-[22px_16px_22px_0] lg:p-[28px_16px_28px_0] text-[17px] md:text-[18px] leading-[25px] md:leading-[18px] font-bold cursor-pointer hover:text-[#1b7de5] transition-all duration-250 ease-in-out`}
        onClick={() => {
          setOpen(!open);
          setActive(index);
        }}>
        <h3>{q}</h3>
        {open ? <MinusIcon className="flex-[0_0_20px] max-w-[20px]" /> : <PlusIcon className="flex-[0_0_20px] max-w-[20px]" />}
      </div>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-500 ease-in-out`}
        style={{
          height: open ? contentRef.current?.scrollHeight : 0,
        }}
      >
        <div className="p-[0_15px_12px_0] md:p-[0_50px_15px_0px] lg:p-[0_40px_15px_0]">
          <p className="mb-[15px]">{a}</p>
        </div>
      </div>
    </div>
  );
};

export default SalesFaqsSingleItem;