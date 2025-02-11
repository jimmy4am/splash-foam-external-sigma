import React from "react";
import { useRouter } from "next/navigation";
import { sendGAEvent } from "@next/third-parties/google";
import { createJimmyKey } from "./jimmyKeyUtils";
import { useSession } from "../_context/SessionContext";

type UseActiveSessionTimerProps = {
  sessionId: string;
  orderConfirmedAt?: string;
  orderFinalized?: boolean;
};

const useActiveSessionTimer = ({
  orderConfirmedAt,
  orderFinalized,
}: UseActiveSessionTimerProps) => {
  const { sessionId } = useSession();
  const router = useRouter();
  const finalizationTimerRef = React.useRef<NodeJS.Timeout | null>(null);

  const finalizePurchase = async (sessionId: string) => {
    console.log(
      "Session Time Expired - Finalizing Purchase for Session:",
      sessionId
    );
    sendGAEvent("event", "purchase-finalized", {
      sessionId: sessionId,
      finalizedBy: "active-session-timeout",
    });
    // console.log(
    //   "Session Time Expired - Finalizing Purchase for Session:",
    //   sessionId
    // );
    try {
      const response = await fetch("/api/session/finalize-purchase", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-jimmy-key": createJimmyKey().encryptedData,
        },
        body: JSON.stringify({
          sessionId,
          finalizedBy: "active-session-timeout",
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data) {
        window.location.href = `/checkout/thank-you`;
      }
    } catch (error) {
      console.error("Error finalizing purchase:", error);
      return null;
    }
  };

  React.useEffect(() => {
    if (sessionId && orderConfirmedAt && !orderFinalized) {
      const orderTime = new Date(orderConfirmedAt).getTime();
      const currentTime = new Date().getTime();
      const timeDiff = currentTime - orderTime;

      if (timeDiff > 10 * 60 * 1000) {
        finalizePurchase(sessionId);
      } else {
        // Clear any existing timer
        if (finalizationTimerRef.current) {
          clearTimeout(finalizationTimerRef.current);
        }
        // Set a new timer for the remaining time
        finalizationTimerRef.current = setTimeout(() => {
          finalizePurchase(sessionId);
        }, 10 * 60 * 1000 - timeDiff);
      }
    }

    // Cleanup the timer on unmount
    return () => {
      if (finalizationTimerRef.current) {
        clearTimeout(finalizationTimerRef.current);
      }
    };
  }, [orderConfirmedAt, orderFinalized, sessionId]);

  return null; // No explicit return since it's just managing a timer
};

export default useActiveSessionTimer;
