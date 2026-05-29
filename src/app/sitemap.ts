import { MetadataRoute } from "next";

const PRODUCTION_URL = "https://thumbmax.rudranboitei.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: PRODUCTION_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${PRODUCTION_URL}/#how-to-use`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${PRODUCTION_URL}/#faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
