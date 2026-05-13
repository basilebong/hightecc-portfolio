import { getTranslations } from "next-intl/server";

import { Col, Container, Row } from "@/components/ui/grid";

import { SectionHead } from "../section-head";
import styles from "./pillars.module.css";

const keys = ["one", "two", "three"] as const;

export async function Pillars() {
  const t = await getTranslations("pillars");

  return (
    <section id="work">
      <SectionHead
        num="02"
        name={t("section.name")}
        kicker={t("section.kicker")}
        title={t.rich("section.title", {
          em: (chunks) => <em>{chunks}</em>,
        })}
        lede={t("section.lede")}
      />

      <Container>
        <Row className={styles.grid}>
          {keys.map((k) => (
            <Col key={k} span={12} md={4} className={styles.pillar}>
              <div className={styles.num}>{t(`${k}.num`)}</div>
              <h3 className={styles.title}>
                {t.rich(`${k}.title`, {
                  em: (chunks) => <em>{chunks}</em>,
                })}
              </h3>
              <p className={styles.body}>{t(`${k}.body`)}</p>
              <ul className={styles.list}>
                <li>{t(`${k}.li1`)}</li>
                <li>{t(`${k}.li2`)}</li>
                <li>{t(`${k}.li3`)}</li>
              </ul>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
