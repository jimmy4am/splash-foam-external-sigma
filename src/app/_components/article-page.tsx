"use client";
import React, { useRef } from "react";
import { Post } from "@/interfaces/post";
import Header2 from "@/app/_components/article/header2";
import Footer from "@/app/_components/article/advertorial-footer";
import Footer6 from "@/app/_components/article/advertorial-footer-hh";
import FunnelFluxScripts from "@/lib/funnel-flux-scripts";
import AdvertorialBody from "@/app/_components/article/advetorial-body";
import AdvertorialBody2 from "@/app/_components/article/advetorial-body2";
import AdvertorialBody3 from "@/app/_components/article/advetorial-body3";
import AdvertorialBody4 from "@/app/_components/article/advetorial-body4";
import AdvertorialBody5 from "@/app/_components/article/advetorial-body5";
import AdvertorialBody6 from "@/app/_components/article/advetorial-body6";
import AdvertorialBody7 from "@/app/_components/article/advetorial-body7";
import Header6 from "./article/header6";
import Header7 from "./article/header7";
import PassUtmParams from "@/app/_utils/passUtmParams";
import ArticleClickId from "./article/article-click-id";

type Props = {
  basePost: Post;
};

const ArticlePage = ({ basePost }: Props) => {
  const content = basePost.content;
  const serverDate = new Date().toLocaleDateString();
  const serverDayDate = new Date().toLocaleDateString();

  const contentRef = useRef<HTMLDivElement>(null);
  PassUtmParams(contentRef, basePost.product1.cta);
  return (
    <main>
      <div ref={contentRef}>
        {basePost?.template === "1" && (
          <>
            <Header2
              logo={basePost.product1.logo!}
              productName={basePost.product1.name}
            />
            <AdvertorialBody
              post={basePost}
              content={content}
              serverDate={serverDate}
              serverDayDate={serverDayDate}
            />
            <Footer post={basePost} />
          </>
        )}
        {basePost?.template === "2" && (
          <>
            <Header2
              logo={basePost.product1.logo!}
              productName={basePost.product1.name}
            />
            <AdvertorialBody2
              post={basePost}
              content={content}
              serverDate={serverDate}
              serverDayDate={serverDayDate}
            />
            <Footer post={basePost} />
          </>
        )}
        {basePost?.template === "3" && (
          <>
            <Header2
              logo={basePost.product1.logo!}
              productName={basePost.product1.name}
            />
            <AdvertorialBody3
              post={basePost}
              content={content}
              serverDate={serverDate}
              serverDayDate={serverDayDate}
            />
            <Footer post={basePost} />
          </>
        )}
        {basePost?.template === "4" && (
          <>
            <Header2
              logo={basePost.product1.logo!}
              productName={basePost.product1.name}
            />
            <AdvertorialBody4
              post={basePost}
              content={content}
              serverDate={serverDate}
              serverDayDate={serverDayDate}
            />
            <Footer post={basePost} />
          </>
        )}
        {basePost?.template === "5" && (
          <>
            <Header2
              logo={basePost.product1.logo!}
              productName={basePost.product1.name}
            />
            <AdvertorialBody5
              post={basePost}
              content={content}
              serverDate={serverDate}
              serverDayDate={serverDayDate}
            />
            <Footer post={basePost} />
          </>
        )}
        {basePost?.template === "6" && (
          <>
            <Header6 productName={basePost.product1.name} />
            <AdvertorialBody6
              post={basePost}
              content={content}
              serverDate={serverDate}
              serverDayDate={serverDayDate}
            />
            <Footer6 />
          </>
        )}
        {basePost?.template === "7" && (
          <>
            <Header7
              logo={basePost.product1.logo!}
              productName={basePost.product1.name}
            />
            <AdvertorialBody7
              post={basePost}
              content={content}
              serverDate={serverDate}
              serverDayDate={serverDayDate}
            />
            <Footer post={basePost} />
          </>
        )}
      </div>
      {/* <FunnelFluxScripts funnelFlux={basePost.funnelFlux || ""} />
      <ArticleClickId /> */}
    </main>
  );
};

export default ArticlePage;
