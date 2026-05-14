import { getTranslations } from "next-intl/server";

import { LogoWordmark } from "@/components/logo-wordmark";
import { Link } from "@/i18n/navigation";

import styles from "./site-footer.module.css";

export async function SiteFooter() {
  const t = await getTranslations("footer");

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.pitch}>{t("pitch")}</p>
        <div className={styles.row}>
          <div className={styles.brand}>
            <LogoWordmark className={styles.wm} />
            <span>{t("brandSuffix")}</span>
          </div>
          <div>
            © 2026 · <Link href="/impressum">{t("impressum")}</Link>
          </div>
          <div>
            {t("version")} · {t("buildTag")}
          </div>
        </div>
      </div>
    </footer>
  );
}
