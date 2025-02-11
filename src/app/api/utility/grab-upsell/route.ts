// app/api/utility/grab-upsell/route.ts
import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";
import { checkJimmyKey } from "@/app/_utils/jimmyKeyUtils";
import { getUpsellBySlug } from "@/app/_utils/api";
import { UpsellPageType } from "@/interfaces/upsellPage";

interface UpsellCheckResponse {
  currentUpsell: UpsellPageType; // Changed from upsellFlow array to single string
}

export async function POST(req: NextRequest) {
  try {
    // const jimmyKey = req.headers.get("x-jimmy-key");
    // if (!jimmyKey || !checkJimmyKey(jimmyKey)) {
    //   return NextResponse.json(
    //     { error: "Invalid or missing Jimmy Key" },
    //     { status: 401 }
    //   );
    // }

    const { requestedUpsell } = await req.json();

    if (!requestedUpsell || typeof requestedUpsell !== "string") {
      return NextResponse.json(
        { error: "Invalid session ID" },
        { status: 400 }
      );
    }

    let response: UpsellCheckResponse = {
      currentUpsell: getUpsellBySlug(requestedUpsell), // Get the current upsell page
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error pulling upsell data:", error);
    return NextResponse.json(
      {
        error: "Error checking upsell step",
        shouldRedirect: true,
        redirectUrl: "/checkout",
      },
      { status: 500 }
    );
  }
}
