"use client";

import React, { useState } from "react";

import { CheckoutPageType } from "@/interfaces/checkoutPage";
import useCheckoutForm from "@/app/_components/checkout/hooks/useCheckoutForm";
import { ProductType } from "@/app/_components/checkout/checkout-2/checkout-product/types";
import CheckoutForm from "@/app/_components/checkout/checkout-2/checkout-form/checkout-form";
import CheckoutProduct from "@/app/_components/checkout/checkout-2/checkout-product/checkout-product";
import CheckoutPartners from "@/app/_components/checkout/checkout-2/checkout-partners/checkout-partners";
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
      product: 0,
      productName: info.product.name,
      productPrice: info.product.price1,
      productShipping: info.product.ship1,
      productShippingId: info.product.shippingId1,
      productOfferId: info.product.offerId1,
      productStickyId: info.product.stickyId1,
      productText: info.product.text1,
      productOgPrice: info.product.ogPrice1,
      isPopular: false,
      discount: 50,
      slideNumber: 8,
    },
    {
      product: 1,
      productName: info.product.name,
      productPrice: info.product.price2,
      productShipping: info.product.ship2,
      productShippingId: info.product.shippingId2,
      productOfferId: info.product.offerId2,
      productStickyId: info.product.stickyId2,
      productText: info.product.text2,
      productOgPrice: info.product.ogPrice2,
      isPopular: true,
      discount: 60,
      slideNumber: 9,
    },
    {
      product: 2,
      productName: info.product.name,
      productPrice: info.product.price3,
      productShipping: info.product.ship3,
      productShippingId: info.product.shippingId3,
      productOfferId: info.product.offerId3,
      productStickyId: info.product.stickyId3,
      productText: info.product.text3,
      productOgPrice: info.product.ogPrice3,
      isPopular: false,
      discount: 70,
      slideNumber: 10,
    },
  ]

  const {
    product,
    country,
    setProduct,
    firePaypal,
    loading,
    formik,
    setCountry,
    quantity,
    setQuantity
  } = useCheckoutForm({ info });
  const [isFormVisible, setIsFormVisible] = useState(false)

  const addToCart = () => {
    setIsFormVisible(true)
    document.querySelector("body")!.style.overflow = 'hidden';
  }

  return (
    <div className="relative w-full bg-[#fff] text-[15px] md:text-[16px] leading-[27px] tracking-[0.9px] font-harmonia text-[#121212]">
      <CheckoutForm
        info={info}
        isFormVisible={isFormVisible}
        setIsFormVisible={setIsFormVisible}
        product={product}
        country={country}
        setCountry={setCountry}
        loading={loading}
        formik={formik}
      />
      <CheckoutProduct
        info={info}
        products={products}
        product={product}
        setProduct={setProduct}
        quantity={quantity}
        setQuantity={setQuantity}
        firePaypal={firePaypal}
        loading={loading}
        addToCart={addToCart}
      />
      <CheckoutPartners info={info} />
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
        product={product}
        setProduct={setProduct}
        quantity={quantity}
        addToCart={addToCart}
      />
    </div>
  );
};

export default Checkout;