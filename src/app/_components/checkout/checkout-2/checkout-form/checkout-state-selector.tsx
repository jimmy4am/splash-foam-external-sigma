import React from "react";
import { useFormik } from "formik";

import { countryRegions } from "@/app/_components/checkout/checkout-2/checkout-form/constants";

type Props = {
  formik: ReturnType<typeof useFormik>;
  country: string;
};

const CheckoutStateSelector = ({ formik, country }: Props) => {
  const currentCountry = countryRegions[country];

  return (
    <div className="relative">
      <select
        name="state"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.state}
        className="[&:focus~label]:text-[10px] [&:focus~label]:top-[6px] [&:focus~label]:tracking-[0.4px] relative w-full h-[45px] p-[15px_15px_8px_20px] border-[1px] bg-[transparent] border-[rgba(18,18,18,.6)] rounded-[6px] text-[16px] text-[rgba(18,18,18,.6)] placeholder-[rgba(18,18,18,.6)] z-10 focus:outline-0 cursor-pointer"
      >
        <option value="" className="text-[#ccc]" disabled></option>
        {currentCountry.options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      <label
        htmlFor="state"
        style={{
          top: formik.values.state && '6px',
          fontSize: formik.values.state && '10px',
          letterSpacing: formik.values.state && '0.4px',
        }}
        className="absolute left-[21px] top-[11px] text-[16px] leading-[1.5] text-[rgba(18,18,18,.6)] tracking-[1px] duration-200 ease-in-out">
        {currentCountry.name}
      </label>
    </div>
  );
};

export default CheckoutStateSelector;