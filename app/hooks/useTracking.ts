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
    const trackFacebookEvent = (eventName: string, data?: Record<string, any>) => {
        if (typeof window !== "undefined" && window.fbq) {
            window.fbq("track", eventName, data || {});
            console.log("Facebook Standard Event:", eventName, data);
        }
    };

    // Facebook Custom Event
    const trackFacebookCustomEvent = (eventName: string, data?: Record<string, any>) => {
        if (typeof window !== "undefined" && window?.fbq) {
            window?.fbq("trackCustom", eventName, data || {});
            console.log("Facebook Custom Event:", eventName, data);
        }
    };

    return {
        trackGoogleConversion,
        trackFacebookEvent,
        trackFacebookCustomEvent,
    };
}
