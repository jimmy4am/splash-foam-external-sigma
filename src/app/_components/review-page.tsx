"use client";
import React, { useRef } from "react";
import { ReviewPostType } from "@/interfaces/reviewPost";
import FunnelFluxScripts from "@/lib/funnel-flux-scripts";
import PassUtmParams from "@/app/_utils/passUtmParams";
import ArticleClickId from "./article/article-click-id";
import PostBody from "@/app/_components/review/post-body";
import PostBody2 from "@/app/_components/review/post-body2";
import Header from "@/app/_components/review/header";
import Header2 from "@/app/_components/review/header2";
import Header3 from "@/app/_components/review/header3";
import CoverImage from "@/app/_components/review/cover-image";
import CoverImage2 from "@/app/_components/review/cover-image2";
import CoverImage3 from "@/app/_components/review/cover-image3";
import PostBody3 from "@/app/_components/review/post-body3";
import PostBody4 from "@/app/_components/review/post-body4";

// Template 5
import ReviewHeader5 from "@/app/_components/review/review-5/review-header/review-header";
import ReviewBody5 from "@/app/_components/review/review-5/review-body/review-body";

type Props = {
  post: ReviewPostType;
};

const ReviewArticlePage = ({ post }: Props) => {
  const contentRef = useRef<HTMLDivElement>(null);
  PassUtmParams(contentRef, post.product1.cta);

  return (
    <>
      <div ref={contentRef}>
        {post.template === "1" && (
          <>
            <Header />
            <CoverImage
              title={post.title}
              src={post.coverImage}
              slug={post.slug}
            />
            <PostBody content={post} />
          </>
        )}
        {post.template === "2" && (
          <>
            <Header2 />
            <CoverImage2
              title={post.title}
              src={post.coverImage}
              slug={post.slug}
              path={post.path || post.bestoverall}
            />
            <PostBody2 content={post} />
          </>
        )}
        {post.template === "3" && (
          <>
            <Header3 />
            <CoverImage3
              title={post.title}
              src={post.coverImage}
              bestOverall={post.bestoverall}
            />
            <PostBody3 content={post} />
          </>
        )}
        {post.template === "4" && (
          <>
            <Header3 />
            <CoverImage3
              title={post.title}
              src={post.coverImage}
              bestOverall={post.bestoverall}
            />
            <PostBody4 content={post} />
          </>
        )}
        {post.template === "5" && (
            <>
                <ReviewHeader5 />
                <ReviewBody5 post={post} />
            </>
        )}
        {post.template === "5" && <>{/* Build template 6 here  */}</>}
      </div>
      <FunnelFluxScripts funnelFlux={post.funnelFlux || ""} />
      <ArticleClickId />
    </>
  );
};

export default ReviewArticlePage;
