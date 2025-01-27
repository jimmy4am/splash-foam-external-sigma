import React, { useEffect, useState } from "react";
import ProductType from "@/interfaces/products";
import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/outline";
import { HandThumbUpIcon, HandThumbDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";
import remarkBreaks from "remark-breaks";
import markdownStyles from "./markdown-styles2.module.css";

type Props = {
  Product: ProductType;
  ProductNumber: string;
};
const ProductReview = ({ Product, ProductNumber }: Props) => {
  const [reviewContent, setReviewContent] = useState("");

  useEffect(() => {
    const processMarkdown = async () => {
      const file = await unified()
        .use(remarkParse) // Use the remark parser
        .use(remarkBreaks) // Handle line breaks
        .use(remarkHtml) // Convert to HTML
        .process(Product.review); // Process the markdown content

      setReviewContent(String(file));

      // Set the HTML content in the state
    };

    processMarkdown();
  }, [Product.review]);

  return (
    <div className="flex flex-col w-full border-b-[1px] border-[#eee] mb-12">
      <div className="flex w-full justify-start pb-2">
        <div className="flex text-[55px] text-[#999] font-bold border-r-[1px] border-[#eee] pr-4">
          {ProductNumber}
        </div>
        <Image
          src={Product.image}
          width={200}
          height={200}
          alt={Product.name}
          className="object-scale-down ml-4"
        />
      </div>
      <div className="border-t-[1px] border-b-[1px] py-6 border-[#eee] w-full flex flex-col p-4 text-[16px]">
        <p className="flex">
          <CheckIcon className="h-6 w-6 mr-2 text-blue-700" />
          <span className="font-bold mr-1">Best For</span> - {Product.bestFor}
        </p>
        <p className="flex mt-6">
          <CheckIcon className="h-6 w-6 mr-2 text-blue-700" />
          <span className="font-bold mr-1">Pricing</span> - {Product.price}
        </p>
        <p className="flex mt-6">
          <CheckIcon className="h-6 w-6 mr-2 text-blue-700" />
          <span className="font-bold mr-1">Summary</span> - {Product.point2}
        </p>
      </div>
      <div className=" border-b-[1px] py-2 border-[#eee] w-full flex justify-between items-center p-4 text-[16px] font-bold">
        <div>{Product.point3}</div>
        <div>
          <a href={Product.cta}>
            <button
              className={`bg-green-600 text-white text-[14px]  uppercase py-3 px-6 w-full hover:bg-green-500 mt-2 mb-[10px] rounded-md`}
            >
              Visit Site &gt;
            </button>
          </a>
        </div>
      </div>
      <div className="px-4 flex flex-col pb-8 border-b-[1px] border-[#eee]">
        <div
          className={markdownStyles["markdown"]}
          dangerouslySetInnerHTML={{ __html: reviewContent }}
        />
        <div className="">
          <a
            href={Product.reviewSlug || Product.cta}
            className="text-blue-700 font-bold text-[18px] hover:underline"
          >
            Read {Product.shortname} Review &gt;
          </a>
        </div>
      </div>
      <div className="flex w-full items-start px-4  text-[14px] md:text-[18px]">
        <div className="w-1/2 flex  flex-col items-start justify-start p-4">
          <h5 className="font-bold uppercase text-[18px]">Pros</h5>
          <div className="flex  font-light mt-4">
            <HandThumbUpIcon className="w-[24px] h-[24px] min-w-[20px] min-h-[20px] text-[#777] mr-4" />
            <p>{Product.point4}</p>
          </div>
          <div className="flex font-light mt-4">
            <HandThumbUpIcon className="w-[24px] h-[24px] min-w-[20px] min-h-[20px] text-[#777] mr-4" />
            <p>{Product.point5}</p>
          </div>
          <div className="flex font-light mt-4">
            <HandThumbUpIcon className="w-[24px] h-[24px] min-w-[20px] min-h-[20px] text-[#777] mr-4" />
            <p>{Product.point6}</p>
          </div>
        </div>
        <div className="w-1/2 flex  flex-col items-start justify-start p-4">
          <h5 className="font-bold uppercase text-[18px]">Cons</h5>
          <div className="flex font-light mt-4">
            <HandThumbDownIcon className="w-[24px] h-[24px] min-w-[20px] min-h-[20px] text-[#777] mr-4" />
            <p>{Product.con1}</p>
          </div>
          <div className="flex font-light mt-4">
            <HandThumbDownIcon className="w-[24px] h-[24px] min-w-[20px] min-h-[20px] text-[#777] mr-4" />
            {Product.con2}
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between items-center bg-[#eee] px-6 py-4 mb-12 mt-4">
        <Image src={Product.image} width={150} height={150} alt="Top 6 Logo" />
        <div>
          <a href={Product.cta}>
            <button
              className={`bg-green-600 text-white text-[14px]  uppercase py-3 px-6 w-full hover:bg-green-500  rounded-md`}
            >
              Visit Site &gt;
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
