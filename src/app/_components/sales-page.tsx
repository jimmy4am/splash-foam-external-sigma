"use client";

import React, { useRef } from "react";
import SalesHeader from "./sales/sales-header";
import Footer from "./sales/sales-footer";
import SalesHero from "./sales/sales-hero";
import ThreeHighlighs from "./sales/sales-threehighlights";
import InfoBox from "./sales/sales-infobox";
import ImageStrip from "./sales/sales-imagestrip";
import Slideshow from "./sales/sales-slideshow";
import SplitCompare from "./sales/sales-splitcompare";
import FiveImageSplit from "./sales/sales-fiveimagesplit";
import SpecGrid from "./sales/sales-specgrid";
import Reviews from "./sales/sales-reviews";
import Faqs from "./sales/sales-faqs";
import StickyCta from "./sales/sales-stickycta";
import { SalesPageType } from "@/interfaces/salesPage";
import SalesClickId from "./sales/sales-click-id";
import FunnelFluxScripts from "@/lib/funnel-flux-scripts";
import SalesSimple from "./sales/sales-simple";
import PassUtmParams from "../_utils/passUtmParams";

// Template 3
// import SalesHeader3 from "./sales/sales-3/sales-header/sales-header";
import SalesHeaderEdit3 from "./sales/sales-3/sales-header/sales-header-edit";
// import SalesHero3 from "./sales/sales-3/sales-hero/sales-hero";
import SalesHeroEdit3 from "./sales/sales-3/sales-hero/sales-hero-edit";
// import SalesCharacteristics3 from "./sales/sales-3/sales-characteristics/sales-characteristics";
import SalesCharacteristicsEdit3 from "./sales/sales-3/sales-characteristics/sales-characteristics-edit";
// import SalesVideoReviews3 from "./sales/sales-3/sales-video-reviews/sales-video-reviews";
import SalesVideoReviewsEdit3 from "./sales/sales-3/sales-video-reviews/sales-video-reviews-edit";
// import SalesInfo3 from "./sales/sales-3/sales-info/sales-info";
import SalesInfoEdit3 from "./sales/sales-3/sales-info/sales-info-edit";
// import SalesFeatures3 from "./sales/sales-3/sales-features/sales-features";
import SalesFeaturesEdit3 from "./sales/sales-3/sales-features/sales-features-edit";
// import SalesSteps3 from "./sales/sales-3/sales-steps/sales-steps";
import SalesStepsEdit3 from "./sales/sales-3/sales-steps/sales-steps-edit";
// import SalesUsage3 from "./sales/sales-3/sales-usage/sales-usage";
import SalesUsageEdit3 from "./sales/sales-3/sales-usage/sales-usage-edit";
// import SalesComparison3 from "./sales/sales-3/sales-comparison/sales-comparison";
import SalesComparisonEdit3 from "./sales/sales-3/sales-comparison/sales-comparison-edit";
// import SalesReviews3 from "./sales/sales-3/sales-reviews/sales-reviews";
import SalesReviewsEdit3 from "./sales/sales-3/sales-reviews/sales-reviews-edit";
// import SalesFaqs3 from "./sales/sales-3/sales-faqs/sales-faqs";
import SalesFaqsEdit3 from "./sales/sales-3/sales-faqs/sales-faqs-edit";
// import SalesFooter3 from "./sales/sales-3/sales-footer/sales-footer";
import SalesFooterEdit3 from "./sales/sales-3/sales-footer/sales-footer-edit";

// Template 4
// import SalesHeader4 from "./sales/sales-4/sales-header/sales-header";
import SalesHeaderEdit4 from "./sales/sales-4/sales-header/sales-header-edit";
// import SalesHero4 from "./sales/sales-4/sales-hero/sales-hero";
import SalesHeroEdit4 from "./sales/sales-4/sales-hero/sales-hero-edit";
// import SalesCharacteristics4 from "./sales/sales-4/sales-characteristics/sales-characteristics";
import SalesCharacteristicsEdit4 from "./sales/sales-4/sales-characteristics/sales-characteristics-edit";
// import SalesVideoReviews4 from "./sales/sales-4/sales-video-reviews/sales-video-reviews";
import SalesVideoReviewsEdit4 from "./sales/sales-4/sales-video-reviews/sales-video-reviews-edit";
// import SalesInfo4 from "./sales/sales-4/sales-info/sales-info";
import SalesInfoEdit4 from "./sales/sales-4/sales-info/sales-info-edit";
// import SalesFeatures4 from "./sales/sales-4/sales-features/sales-features";
import SalesFeaturesEdit4 from "./sales/sales-4/sales-features/sales-features-edit";
import SalesSteps4 from "./sales/sales-4/sales-steps/sales-steps";
import SalesStepsEdit4 from "./sales/sales-4/sales-steps/sales-steps-edit";
import SalesUsage4 from "./sales/sales-4/sales-usage/sales-usage";
import SalesComparison4 from "./sales/sales-4/sales-comparison/sales-comparison";
import SalesReviews4 from "./sales/sales-4/sales-reviews/sales-reviews";
import SalesFaqs4 from "./sales/sales-4/sales-faqs/sales-faqs";
import SalesFooter4 from "./sales/sales-4/sales-footer/sales-footer";

