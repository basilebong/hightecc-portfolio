import type { Metadata } from "next";

import { SITE_URL } from "@/lib/site";

import { locales } from "./config";

export function localeAlternates(lang: string, path = "") {
  return {
    canonical: `/${lang}${path}`,
    languages: {
      ...Object.fromEntries(locales.map((l) => [l, `/${l}${path}`])),
      "x-default": path || "/",
    },
  };
}

export function ogLocale(lang: string): string {
  return lang === "en" ? "en_US" : "de_DE";
}

export function openGraphMetadata({
  lang,
  path = "",
  title,
  description,
}: {
  lang: string;
  path?: string;
  title: string;
  description: string;
}): NonNullable<Metadata["openGraph"]> {
  return {
    locale: ogLocale(lang),
    type: "website",
    url: `${SITE_URL}/${lang}${path}`,
    title,
    description,
  };
}
