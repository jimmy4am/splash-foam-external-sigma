"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { useSession } from "@/app/_context/SessionContext";
import { useRouter, usePathname } from "next/navigation";
import useMixpanelId from "@/app/_utils/useMixpanelId";
import { sendGAEvent, sendGTMEvent } from "@next/third-parties/google";
import { createJimmyKey } from "@/app/_utils/jimmyKeyUtils";
import { useTracking } from "@/app/_context/TrackingContext";
import { updateSession, capturePaypalSession } from "./upsellSessionServices";
import {
  setLocalStorageWithExpiry,
  getLocalStorageWithExpiry,
} from "@/app/_utils/localStorageUtils";
import { UpsellInfoType } from "@/interfaces/upsellInfo";
import useActiveSessionTimer from "@/app/_utils/activeSessionTimer";
import { isGoogle } from "@/app/_utils/postbackUtils";
import { delay } from "@/app/_utils/delay";

export const useUpsellPage = () => {
  const [loading, setLoading] = useState("");
  const [showCcPop, setShowCcPop] = useState(false);
  const mixpanelId = useMixpanelId();
  const { sessionId } = useSession();
  const { hitId } = useTracking();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const queryString = Array.from(searchParams.entries())
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
  const router = useRouter();

  const capturePaypalOrderInfo = useCallback(async () => {
    const alt_pay_method = searchParams.get("alt_pay_method");
    const paypal_order_id = searchParams.get("orderId");
    const paypal_error_found = searchParams.get("errorFound");

    if (alt_pay_method !== "paypal" || !sessionId) return;

    //debounce check
    const now = Date.now();
    const lastCapture = window._lastPaypalCapture || 0;
    if (now - lastCapture < 100) {
      console.log("Already attempted PayPal capture within 100ms, skipping");
      return;
    }
    window._lastPaypalCapture = now;

    const capturedOrderId = getLocalStorageWithExpiry("capturedPaypalOrderId");
    if (capturedOrderId === paypal_order_id) return;

    try {
      if (paypal_order_id && paypal_error_found === "0") {
        sendGAEvent("event", "capture_paypal_order", { sessionId });
        sendGTMEvent({
          event: "caputure-paypal-order-datalayer",
          ecommerce: {
            transaction_id: sessionId,
            ff_hit_id: hitId,
            currency: "USD",
            shipping: 6.95,
          },
          eventModel: {},
          payment_status: "success",
        });

        const paypalOrderInfo = Object.fromEntries(searchParams);
        const updates = {
          currentStep: "1",
          paymentType: "paypal",
          paypalOrder: paypalOrderInfo,
          orderConfirmedAt: new Date().toISOString(),
        };

        const paypalSeshData = await capturePaypalSession(
          sessionId,
          updates,
          mixpanelId
        );

        const orderValue = parseFloat(
          paypalSeshData?.paypalOrder?.orderTotal || "32"
        );

        sendGTMEvent({
          event: "caputure-paypal-purchase",
          ecommerce: {
            transaction_id: sessionId,
            ff_hit_id: hitId,
            email: paypalSeshData?.customerInfo?.email,
            phone: paypalSeshData?.customerInfo?.phone,
            firstName: paypalSeshData?.customerInfo?.firstName,
            lastName: paypalSeshData?.customerInfo?.lastName,
            city: paypalSeshData?.customerInfo?.city,
            currency: "USD",
            state: paypalSeshData?.customerInfo?.state,
            country: paypalSeshData?.customerInfo?.country,
            postal_code: paypalSeshData?.customerInfo?.zip,
            value: orderValue,
            shipping: parseFloat(paypalSeshData?.productShipping),
            tax: 0,
            items: [
              {
                item_id: paypalSeshData?.productStickyId,
                item_name: paypalSeshData?.productName,
                price: parseFloat(paypalSeshData?.productPrice),
                quantity: 1,
              },
            ],
          },
          eventModel: {},
          payment_status: "success",
        });
        await fetchSessionData();
        setLocalStorageWithExpiry(
          "capturedPaypalOrderId",
          paypal_order_id,
          24 * 60 * 60 * 1000
        );
      } else {
        const updates = {
          paymentType: "credit",
          currentStep: "0",
        };
        await updateSession(sessionId, updates);
        alert("Error with PayPal Order. Please try again.");
        window.location.href = "/checkout";
      }
    } catch (err) {
      console.error("Error capturing order info:", err);
    }
  }, [
    searchParams.get("alt_pay_method"),
    searchParams.get("orderId"),
    searchParams.get("errorFound"),
    sessionId,
    hitId,
    mixpanelId,
    router,
  ]);

  const [sessionData, setSessionData] = useState<any | null>(null);

  const fetchSessionData = useCallback(async () => {
    if (!sessionId) return;

    // Add a simple debounce check
    const now = Date.now();
    const lastFetch = window._lastFetchTime || 0;
    if (now - lastFetch < 100) {
      console.log("Already fetched within 100ms, skipping fetch");
      return;
    } // Prevent fetches within 100ms of each other
    window._lastFetchTime = now;
    try {
      const response = await fetch("/api/session/fetch-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-jimmy-key": createJimmyKey().encryptedData,
        },
        body: JSON.stringify({ sessionId, requestedBy: "useUpsellPage" }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setSessionData(data.session);
    } catch (error) {
      console.error("Error fetching session:", error);
    }
  }, [sessionId]);

  useActiveSessionTimer({
    sessionId: sessionData?.sessionId,
    orderConfirmedAt: sessionData?.orderConfirmedAt,
    orderFinalized: sessionData?.orderFinalized,
  });

  // Fetch session data on pathname or sessionId change
  useEffect(() => {
    fetchSessionData();
  }, [pathname]);

  const pushSessionOrder = async (sessionId: string) => {
    sendGAEvent("event", "purchase-finalized", {
      sessionId: sessionId,
      finalizedBy: "upsell6",
    });
    try {
      const response = await fetch("/api/session/finalize-purchase", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-jimmy-key": createJimmyKey().encryptedData,
        },
        body: JSON.stringify({
          sessionId,
          finalizedBy: "upsell6",
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      const reportError = await fetch("/api/utility/send-slack-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-jimmy-key": createJimmyKey().encryptedData,
        },
        body: JSON.stringify({
          message: "Error - Pushing Order Failed - Upsell6 Page",
          errorDetails: error,
          userInfo: { sessionId },
        }),
      });
      console.error("Error pushing session data to Sticky.io - ", error);
      return null;
    }
  };

  const nextStep = useCallback(
    async (offer?: UpsellInfoType) => {
      if (!sessionId) return;

      const currentStep = parseInt(sessionData?.currentStep || "0", 10);
      const upsellFlow = JSON.parse(sessionData?.upsellFlow) || [];

      // Send GA event based on current step and whether offer was accepted
      const eventName = offer
        ? `accept_upsell${currentStep}`
        : `decline_upsell${currentStep}`;

      sendGAEvent("event", eventName, { sessionId });

      const updates = {
        currentStep: currentStep + 1,
        ...(offer && { upsells: [...(sessionData?.upsells || []), offer] }),
      };

      await updateSession(sessionId, updates);
      console.log("Current step:", currentStep);
      console.log("Upsell flow:", upsellFlow);
      console.log("Next step:", currentStep + 1);
      if (currentStep < upsellFlow.length) {
        console.log(
          "Current Step: ",
          currentStep,
          " - Upsell Length: ",
          upsellFlow.length
        );
        console.log("Redirecting to next upsell");
        window.location.href = `/checkout/upsell${
          currentStep + 1
        }?${searchParams}`;
      } else if (currentStep === upsellFlow.length) {
        console.log("End of upsell flow - finalizing order: ", sessionId);
        setLoading("Finalizing Order");
        const orderResponse = await pushSessionOrder(sessionId);
        console.log("Finalize Order Response: ", orderResponse);

        if (orderResponse?.attempts === 69) {
          setLoading("Order Confirmed");
          await delay(1000);
          window.location.href = `/checkout/thank-you?${searchParams}`;
        } else {
          setLoading("Error Processing Payment");
          await delay(1000);
          setLoading("Please Try Another Payment Method");
          await delay(1000);
          setLoading("");
          setShowCcPop(true);
          return;
        }
        window.location.href = `/checkout/thank-you?${searchParams}`;
      }
    },
    [sessionId, sessionData, searchParams, router]
  );

  useEffect(() => {
    if (!pathname.includes("upsell1")) return;
    capturePaypalOrderInfo();
  }, [capturePaypalOrderInfo]);

  useEffect(() => {
    console.log("Loading state changed:", loading);
  }, [loading]);

  useEffect(() => {
    const firePurchaseEvent = async () => {
      // Only proceed if we're on upsell1 and we have sessionData
      if (!pathname.includes("upsell1") || !sessionData) return;

      // Check if event has already been fired for this session
      const eventFired = getLocalStorageWithExpiry(
        `purchase_event_${sessionId}`
      );
      if (eventFired) return;

      const value =
        parseFloat(sessionData?.productPrice || "0") +
        parseFloat(sessionData?.productShipping || "0");

      if (isGoogle(sessionData?.customFields?.cf41 || "")) {
        // Mark event as fired before the timeout
        setLocalStorageWithExpiry(
          `purchase_event_${sessionId}`,
          "true",
          24 * 60 * 60 * 1000 // 24 hours expiry
        );

        // fire purchase event after 2 seconds
        setTimeout(() => {
          console.log("Firing purchase event for Google");
          const orderValue = parseFloat(sessionData?.productPrice || "0");
          sendGTMEvent({
            event: "purchase-gtm-direct",
            ecommerce: {
              funnel: sessionData?.funnel,
              transaction_id: sessionId,
              ff_hit_id: hitId,
              email: sessionData?.customerInfo?.email,
              phone: sessionData?.customerInfo?.phone,
              firstName: sessionData?.customerInfo?.firstName,
              lastName: sessionData?.customerInfo?.lastName,
              city: sessionData?.customerInfo?.city,
              currency: "USD",
              state: sessionData?.customerInfo?.state,
              country: sessionData?.customerInfo?.country,
              postal_code: sessionData?.customerInfo?.zip,
              value: orderValue,
              shipping: parseFloat(sessionData?.productShipping),
              tax: 0,
              items: [
                {
                  item_id: sessionData?.productStickyId,
                  item_name: sessionData?.productName,
                  price: parseFloat(sessionData?.productPrice),
                  quantity: 1,
                },
              ],
            },
            eventModel: {},
            payment_status: "success",
          });
          // sendGAEvent("event", "purchase", {
          //   transaction_id: sessionId,
          //   value: value,
          //   tax: 0,
          //   shipping: parseFloat(sessionData?.productShipping || "0"),
          //   currency: "USD",
          //   email: sessionData?.customerInfo?.email,
          //   city: sessionData?.customerInfo?.city,
          //   country: sessionData?.customerInfo?.country,
          //   firstName: sessionData?.customerInfo?.firstName,
          //   lastname: sessionData?.customerInfo?.lastName,
          //   items: [
          //     {
          //       item_id: sessionData?.productId,
          //       item_name: sessionData?.productName,
          //       currency: "USD",
          //       price: parseFloat(sessionData?.productPrice || "0"),
          //       quantity: 1,
          //     },
          //   ],
          // });
        }, 1000);
      }
    };

    firePurchaseEvent();
  }, [sessionId, pathname, sessionData]);
  return {
    capturePaypalOrderInfo,
    nextStep,
    queryString,
    sessionData,
    loading,
    showCcPop,
    setShowCcPop,
  };
};
