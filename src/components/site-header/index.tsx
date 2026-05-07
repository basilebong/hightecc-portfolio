import Link from "next/link";

import { LogoWordmark } from "@/components/logo-wordmark";
import { Button } from "@/components/ui/button";
import { Col, Container, Row } from "@/components/ui/grid";
import { site } from "@/lib/site";

import styles from "./site-header.module.css";

export function SiteHeader() {
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
                  {item.label}
                </Link>
              ))}
            </div>
          </Col>
          <Col span={3} className={styles.cta}>
            <Button asChild variant="outline">
              <Link href="/#contact">Let&apos;s talk →</Link>
            </Button>
          </Col>
        </Row>
      </Container>
    </nav>
  );
}
