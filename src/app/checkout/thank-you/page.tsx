import React from "react";
import ThankYouPage from "../../_components/thank-you-page";
import { Work_Sans } from "next/font/google";
import type { Metadata } from "next";
import { siteProduct } from "@/lib/site-info";

export const metadata: Metadata = {
  title: `Thank You for Ordering ${siteProduct}`,
  description: `Read Your Full Order Details for ${siteProduct}`,
};

const workSans = Work_Sans({ subsets: ["latin"] });

const Page = () => {
  return (
    <div className={workSans.className}>
      <ThankYouPage />
    </div>
  );
};

export default Page;
