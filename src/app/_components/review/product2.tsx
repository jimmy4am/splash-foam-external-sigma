import React, { useState } from "react";
import ProductType from "@/interfaces/products";
import Image from "next/image";
import ProductPoint from "./product-point2";
import ProductCon from "./product-con2";
import Link from "next/link";
import StarRating from "./star-rating";

type Props = {
  product: ProductType;
  productNumber: string;
  category: string;
};

const Product = ({ product, productNumber, category }: Props) => {
  const currentDate = new Date();
  const saleDay = `${currentDate.toLocaleString("default", {
    month: "long",
    day: "numeric",
  })}, ${currentDate.getFullYear()}`;
  const ratingNumber = Number(product.rating);

  let firstProduct = productNumber === "1";

  const num = Number(productNumber);

  let highlighted = firstProduct || num > 9;

  const [reviewNum, setReviewNum] = useState(Number(product.reviewCount));

  return (
    <div
      className={`flex flex-col w-full mt-6  md:px-0 ${num < 9 && "px-2"}`}
      id={"product" + productNumber}
    >
      {firstProduct && (
        <div className="flex justify-start items-center mb-[-40px] ml-[-10px] z-20 relative">
          <div className="bg-[#0479c3] h-[40px] flex w-[200px] justify-center items-center text-white px-[20px]  text-[16px] flag-ribbon-blue text-nowrap">
            #1 {category}
            {/* Add this pseudo-element for the pointed end */}
            <div className="flag-ribbon-blue"></div>
            <div className="flag-under-blue"></div>
          </div>
        </div>
      )}
      {highlighted || (
        <div className="flex justify-start items-center mb-[-30px]  z-20 relative">
          <div className="bg-[#0479c3] px-2 text-white font-bold h-[30px]">
            {productNumber}
          </div>
        </div>
      )}
      <div
        className={`flex w-full ${
          (firstProduct && "border-4 border-[#0479c3] blue-shadow") ||
          "border-2 border-[#d9d8d8]"
        } flex-wrap`}
      >
        <div className="w-[100%] md:w-[20%] flex justify-center py-10 px-6 border-0 border-[#d9d8d8] flex-col items-center">
          <Image
            src={product.image}
            width={200}
            height={200}
            alt={product.name}
            className="flex max-w-full object-scale-down max-h-[200px] md:max-h-[500px]"
          />
          <p className="text-[14px]">Score this Product</p>
          <StarRating reviewNum={reviewNum} setReviewNum={setReviewNum} />
        </div>

        <div className="w-[100%] md:w-[40%] flex flex-col justify-start items-baseline ">
          <div className="flex flex-col items-center pb-4  w-full px-4">
            <div className="text-[20px] font-bold md:mt-4 py-2  text-left px-2 border-b-[1px] w-full  border-[#3a3a3a]">
              {product.name}
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
            {product.con1 && (
              <ProductCon point={product.con1} pointBold={false} />
            )}
            {product.con2 && (
              <ProductCon point={product.con2} pointBold={false} />
            )}
          </div>
        </div>
        <div className="w-[100%] md:w-[15%] flex flex-col justify-center items-center border-t-2 border-b-2 md:border-b-0 md:border-t-0 border-r-2 border-l-2 border-[#d9d8d8] bg-[#f7f7f7d4]">
          <h3 className="text-[80px] md:text-[61px] text-[#4b4f58] font-bold">
            {product.rating}
          </h3>
          {ratingNumber > 9.8 && (
            <div className="flex flex-col w-full px-2 items-center">
              <div className="text-yellow-500 text-[18px] pt-2">★★★★★</div>
              <div className="text-gray-700 text-[16px] uppercase">
                "Excellent"
              </div>

              <div className="flex w-full justify-center items-center p-2 pb-4 md:pb-0 border-0 md:border-[1px] text-[#3a3a3a] border-[#777] text-center text-[12px] mt-2">
                ({reviewNum}+) 5-Star Reviews
              </div>
            </div>
          )}
          {9.8 > ratingNumber && ratingNumber > 9 && (
            <div className="flex flex-col w-full px-2 items-center">
              <div className="text-yellow-500 text-[18px] pt-2">★★★★☆</div>
              <div className="text-gray-700 text-[16px] uppercase">"Great"</div>
              <div className="flex w-full justify-center items-center p-2 pb-4 md:pb-0 border-0 md:border-[1px] text-[#3a3a3a] border-[#777] text-center text-[12px] mt-2">
                ({reviewNum}+) 5-Star Reviews
              </div>
            </div>
          )}
          {9 > ratingNumber && ratingNumber > 8 && (
            <div className="flex flex-col w-full px-2 items-center">
              <div className="text-yellow-500 text-[18px] pt-2">★★★☆☆</div>
              <div className="text-gray-700 text-[16px] uppercase">"Good"</div>
              <div className="flex w-full justify-center items-center p-2 pb-4 md:pb-0 border-0 md:border-[1px] text-[#3a3a3a] border-[#777] text-center text-[12px] mt-2">
                ({reviewNum}+) 5-Star Reviews
              </div>
            </div>
          )}
          {6 > ratingNumber && ratingNumber > 5.5 && (
            <>
              <div className="text-yellow-500 text-[18px] pt-2">★★☆☆☆</div>
              <div className="text-gray-700 text-[16px] uppercase">"Ok"</div>
            </>
          )}
          {5.5 >= ratingNumber && (
            <>
              <div className="text-yellow-500 text-[18px] pt-2">★★☆☆☆</div>
              <div className="text-gray-700 text-[16px] uppercase">"Poor"</div>
            </>
          )}
        </div>
        <div className="w-[100%] md:w-[25%] flex flex-col items-center justify-center px-4 py-2">
          <div className="flex flex-col items-center justify-start w-full">
            <a href={product.cta} className="flex flex-col w-full items-center">
              {(highlighted && (
                <div className="highlighted-container bg-[#0479c3] text-white px-8 py-2 rounded-md w-full text-center relative mb-2">
                  <h3 className="font-bold">Save 50% Off</h3>
                  <p className="text-[14px]">Ends {saleDay}</p>
                </div>
              )) || (
                <div className="w-full px-8 pb-2 pt-2 flex justify-center">
                  <Image
                    src={product.logo || ""}
                    width={200}
                    height={200}
                    alt={product.name}
                    className="flex max-w-full object-scale-down max-h-[60px] md:max-h-[100px] opacity-70"
                  />
                </div>
              )}

              <button
                className={`${
                  (highlighted &&
                    "bg-[#78ae38] text-white font-bold px-8 rounded-full w-full") ||
                  "bg-transparent border-2 border-[#333] text-[#3a3a3a] hover:bg-[#333] hover:border-[#3a3a3a] hover:text-white px-4 rounded-md w-fit"
                } text-[14px]  uppercase py-3  hover:bg-[#333] mt-2 mb-[10px] transition-all`}
              >
                Visit Site &gt;
              </button>
            </a>
            <div className="text-center text-[20px] font-bold mt-4 ">
              {product.price}{" "}
              {product.ogPrice && (
                <span className="text-[#bbb] line-through">
                  {product.ogPrice}
                </span>
              )}
            </div>
            <div className="text-center text-[14px] mt-4">
              {product.shipping}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
