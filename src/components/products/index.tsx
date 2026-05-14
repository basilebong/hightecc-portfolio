import { getTranslations } from "next-intl/server";

import { Col, Container, Row } from "@/components/ui/grid";

import { SectionHead } from "../section-head";
import styles from "./products.module.css";

export async function Products() {
  const t = await getTranslations("products");

  return (
    <section>
      <SectionHead
        num="04"
        name={t("section.name")}
        kicker={t("section.kicker")}
        title={t.rich("section.title", {
          em: (chunks) => <em>{chunks}</em>,
        })}
      />

      <Container>
        <Row className={styles.layout} rowGap={40}>
          <Col span={12} md={5}>
            <div className={styles.visual} aria-hidden>
              <div className={styles.window}>
                <div className={styles.topbar}>
                  <div className={styles.dots}>
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className={styles.urlbar}>untitled-project · /app</div>
                </div>
                <div className={styles.winBody}>
                  <div className={styles.sidebar}>
                    <div className={styles.sbarRow} />
                    <div className={styles.sbarRowShort} />
                    <div className={styles.sbarRow} />
                    <div className={styles.sbarRowShort} />
                    <div className={styles.sbarRow} />
                  </div>
                  <div className={styles.canvas}>
                    <div className={styles.headline} />
                    <div className={styles.sub} />
                    <div className={styles.cardsGrid}>
                      <div className={styles.card} />
                      <div className={styles.cardAccent} />
                      <div className={styles.card} />
                    </div>
                    <div className={styles.lines}>
                      <div className={styles.line} />
                      <div className={styles.line} />
                      <div className={styles.lineShort} />
                    </div>
                  </div>
                </div>
              </div>
              <span className={`${styles.label} ${styles.labelTl}`}>Fig. 04</span>
              <span className={`${styles.label} ${styles.labelTr}`}>Untitled · 2026</span>
              <span className={`${styles.label} ${styles.labelBl}`}>Wireframe v0.1</span>
              <span className={`${styles.label} ${styles.labelBr}`}>not-final</span>
            </div>
          </Col>

          <Col span={12} md={6} mdStart={7}>
            <div className={styles.copy}>
              <h3>
                {t.rich("heading", {
                  em: (chunks) => <em>{chunks}</em>,
                })}
              </h3>
              <p>{t("body")}</p>
              <div className={styles.meta}>
                <div>
                  <div className={styles.metaK}>{t("meta.statusK")}</div>
                  <div className={styles.metaV}>{t("meta.statusV")}</div>
                </div>
                <div>
                  <div className={styles.metaK}>{t("meta.launchK")}</div>
                  <div className={styles.metaV}>{t("meta.launchV")}</div>
                </div>
                <div>
                  <div className={styles.metaK}>{t("meta.modeK")}</div>
                  <div className={styles.metaV}>{t("meta.modeV")}</div>
                </div>
                <div>
                  <div className={styles.metaK}>{t("meta.updatesK")}</div>
                  <div className={styles.metaV}>{t("meta.updatesV")}</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
