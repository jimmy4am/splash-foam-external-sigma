"use client";
import React from "react";
import { CheckoutPageType } from "@/interfaces/checkoutPage";
import DiscountBar from "./checkout-discount-bar";
import QuantitySelector from "./checkout-quantity-selector";
import CustomerInfo from "./checkout-customer-info";
import PaymentOptions from "./checkout-payment-options";
import MobilePaymentOptions from "./checkout-mobile-payment-options";
import CheckoutCouponPop from "./checkout-coupon-pop";
import PaypalPop from "./checkout-paypal-pop";
import HandleSessionStart from "./checkout-handle-session-start";
import useCheckoutForm from "./hooks/useCheckoutForm";

type Props = {
  info: CheckoutPageType;
};

const CheckoutForm = ({ info }: Props) => {
  const {
    setCustomerInfo,
    product,
    customerInfo,
    country,
    setProduct,
    firePaypal,
    loading,
    formik,
    setCountry,
    activateCoupon,
    showPop,
    setShowPop,
    initialCustomerInfo,
    showPaypalPop,
    setShowPaypalPop,
    setLoading,
  } = useCheckoutForm({ info });

  return (
    <>
      <HandleSessionStart
        info={info}
        setCustomerInfo={setCustomerInfo}
        product={product}
      />
      <div className="flex  w-full relative flex-col items-center bg-[#f1f4f8]">
        <div id="payment-container" />
        <div className="flex w-full max-w-[1100px] sm:px-4 pb-12 flex-wrap">
          <div className="flex flex-col w-full  lg:w-1/2 px-2 lg:py-8 pt-4 sm:pt-8 pb-4">
            <div className="bg-white p-4 rounded-lg border-[1px] border-[#ddd] flex">
              <DiscountBar
                product={product.product}
                info={info}
                couponActive={customerInfo.couponActive}
                country={country}
              />
            </div>
            <div className="bg-white p-4 rounded-lg border-[1px] border-[#ddd] mt-4">
              <QuantitySelector
                product={product}
                info={info}
                setProduct={setProduct}
                couponActive={customerInfo.couponActive}
                country={country}
              />
            </div>
            <div className="bg-white p-4 rounded-lg border-[1px] border-[#ddd] mt-4 lg:hidden">
              <MobilePaymentOptions firePaypal={firePaypal} loading={loading} />
            </div>
            <div className="bg-white p-4 rounded-lg border-[1px] border-[#ddd] mt-4">
              <CustomerInfo formik={formik} />
            </div>
          </div>
          <div className="flex flex-col  w-full  lg:w-1/2 px-2 lg:py-8">
            <div className="bg-white p-4 rounded-lg border-[1px] border-[#ddd] ">
              <PaymentOptions
                info={info}
                product={product}
                formik={formik}
                loading={loading}
                firePaypal={firePaypal}
                country={country}
                setCountry={setCountry}
              />
            </div>
          </div>
        </div>
        <CheckoutCouponPop
          info={info}
          activateCoupon={activateCoupon}
          showPop={showPop}
          setShowPop={setShowPop}
          formik={formik}
          initialCustomerInfo={initialCustomerInfo}
          showPaypalPop={showPaypalPop}
          loading={loading}
        />
        <PaypalPop
          info={info}
          showPaypalPop={showPaypalPop}
          setShowPaypalPop={setShowPaypalPop}
          setLoading={setLoading}
          firePaypal={firePaypal}
        />
      </div>
    </>
  );
};

export default CheckoutForm;
