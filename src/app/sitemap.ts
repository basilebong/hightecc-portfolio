import type { MetadataRoute } from "next";

import { articles } from "@/content/blog";
import { locales } from "@/i18n/config";
import { SITE_URL } from "@/lib/site";

type Entry = { path: string; lastModified?: string };

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: Entry[] = [
    { path: "" },
    { path: "/blog" },
    { path: "/impressum" },
    ...articles.map((a) => ({ path: `/blog/${a.meta.slug}`, lastModified: a.meta.date })),
  ];

  return locales.flatMap((lang) =>
    entries.map((entry) => ({
      url: `${SITE_URL}/${lang}${entry.path}`,
      lastModified: entry.lastModified,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}${entry.path}`])),
      },
    })),
  );
}
