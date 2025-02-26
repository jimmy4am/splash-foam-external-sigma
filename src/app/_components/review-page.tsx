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
import ReviewHero5 from "@/app/_components/review/review-5/review-hero/review-hero";
import ReviewBody5 from "@/app/_components/review/review-5/review-body/review-body";
import ReviewWinningProduct5 from "@/app/_components/review/review-5/review-winning-product/review-winning-product";
import ReviewFooter5 from "@/app/_components/review/review-5/review-footer/review-footer";

// Template 6
import ReviewHeader6 from "@/app/_components/review/review-6/review-header/review-header";
import ReviewHero6 from "@/app/_components/review/review-6/review-hero/review-hero";
import ReviewBody6 from "@/app/_components/review/review-6/review-body/review-body";
import ReviewWinningProduct6 from "@/app/_components/review/review-6/review-winning-product/review-winning-product";
import ReviewFooter6 from "@/app/_components/review/review-6/review-footer/review-footer";

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
                <ReviewHero5 post={post} />
                <ReviewBody5 post={post} showFullArticle />
                <ReviewWinningProduct5 post={post} />
                <ReviewFooter5 />
            </>
        )}
        {post.template === "6" && (
          <>
            <ReviewHeader6 />
            <ReviewHero6 post={post} />
            <ReviewBody6 post={post} showFullArticle />
            <ReviewWinningProduct6 post={post} />
            <ReviewFooter6 />
          </>
        )}
      </div>
      <FunnelFluxScripts funnelFlux={post.funnelFlux || ""} />
      <ArticleClickId />
    </>
  );
};

export default ReviewArticlePage;
