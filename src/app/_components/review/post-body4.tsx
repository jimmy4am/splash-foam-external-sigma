import { useEffect, useState } from "react";
import markdownStyles from "./markdown-styles.module.css";
import { ReviewPostType } from "@/interfaces/reviewPost";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";
import remarkBreaks from "remark-breaks"; // import remark-breaks
import Link from "next/link";
import Image from "next/image";
import Product3 from "./product3";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import ProductPop from "./product-pop";
import Rating from "./rating";
import Top3Banner from "./top3-banner";
import ProductReview from "./product-review";
import SingleReviewsSidebar from "./single-reviews-sidebar";
import { useRouter, usePathname } from "next/navigation";

type Props = {
  content: ReviewPostType;
};

const PostBody4 = ({ content }: Props) => {
  const router = useRouter();
  const path = usePathname();

  const [introContent, setIntroContent] = useState("");
  const [articleContent, setArticleContent] = useState("");
  const [show5, setShow5] = useState(false);

  useEffect(() => {
    const processMarkdown = async () => {
      const file = await unified()
        .use(remarkParse) // Use the remark parser
        .use(remarkBreaks) // Handle line breaks
        .use(remarkHtml) // Convert to HTML
        .process(content.intro); // Process the markdown content

      setIntroContent(String(file));

      const file2 = await unified()
        .use(remarkParse)
        .use(remarkHtml)
        .process(content.article);
      setArticleContent(String(file2));
      // Set the HTML content in the state
    };

    processMarkdown();
  }, [content.intro]); // Dependency array for the effect

  return (
    <div className="flex flex-col w-full max-w-[1200px] px-2 md:px-6 mx-auto text-[20px] py-6 pb-32">
      {/* <ProductPop product={content.product1} /> */}
      <Top3Banner content={content} />

      <div className="flex w-full">
        <div className="flex flex-col flex-1 w-full xl:pr-4 ">
          <div>
            <div
              className={markdownStyles["markdown"]}
              dangerouslySetInnerHTML={{ __html: introContent }}
            />
            <Product3 product={content.product1} productNumber="1" />
            <Product3 product={content.product2} productNumber="2" />
            <Product3 product={content.product3} productNumber="3" />

            <Product3 product={content.product4} productNumber="4" />
            <Product3 product={content.product5} productNumber="5" />
            {/* <Product product={content.product6} productNumber="6" /> */}

            <div className="bg-[#d9d8d8] h-[2px] w-full mt-12 mb-10 flex justify-center"></div>

            <div className="flew flex-col w-full  shadow-black ">
              <h3 className="text-[18px] font-bold mb-[-40px] pb-4 md:pb-0">
                <span className="text-blue-700">Top 6</span> - Our #1 Pick
              </h3>
              <Product3 product={content.product1} productNumber="1" />
              <div className="bg-[#d9d8d8] h-[2px] w-full mt-12 mb-10 flex justify-center"></div>
              <div className="flex w-full items-center bg-[#eee] px-6 py-4 mb-4 flex-wrap">
                <Image
                  src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/392612fc-a13b-43dc-369d-38a0a0648300/public"
                  width={200}
                  height={200}
                  alt="Top 6 Logo"
                  className="w-full px-8 py-2 md:w-auto"
                />
                <p className="text-[16px] font-thin pl-6 w-full md:w-auto text-center md:text-left">
                  We Find the Best Products or Services so You Only Buy the Best
                </p>
              </div>
            </div>
          </div>

          <div className="w-full px-4">
            <div
              className={markdownStyles["markdown"]}
              dangerouslySetInnerHTML={{ __html: articleContent }}
            />

            <div className="w-full text-[28px] font-bold text-left justify-start mt-20 mb-[-20px] underline">
              Our #1 Pick
            </div>
            <Product3 product={content.product1} productNumber="1" />
          </div>
        </div>
        <div className="hidden xl:block w-[300px] pl-4">
          {content.blogs?.blog1 && (
            <div className="flex flex-col w-full bg-[#eee] px-2 py-4 mt-8">
              <h3 className="text-[16px]   px-2">Related Articles</h3>
              <div className="flex w-full px-2 mt-4 items-start hover:underline cursor-pointer">
                <a
                  href={content.blogs.link1}
                  className="flex w-full items-start"
                >
                  <div className="w-1/3">
                    <div className="w-full pb-[100%] relative">
                      <Image
                        src={content.blogs.image1}
                        width={200}
                        height={200}
                        alt="Binoculars"
                        className="absolute top-0 left-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-2/3 pl-3">
                    <p className="text-[14px] font-thin line-clamp-3">
                      {content.blogs.blog1}
                    </p>
                    <p className="text-[12px] font-bold">Read More &gt;</p>
                  </div>
                </a>
              </div>
              <div className="flex w-full px-2 mt-6 items-start hover:underline cursor-pointer">
                <a
                  href={content.blogs.link2}
                  className="flex w-full items-start"
                >
                  <div className="w-1/3">
                    <div className="w-full pb-[100%] relative">
                      <Image
                        src={content.blogs.image2}
                        width={200}
                        height={200}
                        alt="Binoculars"
                        className="absolute top-0 left-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-2/3 pl-3">
                    <p className="text-[14px] font-thin line-clamp-3">
                      {content.blogs.blog2}
                    </p>
                    <p className="text-[12px] font-bold">Read More &gt;</p>
                  </div>
                </a>
              </div>

              <div className="flex w-full px-2 mt-6 items-start hover:underline cursor-pointer">
                <a
                  href={content.blogs.link3}
                  className="flex w-full items-start"
                >
                  <div className="w-1/3">
                    <div className="w-full pb-[100%] relative">
                      <Image
                        src={content.blogs.image3}
                        width={200}
                        height={200}
                        alt="Binoculars"
                        className="absolute top-0 left-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-2/3 pl-3">
                    <p className="text-[14px] font-thin line-clamp-3">
                      {content.blogs.blog3}
                    </p>
                    <p className="text-[12px] font-bold">Read More &gt;</p>
                  </div>
                </a>
              </div>
              <a href="/blog">
                <p className="mt-6 hover:underline cursor-pointer text-[14px] font-bold text-blue-700 px-2">
                  View All Articles
                </p>
              </a>
            </div>
          )}

          <SingleReviewsSidebar title={content.title} compareLink={path} />
        </div>
      </div>
    </div>
  );
};

export default PostBody4;
