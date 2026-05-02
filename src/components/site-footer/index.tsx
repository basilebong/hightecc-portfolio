import Link from "next/link";

import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.pitch}>
          Keine Cookies. Kein Tracking. Keine Banner. Nur die Seite, die du angefordert hast.
        </p>
        <div className={styles.row}>
          <div className={styles.brand}>
            <span className={styles.wm}>Hightecc</span>
            <span>· Basile Bong · Köln, DE</span>
          </div>
          <div>
            © 2026 · <Link href="/impressum">Impressum</Link>
          </div>
          <div>v2026.1 · Built with care</div>
        </div>
      </div>
    </footer>
  );
}
