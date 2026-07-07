import type { Locale } from "@/i18n/config";

import { article as howToAddAiToYourProduct } from "./how-to-add-ai-to-your-product";
import type { BlogArticle, BlogArticleContent } from "./types";

const registry: BlogArticle[] = [howToAddAiToYourProduct];

export const articles: BlogArticle[] = [...registry].sort((a, b) =>
  b.meta.date.localeCompare(a.meta.date),
);

export function getArticleSlugs(): string[] {
  return articles.map((a) => a.meta.slug);
}

export function getArticle(slug: string): BlogArticle | undefined {
  return articles.find((a) => a.meta.slug === slug);
}

export function getArticleContent(article: BlogArticle, locale: Locale): BlogArticleContent {
  return article.content[locale];
}

export type { BlogArticle, BlogArticleContent, BlogArticleMeta } from "./types";
