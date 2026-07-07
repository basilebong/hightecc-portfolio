import { notFound } from "next/navigation";

import { hasLocale } from "next-intl";

import { getArticle, getArticleSlugs } from "@/content/blog";
import { routing } from "@/i18n/routing";
import { OG_CONTENT_TYPE, OG_SIZE, ogImageResponse } from "@/lib/og-image";

export const alt = "Hightecc · Blog";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.flatMap((lang) => getArticleSlugs().map((slug) => ({ lang, slug })));
}

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!hasLocale(routing.locales, lang)) notFound();
  const article = getArticle(slug);
  if (!article) notFound();

  const content = article.content[lang];
  return ogImageResponse(content.title, content.description);
}
