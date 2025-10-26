/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://loan.remitout.com", // ✅ Your production domain
    generateRobotsTxt: true,              // Auto-generate robots.txt
    changefreq: "monthly",
    priority: 0.7,
    sitemapSize: 7000,
    exclude: ["/admin", "/api/*"],        // Optional: exclude private routes
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
        additionalSitemaps: [
            "https://loan.remitout.com/sitemap.xml", // reference main sitemap
        ],
    },
};
