import React, { useState, useEffect } from "react";
import Image from "next/image";
import { SalesPageType } from "@/interfaces/salesPage";
import { siteProduct } from "@/lib/site-info";
import ImageStrip from "./simple/sales-imagestrip-simple";
import Faqs from "./simple/sales-faqs-simple";
import Reviews from "./simple/sales-reviews-simple";
import { useRouter } from "next/navigation";

type Props = {
  info: SalesPageType;
};

const SalesSimple = ({ info }: Props) => {
  return (
    <div className="flex w-full flex-col items-center">
      <div className=" fixed z-50 bg-gradient-to-r from-blue-600 to-blue-400 text-white items-center w-full flex flex-col ">
        <div className="flex w-full max-w-[1200px] justify-between items-center p-2">
          <Image
            src={info.logo}
            alt={siteProduct}
            width={150}
            height={150}
            className="max-w-1/2 object-scale-down"
          />
          <div className="flex items-center">
            <a
              className="bg-[#0fd13d] border-b-[2px] border-b-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded whitespace-nowrap"
              href={info.cta}
            >
              Order Now!
            </a>
            <Image
              src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/aaaa8b12-6536-4ebc-917d-2ecf77344500/public"
              alt="usa-flag"
              width={40}
              height={40}
              className="hidden sm:block ml-4"
            />
          </div>
        </div>
      </div>
      <div className="mt-16 flex w-full flex-col items-center min-h-screen">
        <div className="flex w-full bg-blue-600 text-white overflow-hidden relative items-center justify-center">
          <div className="flex flex-col items-center justify-center relative w-full">
            <div className="block absolute inset-0 z-0 ">
              <Image
                src={info.header.background}
                alt="background"
                fill
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="flex w-full z-10 flex-col items-center p-2">
              <div className="flex flex-col items-center bg-white/20 rounded-full aspect-square w-full sm:w-auto">
                <div className="flex relative">
                  <div className="absolute w-full flex justify-end right-0 md:-right-4 top-4 z-20">
                    <div className="w-24 h-24 md:w-36 md:h-36 bg-slate-50 rounded-full p-4 text-black flex flex-col items-center justify-center font-bold leading-tight text-center border-b-[6px] border-l-[4px] borber-[#ddd] text-[11px] md:text-[16px]">
                      <span>Discount</span>
                      <span className="text-[24px] md:text-[45px] text-green-500 font-bold">
                        -50%
                      </span>
                      <span>Last Chance</span>
                    </div>
                  </div>
                  <Image
                    src={info.header.productImage}
                    alt="Foamy Cleaner product"
                    className="object-scale-down mt-6 flex max-w-[100%] w-[200px] md:w-[320px]"
                    width={320}
                    height={320}
                  />
                </div>

                <h1 className="text-xl md:text-2xl font-bold mb-4 text-center">
                  {info.h1_top}
                </h1>

                <div className="w-7/12 my-3 flex items-center justify-center px-4">
                  <a
                    href={info.cta}
                    className="w-full max-w-[400px] flex justify-center items-center text-[18px] bg-[#0fd13d] border-b-[2px] border-b-green-600 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Order Now!
                  </a>
                </div>

                <div className="text-center sm:w-9/12 mb-6">
                  <p className="font-bold">{info.h1_bot}</p>
                  <p className="text-[14px]">- Available Online Only</p>
                  <p className="text-[14px]">- While Supplies Last</p>
                </div>
              </div>
              <div className="hidden lg:block absolute right-10 top-10">
                <Image
                  src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/8be12a65-34a9-4cfa-bafd-4c9320366700/public"
                  alt="Quality Badge"
                  width={130}
                  height={130}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features Bar */}
        <div className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-2 flex justify-center px-2">
          <div className="flex flex-wrap justify-around max-w-[1200px] w-full">
            <div className="flex items-center justify-center px-1 sm:px-2 w-full sm:w-1/2 md:w-1/4 my-2">
              <img
                src={info.highlights.icon1}
                alt="Innovative"
                className="w-10"
              />
              <p className="text-sm sm:text-base ml-2">
                {info.highlights.head1}
              </p>
            </div>
            <div className="flex items-center justify-center px-1 sm:px-2 w-full sm:w-1/2 md:w-1/4 my-2">
              <img
                src={info.highlights.icon2}
                alt="Recommended"
                className="w-10"
              />
              <p className="text-sm sm:text-base ml-2">
                {info.highlights.head2}
              </p>
            </div>
            <div className="hidden md:flex items-center px-2 w-1/4 my-2">
              <img
                src={info.highlights.icon3}
                alt="Easy Clean"
                className="w-10"
              />
              <p className="text-sm sm:text-base ml-2">
                {info.highlights.head3}
              </p>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="flex flex-col pt-8 px-4">
          <div className="flex flex-col items-center max-w-[1000px]">
            <h2 className="text-2xl sm:text-2xl lg:text-3xl text-center font-[600] mb-8">
              {info.splitcompare.heading}
            </h2>

            <div className="flex flex-col md:flex-row items-center mb-8">
              <div className="md:w-7/12">
                <img
                  src={info.splitcompare.beforeImg}
                  alt="About Splash"
                  className="w-full"
                />
              </div>
              <div className="md:w-5/12 mt-4 md:mt-0 md:pl-8">
                <h3 className="text-xl sm:text-2xl mb-4 font-[600]">
                  {info.splitcompare.heading2top}
                </h3>
                <p>
                  Who likes getting up and personal with a toilet? No one. The
                  filth that carries diseases, the germs, the smell... It's no
                  wonder that cleaning the toilet makes 32% of people gag and is
                  almost 100% of people's least favorite bathroom cleaning task.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-7/12">
                <img
                  src={info.splitcompare.afterImg}
                  alt="Using Splash"
                  className="w-full"
                />
              </div>
              <div className="md:w-5/12 mt-4 md:mt-0 md:pr-8">
                <h3 className="text-xl sm:text-2xl mb-4 font-[600]">
                  {info.splitcompare.heading2bot}
                </h3>
                <p>{info.splitcompare.afterText}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-2 flex justify-center">
          <div className="flex justify-between md:justify-evenly max-w-[1200px] w-full py-2">
            <Image
              src={info.logo}
              alt={siteProduct}
              width={150}
              height={150}
              className="max-w-1/2"
            />
            <Image
              src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/20757cf7-4c89-45f4-cd3f-429733cd7900/public"
              alt={siteProduct}
              width={150}
              height={150}
              className="hidden sm:block object-scale-down"
            />
            <div className="flex w-1/3 items-center ">
              <a
                className="bg-[#0fd13d] border-b-[2px] border-b-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded w-full whitespace-nowrap flex justify-center items-center"
                href={info.cta}
              >
                Order Now!
              </a>
            </div>
          </div>
        </div>

        <ImageStrip info={info} />

        <div className="flex w-full bg-blue-600 text-white overflow-hidden relative items-center justify-center">
          <div className="flex flex-col items-center justify-center relative w-full">
            <div className="block absolute inset-0 z-0 ">
              <Image
                src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/f1605eee-52a0-4acf-8374-37803ef81700/public"
                alt="background"
                fill
                className="w-full h-full object-cover "
                priority
              />
            </div>
            <div className="flex w-full z-10 flex-col items-center p-2">
              <div className="flex flex-col items-center bg-white/20 rounded-full ">
                <h3 className="text-2xl sm:text-2xl lg:text-3xl text-center mb-8 text-black font-bold mt-12 ">
                  New Era of Toilet Cleaning
                </h3>
                <div className="flex w-full max-w-[800px] items-center justify-center text-black px-6">
                  <div className="hidden md:flex flex-col items-start justify-evenly w-1/4 h-full space-y-12">
                    <div className="flex flex-col">
                      <h5 className="font-bold">Easy to Use</h5>
                      <p>Simply pour and let it foam, it's that easy!</p>
                    </div>
                    <div className="flex flex-col">
                      <h5 className="font-bold">Long Lasting Supply</h5>
                      <p>
                        Each Splash contains about a 6-month supply for each
                        toilet. If you have multiple toilets in your house, we
                        recommend multiple Splashs. Or you can order more simply
                        for greater savings!
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full md:w-1/2 justify-center items-center">
                    <Image
                      src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/002e9a29-cfa1-4f26-cadf-3a5b24388700/public"
                      alt="Foamy Cleaner product"
                      className="object-scale-down mt-6"
                      width={320}
                      height={320}
                    />
                  </div>
                  <div className="hidden md:flex flex-col items-start justify-evenly w-1/4 h-full space-y-12">
                    <div className="flex flex-col">
                      <h5 className="font-bold">Quick Results</h5>
                      <p>
                        Let it sit for about 15 minutes and then flush, you
                        don’t need to wait all day.
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <h5 className="font-bold">Splash Guarantee</h5>
                      <p>
                        If you’re not satisfied, contact our customer service
                        for your money back - guaranteed!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mt-8 md:hidden text-black px-4 space-y-6">
                  <div className="flex flex-col">
                    <h5 className="font-bold text-xl">Easy to Use</h5>
                    <p>Simply pour and let it foam, it's that easy!</p>
                  </div>
                  <div className="flex flex-col">
                    <h5 className="font-bold text-xl">Long Lasting Supply</h5>
                    <p>
                      Each Splash contains about a 6-month supply for each
                      toilet. If you have multiple toilets in your house, we
                      recommend multiple Splashs. Or you can order more simply
                      for greater savings!
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <h5 className="font-bold text-xl">Quick Results</h5>
                    <p>
                      Let it sit for about 15 minutes and then flush, you don’t
                      need to wait all day.
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <h5 className="font-bold text-xl">Splash Guarantee</h5>
                    <p>
                      If you’re not satisfied, contact our customer service for
                      your money back - guaranteed!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full bg-white text-white overflow-hidden relative items-center justify-center">
          <div className="flex flex-col items-center justify-center relative w-full">
            <div className="block absolute inset-0 z-0 ">
              <Image
                src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/bc602e1a-6bf1-4f12-aa27-6c7a5bbd0200/public"
                alt="background"
                fill
                className="w-full h-full object-cover object-right-bottom opacity-50 md:opacity-100"
                priority
              />
            </div>
            <div className="flex w-full z-10 items-center p-2 justify-center">
              <div className="flex w-full max-w-[1000px] px-4">
                <div className="flex flex-col items-start text-left bg-white/20 rounded-full text-black w-full md:w-1/2 pb-8">
                  <h3 className="text-2xl sm:text-2xl lg:text-3xl  mb-8 text-black font-bold mt-12 ">
                    Invented and Patented in the United States of America
                  </h3>
                  <p className="mb-4">
                    When you put your trust in Splash, you can rest assured that
                    you are choosing a product that is fully tested by the
                    highest standards in the USA.{" "}
                  </p>
                  <p className="mb-8">
                    Our rigorous testing procedures guarantee that our consumers
                    receive only the top-level standard in production in
                    certified American facilities.
                  </p>
                  <Image
                    src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/8be12a65-34a9-4cfa-bafd-4c9320366700/public"
                    alt="Quality Badge"
                    width={130}
                    height={130}
                  />
                </div>
                <div className="hidden md:flex w-full md:w-1/2 justify-center items-center">
                  <Image
                    src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/d3b8766b-f39b-470e-3b14-742c855e4a00/public"
                    alt="Foamy Cleaner product"
                    className="object-scale-down mt-6"
                    width={450}
                    height={450}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* How to Use Section */}
        <div className="bg-gray-100 py-12 flex w-full">
          <div className="flex flex-col items-center  mx-auto px-4 max-w-[900px] font-bold">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center mb-8 ">
              How to Use
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[400px] sm:max-w-[900px]">
              <div className="text-center">
                <img
                  src={info.splitcompare.step1Img}
                  alt="Step 1"
                  className="w-full mb-4 rounded-lg"
                />
                <p className="text-lg">{info.splitcompare.step1Title}</p>
              </div>
              <div className="text-center">
                <img
                  src={info.splitcompare.step2Img}
                  alt="Step 2"
                  className="w-full mb-4 rounded-lg"
                />
                <p className="text-lg">{info.splitcompare.step2Title}</p>
              </div>
              <div className="text-center">
                <img
                  src={info.splitcompare.step3Img}
                  alt="Step 3"
                  className="w-full mb-4 rounded-lg"
                />
                <p className="text-lg">{info.splitcompare.step3Title}</p>
              </div>
            </div>
            <div className="text-center mt-8 w-full justify-center flex">
              <a
                className="bg-[#0fd13d] border-b-[2px] border-b-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded w-full flex justify-center items-center max-w-[400px] text-[18px]"
                href={info.cta}
              >
                GET 50% DISCOUNT NOW
              </a>
            </div>
          </div>
        </div>
        {/* Hands-Free Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-12 flex flex-col md:flex-row items-center justify-center px-6 w-full">
          <div className="flex flex-col w-full max-w-[1000px] md:flex-row items-center justify-center">
            <div className="flex w-full md:w-1/2 justify-center items-center px-4">
              <Image
                src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/07edd6ad-d9f4-4f04-4411-8116a0fd4400/public"
                alt="Hands Free"
                width={500}
                height={500}
              />
            </div>
            <div className="flex flex-col w-full md:w-1/2 items-center justify-center md:items-start px-4">
              <h4 className="text-xl md:text-3xl font-bold my-4 text-center md:text-left">
                Hands-free Toilet Cleaning Action
              </h4>
              <p className="pb-4">
                We know that cleaning a toilet is uncomfortable on top of
                disgusting. No one enjoys bending down to scrub.
              </p>
              <p className="pb-8">
                That’s what makes Splash so great. You don’t even need hands to
                have a clean toilet! Unless your toilet is deeply stained, in
                which case you might need a quick brush, Splash will take care
                of your toilet like it’s your own personal toilet cleaning
                janitor!
              </p>
              <a
                className="bg-[#0fd13d] border-b-[2px] border-b-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded w-full flex justify-center items-center max-w-[400px] text-[18px]"
                href={info.cta}
              >
                GET SPLASH NOW
              </a>
            </div>
          </div>
        </div>
        {/* How to Use Section */}
        <div className="bg-gray-100 py-12 flex w-full">
          <div className="flex flex-col items-center  mx-auto px-4 max-w-[900px] font-bold">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center mb-8 ">
              Are You Still Using Nauseating Methods?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[400px] sm:max-w-[900px]">
              <div className="text-center">
                <img
                  src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/8ccb7eb5-6379-4125-c72d-e8bfcfdb4c00/public"
                  alt="Step 1"
                  className="w-full mb-4 rounded-lg"
                />
                <p className="text-lg fong-bold">
                  {info.splitcompare.step1Title}
                </p>
                <p className="text-lg font-normal">
                  With sponges you risk getting disgusting toilet water on your
                  skin and even in your eyes
                </p>
              </div>
              <div className="text-center">
                <img
                  src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/1ed24647-09f5-41e2-36a5-56199b5c7100/public"
                  alt="Step 2"
                  className="w-full mb-4 rounded-lg"
                />
                <p className="text-lg">Liquid Toilet Cleaner</p>
                <p className="text-lg font-normal">
                  Notoriously ineffective, liquid toilet cleaner is
                  un-concentrated and just looks nice without doing real work.
                </p>
              </div>
              <div className="text-center">
                <img
                  src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/a84a3050-a83a-404e-5f26-06b87fa2db00/public"
                  alt="Step 3"
                  className="w-full mb-4 rounded-lg"
                />
                <p className="text-lg">Bleach</p>
                <p className="text-lg font-normal">
                  Bleach is bad for you, your septic tank, and the environment,
                  not to mention lacks surfactant power.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full bg-white text-white overflow-hidden relative items-center justify-center">
          <div className="flex flex-col items-center justify-center relative w-full">
            <div className="block absolute inset-0 z-0 ">
              <Image
                src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/0f663c81-44dd-4f97-68f7-03688924e800/public"
                alt="background"
                fill
                className="w-full h-full object-cover object-right-bottom"
                priority
              />
            </div>
            <div className="flex w-full z-10 items-center p-2 justify-center">
              <div className="flex w-full max-w-[1000px] px-4">
                <div className="flex flex-col items-center md:items-start text-left  text-white w-full md:w-1/2 pb-8">
                  <h3 className="text-2xl sm:text-2xl lg:text-3xl  mb-8  font-bold mt-12 text-center ">
                    Multi-Purpose Cleaning
                  </h3>
                  <p className="mb-4">
                    Another great thing about Splash is that it’s actually a
                    wonderful multipurpose cleaner. You can use it on any
                    bathroom surface and on most kitchen surfaces!
                  </p>
                  <p className="mb-8">
                    To use it to clean surfaces other than your toilet, use as a
                    scouring paste. Simply take a scoop of Splash, put it in a
                    bowl, and then dip a damp papertowel or sponge into the
                    powder. Alternatively, you can super-charge your cleaning by
                    adding a bit of white vinegar directly into the powder until
                    it becomes a paste. (Careful, it will foam!) Hint: It works
                    great on
                  </p>
                  <a
                    className="bg-[#0fd13d] border-b-[2px] border-b-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded w-full flex justify-center items-center max-w-[400px] text-[18px]"
                    href={info.cta}
                  >
                    GET SPLASH NOW
                  </a>
                </div>
                <div className="hidden md:flex w-full md:w-1/2 justify-center items-center"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="z-20">
          <Faqs info={info} />
        </div>
        <Reviews info={info} />
        {/* CTA Section */}
        <div className="w-full font-bold bg-gradient-to-r from-blue-600 to-blue-400 text-white py-12 flex flex-col items-center px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-8 text-center">
            {info.highlights.text1}
          </h2>
          <a
            className="bg-[#0fd13d] border-b-[2px] border-b-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded w-full flex justify-center items-center max-w-[400px] text-[18px] text-center"
            href={info.cta}
          >
            GET 50% DISCOUNT NOW
          </a>
          <p className="text-2xl mt-8 text-center">{info.highlights.text2}</p>
        </div>
        <div className="flex w-full bg-gray-50 text-[14px] text-center py-4 px-4 justify-center">
          <div className="flex w-full max-w-[1200px] justify-center items-center">
            {info.highlights.text3}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesSimple;
