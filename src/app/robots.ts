import { MetadataRoute } from "next";

const PRODUCTION_URL = "https://thumbmax.rudranboitei.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${PRODUCTION_URL}/sitemap.xml`,
    host: PRODUCTION_URL,
  };
}
