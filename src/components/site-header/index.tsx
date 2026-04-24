import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Col, Container, Row } from "@/components/ui/grid";
import { site } from "@/lib/site";

import styles from "./site-header.module.css";

export function SiteHeader() {
  return (
    <nav className={styles.nav}>
      <Container>
        <Row>
          <Col span={3}>
            <Link href="/" className={styles.brand}>
              Hightecc<sup>01</sup>
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
