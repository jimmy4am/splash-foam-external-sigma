import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { ReviewPostType } from "@/interfaces/reviewPost";

type Props = {
  title: string;
  compareLink: string;
};

// Add this type helper
type ProductKey =
  | "product1"
  | "product2"
  | "product3"
  | "product4"
  | "product5";

const SingleReviewsSidebar = ({ title, compareLink }: Props) => {
  const [post, setPost] = useState<ReviewPostType | null>(null);
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`/api/posts/${compareLink.substring(1)}`);
      const data = await res.json();
      setPost(data);
    };
    fetchPost();
  }, [compareLink]);

  return (
    <>
      {post && (
        <div className="flex flex-col w-full bg-[#eee] px-2 py-4 mt-8">
          <h3 className="text-[16px] px-2 mb-4 text-center">{title}</h3>
          {Array.from({ length: 5 }).map((_, index) => {
            const productNumber = `product${index + 1}` as ProductKey;
            const product = post[productNumber];
            const isActive = product?.reviewCta === path;
            const firstProduct = index === 0;
            return (
              <a key={index} href={product?.reviewCta || product.cta}>
                <div
                  className={`flex w-full px-2  items-center hover:underline cursor-pointer py-4  ${
                    isActive
                      ? "border-[2px] border-green-500 bg-green-200/20"
                      : ""
                  } ${
                    firstProduct &&
                    "border-blue-500 border-[2px] bg-blue-200/20"
                  } rounded-md `}
                >
                  <div className="w-1/3 flex justify-center items-center">
                    <Image
                      src={product?.image}
                      width={200}
                      height={200}
                      alt="Product Image"
                      className="w-full object-scale-down"
                    />
                  </div>
                  <div className="w-2/3 pl-3">
                    <p
                      className={`text-[14px] font-thin line-clamp-3 ${
                        isActive ? "font-bold" : ""
                      }`}
                    >
                      {product?.name}
                    </p>
                    <p
                      className={`text-[12px] mt-2 font-bold ${
                        isActive ? "text-green-700" : "text-blue-700"
                      }`}
                    >
                      Vist Site &gt;
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
          {compareLink && path !== compareLink && (
            <a href={compareLink} className="w-full mt-4 mb-4 px-4">
              <button className="text-[16px] font-bold w-full px-2 py-1 mt-6 border-[2px] border-[#777] rounded-md hover:bg-[#999]">
                Compare All &gt;
              </button>
            </a>
          )}
        </div>
      )}
    </>
  );
};

export default SingleReviewsSidebar;
