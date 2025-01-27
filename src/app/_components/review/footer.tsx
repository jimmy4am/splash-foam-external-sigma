import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Author } from "@/interfaces/author";
import { sendGAEvent } from "@next/third-parties/google";

type Props = {
  author: Author;
};

const Footer = ({ author }: Props) => {
  const [email, setEmail] = useState<string>("");
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const parseUrl = () => {
    const url = new URL(window.location.href);
    const pathname = url.pathname; // Gets the slug without UTM parameters
    const searchParams = url.search; // Gets the query string
    return { slug: pathname, queryParams: searchParams };
  };

  const Subscribe = async (e: any) => {
    e.preventDefault();
    if (email) {
      try {
        const response = await fetch("/api/subscribe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            slug: parseUrl().slug,
            queryParams: parseUrl().queryParams,
          }),
        });

        const data = await response.json();

        if (data.success) {
          sendGAEvent("event", "subscribe", {
            email: email,
            slug: parseUrl().slug,
            queryParams: parseUrl().queryParams,
            time: new Date().toISOString(),
          });

          setSubscribed(true);
        } else {
          alert("Failed to subscribe. Please try again later.");
        }
      } catch (error) {
        console.error("Error adding document: ", error);
        alert("Failed to subscribe. Please try again later.");
      }
    }
  };

  return (
    <footer className="flex flex-col  w-full">
      <div className="bg-[#74bd74] flex flex-col items-center w-full">
        <h4 className="text-[32px] font-bold py-6 mt-6 text-white text-center">
          We Find 5-Star Products
        </h4>
        <h5 className="text-[#ffd700] text-[36px]">★★★★★</h5>
        <p className="text-white py-6 text-center">
          Subscribe to Consumer Trust Coalition for the latest product reviews.
        </p>
        {(!subscribed && (
          <form className="flex flex-col pb-12" onSubmit={Subscribe}>
            <input
              type="text"
              placeholder="Enter your email.."
              className="rounded-full bg-white text-gray-800 text-[18px] px-6 py-2 min-w-[300px] text-center"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="submit"
              value="Subscribe"
              className="bg-blue-900 mt-2 rounded-full px-6 py-2 text-[22px] font-bold text-white cursor-pointer hover:bg-blue-700"
            />
          </form>
        )) || (
          <p className="text-white py-6 mb-16 text-center text-[22px] underline">
            Thank you for subscribing!
          </p>
        )}
      </div>
      <div className="bg-[#f5f5f5] flex flex-col items-center py-12">
        {author && (
          <div className="flex flex-col md:flex-row items-center py-6 md:px-4 mb-20 md:mb-12">
            <Image
              src={author.picture}
              width={500}
              height={500}
              alt={author.name}
              className="rounded-lg w-[140px] object-cover border-4 border-white shadow-lg mb-4 md:mb-0"
            />
            <div className="flex px-6 flex-col justify-center text-center md:text-left md:justify-start flex-1 ">
              <h2 className="text-[18px] font-bold">Meet our Expert</h2>
              <div className="mt-2 mb-0 h-1 w-full bg-[#d9d8d8]" />
              <h3 className="text-[24px] text-[#333] py-4">{author.name}</h3>
              <p className="text-[16px] text-[#333]">{author.bio}</p>
            </div>
          </div>
        )}
        <div className="flex flex-col md:flex-row w-full max-w-[1024px] justify-center items-center">
          <div className="px-4 mb-2 text-[16px] text-[#333] hover:opacity-75 cursor-pointer">
            <a href="/about">About</a>
          </div>
          <div className="px-4 mb-2 text-[16px] text-[#333] hover:opacity-75 cursor-pointer">
            <a href="https://www.consumertrustcoalition.com/blog">Blog</a>
          </div>
          <div className="px-4 mb-2 text-[16px] text-[#333] hover:opacity-75 cursor-pointer">
            <a href="/privacy-policy">Privacy Policy</a>
          </div>
          <div className="px-4 mb-2 text-[16px] text-[#333] hover:opacity-75 cursor-pointer">
            <a href="/terms-conditions">Terms & Conditions</a>
          </div>
          <div className="px-4 mb-2 text-[16px] text-[#333] hover:opacity-75 cursor-pointer">
            <a href="/advertiser-disclosure">Advertiser Disclosure</a>
          </div>
        </div>
        <a href="/" className="px-4">
          <Image
            src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/392612fc-a13b-43dc-369d-38a0a0648300/public"
            width={500}
            height={500}
            alt="CTC Logo"
            className="mt-4 hover:opacity-75 cursor-pointer"
          />
        </a>
      </div>
      <div className="bg-[#59797c] flex flex-col items-center py-12">
        <div className="flex flex-col px-4 w-full max-w-[1024px] items-center">
          <Image
            src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/bd6de3fa-effd-4e6c-4111-33a613bb7900/public"
            width={120}
            height={120}
            alt="DMCA"
          />
          <p className="mt-6 text-[14px] text-center text-white">
            THIS IS AN ADVERTISEMENT AND NOT AN ACTUAL NEWS ARTICLE, BLOG, OR
            CONSUMER PROTECTION UPDATEMARKETING DISCLOSURE:
          </p>
          <p className="mt-6 text-[14px] text-center text-white">
            This website is a market place. As such you should know that the
            owner has a monetary connection to the product and services
            advertised on the site. The owner receives payment whenever a
            qualified lead is referred but that is the extent of it.
          </p>
          <p className="mt-6 text-[14px] text-center text-white">
            ADVERTISING DISCLOSURE: This website and the products & services
            referred to on the site are advertising marketplaces. This website
            is an advertisement and not a news publication. Any photographs of
            persons used on this site are models. The owner of this site and of
            the products and services referred to on this site only provides a
            service where consumers can obtain and compare.
          </p>
          <p className="mt-6 text-[14px] text-center text-white">
            As an Amazon Associate & Affiliate of other partners Consumer Trust
            Coalition may earn a commission from qualifying purchases made as a
            result of our reviews.
          </p>
          <p className="mt-6 text-[14px] text-center text-white">
            consumertrustcoalition.com ©{new Date().getFullYear()} All Rights
            Reserved.
          </p>
          <p className="mt-6 text-[14px] text-center text-white">
            Owned by 4am Media LLC
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
