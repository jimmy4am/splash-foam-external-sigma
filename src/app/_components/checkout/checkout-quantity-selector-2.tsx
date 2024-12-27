import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CheckoutPageType } from "@/interfaces/checkoutPage";
import { ProductInfoType } from "@/interfaces/productInfo";
import { Squares2X2Icon, FireIcon, CheckIcon, StarIcon } from "@heroicons/react/24/solid";
import { delay } from "@/app/_utils/delay";
import { PriceDisplaySimple2 } from "./checkout-price-display-2";

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

    const baseClassNames = 'relative w-full mb-5 md:mb-6 p-3 md:p-4 border-[2px] border-[#c2c2c2] rounded-md cursor-pointer transition-all';
    const activeClassNames = 'bg-[#ffffcb] border-[#126abc] shadow-[0_0_10px_2px_rgba(0,0,0,0.1)]';

    console.log('info',info)

    return (
        <>
            <div className="flex w-full items-center mb-6" id="quantity-selector">
                <Squares2X2Icon className="h-[40px] w-[40px] mr-2"/>
                <div>
                    <h3 className="text-[23px] leading-[25px] sm:text-[26px] sm:leading-[26px] lg:text-[28px] lg:leading-[28px] font-bold">Select Quantity</h3>
                    <p className="text-[14px] leading-[20px] lg:text-[15px] lg:leading-[21px]">How many splash foams do you want?</p>
                </div>
            </div>
            <div className="flex mb-6 p-3 bg-[#ffe7e7] items-center text-[17px] leading-[21px] font-medium">
                <FireIcon className="h-[18px] w-[18px] mr-2 text-[#e32d2d]"/>
                <span className="mr-2 text-[#e32d2d] font-bold">High Demand:</span>
                100 people are looking this offer!
            </div>

            {/*CARD*/}
            <div
                className={`${baseClassNames} ${product.product === 0 && activeClassNames}`}
                onClick={() => {
                    handleProductClick(
                        0,
                        Number(info.product.price1),
                        Number(info.product.ship1),
                        Number(info.product.shippingId1),
                        Number(info.product.offerId1),
                        Number(info.product.stickyId1)
                    );
                }}
            >
                <div className="flex items-center mb-5">
                    {product.product === 0 ? (
                        <span className="flex items-center justify-center w-[22px] h-[22px] mr-4 bg-[#000] rounded border-[1px] border-[#000]">
                                <CheckIcon className="h-[16px] w-[16px] text-[#fff]"/>
                            </span>
                    ) : (
                        <span className="flex w-[22px] h-[22px] mr-4 bg-[#fff] rounded border-[1px] border-[#3e3e3e]"></span>
                    )
                    }
                    <p className="text-xl font-bold">Buy 1 Splash Foaming Toilet Cleaner</p>
                </div>
                <div className="flex justify-between">
                    <Image
                        src={info.product.image1}
                        width={120}
                        height={120}
                        alt="Quantity 1"
                    />
                    <div className="flex flex-col items-end">
                        <p className="relative text-[16px] leading-[16px] md:text-lg text-[#000] before:absolute before:-left-[15%] before:top-[6px] md:before:top-[12px] before:-rotate-12 before:flex before:content-[''] before:w-[130%] before:h-[2px] before:bg-[#f00]">
                            <PriceDisplaySimple2
                                priceUSD={parseFloat(info.product.ogPrice1)}
                                countryCode={country}
                                digits={0}
                            />
                        </p>
                        <p className="mb-1 text-[28px] leading-[28px] md:text-3xl font-extrabold">
                            <PriceDisplaySimple2
                                priceUSD={price1}
                                countryCode={country}
                                digits={2}
                            />
                        </p>
                        <p className="text-[17px] leading-[17px] md:0text-[19px] md:leading-[19px] font-bold text-[#26b80e]">
                            You save {' '}
                            <PriceDisplaySimple2
                                priceUSD={parseFloat(info.product.ogPrice1) - price1}
                                countryCode={country}
                                digits={2}
                            />
                        </p>
                    </div>
                </div>
            </div>

            {/*CARD*/}
            <div
                className={`mt-6 ${baseClassNames} ${product.product === 1 && activeClassNames}`}
                onClick={() => {
                    handleProductClick(
                        1,
                        Number(info.product.price2),
                        Number(info.product.ship2),
                        Number(info.product.shippingId2),
                        Number(info.product.offerId2),
                        Number(info.product.stickyId2)
                    );
                }}
            >
                <div className="absolute -top-[30px] left-[50px] flex items-center h-[30px] px-3 py-2 bg-[#257bca] rounded-t-lg text-[12px] leading-[12px] text-[#fff] font-bold uppercase tracking-wider ">
                    <StarIcon className="h-[14px] w-[14px] mr-2 text-[#f2d522]" /> Bestseller
                </div>
                <div className="flex items-center mb-5">
                    {product.product === 1 ? (
                        <span
                            className="flex items-center justify-center w-[22px] h-[22px] mr-4 bg-[#000] rounded border-[1px] border-[#000]">
                                <CheckIcon className="h-[16px] w-[16px] text-[#fff]"/>
                            </span>
                    ) : (
                        <span
                            className="flex w-[22px] h-[22px] mr-4 bg-[#fff] rounded border-[1px] border-[#3e3e3e]"></span>
                    )
                    }
                    <p className="text-xl font-bold">Buy 2 Splash Foaming Toilet Cleaner</p>
                </div>
                <div className="flex justify-between">
                    <div className="relative">
                        <Image
                            src={info.product.image2}
                            width={120}
                            height={120}
                            alt="Quantity 2"
                        />
                        <div className="absolute  -top-[20px] -right-[40px] grow-0 shrink-0 basis-16">
                            <Image
                                src={'/images/save-seal.png'}
                                width={76}
                                height={76}
                                alt={'56% Discount Badge'}
                                className="object-scale-down"
                            />
                            <span
                                className="absolute w-full h-full top-0 text-[20px] pt-4 leading-[22px] uppercase text-center font-extrabold text-[#FFF]">
                                56% off
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                        <p className="relative text-[16px] leading-[16px] md:text-lg text-[#000] before:absolute before:-left-[15%] before:top-[6px] md:before:top-[12px] before:-rotate-12 before:flex before:content-[''] before:w-[130%] before:h-[2px] before:bg-[#f00]">
                            <PriceDisplaySimple2
                                priceUSD={parseFloat(info.product.ogPrice2)}
                                countryCode={country}
                                digits={0}
                            />
                        </p>
                        <p className="mb-1 text-[28px] leading-[28px] md:text-3xl font-extrabold">
                            <PriceDisplaySimple2
                                priceUSD={price2}
                                countryCode={country}
                                digits={2}
                            />
                        </p>
                        <p className="text-[17px] leading-[17px] md:0text-[19px] md:leading-[19px] font-bold text-[#26b80e]">
                            You save {' '}
                            <PriceDisplaySimple2
                                priceUSD={parseFloat(info.product.ogPrice2) - price2}
                                countryCode={country}
                                digits={2}
                            />
                        </p>
                    </div>
                </div>
            </div>

            {/*CARD*/}
            <div
                className={`${baseClassNames} ${product.product === 2 && activeClassNames}`}
                onClick={() =>
                    handleProductClick(
                        2,
                        Number(info.product.price3),
                        Number(info.product.ship3),
                        Number(info.product.shippingId3),
                        Number(info.product.offerId3),
                        Number(info.product.stickyId3)
                    )
                }
            >
                <div className="flex items-center mb-5">
                    {product.product === 2 ? (
                        <span
                            className="flex items-center justify-center w-[22px] h-[22px] mr-4 bg-[#000] rounded border-[1px] border-[#000]">
                                <CheckIcon className="h-[16px] w-[16px] text-[#fff]"/>
                            </span>
                    ) : (
                        <span
                            className="flex w-[22px] h-[22px] mr-4 bg-[#fff] rounded border-[1px] border-[#3e3e3e]"></span>
                    )
                    }
                    <p className="text-xl font-bold">Buy 3 Splash Foaming Toilet Cleaner</p>
                </div>
                <div className="flex justify-between">
                    <div className="relative">
                        <Image
                            src={info.product.image3}
                            width={120}
                            height={120}
                            alt="Quantity 3"
                        />
                        <div className="absolute  -top-[20px] -right-[40px] grow-0 shrink-0 basis-16">
                            <Image
                                src={'/images/save-seal.png'}
                                width={76}
                                height={76}
                                alt={'58% Discount Badge'}
                                className="object-scale-down"
                            />
                            <span
                                className="absolute w-full h-full top-0 text-[20px] pt-4 leading-[22px] uppercase text-center font-extrabold text-[#FFF]">
                                58% off
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                        <p className="relative text-[16px] leading-[16px] md:text-lg text-[#000] before:absolute before:-left-[15%] before:top-[6px] md:before:top-[12px] before:-rotate-12 before:flex before:content-[''] before:w-[130%] before:h-[2px] before:bg-[#f00]">
                            <PriceDisplaySimple2
                                priceUSD={parseFloat(info.product.ogPrice3)}
                                countryCode={country}
                                digits={0}
                            />
                        </p>
                        <p className="mb-1 text-[28px] leading-[28px] md:text-3xl font-extrabold">
                            <PriceDisplaySimple2
                                priceUSD={price3}
                                countryCode={country}
                                digits={2}
                            />
                        </p>
                        <p className="text-[17px] leading-[17px] md:0text-[19px] md:leading-[19px] font-bold text-[#26b80e]">
                            You save {' '}
                            <PriceDisplaySimple2
                                priceUSD={parseFloat(info.product.ogPrice3) - price3}
                                countryCode={country}
                                digits={2}
                            />
                        </p>
                    </div>
                </div>
            </div>

            {/*CARD*/}
            <div
                className={`${baseClassNames} ${product.product === 3 && activeClassNames}`}
                onClick={() =>
                    handleProductClick(
                        3,
                        Number(info.product.price4),
                        Number(info.product.ship4),
                        Number(info.product.shippingId4),
                        Number(info.product.offerId4),
                        Number(info.product.stickyId4)
                    )
                }
            >
                <div className="flex items-center mb-5">
                    {product.product === 3 ? (
                        <span
                            className="flex items-center justify-center w-[22px] h-[22px] mr-4 bg-[#000] rounded border-[1px] border-[#000]">
                                <CheckIcon className="h-[16px] w-[16px] text-[#fff]"/>
                            </span>
                    ) : (
                        <span
                            className="flex w-[22px] h-[22px] mr-4 bg-[#fff] rounded border-[1px] border-[#3e3e3e]"></span>
                    )
                    }
                    <p className="text-xl font-bold">Buy 4 Splash Foaming Toilet Cleaner</p>
                </div>
                <div className="flex justify-between">
                    <div className="relative">
                        <Image
                            src={info.product.image4}
                            width={120}
                            height={120}
                            alt="Quantity 4"
                        />
                        <div className="absolute  -top-[20px] -right-[40px] grow-0 shrink-0 basis-16">
                            <Image
                                src={'/images/save-seal.png'}
                                width={76}
                                height={76}
                                alt={'60% Discount Badge'}
                                className="object-scale-down"
                            />
                            <span
                                className="absolute w-full h-full top-0 text-[20px] pt-4 leading-[22px] uppercase text-center font-extrabold text-[#FFF]">
                                60% off
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                        <p className="relative text-[16px] leading-[16px] md:text-lg text-[#000] before:absolute before:-left-[15%] before:top-[6px] md:before:top-[12px] before:-rotate-12 before:flex before:content-[''] before:w-[130%] before:h-[2px] before:bg-[#f00]">
                            <PriceDisplaySimple2
                                priceUSD={parseFloat(info.product.ogPrice4)}
                                countryCode={country}
                                digits={0}
                            />
                        </p>
                        <p className="mb-1 text-[28px] leading-[28px] md:text-3xl font-extrabold">
                            <PriceDisplaySimple2
                                priceUSD={price4}
                                countryCode={country}
                                digits={2}
                            />
                        </p>
                        <p className="text-[17px] leading-[17px] md:0text-[19px] md:leading-[19px] font-bold text-[#26b80e]">
                            You save {' '}
                            <PriceDisplaySimple2
                                priceUSD={parseFloat(info.product.ogPrice4) - price4}
                                countryCode={country}
                                digits={2}
                            />
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default QuantitySelector2;
