import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: getSiteUrl(),
      lastModified: "2026-11-16",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
