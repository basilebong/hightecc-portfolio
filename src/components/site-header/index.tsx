import { getTranslations } from "next-intl/server";

import { LocaleSwitcher } from "@/components/locale-switcher";
import { LogoWordmark } from "@/components/logo-wordmark";
import { Button } from "@/components/ui/button";
import { Col, Container, Row } from "@/components/ui/grid";
import { Link } from "@/i18n/navigation";
import { site } from "@/lib/site";

import styles from "./site-header.module.css";

export async function SiteHeader() {
  const t = await getTranslations("nav");

  // @lingual/i18n-check's static parser can't resolve t(item.key) below; these
  // comments declare the literal keys so unused-key detection works.
  // i18n-check t("about")
  // i18n-check t("work")
  // i18n-check t("what")
  // i18n-check t("contact")
  return (
    <nav className={styles.nav}>
      <Container>
        <Row>
          <Col span={3} className={styles.brandCol}>
            <Link href="/" aria-label={site.name}>
              <LogoWordmark className={styles.logo} />
            </Link>
          </Col>
          <Col span={6} className={styles.linksCol}>
            <div className={styles.links}>
              {site.nav.map((item) => (
                <Link key={item.href} href={item.href}>
                  {t(item.key)}
                </Link>
              ))}
            </div>
          </Col>
          <Col span={3} className={styles.cta}>
            <LocaleSwitcher />
            <Button asChild variant="outline">
              <Link href="/#contact">{t("cta")}</Link>
            </Button>
          </Col>
        </Row>
      </Container>
    </nav>
  );
}
