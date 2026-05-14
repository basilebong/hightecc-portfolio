import { defineRouting } from "next-intl/routing";

import { defaultLocale, locales } from "./config";

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
  localeCookie: false,
  localeDetection: true,
  alternateLinks: true,
});

export function generateLocaleStaticParams() {
  return routing.locales.map((lang) => ({ lang }));
}
