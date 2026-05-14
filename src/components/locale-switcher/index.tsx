"use client";

import { useLocale, useTranslations } from "next-intl";

import { locales } from "@/i18n/config";
import { usePathname, useRouter } from "@/i18n/navigation";

import styles from "./locale-switcher.module.css";

export function LocaleSwitcher() {
  const active = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("localeSwitcher");

  return (
    <fieldset className={styles.switcher}>
      <legend className={styles.legend}>{t("label")}</legend>
      {locales.map((locale, index) => (
        <span key={locale} className={styles.cell}>
          {index > 0 ? (
            <span className={styles.sep} aria-hidden>
              /
            </span>
          ) : null}
          <button
            type="button"
            className={styles.btn}
            data-active={locale === active}
            aria-pressed={locale === active}
            aria-disabled={locale === active}
            onClick={() => {
              if (locale === active) return;
              const hash = window.location.hash;
              router.replace(`${pathname}${hash}`, { locale });
            }}
          >
            {t(locale)}
          </button>
        </span>
      ))}
    </fieldset>
  );
}
