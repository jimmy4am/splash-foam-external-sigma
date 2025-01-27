import React from "react";
import { Post } from "@/interfaces/post";
import Image from "next/image";
import markdownStyles from "./markdown-styles.module.css";
import StickyCta from "./advertorial-stickycta";

type Props = {
  post: Post;
  content: string;
  serverDate: string;
  serverDayDate: string;
};

type Props2 = {
  name: string;
  location: string;
  text: string;
  image: string;
};

const IndivReview = ({ name, location, text, image }: Props2) => {
  return (
    <>
      <div className="max-h-[200px] flex aspect-square mt-6">
        <Image
          src={image}
          width={350}
          height={350}
          alt={name}
          className="w-full rounded-full border-2 border-white z-20 object-cover"
        />
      </div>
      <div className="bg-[url('https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/3fafebec-09d3-4d87-0b68-34761c120e00/public')] w-full h-[80px] mt-[-40px] mb-[-10px] bg-center bg-fit flex justify-center items-center z-10" />
      <div className="bg-blue-100/80 shadow-xl w-full p-4 flex flex-col items-center rounded-md px-6 mb-6">
        <h5 className="py-2 font-bold text-xl uppercase">{name}</h5>
        <p className=" font-bold text-gray-500 uppercase">{location}</p>
        <p className="py-2 text-center text-gray-800">{text}</p>
      </div>
    </>
  );
};

