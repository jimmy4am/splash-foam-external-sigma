"use client";

import React, { useEffect, useState, useRef } from "react";
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
      {info.template === "3" && <>{/* Build This Template Here */}</>}
      <FunnelFluxScripts funnelFlux={info.funnelFlux} />
    </div>
  );
};

export default SalesPage;
