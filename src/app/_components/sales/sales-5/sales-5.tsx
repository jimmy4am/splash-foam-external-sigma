"use client";

import React, {useState} from "react";
import { Inter } from "next/font/google";

import { SalesMouldCleanerType } from "@/interfaces/salesPage";
import { ProductType } from "@/app/_components/sales/sales-5/sales-product/types";
import SalesProduct from "@/app/_components/sales/sales-5/sales-product/sales-product";
import SalesSticky from "@/app/_components/sales/sales-5/sales-sticky/sales-sticky";
import SalesFooter from "@/app/_components/sales/sales-5/sales-footer/sales-footer";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  info: SalesMouldCleanerType;
};

const Sales5 = ({ info }: Props) => {
  const products: ProductType[] = [
    {
      id: info.product.offer_1_id,
      text: info.product.offer_1_text,
      price: info.product.offer_1_price,
      newPrice: info.product.offer_1_new_price,
      savings: info.product.offer_1_savings,
      slideNumber: 8,
    },
    {
      id: info.product.offer_2_id,
      text: info.product.offer_2_text,
      price: info.product.offer_2_price,
      newPrice: info.product.offer_2_new_price,
      savings: info.product.offer_2_savings,
      slideNumber: 9,
    },
    {
      id: info.product.offer_3_id,
      text: info.product.offer_3_text,
      price: info.product.offer_3_price,
      newPrice: info.product.offer_3_new_price,
      savings: info.product.offer_3_savings,
      slideNumber: 10,
    }
  ]
  const [chosenProduct, setChosenProduct] = useState<ProductType>(products[0]);
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    console.log(`Your choice is ${quantity}x of ${chosenProduct.text}`)
  }

  return (
    <div className={`w-full bg-[#fff] ${inter.className}`}>
      <SalesProduct
        info={info}
        products={products}
        chosenProduct={chosenProduct}
        setChosenProduct={setChosenProduct}
        quantity={quantity}
        setQuantity={setQuantity}
        addToCart={addToCart}
      />
      <SalesFooter />
      <SalesSticky
        info={info}
        products={products}
        chosenProduct={chosenProduct}
        setChosenProduct={setChosenProduct}
        addToCart={addToCart}
      />
    </div>
  );
};

export default Sales5;