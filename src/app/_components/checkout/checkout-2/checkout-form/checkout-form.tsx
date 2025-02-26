import React from "react";
import { Poppins } from "next/font/google";
import { XMarkIcon } from "@heroicons/react/24/solid";

import { CheckoutPageType } from "@/interfaces/checkoutPage";
import { ProductInfoType } from "@/interfaces/productInfo";
import useCheckoutPaymentOptions from "@/app/_components/checkout/hooks/useCheckoutPaymentOptions";
import useCheckoutCustomerInfo from "@/app/_components/checkout/hooks/useCheckoutCustomerInfo";
import { PriceDisplaySimple } from "@/app/_components/checkout/checkout-price-display";
import AppButton from "@/app/_components/checkout/checkout-2/_components/app-button";
import CheckoutFormStatus from "@/app/_components/checkout/checkout-2/checkout-form/checkout-form-status";
import CheckoutStateSelector from "@/app/_components/checkout/checkout-2/checkout-form/checkout-state-selector";
import { countries, months, years } from "@/app/_components/checkout/checkout-2/checkout-form/constants";

const poppins = Poppins({weight: ["400", "500", "600", "700"], subsets: ["latin"] });

type Props = {
  info: CheckoutPageType;
  isFormVisible: boolean;
  setIsFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
  product: ProductInfoType;
  country: string;
  setCountry: (country: string) => void;
  loading: string;
  formik: any;
};

