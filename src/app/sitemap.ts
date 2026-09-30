import type { MetadataRoute } from "next";

const BASE_URL = "https://alexguofilm.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/commercial", "/narrative", "/acting", "/about", "/privacy", "/terms"];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));
}
