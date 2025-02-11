import { createJimmyKey } from "@/app/_utils/jimmyKeyUtils";

export const updateSession = async (
  sessionId: string,
  updates: Record<string, any>
) => {
  try {
    const response = await fetch("/api/session/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-jimmy-key": createJimmyKey().encryptedData,
      },
      body: JSON.stringify({ sessionId, updates }),
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    await fetch("/api/utility/send-slack-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-jimmy-key": createJimmyKey().encryptedData,
      },
      body: JSON.stringify({
        message: "Error - Updating Session Failed - Upsell1 Page",
        errorDetails: error,
        userInfo: { sessionId },
      }),
    });
    console.error("Error updating session:", error);
    return null;
  }
};

export const capturePaypalSession = async (
  sessionId: string,
  updates: Record<string, any>,
  mixpanelId?: string | null
) => {
  try {
    const response = await fetch("/api/session/capture-paypal-purchase", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-jimmy-key": createJimmyKey().encryptedData,
      },
      body: JSON.stringify({ sessionId, updates }),
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    await fetch("/api/utility/send-slack-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-jimmy-key": createJimmyKey().encryptedData,
      },
      body: JSON.stringify({
        message:
          "Error Updating Session - Capture PayPal Purchase - Upsell Page",
        errorDetails: error,
        userInfo: { sessionId, mixpanelId },
      }),
    });
    console.error("Error updating session:", error);
    return null;
  }
};
