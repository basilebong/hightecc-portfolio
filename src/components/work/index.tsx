import Image from "next/image";

import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { getTranslations } from "next-intl/server";

import { Col, Container, Row } from "@/components/ui/grid";

import { SectionHead } from "../section-head";
import styles from "./work.module.css";

const JOINMYTRIP_URL = "https://joinmytrip.com";

function CornerMarks() {
  return (
    <>
      <span className={`${styles.cm} ${styles.cmTl}`} />
      <span className={`${styles.cm} ${styles.cmTr}`} />
      <span className={`${styles.cm} ${styles.cmBl}`} />
      <span className={`${styles.cm} ${styles.cmBr}`} />
    </>
  );
}

export async function Work() {
  const t = await getTranslations("work");

  return (
    <section id="work">
      <SectionHead
        num="03"
        name={t("section.name")}
        kicker={t("section.kicker")}
        title={t.rich("section.title", {
          em: (chunks) => <em>{chunks}</em>,
        })}
        lede={t("section.lede")}
      />

      <Container>
        <Row className={styles.rowAlign} rowGap={40}>
          <Col span={12} md={6} mdStart={1}>
            <div className={styles.frame}>
              <div className={styles.chrome}>
                <div className={styles.bar}>
                  <div className={styles.dots}>
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className={styles.url}>joinmytrip.com</div>
                </div>
                <Image
                  className={styles.shot}
                  src="/work/joinmytrip.png"
                  alt={t("shotAlt")}
                  width={1896}
                  height={906}
                  sizes="(min-width: 720px) 50vw, 100vw"
                />
              </div>
              <CornerMarks />
            </div>
          </Col>

          <Col span={12} md={5} mdStart={8}>
            <div className={styles.panel}>
              <div className={styles.head}>
                <span className={`${styles.badge} ${styles.badgeLive}`}>
                  <span className={styles.dot} />
                  {t("badge")}
                </span>
                <h3 className={styles.ptitle}>JoinMyTrip</h3>
                <span className={styles.role}>{t("role")}</span>
              </div>

              <blockquote className={styles.quote}>{t("quote")}</blockquote>

              <div className={styles.rule} aria-hidden />

              <div className={styles.attrib}>
                <span className={styles.avatar} aria-hidden>
                  TT
                </span>
                <div className={styles.person}>
                  <span className={styles.attName}>{t("attribName")}</span>
                  <span className={styles.attRole}>{t("attribRole")}</span>
                </div>
              </div>

              <a
                className={styles.link}
                href={JOINMYTRIP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>joinmytrip.com</span>
                <ArrowUpRight className={styles.arr} aria-hidden />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
