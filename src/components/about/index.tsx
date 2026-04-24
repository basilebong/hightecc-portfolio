import { Col, Container, Row } from "@/components/ui/grid";

import { SectionHead } from "../section-head";
import styles from "./about.module.css";

export function About() {
  return (
    <section id="about">
      <SectionHead
        num="01"
        name="— Über"
        kicker="Hey, ich bin Basile"
        title={
          <>
            Tech ist nie langweilig. <em>Genau deshalb</em> bin ich dabei.
          </>
        }
      />

      <Container>
        <Row rowGap={48}>
          <Col span={12} md={6} className={styles.narrative}>
            <p className={styles.lede}>
              Ich baue digitale Produkte, so lange ich denken kann.{" "}
              <em>Alles, was man bauen kann, interessiert mich.</em>{" "}
              <span className={styles.ledeMuted}>
                Web, Mobile, Automatisierungen, KI-Features. Ich liebe es, Ideen in etwas Greifbares
                zu verwandeln. Und fast genauso sehr mag ich die andere Seite: Business, Sales, die
                Frage, ob das Produkt am Ende wirklich bei Menschen ankommt. Denn ein Produkt bauen
                ist das eine. Ziele damit erreichen das andere.
              </span>
            </p>
          </Col>

          <Col span={12} md={6}>
            <aside className={styles.credo}>
              <div className={styles.credoRow}>
                <div className={styles.credoK}>Credo</div>
                <div className={styles.credoV}>Annahmen sind teuer. Feedback nicht.</div>
              </div>
              <div className={styles.credoRow}>
                <div className={styles.credoK}>Liebt</div>
                <div className={styles.credoV}>
                  Digitale Produkte aller Art. Business &amp; Sales. AI &amp; Automation.
                </div>
              </div>
              <div className={styles.credoRow}>
                <div className={styles.credoK}>Basiert in</div>
                <div className={styles.credoV}>Köln, DE oder remote</div>
              </div>
              <div className={styles.credoRow}>
                <div className={styles.credoK}>Sprachen</div>
                <div className={styles.credoV}>Deutsch · Français · English</div>
              </div>
            </aside>

            <p className={styles.body}>
              Was mich antreibt: Tech ist nie zu Ende. Sie entwickelt sich weiter, sie steht an
              vorderster Front von Veränderungen, die unsere Gesellschaft formen. Ich bin
              überzeugter AI-Believer, Automation-Fan, und glaube daran, dass gute Software Leben
              spürbar besser macht. Nicht in Pitch-Deck-Sprache, sondern konkret: weniger Reibung,
              weniger Warten, mehr Möglichkeiten.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
