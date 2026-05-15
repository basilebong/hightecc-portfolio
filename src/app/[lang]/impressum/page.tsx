import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Impressum } from "@/components/impressum";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { localeAlternates, openGraphMetadata } from "@/i18n/metadata";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(routing.locales, lang)) return {};
  const t = await getTranslations({ locale: lang, namespace: "metadata.impressum" });

  return {
    metadataBase: new URL(SITE_URL),
    title: t("title"),
    description: t("description"),
    alternates: localeAlternates(lang, "/impressum"),
    openGraph: openGraphMetadata({
      lang,
      path: "/impressum",
      title: t("title"),
      description: t("description"),
    }),
  };
}

export default async function ImpressumPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(routing.locales, lang)) notFound();
  setRequestLocale(lang);

  return (
    <>
      <SiteHeader />
      <main id="main">
        <Impressum />
      </main>
      <SiteFooter />
    </>
  );
}
