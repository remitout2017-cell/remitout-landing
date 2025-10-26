import { MetadataRoute } from "next";

const BASE_URL = "https://loan.remitout.com";

/**
 * Dynamically generates sitemap XML for SEO
 * Compatible with Next.js App Router
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Define all important static pages
    const staticRoutes = [
        "",
        "/education-loan",
        "/admission-support",
        "/remittance",
        "/testimonials",
        "/faqs",
        "/privacy-policy",
        "/terms-of-use",
    ];

    // Map static pages into Next.js sitemap format
    const urls: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
        url: `${BASE_URL}${path}`,
        lastModified: new Date("2025-10-05").toISOString(),
        changeFrequency:
            path === "" || path === "/education-loan" ? "weekly" : "monthly",
        priority:
            path === ""
                ? 1.0
                : path === "/education-loan"
                    ? 0.95
                    : path === "/admission-support"
                        ? 0.85
                        : path === "/remittance"
                            ? 0.8
                            : path === "/testimonials"
                                ? 0.7
                                : path === "/faqs"
                                    ? 0.6
                                    : 0.3,
    }));

    //  OPTIONAL: Add dynamic pages from an API or CMS
    // const res = await fetch(`${BASE_URL}/api/pages`, { next: { revalidate: 3600 } });
    // if (res.ok) {
    //   const dynamicPages = await res.json();
    //   dynamicPages.forEach((page: { slug: string; updatedAt: string }) => {
    //     urls.push({
    //       url: `${BASE_URL}/${page.slug}`,
    //       lastModified: new Date(page.updatedAt).toISOString(),
    //       changeFrequency: "monthly",
    //       priority: 0.5,
    //     });
    //   });
    // }

    return urls;
}
