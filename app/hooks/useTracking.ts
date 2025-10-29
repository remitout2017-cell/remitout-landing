import { useCallback } from "react";

// Define types for FB and Google events
type FacebookEventData = Record<string, string | number | boolean | null | undefined>;
type GoogleEventParams = {
    send_to: string;
    value?: number;
    currency?: string;
};

/**
 * Unified tracking hook for Google Ads + Facebook Pixel
 */
export function useTracking() {
    // ✅ Google Conversion Event
    const trackGoogleConversion = useCallback(
        (conversionLabel: string, value?: number): void => {
            if (typeof window !== "undefined" && typeof window.gtag === "function") {
                const params: GoogleEventParams = {
                    send_to: `AW-YYYYYYYYYY/${conversionLabel}`,
                    value: value || 1.0,
                    currency: "INR",
                };
                window.gtag("event", "conversion", params);
                if (process.env.NODE_ENV === "development") {
                    console.log("✅ Google Conversion Triggered:", conversionLabel, params);
                }
            } else if (process.env.NODE_ENV === "development") {
                console.warn("⚠️ gtag not initialized on window.");
            }
        },
        []
    );

    // ✅ Facebook Standard Event (PageView, Purchase, Lead, etc.)
    const trackFacebookEvent = useCallback(
        (
            eventName: "PageView" | "Purchase" | "Lead" | "ViewContent" | string,
            data?: FacebookEventData
        ): void => {
            if (typeof window !== "undefined" && typeof window.fbq === "function") {
                try {
                    window.fbq("track", eventName, data || {});
                    if (process.env.NODE_ENV === "development") {
                        console.log("📊 Facebook Standard Event:", eventName, data);
                    }
                } catch (error) {
                    console.error("❌ Error tracking Facebook standard event:", error);
                }
            } else if (process.env.NODE_ENV === "development") {
                console.warn("⚠️ fbq not initialized on window.");
            }
        },
        []
    );

    // ✅ Facebook Custom Event (e.g. “SignupButtonClick”, “LoanApplicationStart”)
    const trackFacebookCustomEvent = useCallback(
        (eventName: string, data?: FacebookEventData): void => {
            if (typeof window !== "undefined" && typeof window.fbq === "function") {
                try {
                    window.fbq("trackCustom", eventName, data || {});
                    if (process.env.NODE_ENV === "development") {
                        console.log("📊 Facebook Custom Event:", eventName, data);
                    }
                } catch (error) {
                    console.error("❌ Error tracking Facebook custom event:", error);
                }
            } else if (process.env.NODE_ENV === "development") {
                console.warn("⚠️ fbq not initialized on window.");
            }
        },
        []
    );

    return {
        trackGoogleConversion,
        trackFacebookEvent,
        trackFacebookCustomEvent,
    };
}

