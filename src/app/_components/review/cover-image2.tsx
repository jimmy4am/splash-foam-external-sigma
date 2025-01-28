import React, { useEffect, useState } from "react";
import Image from "next/image";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";
import remarkBreaks from "remark-breaks"; // Import remark-breaks
import { Work_Sans } from "next/font/google";

type Props = {
  title: string;
  src: string;
  slug?: string;
  path: string;
};

const worksans = Work_Sans({ subsets: ["latin"] });

const CoverImage2 = ({ title, src, slug, path }: Props) => {
  const currentDate = new Date();
  const updateMonth = `Last Updated - ${currentDate.toLocaleString("default", {
    month: "long",
  })}, ${currentDate.getFullYear()}`;

  const [pathContent, setPathContent] = useState("");

  useEffect(() => {
    const processMarkdown = async () => {
      const file = await unified()
        .use(remarkParse)
        .use(remarkBreaks)
        .use(remarkHtml)
        .process(path);

      setPathContent(String(file));
    };
    processMarkdown();
  }, [path]);

  return (
    <div className={worksans.className}>
      <div className="sm:mx-0 relative">
        <div
          className="min-h-40 bg-cover bg-center flex justify-center items-center"
          style={{ backgroundImage: `url(${src})` }}
        >
          <div className="flex w-full max-w-[1024px] px-4 flex-wrap">
            <div className="flex flex-1 flex-col items-center md:items-start justify-center p-2">
              <div className="text-white text-[28px] md:text-[40px] lg:text-[50px] font-bold text-shadow text-center md:text-left px-4 max-w-full">
                {title}
              </div>
              <div className="flex text-white text-shadow mt-2 md:mt-4 text-lg space-x-2">
                <Image
                  src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/229dc531-21c2-4e38-9c36-f6f46cc14100/public"
                  width={50}
                  height={50}
                  alt="check mark"
                  className="w-[20px] h-[20px] mt-1 mr-2"
                />
                {updateMonth}
              </div>
            </div>
            <div className="flex justify-center md:justify-end items-center w-full md:w-auto py-2 md:pt-0">
              <Image
                src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/b2d6873e-bb97-42df-5cf0-bae440d72100/public"
                width={175}
                height={175}
                alt="CTC Badge"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverImage2;
