import React, { useEffect, useRef } from "react";

type PaymentProps = {
  formik: any;
  setCountry: (country: string) => void;
};
interface AddressComponents {
  street_number?: string;
  subpremise?: string;
  route?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
}

const usePaymentOptions = ({
  formik,
  setCountry,
}: PaymentProps) => {
  const addressInputRef = useRef(null);

  useEffect(() => {
    if (addressInputRef.current) {
      const autocomplete = new google.maps.places.Autocomplete(
        addressInputRef.current,
        {
          types: ["address"],
        }
      );

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (place.address_components) {
          // console.log("Google Maps Place: ", place.address_components);
          const address: AddressComponents =
            place.address_components.reduce<AddressComponents>(
              (acc, component) => {
                const types = component.types;
                if (types.includes("street_number")) {
                  acc.street_number = component.long_name;
                }
                if (types.includes("route")) {
                  acc.route = component.long_name;
                }
                if (types.includes("subpremise")) {
                  acc.subpremise = component.long_name;
                }
                if (types.includes("locality")) {
                  acc.city = component.long_name;
                }
                if (types.includes("administrative_area_level_1")) {
                  acc.state = component.short_name;
                }
                if (types.includes("postal_code")) {
                  acc.zip = component.long_name;
                }
                if (types.includes("country")) {
                  acc.country = component.short_name;
                }
                return acc;
              },
              {}
            );

          const mainAddress = `${address.street_number || ""} ${
            address.route || ""
          }`.trim();

          formik.setFieldValue("address", mainAddress || "");
          formik.setFieldValue("address2", address.subpremise || "");
          formik.setFieldValue("city", address.city || "");
          formik.setFieldValue("state", address.state || "");
          formik.setFieldValue("zip", address.zip || "");
          formik.setFieldValue("country", address.country || "");
          setCountry(address.country || "");
        }
      });
    }
  }, [addressInputRef]);

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = event.target.value;
    formik.handleChange(event); // Update Formik
    setCountry(selectedCountry); // Update local state
  };

  return { addressInputRef, handleCountryChange };
};

export default usePaymentOptions;
