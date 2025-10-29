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

    // Facebook Standard Event ( PageView, Purchase, Lead)
    const trackFacebookEvent = useCallback((eventName: string, data?: Record<string, any>) => {
        if (typeof window !== "undefined" && window.fbq) {
            try {
                window.fbq("track", eventName, data || {});
                if (process.env.NODE_ENV === 'development') {
                    console.log("Facebook Standard Event:", eventName);
                }
            } catch (error) {
                console.error("Error tracking Facebook event:", error);
            }
        }
    }, []);
    // Facebook Custom Event
    const trackFacebookCustomEvent = (eventName: string, data?: Record<string, any>) => {
        if (typeof window !== "undefined" && window?.fbq) {
            try {
                window.fbq("trackCustom", eventName, data || {});
                if (process.env.NODE_ENV === 'development') {
                    console.log("Facebook Custom Event:", eventName, data);
                }
            } catch (error) {
                console.error("Error tracking Facebook custom event:", error);
            }
        }
    };
    return {
        trackGoogleConversion,
        trackFacebookEvent,
        trackFacebookCustomEvent,
    };
}
