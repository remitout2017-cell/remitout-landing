import { useCallback } from "react";

export function useTracking() {
    //  Google Conversion Event
    const trackGoogleConversion = (conversionLabel: string, value?: number) => {
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "conversion", {
                send_to: `AW-YYYYYYYYYY/${conversionLabel}`,
                value: value || 1.0,
                currency: "INR",
            });
            console.log("Google Conversion Triggered:", conversionLabel);
        }
    };



    //  Facebook Standard Event (PageView, Purchase, Lead, etc.)
    const trackFacebookEvent = useCallback(
        (eventName: "PageView" | "Purchase" | "Lead" | "ViewContent" | string, data?: Record<string, any>) => {
            if (typeof window !== "undefined" && typeof window.fbq === "function") {
                try {
                    window.fbq("track", eventName, data || {});
                    if (process.env.NODE_ENV === "development") {
                        console.log(" Facebook Standard Event:", eventName, data);
                    }
                } catch (error) {
                    console.error(" Error tracking Facebook standard event:", error);
                }
            } else if (process.env.NODE_ENV === "development") {
                console.warn("fbq not initialized on window.");
            }
        },
        []
    );

    //  Facebook Custom Event (e.g. “SignupButtonClick”, “LoanApplicationStart”)
    const trackFacebookCustomEvent = useCallback(
        (eventName: string, data?: Record<string, any>) => {
            if (typeof window !== "undefined" && typeof window.fbq === "function") {
                try {
                    window.fbq("trackCustom", eventName, data || {});
                    if (process.env.NODE_ENV === "development") {
                        console.log(" Facebook Custom Event:", eventName, data);
                    }
                } catch (error) {
                    console.error(" Error tracking Facebook custom event:", error);
                }
            } else if (process.env.NODE_ENV === "development") {
                console.warn(" fbq not initialized on window.");
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

