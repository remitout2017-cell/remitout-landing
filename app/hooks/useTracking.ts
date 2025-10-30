"use client";

import { GOOGLE_ADS_ID } from "@/lib/gtag";
import { useCallback } from "react";


interface GoogleConversionParams extends Record<string, unknown> {
    send_to: string;
    value?: number;
    currency?: string;
    transaction_id?: string;
}

type FacebookStandardEvent =
    | "PageView"
    | "Purchase"
    | "Lead"
    | "ViewContent"
    | "AddToCart"
    | "InitiateCheckout"
    | "CompleteRegistration";

export function useTracking() {
   
    const trackGoogleConversion = useCallback(
        (conversionLabel: string, value = 1.0, transactionId?: string) => {
            if (typeof window === "undefined" || typeof window.gtag !== "function") {
                if (process.env.NODE_ENV === "development") {
                    console.warn("Google gtag is not available.");
                }
                return;
            }

            const params: GoogleConversionParams = {
                send_to: `${GOOGLE_ADS_ID}/${conversionLabel}`,
                value,
                currency: "INR",
                ...(transactionId && { transaction_id: transactionId }),
            };

            // No `any` – we know the shape matches the real signature
            window.gtag("event", "conversion", params);

            if (process.env.NODE_ENV === "development") {
                console.log("[Google] Conversion", { conversionLabel, value, transactionId });
            }
        },
        [] 
    );

 
    const trackFacebookEvent = useCallback(
        (eventName: FacebookStandardEvent | string, data?: Record<string, unknown>) => {
            if (typeof window === "undefined" || typeof window.fbq !== "function") {
                if (process.env.NODE_ENV === "development") {
                    console.warn("Facebook Pixel (fbq) is not available.");
                }
                return;
            }

            window.fbq("track", eventName, data);

            if (process.env.NODE_ENV === "development") {
                console.log("[FB] Event", eventName, data);
            }
        },
        []
    );

 
    const trackFacebookCustomEvent = useCallback(
        (eventName: string, data?: Record<string, unknown>) => {
            if (typeof window === "undefined" || typeof window.fbq !== "function") {
                if (process.env.NODE_ENV === "development") {
                    console.warn("Facebook Pixel (fbq) is not available.");
                }
                return;
            }

            window.fbq("trackCustom", eventName, data);

            if (process.env.NODE_ENV === "development") {
                console.log("[FB] Custom Event", eventName, data);
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