"use client";
import Script from "next/script";
import "./globals.css";
import { useEffect, useState } from "react";
import { getSEO } from "@/lib/route";

const API_URL = "http://loan.remitout.com";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [seo, setSEO] = useState<{
    metaTitle?: string;
    metaDescription?: string;
    canonicalUrl?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: { url?: string };
    ogImageUrl?: string;
    ogUrl?: string;
    twitterCard?: string;
  }>({});

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
  const defaultSEO = {
    metaTitle: "Education Loan for Abroad Studies | Remitout Finance",
    metaDescription:
      "Apply online for an overseas education loan in India. Compare lenders, get fast approval, and study abroad with trusted financial guidance from Remitout.",
    canonicalUrl: "https://loan.remitout.com",
    ogTitle: "Remitout Education Loan | Fast Approval for Study Abroad",
    ogDescription:
      "Simplify your overseas education loan with expert help. Trusted by 1000+ students.",
    ogImageUrl: "https://loan.remitout.com/og-image.jpg",
    ogUrl: "https://loan.remitout.com",
    twitterCard: "summary_large_image",
  };

  return (
    <html lang="en">
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
        <meta
          property="og:url"
          content={seo.ogUrl || "http://loan.remitout.com"}
        />
        <meta
          name="twitter:card"
          content={seo.twitterCard || "summary_large_image"}
        />
        {/* ✅ Google Analytics 4 (gtag.js) */}
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
        <Script
          id="faq-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
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
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
