// app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://loan.remitout.com";

    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/admin", "/api"],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl,
    };
}
