// app/layout.tsx
import LayoutClient from "@/components/LayoutClient";
import "./globals.css";
import type { Metadata } from "next";
import AnalyticsProvider from "@/app/providers/AnalyticsProvider";
import WhatsAppButton from "@/components/WhatsAppButton";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch("https://loan.remitout.com/api/globals/seo", {
        next: { revalidate: 60 },     
    });
    if (!res.ok) throw new Error("Failed to fetch SEO data");
    const data = await res.json();

    return {
      title:
        data.metaTitle ||
        "Education Loan for Abroad | Apply Online & Compare Banks | Remitout",
      description:
        data.metaDescription ||
        "Compare top banks & get the best education loan for studying abroad. Fast approvals, options without collateral, RBI-authorized partners. Check eligibility now.",
      openGraph: {
        title: data.ogTitle || "Education Loan for Abroad | Remitout",
        description:
          data.ogDescription ||
          "Apply for education loans for Canada, UK, Germany and USA. Compare lenders, get fast approvals and expert support from ex-bankers.",
        url: data.canonicalUrl || "https://loan.remitout.com",
        images: [
          {
            url: data.ogImage?.url || "https://loan.remitout.com/og-image.jpg",
            width: 1200,
            height: 630,
            alt: "Remitout - Education Loan Platform",
          },
        ],
      },
      alternates: {
        canonical: data.canonicalUrl || "https://loan.remitout.com",
      },
      twitter: {
        card: "summary_large_image",
      },
    };
  } catch (error) {
    console.error("Metadata generation error:", error);
    return {
      title: "Remitout | Education Loans for Abroad Studies",
      description: "Simplify your study abroad finance journey with Remitout.",
    };
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Client-side scripts, dynamic SEO, GA4, Google Ads */}
        <LayoutClient />
        <AnalyticsProvider />
        {/* WhatsApp Quick Link */}
        <WhatsAppButton
          phoneNumber="9819176629" // Replace with your WhatsApp number
          prefilledMessage="Hi, I am interested in applying for an education loan."
        />
        {children}
      </body>
    </html>
  );
}
