import type { BlogArticle } from "../types";
import { de } from "./de";
import { en } from "./en";

export const article: BlogArticle = {
  meta: {
    slug: "how-to-add-ai-to-your-product",
    date: "2026-07-07",
    readingMinutes: 6,
  },
  content: { de, en },
};
