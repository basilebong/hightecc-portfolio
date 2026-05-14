import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";

import { routing } from "@/i18n/routing";
import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og-image";
import { SITE_URL } from "@/lib/site";

export const alt = "Hightecc · Legal notice";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

const HOST = new URL(SITE_URL).host;

export function generateStaticParams() {
  return routing.locales.map((lang) => ({ lang }));
}

export default async function ImpressumOgImage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = hasLocale(routing.locales, lang) ? lang : routing.defaultLocale;
  const [meta, hero, footer] = await Promise.all([
    getTranslations({ locale, namespace: "metadata.impressum" }),
    getTranslations({ locale, namespace: "hero" }),
    getTranslations({ locale, namespace: "footer" }),
  ]);

  return renderOgImage({
    title: meta("title"),
    description: meta("description"),
    topLeft: hero("meta.indexValue"),
    topRight: hero("meta.fmtValue"),
    bottomLeft: `${HOST}/impressum`,
    bottomRight: footer("version"),
  });
}
