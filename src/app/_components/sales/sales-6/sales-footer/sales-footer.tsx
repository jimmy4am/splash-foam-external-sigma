import React from "react";
import Image from "next/image";

import { SalesPageType } from "@/interfaces/salesPage";

type Props = {
  info: SalesPageType;
};

const FooterLink = ({ url, isLastChild = false, children }: { url: string, isLastChild?: boolean, children: React.ReactNode }) => (
  <li className="flex items-center h-[24px]">
    <a className={`flex px-[8px] md:px-[10px] ${!isLastChild && 'border-r-[1px] border-[#010101]'} hover:text-[#0073b7] leading-[19px] transition-all duration-250 ease-in-out`} href={url} target="_blank">
      {children}
    </a>
  </li>
)

const SalesFooter = ({ info }: Props) => {
  return (
    <footer className="py-[30px] md:py-[40px] bg-[#fff]">
      <div className="w-full max-w-[1200px] mx-[auto] px-[15px] flex flex-col items-center">
        <a href="/" className="flex w-[79px] mb-[12px]">
          <Image src={info.logo} width={158} height={82} alt={info.name} />
        </a>
        <div className="text-[14px] leading-[22px] md:text-[16px] md:leading-[24px] text-[#010101]">
          <nav className="mb-[12px]">
            <ul className="flex justify-center">
              <FooterLink url="/contact-us">Contact Us</FooterLink>
              <FooterLink url="/terms-conditions">Terms of Service</FooterLink>
              <FooterLink url="/privacy-policy" isLastChild>Privacy Policy</FooterLink>
            </ul>
          </nav>
          <p className="text-center">
            <span>&copy; {(new Date()).getFullYear()} {info.name}.</span>{" "}
            <span>All Rights Reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SalesFooter;