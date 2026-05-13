import { getTranslations } from "next-intl/server";

import { Col, Container, Row } from "@/components/ui/grid";
import { site } from "@/lib/site";

import styles from "./contact.module.css";

export async function Contact() {
  const t = await getTranslations("contact");

  return (
    <section id="contact" className={styles.section}>
      <Container>
        <Row rowGap={40}>
          <Col span={12} md={5}>
            <div className={styles.head}>
              <h2>
                {t.rich("heading", {
                  em: (chunks) => <em>{chunks}</em>,
                })}
              </h2>
            </div>
          </Col>

          <Col span={12} md={6} mdStart={7}>
            <div className={styles.list}>
              <a className={styles.row} href={`mailto:${site.owner.email}`}>
                <span className={styles.rowK}>{t("mailK")}</span>
                <span className={styles.rowV}>{site.owner.email}</span>
                <span className={styles.rowM}>{t("mailM")}</span>
              </a>
              <a
                className={styles.row}
                href={site.owner.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.rowK}>{t("linkedinK")}</span>
                <span className={styles.rowV}>{t("linkedinV")}</span>
                <span className={styles.rowM}>{t("linkedinM")}</span>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
