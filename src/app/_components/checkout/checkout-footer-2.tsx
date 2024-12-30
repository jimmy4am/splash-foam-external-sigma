import React from 'react';
import { CheckoutPageType } from '@/interfaces/checkoutPage';
import Image from "next/image";
import { siteProduct } from "@/lib/site-info";
import Link from "next/link";

type Props = {
  info: CheckoutPageType;
};
const CheckoutFooter2 = ({info}: Props) => {
  return (
    <footer className="w-full py-[40px] px-4 border-t-[#e0e0e0] border-t border-solid text-center">
      <div className="max-w-[1170px] relative mx-auto">
        <Image
          src={info.logo}
          width={280}
          height={107}
          alt={siteProduct}
          className="inline-block w-[140px] mb-[5px]"
        />
        <p className="text-[14px] leading-[20px] text-black tracking-[0.3px] mt-[20px]">
          <Link
            href="/contact-us"
            target="_blank"
            className="px-[10px]"
          >
            Contact Us
          </Link> |
          <Link
            href="/terms-conditions"
            target="_blank"
            className="px-[10px]"
          >
            Terms of Service
          </Link> |
          <Link
            href="/privacy-policy"
            target="_blank"
            className="px-[10px]"
          >
            Privacy Policy
          </Link> |
          <Link
            href="/shipping-returns"
            target="_blank"
            className="px-[10px]"
          >
            Shipping & Returns
          </Link> |
          <Link
            href="/mobile-terms-conditions"
            target="_blank"
            className="px-[10px]"
          >
            Mobile Terms
          </Link>
        </p>
        <p className="text-[14px] leading-[20px] text-black tracking-[0.3px] mt-[20px]">
          Copyright © 2024. {siteProduct}. All Rights Reserved.
        </p>
        <Image
          src={info.footer.card}
          width={640}
          height={54}
          alt="Cards"
          className="inline-block w-[320px] mt-[20px]"
        />
      </div>
    </footer>
  );
};

export default CheckoutFooter2;
