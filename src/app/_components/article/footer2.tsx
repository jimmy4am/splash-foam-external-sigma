import Image from "next/image";
import { siteLogo, siteProduct, rootUrl } from "@/lib/site-info";

const Footer2 = () => {
  return (
    <footer className="flex flex-col  w-full">
      <div className="bg-[#f5f5f5] flex flex-col items-center py-12">
        <div className="flex flex-col lg:flex-row w-full max-w-[1024px] justify-center items-center font-bold">
          <div className="px-4 mb-2 text-[16px] text-[#333] hover:opacity-75 cursor-pointer">
            <a href="/contact-us">Contact Us</a>
          </div>
          <div className="px-4 mb-2 text-[16px] text-[#333] hover:opacity-75 cursor-pointer">
            <a href="/shipping-returns">Shipping & Returns</a>
          </div>
          <div className="px-4 mb-2 text-[16px] text-[#333] hover:opacity-75 cursor-pointer">
            <a href="/privacy-policy">Privacy Policy</a>
          </div>

          <div className="px-4 mb-2 text-[16px] text-[#333] hover:opacity-75 cursor-pointer">
            <a href="/terms-conditions">Terms & Conditions</a>
          </div>
          <div className="px-4 mb-2 text-[16px] text-[#333] hover:opacity-75 cursor-pointer">
            <a href="/mobile-terms-conditions">SMS Terms</a>
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
            width={300}
            height={300}
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
            &copy; {new Date().getFullYear()} {rootUrl}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
