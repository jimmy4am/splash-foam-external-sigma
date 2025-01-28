import React, { useEffect, useState } from "react";
import ProductType from "@/interfaces/products";
import Image from "next/image";
import ProductPoint from "./product-point";
import Link from "next/link";
import Rating from "./rating";
import { CheckBadgeIcon, StarIcon } from "@heroicons/react/20/solid";

type Props = {
  product: ProductType;
  productNumber: string;
};

const Product3 = ({ product, productNumber }: Props) => {
  const year = new Date().getFullYear();

  const ratingNumber = Number(product?.rating);

  let firstProduct = productNumber === "1";

  return (
    <div
      className="flex flex-col w-full mt-6 px-2 md:px-0"
      id={"product" + productNumber}
    >
      {(firstProduct && (
        <>
          <div className="flex justify-start items-center mt-[30px] md:mt-[50px] mb-[-90px] ml-[-10px] z-20 relative">
            <div className="bg-green-700 h-[30px] flex w-[140px] justify-center items-center text-white  font-bold uppercase flag-ribbon3 text-sm">
              We Recommend
              {/* Add this pseudo-element for the pointed end */}
              <div className="flag-ribbon3"></div>
              <div className="flag-under3"></div>
            </div>
          </div>
          <div className="flex justify-start items-center mt-[100px] mb-[-100px] ml-2 md:ml-[-18px] z-20 relative">
            <div className="bg-white h-[40px] flex w-[40px] rounded-full justify-center items-center text-[22px] text-black border-2 border-[#222] font-bold uppercase">
              {productNumber}
            </div>
          </div>
        </>
      )) || (
        <div className="flex justify-start items-center mt-[30px] mb-[-75px] ml-2 md:ml-[-18px]  z-20 relative">
          <div className="bg-white h-[40px] flex w-[40px] rounded-full justify-center items-center text-[22px] text-black border-[1px] border-black uppercase  font-thin">
            {productNumber}
          </div>
        </div>
      )}

      <div
        className={`flex w-full border-2 hover:shadow-lg flex-wrap ${
          (firstProduct && "border-[#222]") || "border-[#d9d8d8]"
        }`}
      >
        <div
          className={`w-[100%] md:w-[25%] flex justify-between md:justify-start items-center md:items-start  pl-16 md:pl-8 py-6 px-2 border-b-[1px] border-[#eee] mt-4 md:mt-0 ${
            (firstProduct && "pt-8 md:pt-16 ") || "pt-2 md:pt-10"
          }`}
        >
          <Image
            src={product?.image}
            width={160}
            height={160}
            alt={product?.name}
            className={`flex max-w-full object-scale-down max-h-[200px] md:max-h-[500px]  `}
          />
          <div className="w-[50%] md:hidden flex flex-col ">
            <div className="flex w-full justify-end ">
              <Rating num={product?.rating} />
            </div>
            <div className="flex text-[16px] font-bold text-[#316FF6] w-full justify-end  ">
              {ratingNumber > 9 && (
                <>
                  <div className="text-[#ffbf00] text-[14px] pr-2">★★★★★</div>
                </>
              )}
              {9 > ratingNumber && ratingNumber > 7 && (
                <>
                  <div className="text-[#ffbf00] text-[14px] pr-2">★★★★☆</div>
                </>
              )}
              {7 > ratingNumber && ratingNumber > 6 && (
                <>
                  <div className="text-[#ffbf00] text-[14px] pr-2">★★★☆☆</div>
                </>
              )}
              {6 > ratingNumber && ratingNumber > 5.5 && (
                <>
                  <div className="text-[#ffbf00] text-[14px] pr-2">★★☆☆☆</div>
                </>
              )}
              {5.5 >= ratingNumber && (
                <>
                  <div className="text-[#ffbf00] text-[14px] pr-2">★★☆☆☆</div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="w-[100%] md:w-[50%] flex flex-col justify-start items-baseline">
          <div className="w-full flex flex-col items-center  ">
            <div className="flex w-full mt-6 justify-start items-start">
              <div className="hidden md:flex text-[16px] font-bold text-[#316FF6] ">
                {ratingNumber > 9 && (
                  <>
                    <div className="text-[#ffbf00] text-[14px] pr-2">★★★★★</div>
                  </>
                )}
                {9 > ratingNumber && ratingNumber > 7 && (
                  <>
                    <div className="text-[#ffbf00] text-[14px] pr-2">★★★★☆</div>
                  </>
                )}
                {7 > ratingNumber && ratingNumber > 6 && (
                  <>
                    <div className="text-[#ffbf00] text-[14px] pr-2">★★★☆☆</div>
                  </>
                )}
                {6 > ratingNumber && ratingNumber > 5.5 && (
                  <>
                    <div className="text-[#ffbf00] text-[14px] pr-2">★★☆☆☆</div>
                  </>
                )}
                {5.5 >= ratingNumber && (
                  <>
                    <div className="text-[#ffbf00] text-[14px] pr-2">★★☆☆☆</div>
                  </>
                )}
                {product.reviewCount} Ratings
              </div>
            </div>
            <div className="text-[16px] md:text-[20px] font-bold pb-2 md:py-4 text-left w-full px-4 ">
              {product.name}
            </div>
          </div>
          <div className="flex flex-col w-full  py-2 px-2 md:px-0">
            <ProductPoint point={product.point1} pointBold={false} />
            <ProductPoint point={product.point2} pointBold={firstProduct} />
            {product.point3 && (
              <ProductPoint point={product.point3} pointBold={false} />
            )}
            {firstProduct && product.point4 && (
              <ProductPoint point={product.point4} pointBold={false} />
            )}
            {firstProduct && product.point5 && (
              <ProductPoint point={product.point5} pointBold={firstProduct} />
            )}
            {firstProduct && product.point6 && (
              <ProductPoint point={product.point6} pointBold={false} />
            )}
            {firstProduct && product.point7 && (
              <ProductPoint point={product.point7} pointBold={false} />
            )}
            {firstProduct && product.point8 && (
              <ProductPoint point={product.point8} pointBold={false} />
            )}
          </div>
        </div>
        <div className="w-[100%] md:w-[25%]   flex flex-col items-center justify-center px-8">
          <div className="flex flex-col justify-start items-center w-full h-full">
            <div className="hidden md:flex flex-col pt-4  w-full justify-center items-end ">
              <Rating num={product.rating} />
            </div>
            <div className="flex flex-1 pb-4 justify-center items-center  w-full ">
              <a href={product.cta} className="w-full">
                <button
                  className={`${
                    (firstProduct && "bg-green-600") ||
                    "bg-green-600 opacity-[0.65]"
                  } text-white text-[14px]  uppercase py-3 px-6 w-full hover:bg-green-500 mt-2 mb-[10px] rounded-md`}
                >
                  Visit Site &gt;
                </button>
              </a>
            </div>
          </div>
        </div>
        {firstProduct && (
          <div className="border-dashed border-t-2 border-blue-700 bg-blue-500/20 p-2 w-full flex text-[14px] items-center flex-wrap">
            <div className="hidden md:flex w-[25%] font-bold text-blue-700 items-center">
              <StarIcon className="w-8 h-8 mr-2 ml-2" /> Special Offer
            </div>
            <div className="w-[100%] text-center md:text-left pb-1 md:pb-0 md:w-[50%] text-gray-700">
              {product.specialCta}
            </div>
            <div className="w-[100%] md:w-[25%] px-8">
              <a href={product.cta}>
                <button className="bg-white px-2 py-1 w-full rounded-md border-blue-700 border-[1px] hover:bg-gray-200 text-blue-700 font-bold">
                  {product.specialButton}
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product3;