const CheckoutForm = ({ info, isFormVisible, setIsFormVisible, product, country, setCountry, loading, formik  }: Props) => {
  const { handleChange, formattedPhone} = useCheckoutCustomerInfo({ formik });
  const { addressInputRef, handleCountryChange } = useCheckoutPaymentOptions({ formik, setCountry });

  const handleClose = () => {
    setIsFormVisible(false);
    document.querySelector("body")!.style.overflow = 'auto';
  }

  return (
    <>
      {isFormVisible && <div onClick={handleClose} className="fixed inset-0 bg-[rgba(18,18,18,.5)] z-20"></div>}
      <CheckoutFormStatus loading={loading} />
      <div style={{ transform: `translateX(${isFormVisible ? '-100%' : '0'})`}} className="fixed top-0 bottom-0 w-full h-full left-[100%] max-w-[400px] p-[0_15px_25px] bg-[#fff] overflow-auto z-30 transition-transform duration-200 ease">
        <button onClick={handleClose} className="absolute top-[10px] right-[10px] p-[3px] border-[1px] border-[rgba(18,18,18,.6)] rounded-[6px]">
          <XMarkIcon className="w-[20px]"/>
        </button>


        <form onSubmit={formik.handleSubmit}>
          <div className="pt-[10px] pb-[20px] border-b-[1px] border-[#c2c2c2]">
            <h3 className={`mb-[10px] text-[22px] md:text-[24px] leading-[27px] md:leading-[29px] font-bold ${poppins.className}`}>Customer Information</h3>
            <p className="leading-[24px]">Order Confirmation Details Will Be Sent Here</p>

            <div className="flex flex-col gap-[10px] py-[10px]">
              <div className="relative">
                <input
                  type="text"
                  name="firstName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  className="[&:focus~label]:text-[10px] [&:focus~label]:top-[6px] [&:focus~label]:tracking-[0.4px] relative w-full h-[45px] p-[22px_15px_8px_20px] border-[1px] bg-[transparent] border-[rgba(18,18,18,.6)] rounded-[6px] text-[16px] text-[rgba(18,18,18,.6)] placeholder-[rgba(18,18,18,.6)] z-10 focus:outline-0"
                />
                <label
                  htmlFor="firstName"
                  style={{
                    top: formik.values.firstName && '6px',
                    fontSize: formik.values.firstName && '10px',
                    letterSpacing: formik.values.firstName && '0.4px',
                  }}
                  className="absolute left-[21px] top-[11px] text-[16px] leading-[1.5] text-[rgba(18,18,18,.6)] tracking-[1px] duration-200 ease-in-out">
                  First Name
                </label>

                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="mt-[5px] -mb-[5px] text-red-500 text-xs">
                    {formik.errors.firstName}
                  </div>
                ) : null}
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="lastName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  className="[&:focus~label]:text-[10px] [&:focus~label]:top-[6px] [&:focus~label]:tracking-[0.4px] relative w-full h-[45px] p-[22px_15px_8px_20px] border-[1px] bg-[transparent] border-[rgba(18,18,18,.6)] rounded-[6px] text-[16px] text-[rgba(18,18,18,.6)] placeholder-[rgba(18,18,18,.6)] z-10 focus:outline-0"
                />
                <label
                  htmlFor="lastName"
                  style={{
                    top: formik.values.lastName && '6px',
                    fontSize: formik.values.lastName && '10px',
                    letterSpacing: formik.values.lastName && '0.4px',
                  }}
                  className="absolute left-[21px] top-[11px] text-[16px] leading-[1.5] text-[rgba(18,18,18,.6)] tracking-[1px] duration-200 ease-in-out">
                  Last Name
                </label>

                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="mt-[5px] -mb-[5px] text-red-500 text-xs">
                    {formik.errors.lastName}
                  </div>
                ) : null}
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="[&:focus~label]:text-[10px] [&:focus~label]:top-[6px] [&:focus~label]:tracking-[0.4px] relative w-full h-[45px] p-[22px_15px_8px_20px] border-[1px] bg-[transparent] border-[rgba(18,18,18,.6)] rounded-[6px] text-[16px] text-[rgba(18,18,18,.6)] placeholder-[rgba(18,18,18,.6)] z-10 focus:outline-0"
                />
                <label
                  htmlFor="email"
                  style={{
                    top: formik.values.email && '6px',
                    fontSize: formik.values.email && '10px',
                    letterSpacing: formik.values.email && '0.4px',
                  }}
                  className="absolute left-[21px] top-[11px] text-[16px] leading-[1.5] text-[rgba(18,18,18,.6)] tracking-[1px] duration-200 ease-in-out">
                  Email Address
                </label>

                {formik.touched.email && formik.errors.email ? (
                  <div className="mt-[5px] -mb-[5px] text-red-500 text-xs">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="phone"
                  onChange={handleChange}
                  onBlur={formik.handleBlur}
                  value={formattedPhone}
                  className="[&:focus~label]:text-[10px] [&:focus~label]:top-[6px] [&:focus~label]:tracking-[0.4px] relative w-full h-[45px] p-[12px_15px_8px_20px] border-[1px] bg-[transparent] border-[rgba(18,18,18,.6)] rounded-[6px] text-[16px] text-[rgba(18,18,18,.6)] placeholder-[rgba(18,18,18,.6)] z-10 focus:outline-0"
                />
                <label
                  htmlFor="phone"
                  style={{
                    top: formik.values.phone && '6px',
                    fontSize: formik.values.phone && '10px',
                    letterSpacing: formik.values.phone && '0.4px',
                  }}
                  className="absolute left-[21px] top-[11px] text-[16px] leading-[1.5] text-[rgba(18,18,18,.6)] tracking-[1px] duration-200 ease-in-out">
                  Phone Number
                </label>

                {formik.touched.phone && formik.errors.phone ? (
                  <div className="mt-[5px] -mb-[5px] text-red-500 text-xs">
                    {formik.errors.phone}
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <div className="py-[20px] border-b-[1px] border-[#c2c2c2]">
            <h3 className={`mb-[10px] text-[22px] md:text-[24px] leading-[27px] md:leading-[29px] font-bold ${poppins.className}`}>Shipping Information</h3>
            <p className="leading-[24px]">Where do we send your {info.product.name}?</p>

            <div className="flex flex-col gap-[10px] py-[10px]">
              <div className="relative">
                <select
                  onChange={handleCountryChange}
                  className="[&:focus~label]:text-[10px] [&:focus~label]:top-[6px] [&:focus~label]:tracking-[0.4px] relative w-full h-[45px] p-[15px_15px_8px_20px] border-[1px] bg-[transparent] border-[rgba(18,18,18,.6)] rounded-[6px] text-[16px] text-[rgba(18,18,18,.6)] placeholder-[rgba(18,18,18,.6)] z-10 focus:outline-0 cursor-pointer"
                  value={formik.values.country}
                  name="country"
                >
                  <option value="" className="text-[#ccc]" disabled></option>
                  {countries.map((country) => (
                    <option key={country.value} value={country.value}>{country.label}</option>
                  ))}
                </select>

                <label
                  htmlFor="country"
                  style={{
                    top: formik.values.country && '6px',
                    fontSize: formik.values.country && '10px',
                    letterSpacing: formik.values.country && '0.4px',
                  }}
                  className="absolute left-[21px] top-[11px] text-[16px] leading-[1.5] text-[rgba(18,18,18,.6)] tracking-[1px] duration-200 ease-in-out">
                  Country
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="address"
                  ref={addressInputRef}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address}
                  className="[&:focus~label]:text-[10px] [&:focus~label]:top-[6px] [&:focus~label]:tracking-[0.4px] relative w-full h-[45px] p-[12px_15px_8px_20px] border-[1px] bg-[transparent] border-[rgba(18,18,18,.6)] rounded-[6px] text-[16px] text-[rgba(18,18,18,.6)] placeholder-[rgba(18,18,18,.6)] z-10 focus:outline-0"
                  placeholder=""
                />
                <label
                  htmlFor="address"
                  style={{
                    top: formik.values.address && '6px',
                    fontSize: formik.values.address && '10px',
                    letterSpacing: formik.values.address && '0.4px',
                  }}
                  className="absolute left-[21px] top-[11px] text-[16px] leading-[1.5] text-[rgba(18,18,18,.6)] tracking-[1px] duration-200 ease-in-out">
                  Address
                </label>

                {formik.touched.address && formik.errors.address ? (
                  <div className="mt-[5px] -mb-[5px] text-red-500 text-xs">
                    {formik.errors.address}
                  </div>
                ) : null}
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="address2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address2}
                  className="[&:focus~label]:text-[10px] [&:focus~label]:top-[6px] [&:focus~label]:tracking-[0.4px] relative w-full h-[45px] p-[12px_15px_8px_20px] border-[1px] bg-[transparent] border-[rgba(18,18,18,.6)] rounded-[6px] text-[16px] text-[rgba(18,18,18,.6)] placeholder-[rgba(18,18,18,.6)] z-10 focus:outline-0"
                />
                <label
                  htmlFor="address2"
                  style={{
                    top: formik.values.phone && '6px',
                    fontSize: formik.values.phone && '10px',
                    letterSpacing: formik.values.phone && '0.4px',
                  }}
                  className="absolute left-[21px] top-[11px] text-[16px] leading-[1.5] text-[rgba(18,18,18,.6)] tracking-[1px] duration-200 ease-in-out">
                  Apartment, suite, etc. (optional)
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="city"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.city}
                  className="[&:focus~label]:text-[10px] [&:focus~label]:top-[6px] [&:focus~label]:tracking-[0.4px] relative w-full h-[45px] p-[12px_15px_8px_20px] border-[1px] bg-[transparent] border-[rgba(18,18,18,.6)] rounded-[6px] text-[16px] text-[rgba(18,18,18,.6)] placeholder-[rgba(18,18,18,.6)] z-10 focus:outline-0"
                />
                <label
                  htmlFor="city"
                  style={{
                    top: formik.values.city && '6px',
                    fontSize: formik.values.city && '10px',
                    letterSpacing: formik.values.city && '0.4px',
                  }}
                  className="absolute left-[21px] top-[11px] text-[16px] leading-[1.5] text-[rgba(18,18,18,.6)] tracking-[1px] duration-200 ease-in-out">
                  City
                </label>
                {formik.touched.city && formik.errors.city ? (
                  <div className="mt-[5px] -mb-[5px] text-red-500 text-xs">
                    {formik.errors.city}
                  </div>
                ) : null}
              </div>
              <CheckoutStateSelector formik={formik} country={country} />
              {formik.touched.state && formik.errors.state ? (
                <div className="text-red-500 text-xs">{formik.errors.state}</div>
              ) : null}
              <div className="relative">
                <input
                  type="text"
                  name="zip"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.zip}
                  className="[&:focus~label]:text-[10px] [&:focus~label]:top-[6px] [&:focus~label]:tracking-[0.4px] relative w-full h-[45px] p-[22px_15px_8px_20px] border-[1px] bg-[transparent] border-[rgba(18,18,18,.6)] rounded-[6px] text-[16px] text-[rgba(18,18,18,.6)] placeholder-[rgba(18,18,18,.6)] z-10 focus:outline-0"
                />
                <label
                  htmlFor="zip"
                  style={{
                    top: formik.values.zip && '6px',
                    fontSize: formik.values.zip && '10px',
                    letterSpacing: formik.values.zip && '0.4px',
                  }}
                  className="absolute left-[21px] top-[11px] text-[16px] leading-[1.5] text-[rgba(18,18,18,.6)] tracking-[1px] duration-200 ease-in-out">
                  {(country === 'US' && 'Zip Code') || 'Postal Code'}
                </label>

                {formik.touched.zip && formik.errors.zip ? (
                  <div className="mt-[5px] -mb-[5px] text-red-500 text-xs">
                    {formik.errors.zip}
                  </div>
                ) : null}
              </div>
              <div className="flex items-center gap-[12px]">
                <input
                  type="radio"
                  name="shipping"
                  defaultChecked
                  value={'1'}
                  className="hidden [&:checked~span]:bg-[#ffa500] [&:checked~span]:border-[#fff] [&:checked~span]:shadow-[0_0_0_1px_#ffa500] [&:not-checked~span]:border-[rgba(255,165,0,.3)]"
                />
                <span className={`flex w-[15px] h-[15px] border-[2px] rounded-[50%]`}></span>
                <label htmlFor="shipping">
                  Standard{' '}
                  <PriceDisplaySimple
                    priceUSD={parseFloat(product.productShipping)}
                    countryCode={country}
                    digits={2}
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="py-[20px] border-b-[1px] border-[#c2c2c2]">
            <h3 className={`mb-[10px] text-[22px] md:text-[24px] leading-[27px] md:leading-[29px] font-bold ${poppins.className}`}>Payment Information</h3>
            <p className="leading-[24px]">Safe & Secure Checkout</p>

            <div className="flex flex-col gap-[10px] py-[10px]">
              <div className="relative">
                <input
                  type="text"
                  name="card"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.card}
                  className="[&:focus~label]:text-[10px] [&:focus~label]:top-[6px] [&:focus~label]:tracking-[0.4px] relative w-full h-[45px] p-[22px_15px_8px_20px] border-[1px] bg-[transparent] border-[rgba(18,18,18,.6)] rounded-[6px] text-[16px] text-[rgba(18,18,18,.6)] placeholder-[rgba(18,18,18,.6)] z-10 focus:outline-0"
                />
                <label
                  htmlFor="card"
                  style={{
                    top: formik.values.card && '6px',
                    fontSize: formik.values.card && '10px',
                    letterSpacing: formik.values.card && '0.4px',
                  }}
                  className="absolute left-[21px] top-[11px] text-[16px] leading-[1.5] text-[rgba(18,18,18,.6)] tracking-[1px] duration-200 ease-in-out">
                  Credit Card Number
                </label>

                {formik.touched.card && formik.errors.card ? (
                  <div className="mt-[5px] -mb-[5px] text-red-500 text-xs">
                    {formik.errors.card as string}
                  </div>
                ) : null}
              </div>
              <div className="relative">
                <select
                  name="month"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.month}
                  className="[&:focus~label]:text-[10px] [&:focus~label]:top-[6px] [&:focus~label]:tracking-[0.4px] relative w-full h-[45px] p-[15px_15px_8px_20px] border-[1px] bg-[transparent] border-[rgba(18,18,18,.6)] rounded-[6px] text-[16px] text-[rgba(18,18,18,.6)] placeholder-[rgba(18,18,18,.6)] z-10 focus:outline-0 cursor-pointer"
                >
                  <option value="" className="text-[#ccc]" disabled></option>
                  {months.map((month) => (
                    <option key={month.value} value={month.value}>{month.label}</option>
                  ))}
                </select>

                <label
                  htmlFor="month"
                  style={{
                    top: formik.values.month && '6px',
                    fontSize: formik.values.month && '10px',
                    letterSpacing: formik.values.month && '0.4px',
                  }}
                  className="absolute left-[21px] top-[11px] text-[16px] leading-[1.5] text-[rgba(18,18,18,.6)] tracking-[1px] duration-200 ease-in-out">
                  Month
                </label>
                {formik.touched.month && formik.errors.month ? (
                  <div className="mt-[5px] -mb-[5px] text-red-500 text-xs">{formik.errors.month}</div>
                ) : null}
              </div>
              <div className="relative">
                <select
                  name="year"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.year}
                  className="[&:focus~label]:text-[10px] [&:focus~label]:top-[6px] [&:focus~label]:tracking-[0.4px] relative w-full h-[45px] p-[15px_15px_8px_20px] border-[1px] bg-[transparent] border-[rgba(18,18,18,.6)] rounded-[6px] text-[16px] text-[rgba(18,18,18,.6)] placeholder-[rgba(18,18,18,.6)] z-10 focus:outline-0 cursor-pointer"
                >
                  <option value="" className="text-[#ccc]" disabled></option>
                  {years.map((year) => (
                    <option key={year.value} value={year.value}>{year.label}</option>
                  ))}
                </select>

                <label
                  htmlFor="year"
                  style={{
                    top: formik.values.year && '6px',
                    fontSize: formik.values.year && '10px',
                    letterSpacing: formik.values.year && '0.4px',
                  }}
                  className="absolute left-[21px] top-[11px] text-[16px] leading-[1.5] text-[rgba(18,18,18,.6)] tracking-[1px] duration-200 ease-in-out">
                  Expiry Year
                </label>
                {formik.touched.year && formik.errors.year ? (
                  <div className="mt-[5px] -mb-[5px] text-red-500 text-xs">{formik.errors.year}</div>
                ) : null}
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="cvv"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.cvv}
                  className="[&:focus~label]:text-[10px] [&:focus~label]:top-[6px] [&:focus~label]:tracking-[0.4px] relative w-full h-[45px] p-[22px_15px_8px_20px] border-[1px] bg-[transparent] border-[rgba(18,18,18,.6)] rounded-[6px] text-[16px] text-[rgba(18,18,18,.6)] placeholder-[rgba(18,18,18,.6)] z-10 focus:outline-0"
                />
                <label
                  htmlFor="cvv"
                  style={{
                    top: formik.values.cvv && '6px',
                    fontSize: formik.values.cvv && '10px',
                    letterSpacing: formik.values.cvv && '0.4px',
                  }}
                  className="absolute left-[21px] top-[11px] text-[16px] leading-[1.5] text-[rgba(18,18,18,.6)] tracking-[1px] duration-200 ease-in-out">
                  CVV
                </label>

                {formik.touched.cvv && formik.errors.cvv ? (
                  <div className="mt-[5px] -mb-[5px] text-red-500 text-xs">
                    {formik.errors.cvv}
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <div className="pt-[20px]">
            <p className=" mb-[10px] text-[11px] leading-[14px]">
              By placing this order you agree to {info.product.name}{' '}
              <a
                href="/terms-conditions"
                className="text-blue-300 underline cursor-pointer hover:text-blue-500"
                tabIndex={1}
              >
                terms and conditions
              </a>{' '}
              and{' '}
              <a
                href="/privacy-policy"
                className="text-blue-300 underline cursor-pointer hover:text-blue-500"
                tabIndex={2}
              >
                privacy policy
              </a>
              .
            </p>

            <AppButton type="submit" classes="w-full uppercase">{info.buttonCta}</AppButton>
          </div>
        </form>
      </div>
    </>
  )
};

export default CheckoutForm;