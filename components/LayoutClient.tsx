// components/LayoutClient.tsx
"use client";
import { useEffect, useState } from "react";
import Script from "next/script";
import { getSEO } from "@/lib/route";
import { GA_MEASUREMENT_ID, GOOGLE_ADS_ID } from "@/lib/gtag";
import WhatsAppButton from "@/components/WhatsAppButton";

const API_URL = "http://loan.remitout.com";

interface SEO {
    metaTitle?: string;
    metaDescription?: string;
    canonicalUrl?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: { url?: string };
    ogImageUrl?: string;
    ogUrl?: string;
    twitterCard?: string;
}

export default function LayoutClient() {
    const [seo, setSEO] = useState<SEO>({});

    useEffect(() => {
        const fetchSEO = async () => {
            try {
                const data = await getSEO();
                setSEO(data);
            } catch (err) {
                console.error("Error fetching SEO", err);
            }
        };
        fetchSEO();
    }, []);

    return (
        <>
            <head>
                {/* Dynamic SEO */}
                <title>{seo.metaTitle || "Remitout"}</title>
                <meta name="description" content={seo.metaDescription || "Default description"} />
                <link rel="canonical" href={seo.canonicalUrl || "https://loan.remitout.com"} />
                <meta property="og:title" content={seo.ogTitle || seo.metaTitle || "Remitout"} />
                <meta property="og:description" content={seo.ogDescription || seo.metaDescription || ""} />
                <meta
                    property="og:image"
                    content={seo.ogImage?.url ? `${API_URL}${seo.ogImage.url}` : seo.ogImageUrl || "/og-image.jpg"}
                />
                <meta property="og:url" content={seo.ogUrl || "http://loan.remitout.com"} />
                <meta name="twitter:card" content={seo.twitterCard || "summary_large_image"} />
            </head>

            {/* Sitemap */}
            <link rel="sitemap" type="application/xml" href="https://loan.remitout.com/sitemap.xml" />

            {/* GA4 */}
            {GA_MEASUREMENT_ID && (
                <>
                    <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
                    <Script id="ga4-init" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: true });
          `}</Script>
                </>
            )}

            {/* Google Ads */}
            {GOOGLE_ADS_ID && (
                <>
                    <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`} />
                    <Script id="google-ads-init" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ADS_ID}');
          `}</Script>
                </>
            )}

            {/* Organization Schema */}
            <Script id="Organization-schema" type="application/ld+json" strategy="afterInteractive">
                {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Remitout",
            "url": "https://loan.remitout.com",
            "logo": "https://loan.remitout.com/logo1.svg",
            "contactPoint": [{
              "@type": "ContactPoint",
              "telephone": "+91-XXXXXXXXXX",
              "contactType": "customer service",
              "areaServed": "IN",
              "availableLanguage": ["English","Hindi"]
            }]
          }
        `}
            </Script>

            {/* FAQ Schema */}
            <Script id="faq-schema" type="application/ld+json" strategy="afterInteractive">
                {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Do you offer education loans without collateral?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes — we arrange unsecured education loans for eligible applicants. Check your eligibility to see available options."
                }
              },
              {
                "@type": "Question",
                "name": "How long does loan approval take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Typical processing time is 3–7 business days once documents are submitted and verification is complete."
                }
              }
            ]
          }
        `}
            </Script>
           
        </>
    );
}
