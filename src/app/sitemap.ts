import type { MetadataRoute } from "next";
import { workCatalog } from "@/content/works";
import { getSiteConfig } from "@/lib/content";
import { getRoute, locales } from "@/lib/i18n";
import { absoluteUrl, contentRevision } from "@/lib/seo";
import type { RouteKey } from "@/lib/types";

const pages: { key: RouteKey; priority: number }[] = [
  { key: "home", priority: 1 },
  { key: "work", priority: 0.8 },
  { key: "packs", priority: 0.7 },
  { key: "services", priority: 0.8 },
  { key: "studio", priority: 0.6 },
  { key: "contact", priority: 0.6 },
  { key: "legal", priority: 0.2 },
  { key: "privacy", priority: 0.2 },
  { key: "cookies", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const site = getSiteConfig();
  const lastModified = new Date(contentRevision());
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of pages) {
      entries.push({
        url: `${site.url}${getRoute(locale, page.key)}`,
        lastModified,
        changeFrequency: page.key === "legal" || page.key === "privacy" || page.key === "cookies" ? "yearly" : "monthly",
        priority: page.priority,
      });
    }

    for (const work of workCatalog) {
      entries.push({
        url: absoluteUrl(getRoute(locale, "work", `/${work.slug}`)),
        lastModified,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
