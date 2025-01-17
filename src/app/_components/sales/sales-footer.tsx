"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Author } from "../../../interfaces/author";
import { siteProduct } from "@/lib/site-info";
import { Raleway } from "next/font/google";
import { SalesPageType } from "@/interfaces/salesPage";

const raleway = Raleway({ subsets: ["latin"] });

type Props = {
  author: Author;
  logo: string;
  productName: string;
};

function getRootDomain(url: string): string {
  // Create an anchor element to leverage the browser's URL parsing capabilities
  const a = document.createElement("a");
  a.href = url;

  // Extract the hostname
  const hostname = a.hostname;

  // Regular expression to match the root domain
  const domainPattern = /([a-z0-9|-]+\.[a-z]{2,3})(?:\.[a-z]{2})?$/i;
  const match = hostname.match(domainPattern);

  // Return the matched root domain if available
  return match ? match[0] : hostname;
}
type Props2 = {
  info: SalesPageType;
};
const Footer2 = ({ info }: Props2) => {
  const [website, setWebsite] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const rootDomain = getRootDomain(window.location.href);
      setWebsite(rootDomain);
    }
  }, []);
  return (
    <footer className="flex flex-col  w-full">
      <div
        className={`bg-blue-100 flex flex-col items-center py-12 ${raleway.className}`}
      >
        <a href="/" className="px-4">
          <Image
            src={info.logo}
            width={160}
            height={160}
            alt={siteProduct}
            className=" mb-6 hover:opacity-75 cursor-pointer"
          />
        </a>
        <div className="flex flex-col md:flex-row w-full max-w-[1024px] justify-center items-center font-bold">
          <div className="flex border-b-[1px] border-[#aaa] pb-6 px-4 text-center flex-col md:flex-row ">
            <div className="px-4 mb-2 text-[16px] text-[#333] hover:opacity-75 cursor-pointer">
              <a href="/contact-us" target="_blank">
                Contact Us
              </a>
            </div>
            <div className="px-4 mb-2 text-[16px] text-[#333] hover:opacity-75 cursor-pointer">
              <a href="/terms-conditions" target="_blank">
                Terms of Service
              </a>
            </div>
            <div className="px-4 mb-2 text-[16px] text-[#333] hover:opacity-75 cursor-pointer">
              <a href="/privacy-policy" target="_blank">
                Privacy Policy
              </a>
            </div>
            <div className="px-4 mb-2 text-[16px] text-[#333] hover:opacity-75 cursor-pointer">
              <a href="/shipping-returns" target="_blank">
                Shipping & Returns
              </a>
            </div>
            <div className="px-4 mb-2 text-[16px] text-[#333] hover:opacity-75 cursor-pointer">
              <a href="/mobile-terms-conditions" target="_blank">
                Mobile Terms
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col  items-center justify-center mt-6 mb-12 font-bold text-[16px]">
          <p>© 2024 {siteProduct}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
