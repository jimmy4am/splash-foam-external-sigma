"use client";
import React, { useState, useEffect, useRef } from "react";
import { SalesPageType } from "@/interfaces/salesPage";
import { Raleway, Work_Sans } from "next/font/google";
import { PlusIcon } from "@heroicons/react/24/solid";
import BuyButton from "./buy-button";

const raleway = Raleway({ subsets: ["latin"] });
const workSans = Work_Sans({ subsets: ["latin"] });

type Props2 = {
  info: SalesPageType;
};

type FaqProps = {
  q: string;
  a: string;
  index: number;
  active: number;
  setActive: (index: number) => void;
};

const IndivFaq = ({ q, a, index, active, setActive }: FaqProps) => {
  const [open, setOpen] = useState(index === active);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (index === active) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [index, active]);

  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full justify-between border-b-[1px] border-[#dcdcdc] py-4">
        <h6 className="text-[18px] lg:text-[20px] font-bold">{q}</h6>

        <PlusIcon
          className={`h-6 w-6 text-[#005279] transform ${
            open && "rotate-45"
          } cursor-pointer transition-transform duration-300 ease-in-out`}
          onClick={() => {
            setOpen(!open);
            setActive(index);
          }}
        />
      </div>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-500 ease-in-out`}
        style={{
          height: open ? contentRef.current?.scrollHeight : 0,
        }}
      >
        <p
          className={`text-[17px] lg:text-[20px] py-4 text-left ${workSans.className}`}
        >
          {a}
        </p>
      </div>
    </div>
  );
};

const Faqs = ({ info }: Props2) => {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col items-center w-full pb-2">
      <div
        className={`flex flex-col items-center w-full text-center max-w-[1024px] pt-2 px-4 ${raleway.className}`}
      >
        <h5 className="w-full text-[26px] lg:text-[50px] font-bold text-[#0082c0] mt-8 px-6 md:px-12 mb-10 leading-tight">
          Frequently Asked Questions <br />
          <span className="text-[#005279]">We&apos;ve All The Answers</span>
        </h5>
        <IndivFaq
          q={info.faqs.q1}
          a={info.faqs.a1}
          index={0}
          active={active}
          setActive={setActive}
        />
        <IndivFaq
          q={info.faqs.q2}
          a={info.faqs.a2}
          index={1}
          active={active}
          setActive={setActive}
        />
        <IndivFaq
          q={info.faqs.q3}
          a={info.faqs.a3}
          index={2}
          active={active}
          setActive={setActive}
        />
        <IndivFaq
          q={info.faqs.q4}
          a={info.faqs.a4}
          index={3}
          active={active}
          setActive={setActive}
        />
        <IndivFaq
          q={info.faqs.q5}
          a={info.faqs.a5}
          index={4}
          active={active}
          setActive={setActive}
        />
        <div className="flex w-full justify-center mt-8 mb-12">
          <BuyButton info={info} />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
