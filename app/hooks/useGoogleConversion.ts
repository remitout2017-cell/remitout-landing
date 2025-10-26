// app/hooks/useGoogleConversion.ts
export function useGoogleConversion() {
    const triggerConversion = (conversionLabel: string, value?: number) => {
        if (typeof window !== "undefined") {
            window.gtag?.("event", "conversion", {
                send_to: `AW-YYYYYYYYYY/${conversionLabel}`,
                value: value || 1.0,
                currency: "INR",
            });
            console.log("Google Ads Conversion Triggered:", conversionLabel);
        }
    };
    return { triggerConversion };
}
