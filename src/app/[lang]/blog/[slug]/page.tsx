import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { BlogPost } from "@/components/blog-post";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getArticle, getArticleSlugs } from "@/content/blog";
import { localeAlternates, ogLocale } from "@/i18n/metadata";
import { routing } from "@/i18n/routing";
import { SITE_URL, site } from "@/lib/site";

export function generateStaticParams() {
  return routing.locales.flatMap((lang) => getArticleSlugs().map((slug) => ({ lang, slug })));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!hasLocale(routing.locales, lang)) return {};
  const article = getArticle(slug);
  if (!article) return {};

  const content = article.content[lang];
  const path = `/blog/${slug}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: content.title,
    description: content.description,
    authors: [{ name: site.owner.name, url: site.owner.linkedin }],
    alternates: localeAlternates(lang, path),
    openGraph: {
      type: "article",
      locale: ogLocale(lang),
      url: `${SITE_URL}/${lang}${path}`,
      title: content.title,
      description: content.description,
      publishedTime: article.meta.date,
      authors: [site.owner.name],
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!hasLocale(routing.locales, lang)) notFound();
  const article = getArticle(slug);
  if (!article) notFound();
  setRequestLocale(lang);

  const t = await getTranslations("nav");
  const content = article.content[lang];
  const url = `${SITE_URL}/${lang}/blog/${slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: content.title,
      description: content.description,
      inLanguage: lang,
      datePublished: article.meta.date,
      dateModified: article.meta.date,
      image: `${url}/opengraph-image`,
      author: { "@type": "Person", name: site.owner.name, url: site.owner.linkedin },
      publisher: { "@type": "Organization", name: site.name, url: SITE_URL },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: t("blog"), item: `${SITE_URL}/${lang}/blog` },
        { "@type": "ListItem", position: 2, name: content.title, item: url },
      ],
    },
  ];

  return (
    <>
      <SiteHeader />
      <main id="main">
        <BlogPost article={article} locale={lang} />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: trusted first-party structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
