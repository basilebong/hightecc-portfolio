import Link from "next/link";

import { Button } from "@/components/ui/button";

import styles from "./hero.module.css";

export function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.blobs} aria-hidden>
        <div className={`${styles.blob} ${styles.blob1}`} />
        <div className={`${styles.blob} ${styles.blob2}`} />
        <div className={`${styles.blob} ${styles.blob3}`} />
      </div>

      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.metaBlock}>
            <span className="meta meta-label">Index</span>
            <span className="meta meta-val">001 · Basile Bong</span>
          </div>
          <div className={styles.metaBlock}>
            <span className="meta meta-label">Discipline</span>
            <span className="meta meta-val">Freelance Software Engineer</span>
          </div>
          <div className={styles.metaBlock}>
            <span className="meta meta-label">Location</span>
            <span className="meta meta-val">Köln, DE</span>
          </div>
        </div>

        <div className={styles.center}>
          <h1 className={styles.display}>
            <span className={styles.line1}>Ideen</span>
            <span className={styles.line2}>
              die <span className={styles.amp}>live</span> gehen
            </span>
          </h1>

          <p className={styles.sub}>
            Ich bin Basile. Ich helfe Unternehmer·innen dabei,{" "}
            <strong>technische Projekte umzusetzen</strong>: mit klarer Kommunikation, intelligenter
            Planung und dem richtigen Tempo. Bis sie live gehen.
          </p>
        </div>

        <div className={styles.bottom}>
          <div className={styles.metaBlock}>
            <span className="meta meta-label">FMT 2026</span>
            <span className="meta meta-val">Freelance · Remote + Köln</span>
          </div>
          <div className={styles.ctaRow}>
            <Button asChild size="lg">
              <Link href="#contact">
                Projekt besprechen
                <span aria-hidden>→</span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#work">So arbeite ich</Link>
            </Button>
          </div>
          <div className={styles.metaBlock}>
            <span className="meta meta-label">Scroll</span>
            <span className="meta meta-val">↓ 04 Kapitel · ~2 min</span>
          </div>
        </div>
      </div>
    </header>
  );
}
