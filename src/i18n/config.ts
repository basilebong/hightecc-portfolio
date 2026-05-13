export const locales = ["de", "en"] as const;

export const defaultLocale = "de" satisfies (typeof locales)[number];

export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
