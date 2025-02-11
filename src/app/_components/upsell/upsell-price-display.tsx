import React from "react";
import {
  useCurrencyRates,
  countryToCurrency,
  currencySymbols,
} from "@/app/_utils/currencyUtils";

interface PriceDisplayProps {
  priceUSD: number;
  countryCode: string;
  digits: number;
  smallSymbol?: boolean;
}

export function PriceDisplay({
  priceUSD,
  countryCode,
  digits,
  smallSymbol,
}: PriceDisplayProps) {
  const { rates } = useCurrencyRates();

  const currency = countryToCurrency[countryCode] || "USD";
  const symbol = currencySymbols[currency] || "$";

  const exchangeRate = rates ? rates[currency] : 1;
  const convertedPrice = priceUSD * (exchangeRate || 1);

  return (
    <>
      <span
        className={`${
          smallSymbol && "text-[16px] md:text-[20px] xl:text-[24px]"
        }`}
      >
        {symbol}
      </span>
      {convertedPrice.toFixed(digits)}
    </>
  );
}
