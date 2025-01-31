import React from "react";
import Image from "next/image";
import {Inter} from "next/font/google";

import { siteProduct } from "@/lib/site-info";

const inter = Inter({ subsets: ["latin"] });

const FooterLink = ({ url, isLastLink = false, children }: { url: string, isLastLink?: boolean, children: React.ReactNode} ) => (
  <li className={`flex items-center h-[14px] p-[0_5px] md:p-[0_10px] ${!isLastLink && 'border-r-[1px] border-r-[#000]'}`}>
    <a href={url} className="text-[13px] leading-[13px] md:text-[14px] md:leading-[14px] tracking-[0.5px]">{children}</a>
  </li>
);

const ReviewFooter = () => {
  return (
    <footer className={`p-[30px_0] md:p-[40px_0] text-center ${inter.className}`}>
      <div className="w-full max-w-[1200px] flex flex-col items-center mx-[auto] px-4">
        <a href="/" className="flex w-[150px] md:w-[197px] m-[0_auto_20px] md:m-[0_auto_30px]">
          <Image
            src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/392612fc-a13b-43dc-369d-38a0a0648300/public"
            alt={siteProduct}
            width={300}
            height={42}
          />
        </a>

        <nav className="mb-[8px] md:mb-[15px]">
          <ul className="flex flex-wrap justify-center">
            <FooterLink url="/about">Who Are We?</FooterLink>
            <FooterLink url="/contact-us">Get in Touch</FooterLink>
            <FooterLink url="/terms-conditions">Terms of Use</FooterLink>
            <FooterLink url="/privacy-policy" isLastLink={true}>Privacy Policy</FooterLink>
          </ul>
        </nav>

        <p className="max-w-[900px] m-[0_auto_15px] text-[11px] leading-[16px] text-[#7b7b7b]">Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt
          tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros
          faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magnatrum.
          Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
          Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet
          adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
          Maecenas nec odio et ante tincidunt te
        </p>

        <div className="text-[14px] leading-[20px] md:leading-[22px] tracking-[0.3px]">
          <span>&copy; {(new Date()).getFullYear()} Reviews Comparisons. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default ReviewFooter;