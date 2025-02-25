"use client";

import React, { MutableRefObject, useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import Slider from "react-slick";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon, ChevronRightIcon, MinusIcon, PlusIcon, TagIcon } from "@heroicons/react/24/solid";

import { CheckoutPageType } from "@/interfaces/checkoutPage";
import { ProductType } from "@/app/_components/checkout/checkout-2/checkout-product/types";
import Rating from "@/app/_components/checkout/checkout-2/_components/rating";
import CheckoutProductRadio from "@/app/_components/checkout/checkout-2/checkout-product/checkout-product-radio";
import AppButton from "@/app/_components/checkout/checkout-2/_components/app-button";

const poppins = Poppins({weight: ["400", "500", "600", "700"], subsets: ["latin"] });

type Props = {
  info: CheckoutPageType;
  products: ProductType[];
  chosenProduct: ProductType;
  setChosenProduct: React.Dispatch<React.SetStateAction<ProductType>>;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  addToCart: () => void;
};

const CheckoutProduct = ({
  info,
  products,
  chosenProduct,
  setChosenProduct,
  quantity,
  setQuantity,
  addToCart,
}: Props) => {
  const [mainNav, setMainNav] = useState<MutableRefObject<Slider> | null>(null);
  const [thumbNav, setThumbNav] = useState<MutableRefObject<Slider> | null>(null);

  const mainSliderRef = React.useRef<Slider | null>(null);
  const thumbSliderRef = React.useRef<Slider | null>(null);

  React.useEffect(() => {
    if (mainSliderRef.current) {
      setMainNav(mainSliderRef as MutableRefObject<Slider>)
    }
    if (thumbSliderRef.current) {
      setThumbNav(thumbSliderRef as MutableRefObject<Slider>)
    }
  }, [mainSliderRef, thumbSliderRef]);

  const mainSliderSettings = {
    asNavFor: thumbNav,
    ref: (slider: React.SetStateAction<React.MutableRefObject<Slider> | null>) => setMainNav(slider),
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: true,
        }
      }
    ]
  }

  const thumbSliderSettings = {
    asNavFor: mainNav,
    ref: (slider: React.SetStateAction<React.MutableRefObject<Slider> | null>) => setThumbNav(slider),
    slidesToShow: 5,
    swipeToSlide: true,
    focusOnSelect: true,
    infinite: false,
    nextArrow: <button><ChevronRightIcon className="absolute w-[14px] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" /></button>,
    prevArrow: <button><ChevronLeftIcon className="absolute w-[14px] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" /></button>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:4,
        }
      }
    ]
  }

  useEffect(() => {
    if (mainNav) {
      // @ts-ignore
      mainNav.slickGoTo(chosenProduct.slideNumber)
    }

  }, [chosenProduct]);

  return (
    <section className="bg-[#fff] py-[36px]">
      <div className="w-full max-w-[1330px] mx-auto px-[15px] md:flex">
        <div className="md:flex-[0_0_50%] lg:flex-[0_0_55%] md:w-[50%] lg:w-[55%]">
          {/*
            // @ts-ignore */}
          <Slider className="product-slider-main" {...mainSliderSettings}>
            <Image src={info.mould_cleaner.product.product_image_1} width={813} height={813} alt="Image 1"/>
            <Image src={info.mould_cleaner.product.product_image_2} width={813} height={813} alt="Image 2"/>
            <Image src={info.mould_cleaner.product.product_image_3} width={813} height={813} alt="Image 3"/>
            <Image src={info.mould_cleaner.product.product_image_4} width={813} height={813} alt="Image 4"/>
            <Image src={info.mould_cleaner.product.product_image_5} width={813} height={813} alt="Image 5"/>
            <Image src={info.mould_cleaner.product.product_image_6} width={813} height={813} alt="Image 6"/>
            <Image src={info.mould_cleaner.product.product_image_7} width={813} height={813} alt="Image 7"/>
            <Image src={info.mould_cleaner.product.product_image_8} width={813} height={813} alt="Image 8"/>
            <Image src={info.mould_cleaner.product.product_image_9} width={813} height={813} alt="Image 9"/>
            <Image src={info.mould_cleaner.product.product_image_10} width={813} height={813} alt="Image 10"/>
            <Image src={info.mould_cleaner.product.product_image_11} width={813} height={813} alt="Image 11"/>
          </Slider>
          <div className="hidden md:block p-[20px_50px]">
            {/*
              // @ts-ignore */}
            <Slider className="product-slider-thumb" {...thumbSliderSettings}>
              <div className="slide px-[4px] hover:opacity-70 cursor-pointer overflow-hidden"><Image
                className="rounded-[12px]" src={info.mould_cleaner.product.product_image_1} width={115} height={115} alt="Image 1"/>
              </div>
              <div className="slide px-[4px] hover:opacity-70 cursor-pointer overflow-hidden"><Image
                className="rounded-[12px]" src={info.mould_cleaner.product.product_image_2} width={115} height={115} alt="Image 2"/>
              </div>
              <div className="slide px-[4px] hover:opacity-70 cursor-pointer overflow-hidden"><Image
                className="rounded-[12px]" src={info.mould_cleaner.product.product_image_3} width={115} height={115} alt="Image 3"/>
              </div>
              <div className="slide px-[4px] hover:opacity-70 cursor-pointer overflow-hidden"><Image
                className="rounded-[12px]" src={info.mould_cleaner.product.product_image_4} width={115} height={115} alt="Image 4"/>
              </div>
              <div className="slide px-[4px] hover:opacity-70 cursor-pointer overflow-hidden"><Image
                className="rounded-[12px]" src={info.mould_cleaner.product.product_image_5} width={115} height={115} alt="Image 5"/>
              </div>
              <div className="slide px-[4px] hover:opacity-70 cursor-pointer overflow-hidden"><Image
                className="rounded-[12px]" src={info.mould_cleaner.product.product_image_6} width={115} height={115} alt="Image 6"/>
              </div>
              <div className="slide px-[4px] hover:opacity-70 cursor-pointer overflow-hidden"><Image
                className="rounded-[12px]" src={info.mould_cleaner.product.product_image_7} width={115} height={115} alt="Image 7"/>
              </div>
              <div className="slide px-[4px] hover:opacity-70 cursor-pointer overflow-hidden"><Image
                className="rounded-[12px]" src={info.mould_cleaner.product.product_image_8} width={115} height={115} alt="Image 8"/>
              </div>
              <div className="slide px-[4px] hover:opacity-70 cursor-pointer overflow-hidden"><Image
                className="rounded-[12px]" src={info.mould_cleaner.product.product_image_9} width={115} height={115} alt="Image 9"/>
              </div>
              <div className="slide px-[4px] hover:opacity-70 cursor-pointer overflow-hidden"><Image
                className="rounded-[12px]" src={info.mould_cleaner.product.product_image_10} width={115} height={115} alt="Image 10"/>
              </div>
              <div className="slide px-[4px] hover:opacity-70 cursor-pointer overflow-hidden"><Image
                className="rounded-[12px]" src={info.mould_cleaner.product.product_image_11} width={115} height={115} alt="Image 11"/>
              </div>
            </Slider>
          </div>
        </div>
        <div
          className="md:flex-[0_0_50%] lg:flex-[0_0_45%] md:w-[50%] lg:w-[45%] p-[15px_0] md:p-[0_0_0_20px]  lg:p-[0_0_0_35px] xl:p-[0_0_0_50px]">
          <h1
            className={`text-[26px] md:text-[32px] leading-[32px] md:leading-[40px] font-bold ${poppins.className}`}>{info.mould_cleaner.product.title}</h1>
          <div className="flex items-center gap-[5px] mb-[15px]">
            <Rating rating={info.mould_cleaner.product.rating}/>
            ({info.mould_cleaner.product.reviews} Reviews)
          </div>
          <ul className="mb-[18px] leading-[22px] font-bold">
            <li className="flex gap-[5px] mb-[15px]">
              <CheckCircleIcon className="flex-[0_0_20px] text-[#53af01]"/>
              <span className="flex-1">{info.mould_cleaner.product.text_1}</span>
            </li>
            <li className="flex gap-[5px] mb-[15px]">
              <CheckCircleIcon className="flex-[0_0_20px] text-[#53af01]"/>
              <span className="flex-1">{info.mould_cleaner.product.text_2}</span>
            </li>
            <li className="flex gap-[5px] mb-[15px]">
              <CheckCircleIcon className="flex-[0_0_20px] text-[#53af01]"/>
              <span className="flex-1">{info.mould_cleaner.product.text_3}</span>
            </li>
            <li className="flex gap-[5px]">
              <CheckCircleIcon className="flex-[0_0_20px] text-[#53af01]"/>
              <span className="flex-1">{info.mould_cleaner.product.text_4}</span>
            </li>
          </ul>
          <div className="w-full flex items-end gap-[7px] mb-[18px]">
            <span className="text-[20px] leading-[25px] text-[#ffa500] font-bold">{chosenProduct.newPrice}</span>
            <span
              className="text-[16px] leading-[24px] text-[rgba(18,18,18,.9)] font-bold line-through">{chosenProduct.price}</span>
            <p
              className="inline-flex items-center gap-[3px] min-w-[100px] mb-[4px] px-[5px] bg-[#ffa500] rounded-[6px] text-[12px] leading-[24px] uppercase text-[#fff] font-bold tracking-[1px] whitespace-nowrap">
              <TagIcon className="flex-[0_0_18px] text-[#fff]"/>
              save
              {" "}{chosenProduct.savings}%{" "}
            </p>
          </div>

          <div className="mb-[15px]">
            <p
              className={`w-full flex items-center gap-[10px] mb-[13px] text-center text-[14px] leading-[1] uppercase font-bold ${poppins.className}`}>
              <span className="flex-1 h-[2px] min-w-[50px] bg-[#ffa500]"></span>
              Bundle & Save
              <span className="flex-1 h-[2px] min-w-[50px] bg-[#ffa500]"></span>
            </p>

            <div className="flex flex-col gap-[10px]">
              {products.map(item => (
                <CheckoutProductRadio
                  chosenProduct={chosenProduct}
                  item={item}
                  handleClick={() => setChosenProduct(item)}
                  isMostPopular={item.id === 2}
                />
              ))}
            </div>
          </div>

          <div className="mb-[15px]">
            <p className="mb-[3px] text-[13px] leading-[20px] font-semibold tracking-[0.4px]">Quantity</p>
            <div className="flex w-[142px] h-[47px] border-[1px] border-[rgba(18,18,18,.6)] rounded-[6px]">
              <button
                disabled={quantity <= 1}
                onClick={() => setQuantity(prev => prev - 1)}
                className="flex items-center justify-center h-full flex-[0_0_45px] max-w-[45px] border-[0] rounded-[6px_0_0_6px] bg-[#fff]">
                <MinusIcon className="w-[20px] h-[20px]"/>
              </button>
              <input
                value={quantity}
                onChange={e => setQuantity(Number(e.target.value))}
                type="number"
                className="h-full flex-[0_0_50px] max-w-[50px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center z-10 focus-visible:outline-[rgba(18,18,18,.5)] focus-visible:outline-[1px] focus-visible:outline-offset-[3px] focus-visible:shadow-[0_0_0_3px_#fff,0_0_5px_4px_rgba(18,18,18,.3)]"/>
              <button
                onClick={() => setQuantity(prev => prev + 1)}
                className="flex items-center justify-center h-full flex-[0_0_45px] max-w-[45px] border-[0] rounded-[0_6px_6px_0] bg-[#fff]">
                <PlusIcon className="w-[20px] h-[20px]"/>
              </button>
            </div>
          </div>

          <p className="flex gap-[5px] mb-[15px] text-[14px] md:text-[16px] leading-[1.3] font-bold">
            <CheckCircleIcon className="flex-[0_0_20px]"/>
            <span className="flex-1">First 300 Buyers Get a Free Extra Item!</span>
          </p>

          <div className="flex flex-col gap-[10px]">
            <AppButton classes="uppercase" onClick={addToCart}>Add to Cart</AppButton>
            <button
              className="flex items-center justify-center gap-[5px] h-[50px] bg-[#ffc439] rounded-[4px] text-[16px] leading-[22px] font-medium font-helvetica">
              Pay With
              <Image
                src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/5e892d43-3890-4e61-f7cd-fca13007dc00/public"
                width={70}
                height={22}
                alt="PayPal"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutProduct;