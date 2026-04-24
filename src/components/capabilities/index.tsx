import { Badge } from "@/components/ui/badge";
import { Col, Container, Row } from "@/components/ui/grid";

import { SectionHead } from "../section-head";
import styles from "./capabilities.module.css";

const caps = [
  {
    index: "→ A",
    title: "Web & APIs",
    desc: "Produktfertige Web-Apps und saubere Backends. Von MVP bis skalierbare Enterprise-Lösung.",
    tags: ["Python", "Django", "TypeScript", "React", "Postgres"],
  },
  {
    index: "→ B",
    title: "Mobile Apps",
    desc: "Cross-Platform (iOS / Android) mit einer Codebase. Schnell am Markt, wartbar im Alltag.",
    tags: ["React Native", "Expo", "Swift-Bridge"],
  },
  {
    index: "→ C",
    title: "KI-Integration",
    desc: "LLM-Features, die im Produkt funktionieren. Inkl. Monitoring, Guardrails und ehrlicher Evaluierung.",
    tags: ["Claude", "OpenAI", "RAG", "Eval", "Tracing"],
  },
  {
    index: "→ D",
    title: "Tech-Strategie & Sparring",
    desc: "Architektur-Reviews, Hiring-Beratung, Roadmap-Sparring. Für Gründer·innen ohne CTO an Bord.",
    tags: ["Architecture", "Hiring", "Roadmap"],
  },
];

export function Capabilities() {
  return (
    <section id="what">
      <SectionHead
        num="03"
        name="— Was"
        kicker="Wenn's Dich interessiert"
        title={
          <>
            Womit ich meistens <em>unterwegs bin.</em>
          </>
        }
        lede="Kurz, weil's nicht im Zentrum stehen sollte: Das sind die Bereiche, in denen ich tief unterwegs bin. Wähle nach Problem, nicht nach Tool."
      />

      <Container>
        <Row className={styles.grid}>
          {caps.map((c) => (
            <Col key={c.title} span={12} md={6} className={styles.cap}>
              <div className={styles.index}>{c.index}</div>
              <div className={styles.main}>
                <h3 className={styles.title}>{c.title}</h3>
                <p className={styles.desc}>{c.desc}</p>
                <div className={styles.tags}>
                  {c.tags.map((t) => (
                    <Badge key={t} variant="outline">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <div className={styles.note}>
          <span className={styles.noteTag}>NOTE</span> &nbsp;·&nbsp; Andere Stacks?{" "}
          <strong>Fragen lohnt sich.</strong> Das richtige Werkzeug entscheidet sich am Problem,
          nicht am Lebenslauf.
        </div>
      </Container>
    </section>
  );
}
