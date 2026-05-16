import { getTranslations } from "next-intl/server";

import { LocaleSwitcher } from "@/components/locale-switcher";
import { LogoWordmark } from "@/components/logo-wordmark";
import { MobileMenu } from "@/components/mobile-menu";
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
  const navItems = site.nav.map((item) => ({ href: item.href, label: t(item.key) }));

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
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </Col>
          <Col span={9} md={3} mdStart={10} className={styles.cta}>
            <div className={styles.desktopCta}>
              <LocaleSwitcher />
              <Button asChild variant="outline">
                <Link href="/#contact">{t("cta")}</Link>
              </Button>
            </div>
            <div className={styles.mobileCta}>
              <MobileMenu navItems={navItems} ctaLabel={t("cta")} menuLabel={t("menu")} />
            </div>
          </Col>
        </Row>
      </Container>
    </nav>
  );
}
