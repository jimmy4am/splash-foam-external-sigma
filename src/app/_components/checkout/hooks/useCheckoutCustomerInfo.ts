import React, { useState, useEffect } from "react";

type CustomerInfoProps = {
  formik: any;
};

const useCustomerInfo = ({ formik }: CustomerInfoProps) => {
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

  return { handleChange, formattedPhone };
};

export default useCustomerInfo;
