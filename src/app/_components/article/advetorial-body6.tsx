// HH template

import React from "react";
import { Post } from "@/interfaces/post";
import Image from "next/image";
import markdownStyles from "./markdown-styles-hh.module.css";
import StickyCta from "./advertorial-stickycta-hh";
import { EB_Garamond, Montserrat } from "next/font/google";

const eb_garamond = EB_Garamond({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

type Props = {
  post: Post;
  content: string;
  serverDate: string;
  serverDayDate: string;
};
type Props2 = {
  name: string;
  text: string;
};

const IndivReviewHH = ({ name, text }: Props2) => {
  return (
    <div className="flex flex-col items-center mt-6 mb-8 text-center">
      <p className="text-[20px] mb-6">⭐⭐⭐⭐⭐</p>
      <p className={`${montserrat.className} text-[17px] text-[#2a555a]`}>
        <span className="italic font-[600]">&quot;{text}&quot;</span> -{" "}
        <span className="font-bold">{name}</span>
      </p>
    </div>
  );
};

const AdvetorialBody6 = ({
  post,
  content,
  serverDate,
  serverDayDate,
}: Props) => {
  return (
    <div className="flex w-full justify-center md:px-4 bg-[#f6f4f0] md:pb-8">
      <div className="flex w-full max-w-[1100px] justify-start items-start   md:rounded-md flex-wrap md:px-8">
        <div className="flex flex-1 flex-col justify-start items-center px-4">
          <h1
            className={`text-[36px] md:text-[55px] font-bold text-center w-full   pb-4 sm:pb-8 ${eb_garamond.className} leading-tight text-[#2a555a]`}
          >
            {post.title}
          </h1>
          <div className="bg-[#ddd] rounded-md overflow-hidden">
            <Image
              src={post.coverImage}
              width={1200}
              height={600}
              alt="Cover Image"
              className="rounded-md"
              priority
            />
          </div>
          <div className="flex w-full max-w-[800px] flex-col items-center">
            <h3
              className={`font-bold leading-tight text-[#2a555a] text-center text-[24px] py-6 ${eb_garamond.className}`}
            >
              Over {post.product1.reviewNum}+ ⭐⭐⭐⭐⭐ 5-Star Reviews &
              Counting
            </h3>
            <p
              className={`text-[17px]  ${montserrat.className} text-[#7a7a7a] text-center`}
            >
              Ads Seen On
            </p>
            <div className="flex w-full max-w-full">
              <Image
                src={
                  post.product1?.newsImages?.image1 ||
                  "https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/c27833e9-50ef-440e-c34e-b158e85df500/public"
                }
                width={200}
                height={100}
                alt={post.product1?.newsImages?.site1 || "Fox News"}
                className="w-1/4 object-scale-down p-1 lg:p-2"
              />
              <Image
                src={
                  post.product1?.newsImages?.image2 ||
                  "https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/7fc7799e-cbaa-4f9f-21d8-514ecb29b300/public"
                }
                width={200}
                height={100}
                alt={post.product1?.newsImages?.site2 || "Good Housekeeping"}
                className="w-1/4 object-scale-down p-1 lg:p-2"
              />
              <Image
                src={
                  post.product1?.newsImages?.image3 ||
                  "https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/5c153f53-e3b2-4c5d-a319-cbcf96ab2e00/public"
                }
                width={200}
                height={100}
                alt={post.product1?.newsImages?.site3 || "Martha Stewart"}
                className="w-1/4 object-scale-down p-1 lg:p-2"
              />
              <Image
                src={
                  post.product1?.newsImages?.image4 ||
                  "https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/73e8ce0d-a00c-4863-411e-bb4f4f638f00/public"
                }
                width={200}
                height={100}
                alt={post.product1?.newsImages?.site4 || "The New York Times"}
                className="w-1/4 object-scale-down p-1 lg:p-2"
              />
            </div>

            <p
              className={`font-bold text-[#2a555a] text-[17px] ${montserrat.className} py-6`}
            >
              {post.bestoverall}
            </p>
          </div>
          <div
            className={`${montserrat.className} font-[600] text-[17px] text-[#2a555a]`}
          >
            <div
              dangerouslySetInnerHTML={{ __html: content }}
              className={markdownStyles["markdown"]}
            />
          </div>
          <div className="flex flex-col items-center w-full rounded-lg bg-[#e4e4e4] mb-6 overflow-hidden">
            <h4 className={`text-[42px] text-[#2a555a] p-4 w-full text-left`}>
              What Else I Love About {post.product1.name}
            </h4>
            <div className="bg-white w-full flex flex-col">
              <ul
                className={`list-disc list-inside p-4 space-y-4 text-[#2a555a] ${montserrat.className}`}
              >
                <li className="">
                  <span className="font-bold">
                    {post.product1?.sellingPoints?.title1 || "Selling Point 1"}
                  </span>{" "}
                  - {post.product1?.sellingPoints?.point1 || "Point 1"}
                </li>
                <li className="">
                  <span className="font-bold">
                    {post.product1?.sellingPoints?.title2 || "Selling Point 2"}
                  </span>{" "}
                  - {post.product1?.sellingPoints?.point2 || "Point 2"}
                </li>
                <li className="">
                  <span className="font-bold">
                    {post.product1?.sellingPoints?.title3 || "Selling Point 3"}
                  </span>{" "}
                  - {post.product1?.sellingPoints?.point3 || "Point 3"}
                </li>
                <li className="">
                  <span className="font-bold">
                    {post.product1?.sellingPoints?.title4 || "Selling Point 4"}
                  </span>{" "}
                  - {post.product1?.sellingPoints?.point4 || "Point 4"}
                </li>
                <li className="">
                  <span className="font-bold">
                    {post.product1?.sellingPoints?.title5 || "Selling Point 5"}
                  </span>{" "}
                  - {post.product1?.sellingPoints?.point5 || "Point 5"}
                </li>
                <li className="">
                  <span className="font-bold">
                    {post.product1?.sellingPoints?.title6 || "Selling Point 6"}
                  </span>{" "}
                  - {post.product1?.sellingPoints?.point6 || "Point 6"}
                </li>
                <li className="">
                  <span className="font-bold">
                    {post.product1?.sellingPoints?.title7 || "Selling Point 7"}
                  </span>{" "}
                  - {post.product1?.sellingPoints?.point7 || "Point 7"}
                </li>
                <li className="">
                  <span className="font-bold">
                    {post.product1?.sellingPoints?.title8 || "Selling Point 8"}
                  </span>{" "}
                  - {post.product1?.sellingPoints?.point8 || "Point 8"}
                </li>
              </ul>
            </div>
          </div>
          <div className="flex mb-6 w-full max-w-[800px] flex-col items-center">
            <p
              className={`text-[17px]  ${montserrat.className} text-[#7a7a7a] text-center`}
            >
              Ads Seen On
            </p>
            <div className="flex w-full max-w-full">
              <Image
                src={
                  post.product1?.newsImages?.image1 ||
                  "https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/c27833e9-50ef-440e-c34e-b158e85df500/public"
                }
                width={200}
                height={100}
                alt={post.product1?.newsImages?.site1 || "Fox News"}
                className="w-1/4 object-scale-down p-1 lg:p-2"
              />
              <Image
                src={
                  post.product1?.newsImages?.image2 ||
                  "https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/7fc7799e-cbaa-4f9f-21d8-514ecb29b300/public"
                }
                width={200}
                height={100}
                alt={post.product1?.newsImages?.site2 || "Good Housekeeping"}
                className="w-1/4 object-scale-down p-1 lg:p-2"
              />
              <Image
                src={
                  post.product1?.newsImages?.image3 ||
                  "https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/5c153f53-e3b2-4c5d-a319-cbcf96ab2e00/public"
                }
                width={200}
                height={100}
                alt={post.product1?.newsImages?.site3 || "Martha Stewart"}
                className="w-1/4 object-scale-down p-1 lg:p-2"
              />
              <Image
                src={
                  post.product1?.newsImages?.image4 ||
                  "https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/73e8ce0d-a00c-4863-411e-bb4f4f638f00/public"
                }
                width={200}
                height={100}
                alt={post.product1?.newsImages?.site4 || "The New York Times"}
                className="w-1/4 object-scale-down p-1 lg:p-2"
              />
            </div>
          </div>
          <div
            className={`${montserrat.className} font-[600] text-[17px] text-[#2a555a]`}
          >
            <div
              dangerouslySetInnerHTML={{ __html: post.story || "" }}
              className={markdownStyles["markdown"]}
            />
          </div>
          <div className="flex mt-4 flex-col w-full justify-start rounded-md overflow-hidden bg-white">
            <div className="bg-[#25ae4e] uppercase font-bold text-white text-[20px] py-4 px-2 text-center">
              Special Savings for Our Readers
            </div>
            <div className={`px-6 py-4 text-center ${montserrat.className}`}>
              As of <span className="font-bold">{serverDate}</span>,{" "}
              {post.urgent}
            </div>
          </div>
          <a
            href={post.product1.cta}
            className={`mt-12 mb-4 bg-gradient-to-b from-[#edb52f] to-[#ffb74a] w-full  shadow-lg font-bold text-[#000] border-none px-6 py-4 text-[22px] cursor-pointer rounded-md hover:text-black hover:from-yellow-500 hover:to-yellow-300 hover:underline uppercase text-center ${montserrat.className}`}
            id="final-button"
          >
            {post.product1.ctaText ||
              "Get Your Discount on " + post.product1.name}
          </a>
          <div className="flex flex-col w-full py-4">
            <h4
              className={`text-[36px] text-center w-full ${montserrat.className} pt-4 text-[#2a555a]`}
            >
              Real Reviews from Real Customers
            </h4>
            {post.product1.reviews.name1 && (
              <IndivReviewHH
                name={post.product1.reviews.name1}
                text={post.product1.reviews.text1}
              />
            )}
            {post.product1.reviews.name2 && (
              <IndivReviewHH
                name={post.product1.reviews.name2}
                text={post.product1.reviews.text2}
              />
            )}
            {post.product1.reviews.name3 && (
              <IndivReviewHH
                name={post.product1.reviews.name3}
                text={post.product1.reviews.text3}
              />
            )}
            {post.product1.reviews.name4 && (
              <IndivReviewHH
                name={post.product1.reviews.name4}
                text={post.product1.reviews.text4 || ""}
              />
            )}
            {post.product1.reviews.name5 && (
              <IndivReviewHH
                name={post.product1.reviews.name5}
                text={post.product1.reviews.text5 || ""}
              />
            )}
            <a
              href={post.product1.cta}
              className={`mt-8 bg-gradient-to-b from-[#edb52f] to-[#ffb74a] w-full  shadow-lg font-bold text-[#000] border-none px-6 py-4 text-[22px] cursor-pointer rounded-md hover:text-black hover:from-yellow-500 hover:to-yellow-300 hover:underline uppercase text-center ${montserrat.className}`}
              id="final-button"
            >
              Get Your Discount on {post.product1.name} Today!
            </a>
          </div>{" "}
          <div
            className={`flex flex-col items-center w-full py-4 border-t-[1px] border-[#333] mt-12 `}
          >
            <h5
              className={`text-[36px] text-center w-full ${montserrat.className} pt-4 text-[#2a555a]`}
            >
              Explore Tomorrow&apos;s Top Products
            </h5>
            <p className="text-center text-[#2a555a] mt-2">
              The House Huddle is a{" "}
              <span className="font-bold">100% free email newsletter</span>.
              Join our over <span className="font-bold">50,000+ readers</span>{" "}
              as we showcase innovative and life-changing products. Subscribe to
              unlock exclusive deals & discounts!
            </p>
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-white text-black rounded-full w-full max-w-[300px] text-center text-[17px] font-bold py-2 px-4 mt-6"
            />
            <button className="bg-[#25ae4e] text-white font-bold py-2 px-4 rounded-full w-full max-w-[300px] mt-6">
              Subscribe
            </button>
            <h5
              className={`text-[36px] text-center  mt-12 w-full ${montserrat.className} pt-4 text-[#2a555a]`}
            >
              Our Guiding Principles
            </h5>
            <div className="flex flex-wrap w-full">
              <div className="w-full sm:w-1/2 xl:w-1/4 p-2 flex flex-col items-center text-center">
                <Image
                  src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/d240bb90-d3d9-4c29-0adb-503b58ee4f00/public"
                  width={75}
                  height={75}
                  alt="Be Trustworthy"
                />
                <p className="text-[#2a555a] text-[17px] font-bold">
                  Be Trustworthy
                </p>
                <p className="text-[#2a555a]">
                  Our team members carefully review every product and feature to
                  make sure we only bring you the best.
                </p>
              </div>

              <div className="w-full sm:w-1/2 xl:w-1/4 p-2 flex flex-col items-center text-center">
                <Image
                  src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/7f46e0c4-bf2d-410f-7bf0-ed75b945ea00/public"
                  width={75}
                  height={75}
                  alt="Save You Time"
                />
                <p className="text-[#2a555a] text-[17px] font-bold">
                  Save You Time
                </p>
                <p className="text-[#2a555a]">
                  We put in the work so you can save both time and money. Never
                  buy a shoddy product again.
                </p>
              </div>
              <div className="w-full sm:w-1/2 xl:w-1/4 p-2 flex flex-col items-center text-center">
                <Image
                  src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/d240bb90-d3d9-4c29-0adb-503b58ee4f00/public"
                  width={75}
                  height={75}
                  alt="Provide Discounts"
                />
                <p className="text-[#2a555a] text-[17px] font-bold">
                  Provide Discounts
                </p>
                <p className="text-[#2a555a]">
                  We work directly with brands to bring you the best possible
                  price, exclusive deals, and discounts.
                </p>
              </div>
              <div className="w-full sm:w-1/2 xl:w-1/4 p-2 flex flex-col items-center text-center">
                <Image
                  src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/322f763e-face-4ac7-25a8-2ecca0883200/public"
                  width={75}
                  height={75}
                  alt="Be Responsive"
                />
                <p className="text-[#2a555a] text-[17px] font-bold">
                  Be Responsive
                </p>
                <p className="text-[#2a555a]">
                  Customer service is the heart that pumps trust into every
                  business relationship. We strive to be the best.
                </p>
              </div>
            </div>
          </div>
        </div>

        <StickyCta cta={post.product1.cta} />
      </div>
    </div>
  );
};

export default AdvetorialBody6;
