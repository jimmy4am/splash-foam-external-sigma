import React from "react";
import { Post } from "@/interfaces/post";
import Image from "next/image";
import markdownStyles from "./markdown-styles.module.css";
import StickyCta from "./advertorial-stickycta";
import FbReview from "./advertorial-fb-review";

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

const AdvetorialBody4 = ({
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
          <div className="flex flex-col w-full py-4">
            {post.product1.fb_reviews?.name1 && (
              <FbReview
                name={post.product1.fb_reviews.name1}
                city={post.product1.fb_reviews.city1}
                text={post.product1.fb_reviews.text1}
                image={post.product1.fb_reviews.image1}
                upvotes={post.product1.fb_reviews.upvotes1}
                time={post.product1.fb_reviews.time1}
              />
            )}
            {post.product1.fb_reviews?.name2 && (
              <FbReview
                name={post.product1.fb_reviews.name2}
                city={post.product1.fb_reviews.city2}
                text={post.product1.fb_reviews.text2}
                image={post.product1.fb_reviews.image2}
                upvotes={post.product1.fb_reviews.upvotes2}
                time={post.product1.fb_reviews.time2}
              />
            )}
            {post.product1.fb_reviews?.name3 && (
              <FbReview
                name={post.product1.fb_reviews.name3}
                city={post.product1.fb_reviews.city3}
                text={post.product1.fb_reviews.text3}
                image={post.product1.fb_reviews.image3}
                upvotes={post.product1.fb_reviews.upvotes3}
                time={post.product1.fb_reviews.time3}
              />
            )}
            {post.product1.fb_reviews?.name4 && (
              <FbReview
                name={post.product1.fb_reviews.name4}
                city={post.product1.fb_reviews.city4}
                text={post.product1.fb_reviews.text4}
                image={post.product1.fb_reviews.image4}
                upvotes={post.product1.fb_reviews.upvotes4}
                time={post.product1.fb_reviews.time4}
              />
            )}
            {post.product1.fb_reviews?.name5 && (
              <FbReview
                name={post.product1.fb_reviews.name5}
                city={post.product1.fb_reviews.city5}
                text={post.product1.fb_reviews.text5}
                image={post.product1.fb_reviews.image5}
                upvotes={post.product1.fb_reviews.upvotes5}
                time={post.product1.fb_reviews.time5}
              />
            )}
            {post.product1.fb_reviews?.name6 && (
              <FbReview
                name={post.product1.fb_reviews.name6}
                city={post.product1.fb_reviews.city6}
                text={post.product1.fb_reviews.text6}
                image={post.product1.fb_reviews.image6}
                upvotes={post.product1.fb_reviews.upvotes6}
                time={post.product1.fb_reviews.time6}
              />
            )}
            {post.product1.fb_reviews?.name7 && (
              <FbReview
                name={post.product1.fb_reviews.name7}
                city={post.product1.fb_reviews.city7}
                text={post.product1.fb_reviews.text7}
                image={post.product1.fb_reviews.image7}
                upvotes={post.product1.fb_reviews.upvotes7}
                time={post.product1.fb_reviews.time7}
              />
            )}
            {post.product1.fb_reviews?.name8 && (
              <FbReview
                name={post.product1.fb_reviews.name8}
                city={post.product1.fb_reviews.city8}
                text={post.product1.fb_reviews.text8}
                image={post.product1.fb_reviews.image8}
                upvotes={post.product1.fb_reviews.upvotes8}
                time={post.product1.fb_reviews.time8}
              />
            )}
            {post.product1.fb_reviews?.name9 && (
              <FbReview
                name={post.product1.fb_reviews.name9}
                city={post.product1.fb_reviews.city9}
                text={post.product1.fb_reviews.text9}
                image={post.product1.fb_reviews.image9}
                upvotes={post.product1.fb_reviews.upvotes9}
                time={post.product1.fb_reviews.time9}
              />
            )}
            {post.product1.fb_reviews?.name10 && (
              <FbReview
                name={post.product1.fb_reviews.name10}
                city={post.product1.fb_reviews.city10}
                text={post.product1.fb_reviews.text10}
                image={post.product1.fb_reviews.image10}
                upvotes={post.product1.fb_reviews.upvotes10}
                time={post.product1.fb_reviews.time10}
              />
            )}
          </div>{" "}
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

export default AdvetorialBody4;
