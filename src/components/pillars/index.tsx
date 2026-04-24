import type { ReactNode } from "react";

import { Col, Container, Row } from "@/components/ui/grid";

import { SectionHead } from "../section-head";
import styles from "./pillars.module.css";

type Pillar = {
  num: string;
  title: ReactNode;
  body: string;
  items: string[];
};

const pillars: Pillar[] = [
  {
    num: "— 01",
    title: (
      <>
        Kommunikation, <em>die nicht rätseln lässt.</em>
      </>
    ),
    body: "Klar und offen, ohne Fach-Jargon zum Beeindrucken. Ich frage lieber nach, bis ich verstanden habe, was Dir wirklich wichtig ist. Kommunikation als Tool, nicht als Nebensache.",
    items: ["Zuhören vor Vorschlagen", "Klartext statt Buzzwords", "Fragen, wenn's unklar ist"],
  },
  {
    num: "— 02",
    title: (
      <>
        Auf's <em>Essenzielle</em> runterbrechen.
      </>
    ),
    body: "Ich zerlege große Vorhaben in Release-fähige Stücke. Schon nach wenigen Wochen läuft etwas Echtes, nicht erst nach Monaten. So kippt kein Budget im Dunkeln, und jede Entscheidung wird durch echtes Feedback bestätigt, nicht durch Annahmen.",
    items: [
      "MVP mit klarem Kern",
      "Früh in die Hände der Nutzer·innen",
      "Iteration statt Big-Bang",
    ],
  },
  {
    num: "— 03",
    title: (
      <>
        Planung mit <em>Business-Kopf.</em>
      </>
    ),
    body: "Ich denke nicht nur in Code und Tech-Stack, sondern in Meilensteinen, Budgets und Hypothesen. Jede Woche Arbeit soll eine Frage Deines Business beantworten, nicht nur ein Ticket schließen.",
    items: ["ROI-getriebener Backlog", "Release-Pläne, die halten", "Kritische Pfade zuerst"],
  },
];

export function Pillars() {
  return (
    <section id="work">
      <SectionHead
        num="02"
        name="— Arbeitsweise"
        kicker="Drei Prinzipien"
        title={
          <>
            Wofür Du mich buchst <em>(und nicht nur für Code).</em>
          </>
        }
        lede={
          <>
            Der eigentliche Wert liegt selten im Code allein. Hier ist, was den Unterschied zwischen
            &quot;Projekt läuft&quot; und &quot;Projekt kippt&quot; macht.
          </>
        }
      />

      <Container>
        <Row className={styles.grid}>
          {pillars.map((p) => (
            <Col key={p.num} span={12} md={4} className={styles.pillar}>
              <div className={styles.num}>{p.num}</div>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.body}>{p.body}</p>
              <ul className={styles.list}>
                {p.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
