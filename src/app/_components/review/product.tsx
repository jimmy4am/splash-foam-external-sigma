import React from "react";
import ProductType from "@/interfaces/products";
import Image from "next/image";
import ProductPoint from "./product-point";
import Link from "next/link";

type Props = {
  product: ProductType;
  productNumber: string;
};

const Product = ({ product, productNumber }: Props) => {
  const year = new Date().getFullYear();

  const ratingNumber = Number(product.rating);

  let firstProduct = productNumber === "1";

  return (
    <div
      className="flex flex-col w-full mt-6 px-2 md:px-0"
      id={"product" + productNumber}
    >
      {firstProduct && (
        <div className="flex justify-start items-center mb-[-20px] ml-[-10px] z-20 relative">
          <div className="bg-[#78ae38] h-[40px] flex w-[200px] justify-center items-center text-white px-[20px] font-bold uppercase flag-ribbon whitespace-nowrap">
            {(product.flagText && <>{product.flagText}</>) || (
              <>#1 Best in {year}</>
            )}
            {/* Add this pseudo-element for the pointed end */}
            <div className="flag-ribbon"></div>
            <div className="flag-under"></div>
          </div>
        </div>
      )}
      <div
        className={`flex w-full ${
          (firstProduct &&
            "border-4 border-[#333] hover:shadow-xl shadow-black") ||
          "border-2 border-[#d9d8d8] hover:shadow-lg"
        } flex-wrap`}
      >
        <div className="w-[50%] md:w-[20%] flex justify-center py-6 px-2 border-r-2 border-[#d9d8d8]">
          <Image
            src={product.image}
            width={200}
            height={200}
            alt={product.name}
            className="flex max-w-full object-scale-down max-h-[200px] md:max-h-[500px]"
          />
        </div>
        <div className="w-[50%] md:w-[15%] flex flex-col justify-center items-center border-r-2 border-[#d9d8d8]">
          <h3 className="text-[61px] text-black font-bold">{product.rating}</h3>
          {ratingNumber > 9 && (
            <>
              <div className="text-blue-700 text-[14px] pt-2">★★★★★</div>
              <div className="text-blue-700 text-[14px]">"Excellent"</div>
            </>
          )}
          {9 > ratingNumber && ratingNumber > 7 && (
            <>
              <div className="text-blue-700 text-[14px] pt-2">★★★★☆</div>
              <div className="text-blue-700 text-[14px]">"Great"</div>
            </>
          )}
          {7 > ratingNumber && ratingNumber > 6 && (
            <>
              <div className="text-blue-700 text-[14px] pt-2">★★★☆☆</div>
              <div className="text-blue-700 text-[14px]">"Good"</div>
            </>
          )}
          {6 > ratingNumber && ratingNumber > 5.5 && (
            <>
              <div className="text-blue-700 text-[14px] pt-2">★★☆☆☆</div>
              <div className="text-blue-700 text-[14px]">"Ok"</div>
            </>
          )}
          {5.5 >= ratingNumber && (
            <>
              <div className="text-blue-700 text-[14px] pt-2">★★☆☆☆</div>
              <div className="text-blue-700 text-[14px]">"Poor"</div>
            </>
          )}
        </div>
        <div className="w-[100%] md:w-[40%] flex flex-col justify-start items-baseline border-r-2 border-[#d9d8d8] border-t-2 md:border-t-0">
          <div className="w-full flex flex-col items-center pb-4 border-b-2 border-[#d9d8d8]">
            <div className="text-[20px] font-bold md:mt-4 py-6 uppercase text-center px-4">
              {product.name}
            </div>
            <div className="flex justify-center items-center">
              <div className="text-[16px] font-bold">Price:</div>
              <div className="text-[24px] font-bold text-[#78ae38] px-2">
                {product.price}
              </div>
              {product.ogPrice && (
                <div className="text-[16px] font-bold line-through text-[#e9525e]">
                  {product.ogPrice}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col w-full px-2 py-2">
            <ProductPoint point={product.point1} pointBold={false} />
            <ProductPoint point={product.point2} pointBold={firstProduct} />
            <ProductPoint point={product.point3} pointBold={false} />
            <ProductPoint point={product.point4} pointBold={false} />
            {product.point5 && (
              <ProductPoint point={product.point5} pointBold={firstProduct} />
            )}
            {product.point6 && (
              <ProductPoint point={product.point6} pointBold={false} />
            )}
            {product.point7 && (
              <ProductPoint point={product.point7} pointBold={false} />
            )}
            {product.point8 && (
              <ProductPoint point={product.point8} pointBold={false} />
            )}
          </div>
        </div>
        <div className="w-[100%] md:w-[25%] flex flex-col items-center justify-center px-4">
          {firstProduct && (
            <div className="hidden md:flex flex-col items-center">
              <div className="rounded-md bg-[#e9525e] text-white text-[14px] text-center py-6 px-3  mb-[10px]">
                Current Sale: 50% Off
                <br />
                12,847 Visitors Bought During Sale
              </div>
              <div className="down-triangle"></div>
            </div>
          )}
          <div className="flex flex-col items-center w-full">
            <a href={product.cta} className="w-full">
              <button
                className={`${
                  (firstProduct && "bg-[#78ae38]") ||
                  "bg-[#78ae38] opacity-[0.65]"
                } text-white text-[14px]  uppercase py-3 px-6 w-full hover:bg-[#7dce1a] mt-2 mb-[10px]`}
              >
                Visit Site &gt;
              </button>
            </a>
            {product.afterCtaText && (
              <div className="text-[14px] text-center pb-4 pt-2 text-[#777]">
                {product.afterCtaText}
              </div>
            )}
          </div>
        </div>
        {firstProduct && (
          <div className="flex w-full md:hidden flex-col items-center">
            <div className=" w-full bg-[#e9525e] text-white text-[14px] text-center py-3 px-3   ">
              Current Sale: 50% Off
              <br />
              12,847 Visitors Bought During Sale
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
