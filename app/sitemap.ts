import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.growthline.co.tz";
  const now = new Date();

  const routes = [
    "",
    "/about",
    "/services",
    "/clients",
    "/contact",
    "/profile",
    "/capacity",
    "/certificates",
  ];

  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
