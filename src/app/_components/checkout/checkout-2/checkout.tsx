"use client";

import React, {useState} from "react";

import { CheckoutPageType } from "@/interfaces/checkoutPage";
import { ProductType } from "@/app/_components/checkout/checkout-2/checkout-product/types";
import CheckoutProduct from "@/app/_components/checkout/checkout-2/checkout-product/checkout-product";
import CheckoutContent from "@/app/_components/checkout/checkout-2/checkout-content/checkout-content";
import CheckoutAdvantages from "@/app/_components/checkout/checkout-2/checkout-advantages/checkout-advantages";
import CheckoutReviews from "@/app/_components/checkout/checkout-2/checkout-reviews/checkout-reviews";
import CheckoutFaqs from "@/app/_components/checkout/checkout-2/checkout-faqs/checkout-faqs";
import CheckoutFooter from "@/app/_components/checkout/checkout-2/checkout-footer/checkout-footer";
import CheckoutSticky from "@/app/_components/checkout/checkout-2/checkout-sticky/checkout-sticky";

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
    <div className="w-full bg-[#fff] text-[15px] md:text-[16px] leading-[27px] tracking-[0.9px] font-harmonia text-[#121212]">
      <CheckoutProduct
        info={info}
        products={products}
        chosenProduct={chosenProduct}
        setChosenProduct={setChosenProduct}
        quantity={quantity}
        setQuantity={setQuantity}
        addToCart={addToCart}
      />
      <CheckoutContent
        image={info.mould_cleaner.content.content_1_image}
        title={info.mould_cleaner.content.content_1_title}
        text={info.mould_cleaner.content.content_1_text}
        subtitle={info.mould_cleaner.content.content_1_subtitle}
        revert
      />
      <CheckoutContent
        image={info.mould_cleaner.content.content_2_image}
        title={info.mould_cleaner.content.content_2_title}
        text={info.mould_cleaner.content.content_2_text}
        subtitle={info.mould_cleaner.content.content_2_subtitle}
      />
      <CheckoutAdvantages info={info} />
      <CheckoutContent
        image={info.mould_cleaner.content.content_3_image}
        title={info.mould_cleaner.content.content_3_title}
        text={info.mould_cleaner.content.content_3_text}
        subtitle={info.mould_cleaner.content.content_3_subtitle}
        revert
      />
      <CheckoutContent
        image={info.mould_cleaner.content.content_4_image}
        title={info.mould_cleaner.content.content_4_title}
        text={info.mould_cleaner.content.content_4_text}
        subtitle={info.mould_cleaner.content.content_4_subtitle}
      />
      <CheckoutReviews info={info} />
      <CheckoutFaqs info={info} />
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