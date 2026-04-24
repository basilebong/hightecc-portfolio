import { Col, Container, Row } from "@/components/ui/grid";

import { SectionHead } from "../section-head";
import styles from "./products.module.css";

export function Products() {
  return (
    <section>
      <SectionHead
        num="04"
        name="— Eigene Produkte"
        kicker="In Arbeit"
        title={
          <>
            Nebenher baue ich etwas <em>eigenes.</em>
          </>
        }
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
                Noch ohne Namen. <em>Mit klarer Richtung.</em>
              </h3>
              <p>
                Zwischen Kund·innen-Projekten baue ich an etwas Eigenem. Mehr dazu, sobald&apos;s so
                weit ist. Du baust auch was? Lass uns sparren.
              </p>
              <div className={styles.meta}>
                <div>
                  <div className={styles.metaK}>Status</div>
                  <div className={styles.metaV}>Prototyp · Research</div>
                </div>
                <div>
                  <div className={styles.metaK}>Launch</div>
                  <div className={styles.metaV}>TBD · 2026</div>
                </div>
                <div>
                  <div className={styles.metaK}>Modus</div>
                  <div className={styles.metaV}>Bootstrap · Solo</div>
                </div>
                <div>
                  <div className={styles.metaK}>Updates</div>
                  <div className={styles.metaV}>Per Mail auf Anfrage</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
