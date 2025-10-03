import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Remitout - Education Loan, Admission & Remittance Services for Students Abroad",
  description:
    "Remitout offers complete study abroad support - education loans, admission guidance, and RBI-compliant remittance. Trusted by students & parents for a hassle-free journey.",
};

const GTM_ID = "GTM-M45PXNHP";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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
        <link rel="canonical" href="https://remitout-landing.vercel.app" />
        <meta
          property="og:title"
          content="Remitout - Education Loan, Admission & Remittance Services for Students Abroad"
        />
        <meta
          property="og:description"
          content="Fast education loans, expert admission guidance & secure remittance - all in one place."
        />
        <meta
          property="og:image"
          content="https://remitout-landing.vercel.app/og-image.jpg"
        />
        <meta property="og:url" content="https://remitout-landing.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
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
