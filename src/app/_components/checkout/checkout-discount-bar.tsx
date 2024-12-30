import React from "react";
import Image from "next/image";
import { CheckoutPageType } from "@/interfaces/checkoutPage";
import { siteProduct } from "@/lib/site-info";
import { PriceDisplaySimple } from "./checkout-price-display";
import useCheckoutDiscountBar from "./hooks/useCheckoutDiscountBar";

type DiscountProps = {
  product: number;
  info: CheckoutPageType;
  couponActive: boolean;
  country: string;
};

//shows the current discount off of full pricer
const DiscountBar = ({
  product,
  info,
  couponActive,
  country,
}: DiscountProps) => {
  const { currentDiscount, currentPrice} = useCheckoutDiscountBar({
    product,
    info,
    couponActive,
    country,
  });

  return (
    <div className="flex w-full items-center">
      <Image
        src={currentDiscount.src}
        width={70}
        height={70}
        alt={currentDiscount.alt}
        className="object-scale-down w-1/3 max-w-[70px] sm:w-auto"
      />
      <div className="flex flex-col flex1 pl-4">
        <p className="text-[#d91616] text-[17px] sm:text-[20px] font-bold">
          Your {currentDiscount.percent} Discount{" "}
          {(couponActive && (
            <>
              {" "}
              <span className="text-blue-600 underline">
                & ${info.product.couponValue} Off Coupon
              </span>{" "}
              Have Been Applied
            </>
          )) || <>Has Been Applied </>}{" "}
        </p>
        <p className="text-[14px] font-bold">
          {siteProduct} is available at the price of{" "}
          <span className="line-through">
            <PriceDisplaySimple
              priceUSD={Number(currentDiscount.oldPrice)}
              countryCode={country}
              digits={0}
            />
            {/* {currentDiscount.oldPrice} */}
          </span>{" "}
          <span className="text-[#27ae60]">
            <PriceDisplaySimple
              priceUSD={currentPrice}
              countryCode={country}
              digits={2}
            />
            {/* ${currentPrice.toFixed(2)} */}
          </span>{" "}
          ({currentDiscount.percent} Discount Per Unit)
        </p>
      </div>
    </div>
  );
};

export default DiscountBar;
