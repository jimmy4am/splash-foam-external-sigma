import React, { useState, useEffect } from "react";
import {  UserCircleIcon, ExclamationTriangleIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

type CustomerInfoProps = {
    formik: any;
};

const CustomerInfo2 = ({ formik }: CustomerInfoProps) => {
    const [formattedPhone, setFormattedPhone] = useState("");

    useEffect(() => {
        if (formik.values.phone) {
            setFormattedPhone(formatPhoneNumber(formik.values.phone));
        }
    }, []);
    const formatPhoneNumber = (phone: string): string => {
        // Remove all non-digit characters
        phone = phone.replace(/\D/g, "");

        if (phone.length === 10) {
            // Format as (XXX) XXX-XXXX for USA numbers
            return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`;
        } else if (phone.length > 10) {
            // Format as +X (XXX) XXX-XXXX if the country code has 1 digit
            if (phone.length === 11) {
                return `+${phone.slice(0, 1)} (${phone.slice(1, 4)}) ${phone.slice(
                    4,
                    7
                )}-${phone.slice(7)}`;
            } else if (phone.length === 12) {
                // Format as +XX (XXX) XXX-XXXX if the country code has 2 digits
                return `+${phone.slice(0, 2)} (${phone.slice(2, 5)}) ${phone.slice(
                    5,
                    8
                )}-${phone.slice(8)}`;
            } else {
                // General formatting for longer international numbers
                return `+${phone.slice(0, phone.length - 10)} (${phone.slice(
                    phone.length - 10,
                    phone.length - 7
                )}) ${phone.slice(phone.length - 7, phone.length - 4)}-${phone.slice(
                    phone.length - 4
                )}`;
            }
        }
        return phone;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = e.target;
        const cleanedValue = value.replace(/\D/g, "");

        // Set a maximum number of digits to 15
        if (cleanedValue.length <= 15) {
            formik.handleChange(e);
            setFormattedPhone(formatPhoneNumber(value));
        }
    };

    return (
        <>
            <div className="flex w-full items-center mb-6">
                <UserCircleIcon className="h-[40px] w-[40px] mr-2"/>
                <div className="hidden lg:block">
                    <h3 className="text-[23px] leading-[25px] sm:text-[26px] sm:leading-[26px] lg:text-[28px] lg:leading-[28px] font-bold">Customer
                        Information</h3>
                    <p className="text-[14px] leading-[20px] lg:text-[15px] lg:leading-[21px]">Order Confirmation Details Will
                        Be Sent Here</p>
                </div>
                <div className=" lg:hidden">
                    <h3 className="text-[23px] leading-[25px] sm:text-[26px] sm:leading-[26px] lg:text-[28px] lg:leading-[28px] font-bold">Customer
                        Information</h3>
                    <p className="text-[14px] leading-[20px] lg:text-[15px] lg:leading-[21px]">Order Confirmation Details Will
                        Be Sent Here</p>
                </div>
            </div>

            <form onSubmit={formik.handleSubmit}>
                <div className="flex w-full space-x-4">
                    <div className="relative flex w-1/2 flex-col items-start justify-start">
                        <label className="flex text-[15px] leading-[15px] sm:text-[16px] sm:leading-[18px] mb-2">First Name</label>
                        <div className="relative w-full">
                            <input
                                type="text"
                                name="firstName"
                                onChange={(e) => {
                                    formik.handleChange(e);
                                }}
                                onBlur={formik.handleBlur}
                                value={formik.values.firstName}
                                className={`w-full h-[50px] border-[1px] border-[#a7abad] px-1 py-2 text-[14px] rounded outline-none focus:shadow-[0_0_5px_0_#51cbee] focus:border-[#51cbee]
                    ${formik.touched.firstName && formik.errors.firstName ? 'border-[orange]' : null}`}
                                placeholder="First Name"
                            />
                            {formik.touched.firstName && !formik.errors.firstName ? (
                                <CheckCircleIcon className="text-[green] absolute right-[10px] top-[25px] -translate-y-[50%] w-[18px] h-[18px]"/>
                            ) : null}
                            {formik.touched.firstName && formik.errors.firstName ? (
                                <div className="text-[orange] text-xs">
                                    <ExclamationTriangleIcon className="absolute right-[10px] top-[25px] -translate-y-[50%] w-[18px] h-[18px]"/>
                                    {formik.errors.firstName}
                                </div>
                            ) : null}
                        </div>
                    </div>

                    <div className="flex w-1/2 flex-col items-start justify-start">
                        <label className="flex text-[16px] leading-[18px] mb-2">Last Name</label>
                        <div className="relative w-full">
                            <input
                                type="text"
                                name="lastName"
                                onChange={(e) => {
                                    formik.handleChange(e);
                                }}
                                onBlur={formik.handleBlur}
                                value={formik.values.lastName}
                                className={`w-full h-[50px] border-[1px] border-[#a7abad] px-1 py-2 text-[14px] rounded outline-none focus:shadow-[0_0_5px_0_#51cbee] focus:border-[#51cbee]
                    ${formik.touched.lastName && formik.errors.lastName ? 'border-[orange]' : null}`}
                                placeholder="Last Name"
                            />
                            {formik.touched.lastName && !formik.errors.lastName ? (
                                <CheckCircleIcon className="text-[green] absolute right-[10px] top-[25px] -translate-y-[50%] w-[18px] h-[18px]"/>
                            ) : null}
                            {formik.touched.lastName && formik.errors.lastName ? (
                                <div className="text-[orange] text-xs">
                                    <ExclamationTriangleIcon className="absolute right-[10px] top-[25px] -translate-y-[50%] w-[18px] h-[18px]"/>
                                    {formik.errors.lastName}
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
                <div className="flex w-full space-x-4 mt-6">
                    <div className="flex w-full flex-col items-start justify-start">
                        <label className="flex text-[16px] leading-[18px] mb-2">Email Address</label>
                        <div className="relative w-full">
                            <input
                                type="email"
                                name="email"
                                onChange={(e) => {
                                    formik.handleChange(e);
                                }}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                className={`w-full h-[50px] border-[1px] border-[#a7abad] px-1 py-2 text-[14px] rounded outline-none focus:shadow-[0_0_5px_0_#51cbee] focus:border-[#51cbee]
                  ${formik.touched.email && formik.errors.email ? 'border-[orange]' : null}`}
                                placeholder="Email Address"
                            />
                            {formik.touched.email && !formik.errors.email ? (
                                <CheckCircleIcon className="text-[green] absolute right-[10px] top-[25px] -translate-y-[50%] w-[18px] h-[18px]"/>
                            ) : null}
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-[orange] text-xs">
                                    <ExclamationTriangleIcon className="absolute right-[10px] top-[25px] -translate-y-[50%] w-[18px] h-[18px]"/>
                                    {formik.errors.email}
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
                <div className="flex w-full space-x-4 mt-6 mb-6">
                    <div className="flex w-full flex-col items-start justify-start">
                        <label className="flex text-[16px] leading-[18px] mb-2">Phone Number</label>
                        <div className="relative w-full">
                            <input
                                type="text"
                                name="phone"
                                onChange={handleChange}
                                onBlur={formik.handleBlur}
                                value={formattedPhone}
                                className={`w-full h-[50px] border-[1px] border-[#a7abad] px-1 py-2 text-[14px] rounded outline-none focus:shadow-[0_0_5px_0_#51cbee] focus:border-[#51cbee]
                  ${formik.touched.phone && formik.errors.phone ? 'border-[orange]' : null}`}
                                placeholder="Phone"
                            />
                            {formik.touched.phone && !formik.errors.phone ? (
                                <CheckCircleIcon className="text-[green] absolute right-[10px] top-[25px] -translate-y-[50%] w-[18px] h-[18px]"/>
                            ) : null}
                            {formik.touched.phone && formik.errors.phone ? (
                                <div className="text-[orange] text-xs">
                                    <ExclamationTriangleIcon className="absolute right-[10px] top-[25px] -translate-y-[50%] w-[18px] h-[18px]"/>
                                    {formik.errors.phone}
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
                <button type="submit" className="hidden"></button>
            </form>
        </>
    );
};
export default CustomerInfo2;
