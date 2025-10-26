// app/providers/AnalyticsProvider.tsx
"use client";
import Script from "next/script";
import { GA_MEASUREMENT_ID, GOOGLE_ADS_ID } from "@/lib/gtag";

export default function AnalyticsProvider() {
    return (
        <>
            {/* GA4 */}
            {GA_MEASUREMENT_ID && (
                <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
            )}

            {/* Google Ads */}
            {GOOGLE_ADS_ID && (
                <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`} />
            )}
        </>
    );
}