const AdvetorialBody3 = ({
  post,
  content,
  serverDate,
  serverDayDate,
}: Props) => {
  return (
    <div className="flex w-full justify-center md:p-4 bg-blue-100/70 md:pb-8">
      <div className="flex w-full max-w-[1250px] justify-start items-start py-8 bg-white md:rounded-md flex-wrap md:px-8">
        <div className="flex flex-1 flex-col justify-start items-center px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-left w-full pt-2 sm:pt-4 pb-4 sm:pb-8 ">
            {post.title}
          </h1>

          <div className="flex sm:hidden w-full justify-start flew-wrap items-center pb-4 text-[12px] text-[#aaa]">
            <p suppressHydrationWarning>
              {serverDayDate} |
              <span className="uppercase font-bold px-2">
                {post.author.name}
              </span>
            </p>
          </div>
          <div className="bg-[#ddd] rounded-md overflow-hidden">
            <a href={post.product1.cta} className="w-full">
              <Image
                src={post.coverImage}
                width={1200}
                height={600}
                alt="Cover Image"
                className="rounded-md"
                priority
              />
            </a>
          </div>

          <div className="hidden sm:flex w-full justify-center flew-wrap items-center py-4 text-[#777]">
            <p suppressHydrationWarning>
              Written By:
              <span className="uppercase font-bold px-2">
                {post.author.name}
              </span>
              on {serverDayDate}
            </p>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: post.intro || "" }}
            className={markdownStyles["markdown"]}
          />
          <div className="flex w-full p-4 bg-[#ddd]">
            <div
              dangerouslySetInnerHTML={{ __html: post.story || "" }}
              className={markdownStyles["markdown"]}
            />
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: content }}
            className={markdownStyles["markdown"]}
          />
          <div className="flex flex-col w-full justify-start rounded-md oveow-hidden bg-yellow-100">
            <div className="bg-[#459ef7] uppercase font-bold text-white text-[20px] py-4 px-2 ">
              Update
            </div>
            <div className="px-2 py-4">
              As of <span className="font-bold">{serverDate}</span>,{" "}
              {post.urgent}
            </div>
          </div>

          <p className="flex justify-start w-full text-left font-bold mt-6 text-[20px]">
            To see if they are still available and in stock, click on the button
            below.
          </p>

          <a
            href={post.product1.cta}
            className="w-full bg-green-600 rounded-md text-white font-bold  text-2xl py-4 px-4 mt-6 hover:bg-green-500 flex justify-center items-center text-center cursor-pointer"
            id="final-button"
          >
            {(post.product1.ctaText && <>{post.product1.ctaText}</>) || (
              <>
                Apply Discount &amp; <br className="sm:hidden" /> Check
                Availablity &gt;
              </>
            )}
          </a>
        </div>
        <div className="w-full xl:flex xl:w-[350px] flex-col justify-start items-center px-4 xl:h-full ">
          <div className="mt-32 flex xl:hidden w-full justify-center items-center bg-[#ddd] h-1" />
          <div className="flex w-full py-4 ">
            <div className="flex flex-col w-2/3 px-2">
              <h3 className="text-xl font-bold">About the Author</h3>
              <h3 className="text-2xl pt-2">{post.author.name}</h3>
              <p className="py-2">{post.author.bio}</p>
            </div>
            <div className="flex flex-col w-1/3 px-2 justify-center items-center">
              <Image
                src={post.author.picture}
                width={100}
                height={100}
                alt="Author Picture"
                className="rounded-full"
              />
            </div>
          </div>
          <div className="flex w-full justify-center items-center bg-[#ddd] h-1" />
          <div className="flex flex-col py-4 xl:sticky top-0  max-w-full">
            <div className="flex flex-col">
              <div className="hidden lg:flex flex-col pb-4 items-center">
                <h4 className="font-bold text-xl pb-6">{post.product}</h4>
                <Image
                  src={post.product1.image}
                  width={350}
                  height={350}
                  alt={post.product1.name}
                  className="max-h-[300px] object-contain"
                />
                <a
                  href={post.product1.cta}
                  className="w-full bg-green-600 rounded-md text-white font-bold  py-2 px-4 mt-6 hover:bg-green-500 flex justify-center items-center text-center cursor-pointer"
                >
                  Check Availablity &gt;
                </a>
              </div>

              {post.product1?.reviews?.name1 && (
                <div className="flex flex-col py-4 items-center">
                  <div className="hidden lg:flex w-full justify-center items-center bg-[#ddd] h-1" />
                  <h4 className="font-bold text-xl py-6 w-full text-left">
                    Customer Reviews
                  </h4>
                  <>
                    <Image
                      src={post.product1.reviews.image1}
                      width={350}
                      height={350}
                      alt={post.product1.reviews.name1}
                      className="max-h-[300px] object-contain"
                    />
                    <p className="py-2 italic">{post.product1.reviews.text1}</p>
                    <h5 className="py-2 font-bold text-xl">
                      {post.product1.reviews.name1}
                    </h5>
                    <p className=" font-bold">
                      {post.product1.reviews.location1}
                    </p>
                  </>
                  {post.product1?.reviews?.name2 && (
                    <>
                      <Image
                        src={post.product1.reviews.image2}
                        width={350}
                        height={350}
                        alt={post.product1.reviews.name2}
                        className="max-h-[300px] object-contain mt-16"
                      />
                      <p className="py-2 italic">
                        {post.product1.reviews.text2}
                      </p>
                      <h5 className="py-2 font-bold text-xl">
                        {post.product1.reviews.name2}
                      </h5>
                      <p className=" font-bold">
                        {post.product1.reviews.location2}
                      </p>
                    </>
                  )}
                  {post.product1?.reviews?.name3 && (
                    <>
                      <Image
                        src={post.product1.reviews.image3}
                        width={350}
                        height={350}
                        alt={post.product1.reviews.name3}
                        className="max-h-[300px] object-contain mt-16"
                      />
                      <p className="py-2 italic">
                        {post.product1.reviews.text3}
                      </p>
                      <h5 className="py-2 font-bold text-xl">
                        {post.product1.reviews.name3}
                      </h5>
                      <p className=" font-bold">
                        {post.product1.reviews.location3}
                      </p>
                    </>
                  )}
                  {post.product1?.reviews?.name4 && (
                    <>
                      <Image
                        src={post.product1.reviews.image4!}
                        width={350}
                        height={350}
                        alt={post.product1.reviews.name4}
                        className="max-h-[300px] object-contain mt-16"
                      />
                      <p className="py-2 italic">
                        {post.product1.reviews.text4}
                      </p>
                      <h5 className="py-2 font-bold text-xl">
                        {post.product1.reviews.name4}
                      </h5>
                      <p className=" font-bold">
                        {post.product1.reviews.location4}
                      </p>
                    </>
                  )}
                  {post.product1?.reviews?.name5 && (
                    <>
                      <Image
                        src={post.product1.reviews.image5!}
                        width={350}
                        height={350}
                        alt={post.product1.reviews.name5}
                        className="max-h-[300px] object-contain mt-16"
                      />
                      <p className="py-2 italic">
                        {post.product1.reviews.text5}
                      </p>
                      <h5 className="py-2 font-bold text-xl">
                        {post.product1.reviews.name5}
                      </h5>
                      <p className=" font-bold">
                        {post.product1.reviews.location5}
                      </p>
                    </>
                  )}
                  <div className="flex w-full justify-center items-center bg-[#ddd] h-1 mt-6 mb-6 lg:hidden" />
                  <div className="flex lg:hidden flex-col pb-4 items-center">
                    <h4 className="font-bold text-xl pb-6">{post.product}</h4>
                    <Image
                      src={post.product1.image}
                      width={350}
                      height={350}
                      alt={post.product1.name}
                      className="max-h-[300px] object-contain"
                    />
                    <a
                      href={post.product1.cta}
                      className="w-full bg-green-600 rounded-md text-white font-bold  py-2 px-4 mt-6 hover:bg-green-500 flex justify-center items-center text-center cursor-pointer"
                    >
                      Check Availablity &gt;
                    </a>
                  </div>
                  <div className="flex w-full justify-center items-center bg-[#ddd] h-1 mt-6 mb-6 lg:hidden" />
                </div>
              )}
            </div>
          </div>
        </div>

        <StickyCta cta={post.product1.cta} />
      </div>
    </div>
  );
};

export default AdvetorialBody3;
