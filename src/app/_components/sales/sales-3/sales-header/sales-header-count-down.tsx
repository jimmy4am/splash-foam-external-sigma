import React, {useEffect, useState} from "react";
import Image from "next/image";
import {Outfit} from "next/font/google";

import {CountDownKeysType, CountDownMessages, CountDownType} from "@/app/_components/sales/sales-3/sales-header/types";
import {extraTimeLimit, initialTimeLimit} from "@/app/_components/sales/sales-3/sales-header/constants";

const outfit = Outfit({ subsets: ["latin"] });

const SalesHeaderCountDown = () => {
    const [data, setData] = useState<CountDownType>(initialTimeLimit)
    const [message, setMessage] = useState<CountDownMessages | null>(null);
    const [isExpired, setIsExpired] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (isExpired) {
            if (!message) {
                // Wait 2 seconds at 00:00 before showing the expiration message
                timer = setTimeout(() => setMessage(CountDownMessages.Expired), 1000);
            } else if (message === CountDownMessages.Expired) {
                // Show extension message after 3 seconds
                timer = setTimeout(() => setMessage(CountDownMessages.Granted), 3000);
            } else {
                // Clear message and reset timer after 3 more seconds
                timer = setTimeout(() => {
                    setMessage(null);
                    setData(extraTimeLimit)
                    setIsExpired(false);
                }, 3000);
            }
        } else {
            timer = setInterval(() => {
                if (data.seconds > 0) {
                    setData(prev => ({...prev, seconds: prev.seconds -1}))
                } else if (data.minutes > 0) {
                    setData(prev => ({...prev, minutes: prev.minutes - 1, seconds: 59}))
                } else if (data.hours > 0) {
                    setData(prev => ({...prev, hours: prev.hours - 1, minutes: 59, seconds: 59}))
                } else {
                    setIsExpired(true);
                }
            }, 1000);
        }

        return () => clearTimeout(timer);
    }, [data, isExpired, message]);


    return (
        <div className="max-w-[380px] sm:max-w-[330px] md:max-w-[none] mx-[auto] flex justify-center items-center gap-6">
            <p className="flex items-center gap-2 text-[12px] leading-[16px] md:text-[14px] md:leading-[14px] tracking-[0.5px] font-bold text-[#000] uppercase">
                <Image src="/images/icons/top-tag.png" alt="top tag" width={23} height={23} />
                <span>Limited Time Offer <br className="md:hidden" /> Save Up To 60% Off</span>
            </p>

            {message ? (
                <p className="w-[50%] md:w-[auto] text-[11px] leading-[14px] md:text-[14px] tracking-[0.5px] font-bold text-[#000] uppercase">{message}</p>
            ) : (
                <div className="w-[140px] flex justify-start items-center gap-2">

                    {Object.keys(data).map((key) => (
                        <div className={`w-[32px] h-[32px] flex flex-col justify-center items-center bg-[#fff] rounded-md ${outfit.className} shadow-[0px_0px_8px_2px_#c7b356]`}>
                            <span className="text-[12px] leading-[12px] text-[#000] font-bold">{data[key as CountDownKeysType]}</span>
                            <span className="text-[6px] leading-[10px] text-[#444] uppercase">{key}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
};

export default SalesHeaderCountDown;