type Props = {
  info: SalesPageType;
};

const SalesPage = ({ info }: Props) => {
  const contentRef = useRef<HTMLDivElement>(null);
  PassUtmParams(contentRef, info.cta);

  const setCurrentPost = (post: SalesPageType) => console.log('post', post);

  return (
    <div className="flex flex-col items-center relative" ref={contentRef}>
      <SalesClickId />
      {info.template === "7" && (
        <>
          <SalesHeader info={info} />
          <SalesHero info={info} />
          <ThreeHighlighs info={info} />
          <InfoBox info={info} />
          <ImageStrip info={info} />
          <Slideshow info={info} />
          <SplitCompare info={info} />
          <FiveImageSplit info={info} />
          <SpecGrid info={info} />
          <Reviews info={info} />
          <Faqs info={info} />
          <StickyCta cta={info.cta} />
          <Footer info={info} />
        </>
      )}
      {info.template === "2" && (
        <>
          <SalesSimple info={info} />
          <Footer info={info} />
        </>
      )}
      {info.template === "3" && (
        <>
          {/*<SalesHeader3 info={info} />*/}
          <SalesHeaderEdit3 info={info} setCurrentPost={setCurrentPost} />
          {/*<SalesHero3 info={info} />*/}
          <SalesHeroEdit3 info={info} setCurrentPost={setCurrentPost} />
          {/*<SalesCharacteristics3 info={info} />*/}
          <SalesCharacteristicsEdit3 info={info} setCurrentPost={setCurrentPost} />
          {/*<SalesVideoReviews3 info={info} />*/}
          <SalesVideoReviewsEdit3 info={info} setCurrentPost={setCurrentPost} />
          {/*<SalesInfo3 info={info} />*/}
          <SalesInfoEdit3 info={info} setCurrentPost={setCurrentPost} />
          {/*<SalesFeatures3 info={info} />*/}
          <SalesFeaturesEdit3 info={info} setCurrentPost={setCurrentPost} />
          {/*<SalesSteps3 info={info} />*/}
          <SalesStepsEdit3 info={info} setCurrentPost={setCurrentPost} />
          {/*<SalesUsage3 info={info} />*/}
          <SalesUsageEdit3 info={info} setCurrentPost={setCurrentPost} />
          {/*<SalesComparison3 info={info} />*/}
          <SalesComparisonEdit3 info={info} setCurrentPost={setCurrentPost} />
          {/*<SalesReviews3 info={info} />*/}
          <SalesReviewsEdit3 info={info} setCurrentPost={setCurrentPost} />
          {/*<SalesFaqs3 info={info} />*/}
          <SalesFaqsEdit3 info={info} setCurrentPost={setCurrentPost} />
          {/*<SalesFooter3 info={info} />*/}
          <SalesFooterEdit3 info={info} setCurrentPost={setCurrentPost} />
        </>
      )}
        {info.template === "4" && (
          <>
            {/*<SalesHeader4 info={info} />*/}
            <SalesHeaderEdit4 info={info} setCurrentPost={setCurrentPost} />
            {/*<SalesHero4 info={info} />*/}
            <SalesHeroEdit4 info={info} setCurrentPost={setCurrentPost} />
            {/*<SalesCharacteristics4 info={info} />*/}
            <SalesCharacteristicsEdit4 info={info} setCurrentPost={setCurrentPost} />
            {/*<SalesVideoReviews4 info={info} />*/}
            <SalesVideoReviewsEdit4 info={info} setCurrentPost={setCurrentPost} />
            {/*<SalesInfo4 info={info} />*/}
            <SalesInfoEdit4 info={info} setCurrentPost={setCurrentPost} />
            {/*<SalesFeatures4 info={info} />*/}
            <SalesFeaturesEdit4 info={info} setCurrentPost={setCurrentPost} />
            {/*<SalesSteps4 info={info} />*/}
            <SalesStepsEdit4 info={info} setCurrentPost={setCurrentPost} />
            <SalesUsage4 info={info} />
            <SalesComparison4 info={info} />
            <SalesReviews4 info={info} />
            <SalesFaqs4 info={info} />
            <SalesFooter4 info={info} />
          </>
        )}
      <FunnelFluxScripts funnelFlux={info.funnelFlux} />
    </div>
  );
};

export default SalesPage;
