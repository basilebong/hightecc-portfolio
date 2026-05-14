import { getTranslations } from "next-intl/server";

import { Col, Container, Row } from "@/components/ui/grid";

import { SectionHead } from "../section-head";
import styles from "./about.module.css";

export async function About() {
  const t = await getTranslations("about");

  return (
    <section id="about">
      <SectionHead
        num="01"
        name={t("section.name")}
        kicker={t("section.kicker")}
        title={t.rich("section.title", {
          em: (chunks) => <em>{chunks}</em>,
        })}
      />

      <Container>
        <Row rowGap={48}>
          <Col span={12} md={6} className={styles.narrative}>
            <p className={styles.lede}>
              {t.rich("lede", {
                em: (chunks) => <em>{chunks}</em>,
                muted: (chunks) => <span className={styles.ledeMuted}>{chunks}</span>,
              })}
            </p>
          </Col>

          <Col span={12} md={6}>
            <aside className={styles.credo}>
              <div className={styles.credoRow}>
                <div className={styles.credoK}>{t("credo.credoK")}</div>
                <div className={styles.credoV}>{t("credo.credoV")}</div>
              </div>
              <div className={styles.credoRow}>
                <div className={styles.credoK}>{t("credo.lovesK")}</div>
                <div className={styles.credoV}>{t("credo.lovesV")}</div>
              </div>
              <div className={styles.credoRow}>
                <div className={styles.credoK}>{t("credo.basedInK")}</div>
                <div className={styles.credoV}>{t("credo.basedInV")}</div>
              </div>
              <div className={styles.credoRow}>
                <div className={styles.credoK}>{t("credo.languagesK")}</div>
                <div className={styles.credoV}>{t("credo.languagesV")}</div>
              </div>
            </aside>

            <p className={styles.body}>{t("body")}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
