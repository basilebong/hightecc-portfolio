import { getTranslations } from "next-intl/server";

import { Col, Container, Row } from "@/components/ui/grid";

import { SectionHead } from "../section-head";
import styles from "./work.module.css";

const CLIENT_NAME = "Timoor Taufig";
const CLIENT_ROLE = "CEO · JoinMyTrip";
const JOINMYTRIP_URL = "https://joinmytrip.com";

export async function Work() {
  const t = await getTranslations("work");

  return (
    <section id="work">
      <SectionHead
        num="03"
        name={t("section.name")}
        kicker={t("section.kicker")}
        title={t.rich("section.title", {
          em: (chunks) => <em>{chunks}</em>,
        })}
      />

      <Container>
        <Row className={styles.rowAlign} rowGap={40}>
          <Col span={12} md={8}>
            <figure className={styles.figure}>
              <span className={styles.mark} aria-hidden />
              <blockquote className={styles.quote}>{t("quote")}</blockquote>
              <figcaption className={styles.person}>
                <span className={styles.name}>{CLIENT_NAME}</span>
                <span className={styles.role}>{CLIENT_ROLE}</span>
              </figcaption>
            </figure>
          </Col>
          <Col span={12} md={3} mdStart={10}>
            <a
              className={styles.logo}
              href={JOINMYTRIP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="JoinMyTrip"
            >
              <span className={styles.wordmark}>JoinMyTrip</span>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
