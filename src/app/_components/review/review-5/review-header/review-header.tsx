import React, { useState } from "react";
import Image from "next/image";

import { siteProduct } from "@/lib/site-info";

const ReviewHeader = () => {
  const [ isMenuActive, setIsMenuActive ] = useState(false);

  return (
    <>
    <div className="w-full sticky -top-[1px] z-50 h-[60px] md:h-[70px] flex justify-center items-center bg-[#fff] shadow-[0_3px_4px_0px_rgba(0,0,0,0.1)]">
      <div className="w-full max-w-[1200px] px-4 py-2 flex justify-between items-center ">
        <a href="/" className="relative z-10">
          <Image
            src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/392612fc-a13b-43dc-369d-38a0a0648300/public"
            alt={siteProduct}
            width={300}
            height={42}
            className="w-[156px] md:w-[197px]"
          />
        </a>

        <nav className={`absolute top-[0] left-[0px] w-full h-dvh pt-[60px] md:pt-[0px] bg-[#fff] md:static md:w-[auto] md:h-[auto] md:translate-y-[0px] ${isMenuActive ? '' : '-translate-y-full'}`}>
          <ul className="md:flex md:items-center border-t-[1px] border-[#ddd] md:border-t-[0px]">
            <li className="md:p-[0_15px_0_0] lg:p-[0_20px_0_0] border-b-[1px] border-[#ddd] md:border-b-[0px] md:border-r-[2px] md:border-[#ccc]">
              <a className="flex p-[17px_20px] md:p-[0px] text-[14px] md:text-[15px] lg:text-[16px] md:leading-[18px] tracking-[0.3px] md:tracking-[0.2px] md:font-semibold text-[#000] hover:text-[rgba(0,0,0,.6)] transition ease-in-out duration-250" href="/about">Who Are We?</a>
            </li>
            <li className="md:p-[0_15px] lg:p-[0_20px] border-b-[1px] border-[#ddd] md:border-b-[0px] md:border-r-[2px] md:border-[#ccc]">
              <a className="flex p-[17px_20px] md:p-[0px] text-[14px] md:text-[15px] lg:text-[16px] md:leading-[18px] tracking-[0.3px] md:tracking-[0.2px] md:font-semibold text-[#000] hover:text-[rgba(0,0,0,.6)] transition ease-in-out duration-250" href="/contact-us">Get in Touch</a>
            </li>
            <li className="md:p-[0_15px] lg:p-[0_20px] border-b-[1px] border-[#ddd] md:border-b-[0px] md:border-r-[2px] md:border-[#ccc]">
              <a className="flex p-[17px_20px] md:p-[0px] text-[14px] md:text-[15px] lg:text-[16px] md:leading-[18px] tracking-[0.3px] md:tracking-[0.2px] md:font-semibold text-[#000] hover:text-[rgba(0,0,0,.6)] transition ease-in-out duration-250" href="/terms-conditions">Terms of Use</a>
            </li>
            <li className="md:p-[0_0_0_15px] lg:p-[0_0_0_20px] border-b-[1px] border-[#ddd] md:border-b-[0px]">
              <a className="flex p-[17px_20px] md:p-[0px] text-[14px] md:text-[15px] lg:text-[16px] md:leading-[18px] tracking-[0.3px] md:tracking-[0.2px] md:font-semibold text-[#000] hover:text-[rgba(0,0,0,.6)] transition ease-in-out duration-250" href="/privacy-policy">Privacy Policy</a>
            </li>
          </ul>
        </nav>

        <button className="md:hidden relative z-10 p-[0px]" onClick={() => setIsMenuActive(prev => !prev)}>
          <span className={`flex w-[25px] h-[2px] bg-[#000] transition ease-in-out duration-400 ${isMenuActive ? '-rotate-45 -translate-x-[4px] translate-y-[7px]' : ''}`}></span>
          <span className={`flex w-[25px] h-[2px] m-[5px_0] bg-[#000] transition ease-in-out duration-400 ${isMenuActive ? 'opacity-0' : ''}`}></span>
          <span className={`flex w-[25px] h-[2px] bg-[#000] transition ease-in-out duration-400 ${isMenuActive ? 'rotate-45 -translate-x-[4px] -translate-y-[7px]' : ''}`}></span>
        </button>
      </div>
    </div>
    </>
  );
};

export default ReviewHeader;