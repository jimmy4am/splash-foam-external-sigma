import React from "react";
import Image from "next/image";
import { Raleway } from "next/font/google";
import { SalesPageType } from "@/interfaces/salesPage";
import { siteProduct } from "@/lib/site-info";
import BuyButton from "./buy-button";
import markdownStyles from "./markdown-sales-styles.module.css";

const raleway = Raleway({ subsets: ["latin"] });

type Props2 = {
  info: SalesPageType;
};

const InfoBox = ({ info }: Props2) => {
  return (
    <div
      className="flex w-full px-4 pt-8 pb-6 bg-blue-100 justify-center"
      id="overview"
    >
      <div className="flex w-full max-w-[1260px]">
        <div className="hidden lg:flex flex-col w-[45%] items-center justify-start lg:pr-6 pt-6">
          <div className="flex w-full mb-[-100px] justify-start">
            <Image
              src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/a059ef08-9b40-4fd1-8b15-76c3bdc34400/public"
              alt="Satisfaction Guaranteed"
              width={180}
              height={180}
              className="z-20 pl-[40px]"
            />
          </div>
          <Image
            src={info.info.image}
            alt={siteProduct}
            width={1200}
            height={1200}
          />
        </div>
        <div className="flex flex-col items-center w-[100%] lg:w-[55%] lg:justify-start py-6 text-center lg:text-left">
          <h4
            className={`text-[32px] lg:text-[50px] font-bold text-[#0082c0] ${raleway.className} leading-tight`}
          >
            {info.info.heading}
          </h4>
          <div
            dangerouslySetInnerHTML={{ __html: info.info.text }}
            className={markdownStyles["markdown"]}
          />
          <div className="flex lg:hidden flex-col w-full max-w-[400px] items-center justify-center">
            <div className="flex w-full mb-[-80px] justify-start">
              <Image
                src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/a059ef08-9b40-4fd1-8b15-76c3bdc34400/public"
                alt="Satisfaction Guaranteed"
                width={120}
                height={120}
                className="z-20"
              />
            </div>
            <Image
              src={info.info.image}
              alt={siteProduct}
              width={1200}
              height={1200}
              className="pl-[20px]"
            />
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: info.info.textBottom }}
            className={markdownStyles["markdown"]}
          />
          <BuyButton info={info} />
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
