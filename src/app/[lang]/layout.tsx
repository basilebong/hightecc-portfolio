import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Merriweather } from "next/font/google";
import { notFound } from "next/navigation";

import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { localeAlternates } from "@/i18n/metadata";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/site";

import "../globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export function generateStaticParams() {
  return routing.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(routing.locales, lang)) return {};

  const t = await getTranslations({ locale: lang, namespace: "metadata.home" });

  return {
    metadataBase: new URL(SITE_URL),
    title: t("title"),
    description: t("description"),
    alternates: localeAlternates(lang),
    openGraph: {
      locale: lang === "en" ? "en_US" : "de_DE",
      type: "website",
      url: `${SITE_URL}/${lang}`,
      title: t("title"),
      description: t("description"),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(routing.locales, lang)) notFound();

  setRequestLocale(lang);

  const t = await getTranslations({ locale: lang, namespace: "a11y" });

  return (
    <html
      lang={lang}
      className={`${dmSans.variable} ${merriweather.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <NextIntlClientProvider>
          <a href="#main" className="skip-link">
            {t("skipLink")}
          </a>
          <div className="grid-overlay" aria-hidden />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
