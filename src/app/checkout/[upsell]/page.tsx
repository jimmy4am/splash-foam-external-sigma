"use client";

import React, { useEffect, useState } from "react";
import UpsellPage from "@/app/_components/upsell-page";
import { Work_Sans } from "next/font/google";
import { useSession } from "@/app/_context/SessionContext";
import { useRouter, useSearchParams } from "next/navigation";
import { UpsellPageType } from "@/interfaces/upsellPage";
import { createJimmyKey } from "@/app/_utils/jimmyKeyUtils";

const workSans = Work_Sans({ subsets: ["latin"] });

type Props = {
  params: {
    upsell: string;
  };
};

const Page = ({ params }: Props) => {
  const [upsellInfo, setUpsellInfo] = useState<UpsellPageType | null>(null);
  const [showLoading, setShowLoading] = useState(false);
  const { sessionId } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    //redirect to checkout if upsell is not valid
    if (!params.upsell.startsWith("upsell")) {
      router.push("/checkout");
      return;
    }
    let loadingTimeout: NodeJS.Timeout;
    let sessionTimeout: NodeJS.Timeout;

    sessionTimeout = setTimeout(() => {
      if (!sessionId && !upsellInfo && !searchParams.get("show")) {
        alert("No order found. Redirecting to checkout.");
        router.push("/checkout");
      }
    }, 3000);

    const fetchUpsellInfo = async () => {
      // Set up loading timeout
      loadingTimeout = setTimeout(() => {
        if (!upsellInfo) {
          setShowLoading(true);
        }
      }, 1000);

      if (searchParams.get("show")) {
        const response = await fetch("/api/utility/grab-upsell", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // "x-jimmy-key": createJimmyKey().encryptedData,
          },
          body: JSON.stringify({
            requestedUpsell: searchParams.get("show"),
          }),
        });
        const data = await response.json();
        setUpsellInfo(data.currentUpsell);
        return;
      }

      try {
        const response = await fetch("/api/session/check-session-step", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-jimmy-key": createJimmyKey().encryptedData,
          },
          body: JSON.stringify({
            sessionId,
            currentPath: window.location.pathname,
          }),
        });

        const data = await response.json();

        if (data.shouldRedirect) {
          router.push(data.redirectUrl);
          return;
        }

        setUpsellInfo(data.currentUpsell);
      } catch (error) {
        console.error("Error fetching upsell info:", error);
        router.push("/checkout");
      }
    };

    if (sessionId || searchParams.get("show")) {
      fetchUpsellInfo();
    }

    return () => {
      clearTimeout(loadingTimeout);
      clearTimeout(sessionTimeout);
    };
  }, [sessionId, router, searchParams, params.upsell]); // Added params.upsell to dependencies

  if (!upsellInfo && showLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-blue-50">
        <div className="animate-pulse text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!upsellInfo) {
    return null;
  }

  return (
    <div className={workSans.className}>
      <UpsellPage info={upsellInfo} />
    </div>
  );
};

export default Page;
