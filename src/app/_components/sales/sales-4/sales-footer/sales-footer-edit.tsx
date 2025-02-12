import React from "react";
import { Inter } from "next/font/google";

import { siteProduct } from "@/lib/site-info";
import { SalesPageType } from "@/interfaces/salesPage";
import EditImage from "@/app/_components/edit-image";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  info: SalesPageType;
  setCurrentPost: (post: SalesPageType) => void;
};

const FooterLink = ({ url, children }: { url: string, children: React.ReactNode }) => (
  <a className="hover:text-[#0073b7] transition-all duration-250 ease-in-out" href={url} target="_blank">
    {children}
  </a>
)

const SalesFooterEdit = ({ info, setCurrentPost }: Props) => {
  return (
    <footer className={`w-full py-[25px] md:py-[40px] bg-[#fff] border-t-[1px] border-t-[#c8c8c8] ${inter.className}`}>
      <div className="w-full max-w-[1200px] mx-[auto] px-4 flex flex-col items-center">
        <a href="/" className="flex w-[120px] md:w-[142px] mb-[20px] md:mb-[25px]">
          <EditImage
            src={info.logo}
            alt={siteProduct}
            width={160}
            height={160}
            post={info}
            setPost={setCurrentPost}
            field="logo"
          />
        </a>
        <div className="text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] text-[#000] tracking-[0.5px]">
          <nav>
            <ul className="flex flex-wrap justify-center gap-x-[12px]">
              <li><FooterLink url="/contact-us">Contact Us</FooterLink></li>
              <li><FooterLink url="/terms-conditions">Terms of Service</FooterLink></li>
              <li><FooterLink url="/privacy-policy">Privacy Policy</FooterLink></li>
              <li><FooterLink url="/shipping-returns">Shipping & Returns</FooterLink></li>
              <li><FooterLink url="/mobile-terms-conditions">Mobile Terms</FooterLink></li>
            </ul>
          </nav>
          <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center mt-[16px] md:mt-[12px]">
            <span>&copy; {(new Date()).getFullYear()} {siteProduct}.</span>
            <span>All Rights Reserved.</span>
            <span className="md:block md:w-full md:text-center">Owned by Four AM Media</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SalesFooterEdit;