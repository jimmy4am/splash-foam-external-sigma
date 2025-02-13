"use client";

import { useEffect, useState } from "react";

const useCountDown = () => {
  const [mins, setMins] = useState(3);
  const [secs, setSecs] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (secs > 0) {
        setSecs(secs - 1);
      } else if (mins > 0) {
        setMins(mins - 1);
        setSecs(59);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [mins, secs]);

  return {
    mins,
    setMins,
    secs,
    setSecs
  };
};

export default useCountDown;
