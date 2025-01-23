import { useEffect, useState } from "react";

import {extraTimeLimit, initialTimeLimit} from "@/app/_components/sales/CountDown/constants";
import {CountDownMessages, CountDownType} from "@/app/_components/sales/CountDown/types";

type Props = {
    initialLimit?: CountDownType;
    extraLimit?: CountDownType;
}

const useCountDown = (
    { initialLimit = initialTimeLimit, extraLimit = extraTimeLimit }: Props = {}
): {data: CountDownType, message: CountDownMessages | null} => {
    const [data, setData] = useState<CountDownType>(initialLimit)
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
                    setData(extraLimit)
                    setIsExpired(false);
                }, 3000);
            }
        } else {
            timer = setInterval(() => {
                if (data.seconds > 0) {
                    setData(prev => ({...prev, seconds: prev.seconds - 1}))
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


    return {
        data,
        message
    }
};

export default useCountDown;