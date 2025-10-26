import LayoutClient from "@/components/LayoutClient";
import "./globals.css";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch("https://loan.remitout.com/api/globals/seo", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch SEO data");
    const data = await res.json();

    return {
      title: data.metaTitle || "Remitout | Education Loans for Abroad Studies",
      description:
        data.metaDescription ||
        "Apply for abroad education loans, admission guidance & RBI-compliant remittance with Remitout.",
      openGraph: {
        title:
          data.ogTitle || "Remitout - Education Loans and Remittance Support",
        description:
          data.ogDescription ||
          "Simplify your overseas education finance and remittance — trusted by 1000+ students.",
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
        {/* Client-side scripts and dynamic SEO */}
        <LayoutClient />
        {children}
      </body>
    </html>
  );
}
