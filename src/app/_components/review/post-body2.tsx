import { useEffect, useState } from "react";
import markdownStyles from "./markdown-styles2.module.css";
import { ReviewPostType } from "@/interfaces/reviewPost";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";
import remarkBreaks from "remark-breaks"; // import remark-breaks
import Link from "next/link";
import Image from "next/image";
import Product2 from "./product2";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import ProductPop from "./product-pop";
import { Work_Sans } from "next/font/google";

type Props = {
  content: ReviewPostType;
};

const worksans = Work_Sans({ subsets: ["latin"] });

const PostBody2 = ({ content }: Props) => {
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
    <div className={worksans.className}>
      {" "}
      <div
        className={`flex flex-col w-full max-w-[1024px] px-2 md:px-6 mx-auto text-[20px] py-6 pb-32 ${worksans.className} text-[#4b4f58]`}
      >
        {/* <ProductPop product={content.product1} /> */}
        <div className="text-[32px] font-bold w-full text-left border-b-[1px] border-[#4b4f58] text-[#3a3a3a]">
          Our Experts Tested 2024's {content.bestoverall}
        </div>
        <div
          className={markdownStyles["markdown"]}
          dangerouslySetInnerHTML={{ __html: introContent }}
        />

        <div>
          <Product2
            product={content.product1}
            productNumber="1"
            category={content.product || ""}
          />
          <Product2
            product={content.product2}
            productNumber="2"
            category={content.product || ""}
          />
          <Product2
            product={content.product3}
            productNumber="3"
            category={content.product || ""}
          />
          <Product2
            product={content.product4}
            productNumber="4"
            category={content.product || ""}
          />
          <Product2
            product={content.product5}
            productNumber="5"
            category={content.product || ""}
          />
        </div>
        <div className="w-full px-2 md:px-0">
          <div className="mt-12 border-4 border-[#0479c3] blue-shadow mb-[-40px]">
            <div className="bg-[#0479c3] text-center text-white uppercase font-bold py-4 mb-[-25px] text-2xl md:text-3xl ">
              {content.bestoverall}
            </div>
            <Product2
              product={content.product1}
              productNumber="10"
              category={content.product || ""}
            />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center border-t-[1px] border-b-[1px] border-[#ddd]">
        <div className="flex flex-col w-full max-w-[1024px] ">
          <div className="flew flex-col w-full ">
            <div className="flex flex-wrap w-full  ] py-2">
              <div className="w-full md:w-1/3 flex flex-col md:flex-row  py-2 px-4 justify-center items-center md:items-start border-0 md:border-r-[1px]  border-[#ddd]">
                <Image
                  src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/287fb593-c4b4-46a3-1081-443ad3bf7700/public"
                  width={200}
                  height={200}
                  alt="Top Icon"
                  className="max-w-[100px] md:max-w-[60px] object-scale-down"
                />
                <div className="flex flex-1 flex-col justify-center text-center md:text-left pl-4 pr-2">
                  <h4 className="uppercase  text-[#3a3a3a] text-[20px]">
                    <strong>28</strong> Expert Reviewers
                  </h4>
                </div>
              </div>
              <div className="w-full md:w-1/3 flex flex-col md:flex-row  py-2 px-4 justify-center items-center md:items-start border-0 md:border-r-[1px] border-[#ddd]">
                <Image
                  src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/73fd06bb-3bc2-412b-1654-35e1c8858400/public"
                  width={200}
                  height={200}
                  alt="Top Icon"
                  className="max-w-[100px] md:max-w-[60px] object-scale-down "
                />
                <div className="flex flex-1 flex-col justify-center text-center md:text-left pl-4 pr-2">
                  <h4 className="uppercase  text-[#3a3a3a] text-[20px]">
                    <strong>55,000+</strong> Reviews Checked
                  </h4>
                </div>
              </div>
              <div className="w-full md:w-1/3 flex flex-col md:flex-row  py-2 px-4 justify-center items-center md:items-start">
                <Image
                  src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/788edea3-c148-424c-4e2a-9a71ae8f9700/public"
                  width={200}
                  height={200}
                  alt="Top Icon"
                  className="max-w-[100px] md:max-w-[60px] object-scale-down  mb-2 md:mb-0"
                />
                <div className="flex flex-1 flex-col justify-center text-center md:text-left pl-4 pr-2  ">
                  <h4 className="uppercase  text-[#3a3a3a] text-[20px]">
                    <strong>75+</strong> {content.product || "Products"} Tested
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center items-center ">
        <div className="flex w-full max-w-[1024px]">
          <div className="flex w-full flex-wrap">
            <div className="flex flex-col w-[100%] md:w-[80%] px-2 md:pr-4">
              <div
                className={markdownStyles["markdown"]}
                dangerouslySetInnerHTML={{ __html: articleContent }}
              />
              <div className="w-full justify-center text-left px-6 md:px-12 py-6 md:py-12 bg-[#f9ebb8] border-2 border-[#c0a975] text-[16px]">
                UPDATE: Having been featured in major international media,{" "}
                {content.product1.name} has generated an incredible amount of
                buzz. Since it is so popular and has received so many positive
                reviews, the company is offering a one-time,{" "}
                <a
                  href={content.product1.cta}
                  className="text-blue-600 hover:text-blue-800 underline font-bold"
                >
                  50% discount
                </a>{" "}
                in order to encourage people to try it for themselves.
              </div>
              <div className="w-full mt-8 mb-16">
                <a href={content.product1.cta}>
                  <button className="flex w-full justify-center text-center items-center py-4 px-4 bg-[#fca322] uppercase rounded-lg text-white text-[24px] border-b-4 border-[#d4820e] hover:bg-[#f38701] hover:border-[#795015]">
                    Check Availability &amp; Discounts &gt;
                  </button>
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-start w-[100%] md:w-[20%] md:px-2 pt-12">
              <div className="bg-[#eee] rounded-md text-[#3a3a3a] p-2 md:text-left text-[14px] py-4 flex flex-col text-center items-center">
                <Image
                  src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/3a3fde59-2204-4b2f-65fe-3e2e87ef6200/public"
                  alt="Happy Customers"
                  height={60}
                  width={60}
                  className="mb-2"
                />
                <span className="font-bold text-[22px] text-[#000] ">
                  150,000+
                </span>
                {content.highlight.toppoint}
              </div>
              <div className="bg-[#eee] rounded-md text-[#3a3a3a] p-2 md:text-left text-[14px] py-4 flex flex-col text-center items-center mt-12">
                <h3 className="pb-4 text-[22px]">
                  How we <span className="text-blue-400">rate</span>?
                </h3>
                This score is based on four key metrics – our comprehensive
                tests, external customer feedback, price point, and brand
                reputation. We set extremely high testing standards for our
                recommended products so you can have full confidence in our
                reviews.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostBody2;
