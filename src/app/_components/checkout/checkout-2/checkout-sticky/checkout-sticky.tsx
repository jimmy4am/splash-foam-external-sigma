"use client";

import React from "react";
import Image from "next/image";
import {TagIcon} from "@heroicons/react/24/solid";

import { CheckoutPageType } from "@/interfaces/checkoutPage";
import { ProductInfoType } from "@/interfaces/productInfo";
import { ProductType } from "@/app/_components/checkout/checkout-2/checkout-product/types";
import AppButton from "@/app/_components/checkout/checkout-2/_components/app-button";

type Props = {
  info: CheckoutPageType;
  products: ProductType[];
  product: ProductInfoType;
  setProduct: (product: ProductInfoType) => void;
  quantity: number;
  addToCart: () => void;
};

const CheckoutSticky = ({
  info,
  products,
  product,
  setProduct,
  quantity,
  addToCart,
}: Props) => {
  const chosenProduct = products.find(item => item.product === product.product)

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const item = products.find(p => p.product === Number(e.target.value));

    if (item) {
      setProduct({
        product: item.product,
        productName: `${quantity}x ${item.productText}`,
        productPrice: item.productPrice,
        productShipping: item.productShipping,
        productShippingId: item.productShippingId,
        productOfferId: item.productOfferId,
        productStickyId: item.productStickyId,
      })
    }
  }

  return (
    <div className="sticky bottom-0 bg-[#fff] p-[10px_0_15px] md:p-[10px_0] shadow-[0_-1px_10px_rgba(0,0,0,.2)] z-10">
      <div className="w-full max-w-[1330px] mx-auto px-[15px] flex items-center gap-[10px] md:gap-[15px]">
        <div className="flex-1 flex items-center gap-[10px] md:gap-[15px]">
          <Image className="w-auto h-[42px] md:h-[52px]" src={info.mould_cleaner.product.product_image_1} width={52} height={52} alt="Image 1" />
          <div>
            <p className="hidden lg:block text-[19px] leading-[23px] font-bold">{info.mould_cleaner.product.title}</p>
            <div className="flex items-end gap-[7px]">
              <span className="text-[16px] leading-[24px] md:text-[18px] md:leading-[22px] text-[#ffa500] font-bold">{chosenProduct?.productPrice}</span>
              <span className="text-[16px] leading-[24px] md:text-[18px] md:leading-[22px] text-[rgba(18,18,18,.9)] font-bold line-through">{chosenProduct?.productOgPrice}</span>
              <p className="hidden md:inline-flex items-center gap-[3px] min-w-[100px] h-[24px] px-[5px] bg-[#ffa500] rounded-[6px] text-[12px] leading-[1] uppercase text-[#fff] font-bold tracking-[1px] whitespace-nowrap">
                <TagIcon className="flex-[0_0_15px] text-[#fff]" />
                <span className="mt-[2px]">save {chosenProduct?.discount}%</span>
              </p>
            </div>
            <select
              className="lg:hidden h-[21px] p-[0_10px] bg-[#fff7e8] border-[1px] border-[#ffedcc] text-[10px]"
              value={product.product}
              onChange={handleChange}
            >
              {products.map(item => (
                <option value={item.product} key={item.product}>{item.productText}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex gap-[15px]">
          <select
            className="hidden lg:block h-[50px] p-[0_12px] bg-[#fff7e8] border-[1px] border-[#ffedcc] rounded-[8px] text-[14px] cursor-pointer"
            value={product.product}
            onChange={handleChange}
          >
            {products.map(item => (
              <option value={item.product} key={item.product}>{item.productText}</option>
            ))}
          </select>
          <AppButton classes="px-[11px] md:px-[15px] !text-[17px] md:!text-[19px]" onClick={addToCart}>Add to Cart</AppButton>
        </div>
      </div>
    </div>
  )
};

export default CheckoutSticky;