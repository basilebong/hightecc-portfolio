import type { ReactNode } from "react";

import type { Locale } from "@/i18n/config";

export type BlogArticleMeta = {
  slug: string;
  date: string;
  readingMinutes: number;
};

export type BlogArticleContent = {
  title: string;
  description: string;
  kicker: string;
  tags: string[];
  lede: ReactNode;
  body: ReactNode;
};

export type BlogArticle = {
  meta: BlogArticleMeta;
  content: Record<Locale, BlogArticleContent>;
};
