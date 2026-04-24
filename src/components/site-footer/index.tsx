import Link from "next/link";

import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <span className={styles.wm}>Hightecc</span>
        <span>· Basile Bong · Köln, DE</span>
      </div>
      <div>
        © 2026 · <Link href="/impressum">Impressum</Link> · <Link href="#">Datenschutz</Link>
      </div>
      <div>v2026.1 · Built with care</div>
    </footer>
  );
}
