"use client";
import { useEffect, useState } from "react";
import Script from "next/script";
import { getSEO } from "@/lib/route";

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
                const data = await getSEO(); // dynamic SEO fetch
                setSEO(data);
            } catch (err) {
                console.error("Error fetching SEO", err);
            }
        };
        fetchSEO();
    }, []);

    return (
        <>
            {/* Dynamic SEO */}
            <head>
                <title>{seo.metaTitle || "Remitout"}</title>
                <meta
                    name="description"
                    content={seo.metaDescription || "Default description"}
                />
                <link
                    rel="canonical"
                    href={seo.canonicalUrl || "https://loan.remitout.com"}
                />
                <meta
                    property="og:title"
                    content={seo.ogTitle || seo.metaTitle || "Remitout"}
                />
                <meta
                    property="og:description"
                    content={seo.ogDescription || seo.metaDescription || ""}
                />
                <meta
                    property="og:image"
                    content={
                        seo.ogImage?.url
                            ? `${API_URL}${seo.ogImage.url}`
                            : seo.ogImageUrl || "/og-image.jpg"
                    }
                />
                <meta property="og:url" content={seo.ogUrl || "http://loan.remitout.com"} />
                <meta
                    name="twitter:card"
                    content={seo.twitterCard || "summary_large_image"}
                />
            </head>

            {/* Google Analytics */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-KJ4KBZV4JE"
                strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KJ4KBZV4JE');
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
                "name": "How do I apply for an education loan?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can apply online through Remitout by filling out our contact form and submitting the required documents."
                }
              },
              {
                "@type": "Question",
                "name": "What services does Remitout provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We connect students with educational consultants, universities, and banks for loans, admissions, and remittance services."
                }
              }
            ]
          }
        `}
            </Script>
        </>
    );
}
