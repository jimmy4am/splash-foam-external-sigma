import React from "react";
import { UserIcon } from "@heroicons/react/24/solid";
import useCheckoutCustomerInfo from "./hooks/useCheckoutCustomerInfo";

type CustomerInfoProps = {
  formik: any;
};

const CustomerInfo = ({ formik }: CustomerInfoProps) => {
  const { handleChange, formattedPhone} = useCheckoutCustomerInfo({ formik });

  return (
    <>
      <div className="flex w-full justify-start items-center pb-6">
        <UserIcon className="h-[16px] w-[16px] mr-2" />
        <h3 className="font-bold text-[16px] hidden lg:block">
          Step 2: Customer Information
        </h3>
        <h3 className="font-bold text-[16px] lg:hidden">
          Step 3: Customer Information
        </h3>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex w-full space-x-4">
          <div className="flex w-1/2 flex-col items-start justify-start">
            <label className="font-bold text-[14px] pb-2">First Name</label>
            <input
              type="text"
              name="firstName"
              onChange={(e) => {
                formik.handleChange(e);
              }}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              className="w-full border-[1px] border-[#333]  px-4 py-2 text-[16px] rounded-md sm:text-[14px]"
              placeholder="First Name"
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="text-red-500 text-xs">
                {formik.errors.firstName}
              </div>
            ) : null}
          </div>
          <div className="flex w-1/2 flex-col items-start justify-start">
            <label className="font-bold text-[14px] pb-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              onChange={(e) => {
                formik.handleChange(e);
              }}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              className="w-full border-[1px] border-[#333]  px-4 py-2 text-[16px] rounded-md sm:text-[14px]"
              placeholder="Last Name"
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="text-red-500 text-xs">
                {formik.errors.lastName}
              </div>
            ) : null}
          </div>
        </div>
        <div className="flex w-full space-x-4 mt-6">
          <div className="flex w-full flex-col items-start justify-start">
            <label className="font-bold text-[14px] pb-2">Email Address</label>
            <input
              type="email"
              name="email"
              onChange={(e) => {
                formik.handleChange(e);
              }}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="w-full border-[1px] border-[#333]  px-4 py-2 text-[16px] rounded-md sm:text-[14px]"
              placeholder="Email Address"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-xs">{formik.errors.email}</div>
            ) : null}
          </div>
        </div>
        <div className="flex w-full space-x-4 mt-6 mb-6">
          <div className="flex w-full flex-col items-start justify-start">
            <label className="font-bold text-[14px] pb-2">Phone Number</label>
            <input
              type="text"
              name="phone"
              onChange={handleChange}
              onBlur={formik.handleBlur}
              value={formattedPhone}
              className="w-full border-[1px] border-[#333]  px-4 py-2 text-[16px] rounded-md sm:text-[14px]"
              placeholder="Phone"
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="text-red-500 text-xs">{formik.errors.phone}</div>
            ) : null}
          </div>
        </div>
        <button type="submit" className="hidden"></button>
      </form>
    </>
  );
};

export default CustomerInfo;
