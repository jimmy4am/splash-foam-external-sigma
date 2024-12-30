import Image from "next/image";
import { CheckoutPageType } from "@/interfaces/checkoutPage";
import { ProductInfoType } from "@/interfaces/productInfo";
import { Cog6ToothIcon, CheckIcon, FireIcon, StarIcon } from "@heroicons/react/24/solid";
import { PriceDisplaySimple } from "./checkout-price-display";
import useCheckoutQuantitySelector from "./hooks/useCheckoutQuantitySelector";

type QuantityProps = {
  product: ProductInfoType;
  info: CheckoutPageType;
  setProduct: (product: ProductInfoType) => void;
  couponActive: boolean;
  country: string;
};

// Select the number of products to purchase
const QuantitySelector2 = ({
  product,
  info,
  setProduct,
  couponActive,
  country,
}: QuantityProps) => {
  const {
    handleProductClick,
    price1,
    price2,
    price3,
    price4,
  } = useCheckoutQuantitySelector({
    info,
    setProduct,
    couponActive,
  });

  const products= [
    {
      product: 0,
      productName: info.product.name,
      productPrice: String(price1),
      productInfoPrice: info.product.price1,
      productShipping: info.product.ship1,
      productShippingId: info.product.shippingId1,
      productOfferId: info.product.offerId1,
      productStickyId: info.product.stickyId1,
      productImage: info.product.image1,
      productOgPrice: info.product.ogPrice1,
      isPopular: false,
      discount: 50,
    },
    {
      product: 1,
      productName: info.product.name,
      productPrice: String(price2),
      productInfoPrice: info.product.price2,
      productShipping: info.product.ship2,
      productShippingId: info.product.shippingId2,
      productOfferId: info.product.offerId2,
      productStickyId: info.product.stickyId2,
      productImage: info.product.image2,
      productOgPrice: info.product.ogPrice2,
      isPopular: true,
      discount: 56,
    },
    {
      product: 2,
      productName: info.product.name,
      productPrice: String(price3),
      productInfoPrice: info.product.price3,
      productShipping: info.product.ship3,
      productShippingId: info.product.shippingId3,
      productOfferId: info.product.offerId3,
      productStickyId: info.product.stickyId3,
      productImage: info.product.image3,
      productOgPrice: info.product.ogPrice3,
      isPopular: false,
      discount: 58,
    },
    {
      product: 3,
      productName: info.product.name,
      productPrice: String(price4),
      productInfoPrice: info.product.price4,
      productShipping: info.product.ship4,
      productShippingId: info.product.shippingId4,
      productOfferId: info.product.offerId4,
      productStickyId: info.product.stickyId4,
      productImage: info.product.image4,
      productOgPrice: info.product.ogPrice4,
      isPopular: false,
      discount: 60,
    },
  ];

  return (
    <>
      <div
        id="quantity-selector"
        className="flex flex-col w-full"
      >
        <div className="flex items-center">
          <Cog6ToothIcon className="w-[50px]"/>
          <div className="pl-[10px] text-left">
            <h3 className="text-[28px] leading-[28px] text-black font-bold">Select Quantity</h3>
            <p className="text-[15px] leading-[21px] text-black tracking-[0.3px] mt-[5px]">
              How many {info.product.name} do you want?
            </p>
          </div>
        </div>

        <div
          className="bg-[#ffe7e7] inline-block w-full text-center mt-[25px] p-[10px] rounded-[5px]">
          <p className="text-[17px] leading-[21px] text-black font-medium">
            <FireIcon className="text-red-600 w-[20px] inline-block" />
            <span className="text-[#e32d2d] font-bold">High Demand:</span> 100 people are looking this offer!
          </p>
        </div>

        <div className="w-full">
          {products.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between"
              onClick={() => {
                handleProductClick(
                  item.product,
                  Number(item.productInfoPrice),
                  Number(item.productShipping),
                  Number(item.productShippingId),
                  Number(item.productOfferId),
                  Number(item.productStickyId)
                );
              }}
            >
              <label className={`
                w-full cursor-pointer min-h-[100px] relative flex items-center mt-[25px] p-[18px] rounded-[5px] border-2 border-solid
                ${product.product === index ? "shadow-[0px_0px_10px_2px_rgba(0,0,0,0.1)] border-[#126abc] bg-[#ffffcb]" : "border-[#c2c2c2]"}
                ${item.isPopular ? "mt-[45px]" : "mt-[25px]"}
              `}>
                {item.isPopular && (
                  <div className="absolute top-[-29px] text-[12px] leading-[12px] text-white font-bold tracking-[0.5px] uppercase m-0 pt-[9px] pb-[7px] px-[12px] rounded-[8px_8px_0_0] left-[50px] bg-[#257bca]">
                    <StarIcon className="inline-block w-[14px] mt-[-4px] mr-[8px] text-yellow-300" />
                    bestseller
                  </div>
                )}
                <div className="w-2/3 text-left">
                  <div className="flex items-center">

                    <span className={`w-[22px] h-[22px] inline-block border rounded-[4px] border-solid border-black mr-[10px] ${product.product === index ? 'bg-[#000]' : 'bg-white'}`}>
                        <CheckIcon className="text-[#fff]"/>
                    </span>

                    <p className="text-[20px] leading-[25px] font-bold text-black">Buy {index + 1} Pair</p>

                  </div>
                  <div className="inline-block w-full max-w-[255px] relative mt-[20px]">
                    <Image
                      src={item.productImage}
                      alt={item.productName}
                      className="block w-[438px]"
                      width={438}
                      height={204}
                    />
                    <div
                      className="bg-[url('/images/save-seal.png')] bg-no-repeat absolute top-[-42px] right-[-26px] w-[76px] h-[76px] text-center text-[20px] leading-[22px] text-white font-bold uppercase bg-[length:100%_100%] pt-[17px]">
                      {item.discount}%<br/>off
                    </div>

                  </div>
                </div>

                <div className="w-1/3 text-right">
                  <p>
                    <span className="inline-block relative text-black text-[17px] font-[normal] mb-[8px] after:content-[''] after:absolute after:w-[calc(100%_+_10px)] after:ml-[-5px] after:rotate-[-10deg] after:border-t-2 after:border-t-[#f00] after:border-solid after:left-0 after:top-3">
                      <PriceDisplaySimple
                        priceUSD={parseFloat(item.productOgPrice)}
                        countryCode={country}
                        digits={0}
                      />
                    </span>
                  </p>
                  <p
                    id={`price` + (index + 1)}
                    className="text-[30px] leading-[30px] text-black font-extrabold"
                  >
                    <PriceDisplaySimple
                      priceUSD={Number(item.productPrice)}
                      countryCode={country}
                      digits={2}
                    />
                  </p>
                  <p className="text-[19px] leading-[19px] font-bold text-[#26b80e] mt-[10px]">
                    You Save {' '}
                    <PriceDisplaySimple
                      priceUSD={Number(item.productOgPrice) - Number(item.productPrice)}
                      countryCode={country}
                      digits={2}
                    />
                  </p>

                </div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default QuantitySelector2;
