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
    <div className={`flex w-full flex-col  ${!isLastItem ? 'border-b-[1px] border-[#dbdbdb]' : undefined}`}>
      <div
        className={`flex w-full justify-between items-center p-[15px_15px_15px_0] md:p-[25px_15px_25px_0] text-[16px] md:text-[17px] lg:text-[19px] leading-[24px] font-bold cursor-pointer hover:text-[#1b7de5] transition-all duration-250 ease-in-out`}
        onClick={() => {
          setOpen(!open);
          setActive(index);
        }}>
        <h3>{q}</h3>
        {open ? <MinusIcon className="flex-[0_0_12px] max-w-[12px]" /> : <PlusIcon className="flex-[0_0_20px] max-w-[20px]" />}
      </div>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-500 ease-in-out`}
        style={{
          height: open ? contentRef.current?.scrollHeight : 0,
        }}
      >
        <div className="pr-[30px]">
          <p className="mb-[15px] text-[16px] lg:text-[17px] leading-[26px] tracking-[0.2px]">{a}</p>
        </div>
      </div>
    </div>
  );
};

export default SalesFaqsSingleItem;