import { useState, useEffect } from "react";
import { CheckoutPageType } from "@/interfaces/checkoutPage";
import { ProductInfoType } from "@/interfaces/productInfo";
import { delay } from "@/app/_utils/delay";

type QuantityProps = {
  info: CheckoutPageType;
  setProduct: (product: ProductInfoType) => void;
  couponActive: boolean;
};

// Select the number of products to purchase
const useQuantitySelector = ({
  info,
  setProduct,
  couponActive,
}: QuantityProps) => {
  const handleProductClick = (
    productNum: number,
    productPrice: number,
    productShipping: number,
    productShippingId: number,
    productOfferId: number,
    productStickyId: number
  ) => {
    setProduct({
      product: productNum,
      productName: `${productNum + 1}x ${info.product.name}`,
      productPrice: productPrice.toString(),
      productShipping: productShipping.toString(),
      productShippingId: productShippingId.toString(),
      productOfferId: productOfferId.toString(),
      productStickyId: productStickyId.toString(),
    });
  };

  const [price1, setPrice1] = useState(Number(info.product.price1));
  const [price2, setPrice2] = useState(Number(info.product.price2));
  const [price3, setPrice3] = useState(Number(info.product.price3));
  const [price4, setPrice4] = useState(Number(info.product.price4));

  const [showCouponFlag, setShowCouponFlag] = useState(false);

  useEffect(() => {
    function scrollIfNotVisible(elementId: string) {
      const element = document.getElementById(elementId);

      if (!element) return; // Exit if the element is not found

      const rect = element.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;

      // Check if the element is completely within the viewport
      const isCompletelyVisible =
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= viewportHeight &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth);

      // If not fully visible, scroll into view
      if (!isCompletelyVisible) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center", // Adjust this if you want it to align differently
        });
      }
    }

    const changePriceDrama = async () => {
      scrollIfNotVisible("quantity-selector");
      document.getElementById("price1")!.style.background = "#5acd65";
      await delay(200);
      setPrice1(price1 - parseFloat(info.product.couponValue));
      document.getElementById("price1")!.style.background = "none";
      document.getElementById("price2")!.style.background = "#5acd65";
      await delay(200);
      setPrice2(price2 - parseFloat(info.product.couponValue));
      document.getElementById("price2")!.style.background = "none";
      document.getElementById("price3")!.style.background = "#5acd65";
      await delay(200);
      setPrice3(price3 - parseFloat(info.product.couponValue));
      document.getElementById("price3")!.style.background = "none";
      document.getElementById("price4")!.style.background = "#5acd65";
      await delay(200);
      setPrice4(price4 - parseFloat(info.product.couponValue));
      document.getElementById("price4")!.style.background = "none";
      setShowCouponFlag(true);
    };
    if (couponActive) {
      changePriceDrama();
    }
  }, [couponActive]);

  return {
    handleProductClick,
    price1,
    price2,
    price3,
    price4,
  };
};

export default useQuantitySelector;
