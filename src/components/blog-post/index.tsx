import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { getTranslations } from "next-intl/server";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/grid";
import type { BlogArticle } from "@/content/blog";
import { getArticleContent } from "@/content/blog";
import type { Locale } from "@/i18n/config";
import { Link } from "@/i18n/navigation";
import { site } from "@/lib/site";

import styles from "./blog-post.module.css";

function formatDate(date: string, locale: Locale): string {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

export async function BlogPost({ article, locale }: { article: BlogArticle; locale: Locale }) {
  const t = await getTranslations("blog");
  const content = getArticleContent(article, locale);

  return (
    <article className={styles.article}>
      <Container>
        <div className={styles.column}>
          <Link href="/blog" className={styles.back}>
            <ArrowLeft aria-hidden />
            {t("post.backToList")}
          </Link>

          <header className={styles.header}>
            <p className={styles.kicker}>{content.kicker}</p>
            <h1 className={styles.title}>{content.title}</h1>
            <p className={styles.lede}>{content.lede}</p>
            <p className={styles.byline}>
              {site.owner.name}
              <span className={styles.dot}>·</span>
              <time dateTime={article.meta.date}>{formatDate(article.meta.date, locale)}</time>
              <span className={styles.dot}>·</span>
              {article.meta.readingMinutes} {t("meta.readingSuffix")}
            </p>
          </header>

          <div className={styles.prose}>{content.body}</div>

          <div className={styles.cta}>
            <p className={styles.ctaHeading}>
              {t.rich("post.cta.heading", { em: (chunks) => <em>{chunks}</em> })}
            </p>
            <p className={styles.ctaBody}>{t("post.cta.body")}</p>
            <Button asChild>
              <Link href="/#contact">
                {t("post.cta.button")}
                <ArrowRight aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </article>
  );
}
