import React from "react";
import { Poppins } from "next/font/google";

import AppButton from "@/app/_components/checkout/checkout-2/_components/app-button";

const poppins = Poppins({weight: ["400", "500", "600", "700"], subsets: ["latin"] });

const CheckoutFooter = () => {
  return (
    <footer>
      <div className="relative">
        <div className="absolute left-0 bottom-[calc(100%-1px)] -top-[1px] w-full bg-[#ffa500] -z-[1]"></div>
        <div className="relative max-h-[150px] bg-none overflow-hidden translate-y-[1px]">
          <svg className="waves-animated-1 block w-full h-auto max-h-[30px] lg:max-h-[60px] text-[#ffa500] overflow-hidden" xmlns="http://www.w3.org/2000/svg"
               xlinkHref="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0
              58-18 88-18s
              58 18 88 18
              58-18 88-18
              58 18 88 18
              v44h-352z"></path>
            </defs>
            <g className="parallax1">
              <use xlinkHref="#gentle-wave" x="50" y="3" fill="currentColor"></use>
            </g>
            <g className="parallax2">
              <use xlinkHref="#gentle-wave" x="50" y="0" fill="currentColor"></use>
            </g>
            <g className="parallax3">
              <use xlinkHref="#gentle-wave" x="50" y="9" fill="currentColor"></use>
            </g>
            <g className="parallax4">
              <use xlinkHref="#gentle-wave" x="50" y="6" fill="currentColor"></use>
            </g>
          </svg>
        </div>
      </div>
      <div className="bg-[#ffa500] text-[rgba(253,251,247,.9)]">
        <div className="w-full max-w-[1330px] mx-auto px-[15px]">
          <div className="flex flex-col md:flex-row md:flex-wrap p-[24px_0_15px] md:p-[32px_0_20px]">
            <nav className="md:w-1/3 mb-[40px] md:mb-[20px]">
              <ul>
                <li className="py-[8px]"><a className="text-[14px] leading-[25px]" href="#">About us</a></li>
                <li className="py-[8px]"><a className="text-[14px] leading-[25px]" href="#">Contact us</a></li>
                <li className="py-[8px]"><a className="text-[14px] leading-[25px]" href="#">Privacy policy</a></li>
                <li className="py-[8px]"><a className="text-[14px] leading-[25px]" href="#">Shipping policy</a></li>
                <li className="py-[8px]"><a className="text-[14px] leading-[25px]" href="#">Refund policy</a></li>
                <li className="py-[8px]"><a className="text-[14px] leading-[25px]" href="#">Terms of service</a></li>
              </ul>
            </nav>
            <div className="md:w-1/3 mb-[40px] md:mb-[20px]">
              <h2 className={`mb-[20px] text-[20px] md:text-[24px] leading-[26px] text=[#fdfbf7] font-bold tracking-[0.8px] ${poppins.className}`}>Subscribe to our emails</h2>
              <p className="mb-[10px] md:mb-[15px] text-[15px] md:text-[16px] leading-[27px]">Stay updated on exclusive offers and latest arrivals – subscribe to our newsletter now for special discounts and insider deals!</p>
              <form>
                <input type="text" placeholder="Email" className="w-full h-[45px] mb-[10px] p-[15px] border-[1px] bg-[transparent] border-[#fdfbf7] rounded-[6px] text-[16px] text-[#fdfbf7] placeholder-[#fdfbf7]"/>
                <AppButton classes="w-full" variant="secondary">Sing up</AppButton>
              </form>
            </div>
            <div className="w-full">
              <p className="text-center text-[11px] leading-[14px]">
                &copy; {(new Date()).getFullYear()}, Laneyeddys Store Powered by Shrine
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default CheckoutFooter;