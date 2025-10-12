"use client";
import Script from "next/script";
import "./globals.css";
import { useEffect, useState } from "react";
import { getSEO } from "@/lib/route";

const GTM_ID = "GTM-M45PXNHP";
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
          href={seo.canonicalUrl || "https://remitout-landing.vercel.app"}
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
          content={seo.ogUrl || "https://remitout-landing.vercel.app"}
        />
        <meta
          name="twitter:card"
          content={seo.twitterCard || "summary_large_image"}
        />
        {/* GTM Script */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
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
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX'); // Replace with your GA4 Measurement ID
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
