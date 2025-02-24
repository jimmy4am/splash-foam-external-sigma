"use client";

import React, {useState} from "react";
import { Inter } from "next/font/google";

import { CheckoutPageType } from "@/interfaces/checkoutPage";
import { ProductType } from "@/app/_components/checkout/checkout-2/checkout-product/types";
import CheckoutProduct from "@/app/_components/checkout/checkout-2/checkout-product/checkout-product";
import CheckoutSticky from "@/app/_components/checkout/checkout-2/checkout-sticky/checkout-sticky";
import CheckoutFooter from "@/app/_components/checkout/checkout-2/checkout-footer/checkout-footer";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  info: CheckoutPageType;
};

const Checkout = ({ info }: Props) => {
  const products: ProductType[] = [
    {
      id: info.mould_cleaner.product.offer_1_id,
      text: info.mould_cleaner.product.offer_1_text,
      price: info.mould_cleaner.product.offer_1_price,
      newPrice: info.mould_cleaner.product.offer_1_new_price,
      savings: info.mould_cleaner.product.offer_1_savings,
      slideNumber: 8,
    },
    {
      id: info.mould_cleaner.product.offer_2_id,
      text: info.mould_cleaner.product.offer_2_text,
      price: info.mould_cleaner.product.offer_2_price,
      newPrice: info.mould_cleaner.product.offer_2_new_price,
      savings: info.mould_cleaner.product.offer_2_savings,
      slideNumber: 9,
    },
    {
      id: info.mould_cleaner.product.offer_3_id,
      text: info.mould_cleaner.product.offer_3_text,
      price: info.mould_cleaner.product.offer_3_price,
      newPrice: info.mould_cleaner.product.offer_3_new_price,
      savings: info.mould_cleaner.product.offer_3_savings,
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
      <CheckoutProduct
        info={info}
        products={products}
        chosenProduct={chosenProduct}
        setChosenProduct={setChosenProduct}
        quantity={quantity}
        setQuantity={setQuantity}
        addToCart={addToCart}
      />
      <CheckoutFooter />
      <CheckoutSticky
        info={info}
        products={products}
        chosenProduct={chosenProduct}
        setChosenProduct={setChosenProduct}
        addToCart={addToCart}
      />
    </div>
  );
};

export default Checkout;