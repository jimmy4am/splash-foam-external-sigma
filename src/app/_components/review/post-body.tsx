import { useEffect, useState } from "react";
import markdownStyles from "./markdown-styles.module.css";
import { ReviewPostType } from "@/interfaces/reviewPost";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";
import remarkBreaks from "remark-breaks"; // import remark-breaks
import Image from "next/image";
import Product from "./product";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import ProductPop from "./product-pop";

type Props = {
  content: ReviewPostType;
};

const PostBody = ({ content }: Props) => {
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
    <div className="flex flex-col w-full max-w-[1024px] px-2 md:px-6 mx-auto text-[20px] py-6 pb-32">
      <ProductPop product={content.product1} />
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: introContent }}
      />
      <div className="flex w-full justify-end pb-2">
        <a
          href="/advertiser-disclosure"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:opacity-75 cursor-pointer"
        >
          Advertiser Disclosure
        </a>
      </div>
      <div className="hidden md:flex w-full items-center bg-[#f5f5f5] border-t-2 border-b-2 border-[#d9d8d8] text-[14px] py-4">
        <div className="w-[20%] flex justify-center">
          {/* <Image
            src={content.product1.image}
            width={200}
            height={200}
            alt={content.product1.name}
          /> */}
          Product
        </div>
        <div className="w-[15%] flex justify-center">Rating</div>
        <div className="w-[40%] flex justify-center">Key Features</div>
        <div className="w-[25%] flex justify-center"> </div>
      </div>
      <div>
        <Product product={content.product1} productNumber="1" />
        <Product product={content.product2} productNumber="2" />
        <Product product={content.product3} productNumber="3" />
        {show5 && (
          <>
            <Product product={content.product4} productNumber="4" />
            <Product product={content.product5} productNumber="5" />
          </>
        )}
        <div className="bg-[#d9d8d8] h-1 w-full mt-12 flex justify-center">
          {" "}
          <div
            className="bg-[#f5f5f5] h-12 w-12 border-2 border-[#d9d8d8] rounded-full  mt-[-20px] flex justify-center items-center transition-all hover:scale-125 cursor-pointer"
            onClick={() => setShow5(!show5)}
          >
            {(show5 && <ChevronUpIcon className="h-6 w-6 text-[#333]" />) || (
              <ChevronDownIcon className="h-6 w-6 text-[#333]" />
            )}
          </div>
        </div>
        <div className="flex w-full text-center justify-center mt-12 text-[22px]">
          {(show5 && "Show Top 3") || "Show Top 5"}
        </div>
        <div className="flew flex-col w-full hover:shadow-xl shadow-black hove:border-4 border-[#f5f5f5]">
          <div className="flex w-full justify-center mt-16 text-center text-shadow bg-[#6497b2] text-white font-bold text-[36px] uppercase p-2">
            {content.bestoverall}
          </div>
          <Product product={content.product1} productNumber="1" />
          <div className="flex flex-wrap w-full mt-12 bg-[#e8e8e8] py-2">
            <div className="w-full md:w-1/3 flex flex-col md:flex-row  py-2 px-4 justify-center items-center md:items-start">
              <Image
                src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/7b7de8b0-027c-4af7-c37c-d2860b3ac800/public"
                width={200}
                height={200}
                alt="Top Icon"
                className="max-w-[100px] mt-8 md:max-w-[60px] object-scale-down md:mt-2"
              />
              <div className="flex flex-1 flex-col justify-center text-center md:text-left pl-4 pr-2">
                <h4 className="uppercase font-bold text-[#f65b0f] text-20px]">
                  {content.highlight.toptitle}
                </h4>
                <p className="text-[16px] mt-4">{content.highlight.toppoint}</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex flex-col md:flex-row  py-2 px-4 justify-center items-center md:items-start">
              <Image
                src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/44229994-15b0-4bfd-50a3-775cad1b1f00/public"
                width={200}
                height={200}
                alt="Top Icon"
                className="max-w-[100px] mt-8 md:max-w-[60px] object-scale-down md:mt-2"
              />
              <div className="flex flex-1 flex-col justify-center text-center md:text-left pl-4 pr-2">
                <h4 className="uppercase font-bold text-[#f65b0f] text-20px]">
                  {content.highlight.boxtitle}
                </h4>
                <p className="text-[16px] mt-4">{content.highlight.boxpoint}</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex flex-col md:flex-row  py-2 px-4 justify-center items-center md:items-start">
              <Image
                src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/d14445a3-e2f0-4df3-50d1-5020fe30d700/public"
                width={200}
                height={200}
                alt="Top Icon"
                className="max-w-[100px] mt-8 md:max-w-[60px] object-scale-down md:mt-2 mb-2 md:mb-0"
              />
              <div className="flex flex-1 flex-col justify-center text-center md:text-left pl-4 pr-2">
                <h4 className="uppercase font-bold text-[#f65b0f] text-20px]">
                  {content.highlight.thumbtitle}
                </h4>
                <p className="text-[16px] mt-4">
                  {content.highlight.thumbpoint}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: articleContent }}
      />
      <div className="w-full justify-center text-left px-6 md:px-12 py-6 md:py-12 bg-[#f9ebb8] border-2 border-[#c0a975] text-[16px]">
        UPDATE: Having been featured in major international media,{" "}
        {content.product1.name} has generated an incredible amount of buzz.
        Since it is so popular and has received so many positive reviews, the
        company is offering a one-time,{" "}
        <a
          href={content.product1.cta}
          className="text-blue-600 hover:text-blue-800 underline font-bold"
        >
          50% discount
        </a>{" "}
        in order to encourage people to try it for themselves.
      </div>
      <div className="w-full mt-8">
        <a href={content.product1.cta}>
          <button className="flex w-full justify-center text-center items-center py-4 px-4 bg-green-500 uppercase rounded-lg text-white text-[24px] border-b-4 border-green-600 hover:bg-green-700 hover:border-green-900">
            Check Availability &gt;
          </button>
        </a>
      </div>
    </div>
  );
};

export default PostBody;
