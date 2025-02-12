import React, { useEffect, useState } from "react";
import { Inter, Red_Hat_Display } from "next/font/google";
import Image from "next/image";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkBreaks from "remark-breaks";
import remarkHtml from "remark-html";

import { ReviewPostType } from "@/interfaces/reviewPost";
import ReviewCard from "@/app/_components/review/review-5/review-body/review-card";
import { getPoints, getReviewsData } from "@/app/_components/review/review-5/review-body/utils";
import { ReviewCardType } from "@/app/_components/review/review-5/review-body/types";
import markdownStyles from "@/app/_components/review/review-5/markdown-styles.module.css";
import AppButton from "@/app/_components/review/review-5/_components/app-button";

const redHatDisplay = Red_Hat_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

type Props = {
  post: ReviewPostType;
  showFullArticle?: boolean;
};

const ReviewBody = ({ post, showFullArticle = false }: Props) => {
  const data: ReviewCardType[] = getReviewsData(post);
  const [introContent, setIntroContent] = useState("");
  const [articleContent, setArticleContent] = useState("");

  useEffect(() => {
    const processMarkdown = async () => {
      const file = await unified()
        .use(remarkParse) // Use the remark parser
        .use(remarkBreaks) // Handle line breaks
        .use(remarkHtml) // Convert to HTML
        .process(post.intro); // Process the markdown content

      setIntroContent(String(file));

      const file2 = await unified()
        .use(remarkParse)
        .use(remarkHtml)
        .process(post.article);
      setArticleContent(String(file2));
      // Set the HTML content in the state
    };

    processMarkdown();
  }, [post.intro]); // Dependency array for the effect

  return (
    <section className={`p-[30px_0_35px] md:p-[40px_0_70px] ${inter.className}`}>
      <div className="w-full max-w-[1200px] mx-[auto] px-4">
        <h2 className={`mb-[12px] lg:mb-[18px] text-[30px] lg:text-[38px] leading-[36px] lg:leading-[46px] font-black text-[#1a5d95] ${redHatDisplay.className}`}>Here Is Our Top GLP Providers Listed</h2>
        <p className="text-[16px] lg:text-[17px] leading-[24px] lg:leading-[25px]">Maecenas nec odio et ante tincidunt tempus donec vitae sapien ut libero </p>
        <div className="flex flex-col gap-[30px] mt-[60px] md:mt-[80px]">
          {data.map((item: ReviewCardType, idx: number) => (
            <ReviewCard
              key={item.cta}
              number={idx + 1}
              name={item.name}
              image={item.image}
              text={item.text}
              rating={item.rating}
              cta={item.cta}
              specialCta={item.specialCta}
            />
          ))}
        </div>
        {showFullArticle ? (
          <div className="md:flex md:justify-between p-[20px_0_0] md:p-[60px_0_0]">
            <div className="md:flex-[0_0_62%] lg:flex-[0_0_64%] mb-[25px] md:mb-[0px]">
              <div
                className={markdownStyles["markdown"]}
                dangerouslySetInnerHTML={{ __html: introContent }}
              />
              <div
                className={markdownStyles["markdown"]}
                dangerouslySetInnerHTML={{ __html: articleContent }}
              />
            </div>

            <div className="md:flex-[0_0_31%]">
              <div className="m-[0_0_40px] md:m-[0_0_45px] p-[20px_15px_25px] lg:p-[20px_22px_25px] bg-[#fff] rounded-[10px] shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
                <h3 className="mb-[15px] text-[22px] lg:text-[26px] leading-[28px] lg:leading-[30px] font-bold">Our Rating System</h3>
                <p className="mb-[10px] text-[15px] lg:text-[14px] leading-[22px] tracking-[0.3px]">Lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Namnec tellus a odio tincidunt</p>
                <ul>
                  <li className="flex gap-[14px]"><span className="w-[7px] h-[7px] mt-[8px] rounded-[50%] bg-[#1b7dd8]"></span>Duissed odio sit amet nibh vulputate</li>
                  <li className="flex gap-[14px]"><span className="w-[7px] h-[7px] mt-[8px] rounded-[50%] bg-[#1b7dd8]"></span>Morbi accumsan ipsum velit</li>
                  <li className="flex gap-[14px]"><span className="w-[7px] h-[7px] mt-[8px] rounded-[50%] bg-[#1b7dd8]"></span>Namnec tellus a odio tincidunt auctor</li>
                  <li className="flex gap-[14px]"><span className="w-[7px] h-[7px] mt-[8px] rounded-[50%] bg-[#1b7dd8]"></span>Sednon mauris vitae erat consequat</li>
                  <li className="flex gap-[14px]"><span className="w-[7px] h-[7px] mt-[8px] rounded-[50%] bg-[#1b7dd8]"></span>Duissed odio sit amet nibh vulputate</li>
                  <li className="flex gap-[14px]"><span className="w-[7px] h-[7px] mt-[8px] rounded-[50%] bg-[#1b7dd8]"></span>Morbi accumsan ipsum velit</li>
                </ul>
              </div>

              <div className="relative md:sticky md:top-[100px] bg-[#fff] border-[3px] border-[#1b7dd8] rounded-[10px] shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
                <div className="absolute top-[15px] -left-[14px] flex items-center h-[42px] p-[0_28px_0_22px] bg-[#1b7dd8] text-[17px] lg:text-[22px] leading-[20px] lg:leading-[22px] text-[#fff] font-bold">
                  <span className="absolute left-[0px] -bottom-[12px] border-t-[12px] border-t-[#1160aa] border-l-[12px] border-l-[transparent]"></span>
                  Editor Choice 2025
                  <span className="absolute -right-[17px] flex -rotate-90 w-0 h-0 border-[21px] border-b-[#fff] border-t-[0px] border-b-[8px] border-[transparent]"></span>
                </div>
                <div className="p-[80px_20px_25px] rounded-[10px_10px_0_0]">
                  <Image
                    src={post.product1.logo as string}
                    width={328}
                    height={148}
                    alt="Top seal"
                    className="max-w-[188px] mx-[auto] mb-[25px]"
                  />
                  <div className="text-center">
                    <span className="text-[15px] leading-[15px] font-semibold">Excellent</span>
                    <span className="inline-flex mx-[6px] p-[10px_8px] bg-[#1b7dd8] rounded-[2px] text-[16px] leading-[16px] text-[#fff] font-bold">{post.product1.rating}</span>
                    <span className="text-[11px] leading-[15px] text-[#636363]">Based on 147 reviews</span>
                  </div>
                </div>
                <div className="flex flex-col items-center p-[20px_15px_30px] lg:p-[20px_20px_30px] bg-[#f9f9f9] rounded-[0_0_10px_10px]">
                  <ul className="flex flex-col gap-[8px] mb-[20px]">
                    {getPoints(post.product1).map((el) => (
                      <li key={el} className="flex items-start gap-[10px] text-[15px] lg:text-[16px] leading-[20px]">
                        <Image
                          src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/f78a7475-4711-4fef-6bb4-5f430844a600/public"
                          width={30}
                          height={30}
                          alt="Check icon"
                          className="w-[14px] md:w-[12px] lg:w-[17px] mt-[2px] md:mt-[3px] lg:mt-[4px]"
                        />
                        {el}
                      </li>
                    ))}
                  </ul>
                  <AppButton classes="w-full max-w-[196px]" url={post.product1.cta} target="_blank">Visit</AppButton>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default ReviewBody;