import { Col, Container, Row } from "@/components/ui/grid";
import { site } from "@/lib/site";

import styles from "./contact.module.css";

export function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <Container>
        <Row rowGap={40}>
          <Col span={12} md={5}>
            <div className={styles.head}>
              <h2>
                Erzähl mir von <em>Deinem Projekt.</em>
              </h2>
            </div>
          </Col>

          <Col span={12} md={6} mdStart={7}>
            <div className={styles.list}>
              <a className={styles.row} href={`mailto:${site.owner.email}`}>
                <span className={styles.rowK}>01 · Mail</span>
                <span className={styles.rowV}>{site.owner.email}</span>
                <span className={styles.rowM}>schnellste Antwort</span>
              </a>
              <a
                className={styles.row}
                href={site.owner.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.rowK}>02 · LinkedIn</span>
                <span className={styles.rowV}>/in/basilebong</span>
                <span className={styles.rowM}>DM ok</span>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
