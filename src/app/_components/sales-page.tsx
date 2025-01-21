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
import SalesHeader3 from "./sales/sales-3/sales-header/sales-header";
import SalesHero3 from "./sales/sales-3/sales-hero/sales-hero";
import SalesReviews3 from "./sales/sales-3/sales-reviews/sales-reviews";
import SalesFaqs3 from "./sales/sales-3/sales-faqs/sales-faqs";
import SalesFooter3 from "./sales/sales-3/sales-footer/sales-footer";

type Props = {
  info: SalesPageType;
};

const SalesPage = ({ info }: Props) => {
  const contentRef = useRef<HTMLDivElement>(null);
  PassUtmParams(contentRef, info.cta);

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
              <SalesHeader3 info={info} />
              <SalesHero3 info={info} />
              <SalesReviews3 info={info} />
              <SalesFaqs3 info={info} />
              <SalesFooter3 info={info} />
          </>
      )}
      <FunnelFluxScripts funnelFlux={info.funnelFlux} />
    </div>
  );
};

export default SalesPage;
