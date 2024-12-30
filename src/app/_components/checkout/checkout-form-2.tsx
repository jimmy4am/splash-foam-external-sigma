"use client";
import React from "react";
import { CheckoutPageType } from "@/interfaces/checkoutPage";
import DiscountBar2 from "./checkout-discount-bar-2";
import QuantitySelector2 from "./checkout-quantity-selector-2";
import CustomerInfo2 from "./checkout-customer-info-2";
import PaymentOptions2 from "./checkout-payment-options-2";
import MobilePaymentOptions2 from "./checkout-mobile-payment-options-2";
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
      <div className="flex w-full relative flex-col items-center">
        <div id="payment-container" />
        <div className="flex w-full max-w-[1170px] px-4">
          <div className="flex flex-col w-full py-4 lg:w-[53%] lg:pr-[50px] lg:pt-[50px] lg:pb-[70px]">
            <DiscountBar2
              product={product.product}
              info={info}
              couponActive={customerInfo.couponActive}
              country={country}
            />
            <div className="mt-[35px]">
              <QuantitySelector2
                product={product}
                info={info}
                setProduct={setProduct}
                couponActive={customerInfo.couponActive}
                country={country}
              />
            </div>
            <div className="mt-[50px]">
              <MobilePaymentOptions2 firePaypal={firePaypal} loading={loading} />
            </div>
            <div className="mt-[35px]">
              <CustomerInfo2 formik={formik} />
            </div>
            <div className="mt-[35px]">
              <PaymentOptions2
                info={info}
                product={product}
                formik={formik}
                loading={loading}
                country={country}
                setCountry={setCountry}
              />
            </div>
          </div>
          <div className="flex flex-col lg:w-[47%]"></div>
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
