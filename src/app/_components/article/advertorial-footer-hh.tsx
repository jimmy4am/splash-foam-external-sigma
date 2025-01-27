"use client";
import Image from "next/image";
import { siteProduct, rootUrl } from "@/lib/site-info";
import useMixpanelId from "@/app/_utils/useMixpanelId";

const siteLogo =
  "https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/5c49af78-2064-4149-2a6f-885e1b324600/public";

const Footer = () => {
  const mixpanelId = useMixpanelId();
  return (
    <footer className="flex flex-col  w-full">
      <div className="bg-[#f5f5f5] flex flex-col items-center py-12">
        <div className="flex flex-col md:flex-row w-full max-w-[1024px] justify-center items-center font-bold">
          <div className="px-4 mb-2 text-[16px] text-[#333] hover:opacity-75 cursor-pointer">
            <a href="/privacy-policy">Privacy Policy</a>
          </div>
          <div className="px-4 mb-2 text-[16px] text-[#333] hover:opacity-75 cursor-pointer">
            <a href="/contact-us">Contact Us</a>
          </div>
          <div className="px-4 mb-2 text-[16px] text-[#333] hover:opacity-75 cursor-pointer">
            <a href="/terms-conditions">Terms & Conditions</a>
          </div>
          <div className="px-4 mb-2 text-[16px] text-[#333] hover:opacity-75 cursor-pointer">
            <a href="https://4am.everflowclient.io/affiliate/signup/?q=5J473L">
              Become an Affiliate
            </a>
          </div>
        </div>
        <a href="/" className="px-4">
          <Image
            src={siteLogo}
            width={100}
            height={100}
            alt={siteProduct}
            className="mt-4 hover:opacity-75 cursor-pointer"
          />
        </a>
      </div>
      <div className="bg-[#59797c] flex flex-col items-center py-12">
        <div className="flex flex-col px-4 w-full max-w-[1250px] items-center">
          <Image
            src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/902ce5a6-d83d-4e82-99c1-986739ee7e00/public"
            width={120}
            height={120}
            alt="DMCA"
          />
          <p className="mt-6 text-[18px] text-center text-white">
            THIS IS AN ADVERTISEMENT AND NOT AN ACTUAL NEWS ARTICLE, BLOG, OR
            CONSUMER PROTECTION UPDATEMARKETING DISCLOSURE:
          </p>
          <p className="mt-6 text-[18px] text-center text-white">
            MARKETING DISCLOSURE: This website is a market place. As such you
            should know that the owner has a monetary connection to the product
            and services advertised on the site. The owner receives payment
            whenever a qualified lead is referred but that is the extent of it.
          </p>
          <p className="mt-6 text-[18px] text-center text-white">
            ADVERTISING DISCLOSURE: This website and the products & services
            referred to on the site are advertising marketplaces. This website
            is an advertisement and not a news publication. Any photographs of
            persons used on this site are models. The owner of this site and of
            the products and services referred to on this site only provides a
            service where consumers can obtain and compare.
          </p>
          <p className="mt-6 text-[18px] text-center text-white">
            &copy; {new Date().getFullYear()} {rootUrl}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
