export const locales = ["de", "en"] as const;

export const defaultLocale = "en" satisfies (typeof locales)[number];

export type Locale = (typeof locales)[number];
