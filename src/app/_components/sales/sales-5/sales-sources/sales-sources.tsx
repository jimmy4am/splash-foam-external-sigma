"use client";

import React from "react";
import Image from "next/image";

import { SalesPageType } from "@/interfaces/salesPage";

type Props = {
  info: SalesPageType;
};

const SalesSourcesItem = ({ image }: { image: string }) => (
  <Image
    src={image}
    alt="Image"
    width={200}
    height={200}
    className="h-[36px] w-auto"
  />
)

const SalesSources = ({ info }: Props) => {
  return (
    <section className="w-full py-[20px] md:py-[25px] bg-[#fff]">
      <h2 className="mb-[15px] text-center text-[14px] leading-[1] text-[#000] font-semibold uppercase">{info.sources.heading}</h2>
      <ul className="partners-ticker flex items-center justify-center gap-[40px] md:gap-[60px]">
        <SalesSourcesItem image={info.sources.image1} />
        <SalesSourcesItem image={info.sources.image2} />
        <SalesSourcesItem image={info.sources.image3} />
        <SalesSourcesItem image={info.sources.image4} />
        <SalesSourcesItem image={info.sources.image5} />
        <SalesSourcesItem image={info.sources.image1} />
        <SalesSourcesItem image={info.sources.image2} />
        <SalesSourcesItem image={info.sources.image3} />
        <SalesSourcesItem image={info.sources.image4} />
        <SalesSourcesItem image={info.sources.image5} />
        <SalesSourcesItem image={info.sources.image1} />
        <SalesSourcesItem image={info.sources.image2} />
        <SalesSourcesItem image={info.sources.image3} />
        <SalesSourcesItem image={info.sources.image4} />
        <SalesSourcesItem image={info.sources.image5} />
        <SalesSourcesItem image={info.sources.image1} />
        <SalesSourcesItem image={info.sources.image2} />
        <SalesSourcesItem image={info.sources.image3} />
        <SalesSourcesItem image={info.sources.image4} />
        <SalesSourcesItem image={info.sources.image5} />
        <SalesSourcesItem image={info.sources.image1} />
        <SalesSourcesItem image={info.sources.image2} />
        <SalesSourcesItem image={info.sources.image3} />
        <SalesSourcesItem image={info.sources.image4} />
        <SalesSourcesItem image={info.sources.image5} />
      </ul>
    </section>
  );
};

export default SalesSources;