import React from "react";
import Image from "next/image";

import { SalesPageType } from "@/interfaces/salesPage";

type Props = {
  info: SalesPageType;
};

const FooterLink = ({ url, isLastChild = false, children }: { url: string, isLastChild?: boolean, children: React.ReactNode }) => (
  <li className="flex items-center h-[24px]">
    <a className={`flex px-[10px] ${!isLastChild && 'border-r-[1px] border-[#363636]'} hover:text-[#0073b7] leading-[19px] transition-all duration-250 ease-in-out`} href={url} target="_blank">
      {children}
    </a>
  </li>
)

const SalesFooter = ({ info }: Props) => {
  return (
    <footer className="py-[25px] md:py-[35px] lg:py-[45px] bg-[#fff]">
      <div className="w-full max-w-[1200px] mx-[auto] px-[15px] flex flex-col items-center">
        <a href="/" className="flex w-[94px] mb-[15px] md:mb-[20px]">
          <Image src={info.logo} width={200} height={102} alt={info.name} />
        </a>
        <div className="text-[14px] leading-[24px] md:text-[16px] text-[#363636] tracking-[0.5px]">
          <nav className="mb-[8px] md:mb-[10px]">
            <ul className="flex justify-center">
              <FooterLink url="/terms-conditions">Terms of Service</FooterLink>
              <FooterLink url="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink url="/contact-us" isLastChild>Contact Us</FooterLink>
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