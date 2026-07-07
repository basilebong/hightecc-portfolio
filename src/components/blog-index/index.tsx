import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { getTranslations } from "next-intl/server";

import { Badge } from "@/components/ui/badge";
import { Col, Container, Row } from "@/components/ui/grid";
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
        <Row rowGap={24}>
          <Col span={12} md={3}>
            <div className={styles.tag}>
              <span className={styles.name}>Blog</span>
              <span>{t("index.kicker")}</span>
            </div>
          </Col>
          <Col span={12} md={9}>
            <h1 className={styles.title}>
              {t.rich("index.title", { em: (chunks) => <em>{chunks}</em> })}
            </h1>
            <p className={styles.lede}>{t("index.lede")}</p>
          </Col>
        </Row>
      </Container>

      <Container className={styles.listWrap}>
        <ul className={styles.list}>
          {articles.map((entry) => {
            const content = getArticleContent(entry, locale);

            return (
              <li key={entry.meta.slug}>
                <Link href={`/blog/${entry.meta.slug}`} className={styles.card}>
                  <div className={styles.cardMeta}>
                    <time dateTime={entry.meta.date}>{formatDate(entry.meta.date, locale)}</time>
                    <span>
                      {entry.meta.readingMinutes} {t("meta.readingSuffix")}
                    </span>
                  </div>

                  <div className={styles.cardMain}>
                    <h2 className={styles.cardTitle}>{content.title}</h2>
                    <p className={styles.cardDesc}>{content.description}</p>
                    <div className={styles.cardTags}>
                      {content.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className={styles.cardCta}>
                    <span>{t("card.readMore")}</span>
                    <ArrowRight aria-hidden />
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
