import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { getTranslations } from "next-intl/server";

import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/grid";
import { articles, getArticleContent } from "@/content/blog";
import type { Locale } from "@/i18n/config";
import { Link } from "@/i18n/navigation";

import styles from "./blog-index.module.css";

function formatDate(date: string, locale: Locale): string {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

export async function BlogIndex({ locale }: { locale: Locale }) {
  const t = await getTranslations("blog");

  return (
    <section id="blog">
      <Container>
        <div className={styles.column}>
          <div className={styles.header}>
            <p className={styles.kicker}>
              <span className={styles.mark}>Journal</span>
              <span className={styles.dot}>·</span>
              {t("index.kicker")}
            </p>
            <h1 className={styles.title}>
              {t.rich("index.title", { em: (chunks) => <em>{chunks}</em> })}
            </h1>
            <p className={styles.lede}>{t("index.lede")}</p>
          </div>

          <ul className={styles.list}>
            {articles.map((entry) => {
              const content = getArticleContent(entry, locale);

              return (
                <li key={entry.meta.slug} className={styles.item}>
                  <Link href={`/blog/${entry.meta.slug}`} className={styles.card}>
                    <p className={styles.eyebrow}>
                      <time dateTime={entry.meta.date}>{formatDate(entry.meta.date, locale)}</time>
                      <span className={styles.dot}>·</span>
                      {entry.meta.readingMinutes} {t("meta.readingSuffix")}
                    </p>

                    <h2 className={styles.cardTitle}>{content.title}</h2>
                    <p className={styles.cardDesc}>{content.description}</p>

                    <div className={styles.cardFoot}>
                      <div className={styles.tags}>
                        {content.tags.map((tag) => (
                          <Badge key={tag} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <span className={styles.readMore}>
                        {t("card.readMore")}
                        <ArrowRight aria-hidden />
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
