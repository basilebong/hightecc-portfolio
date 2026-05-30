import Image from "next/image";

import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import { getTranslations } from "next-intl/server";

import { Col, Container, Row } from "@/components/ui/grid";

import { SectionHead } from "../section-head";
import { BeforeAfter } from "./before-after";
import styles from "./work.module.css";

const xrayTags = ["Voice AI", "Tracing", "Eval"];
const onehouseTags = ["PWA", "MCP", "Self-hosted"];

const JOINMYTRIP_URL = "https://joinmytrip.com";
const XRAY_REPO = "https://github.com/xray-eval/xray";
const ONEHOUSE_REPO = "https://github.com/basilebong/onehouse";

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

function WindowDots() {
  return (
    <div className={styles.dots}>
      <span />
      <span />
      <span />
    </div>
  );
}

function RepoLink({ href, label }: { href: string; label: string }) {
  return (
    <a className={styles.link} href={href} target="_blank" rel="noopener noreferrer">
      <GithubLogo aria-hidden />
      <span>{label}</span>
      <ArrowUpRight className={styles.arr} aria-hidden />
    </a>
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
        <div className={styles.featured}>
          <div className={styles.featHead}>
            <div className={styles.featHeadline}>
              <span className={`${styles.badge} ${styles.badgeLive}`}>
                <span className={styles.dot} />
                {t("jmt.badge")}
              </span>
              <h3 className={styles.ptitle}>JoinMyTrip</h3>
              <span className={styles.role}>{t("jmt.role")}</span>
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

          <p className={styles.desc}>{t("jmt.desc")}</p>

          <div className={styles.frame}>
            <div className={styles.chrome}>
              <div className={styles.bar}>
                <WindowDots />
                <div className={styles.url}>joinmytrip.com</div>
              </div>
              <BeforeAfter
                beforeSrc="/work/jmt-before.png"
                afterSrc="/work/jmt-after.png"
                beforeAlt={t("jmt.beforeAlt")}
                afterAlt={t("jmt.afterAlt")}
                beforeLabel={t("jmt.beforeLabel")}
                afterLabel={t("jmt.afterLabel")}
                ariaLabel={t("jmt.sliderLabel")}
              />
            </div>
            <CornerMarks />
          </div>
        </div>

        <div className={styles.rowBlock}>
          <Row className={styles.rowAlign} rowGap={28}>
            <Col span={12} md={6} mdStart={7}>
              <div className={styles.rowText}>
                <span className={styles.bignum}>02</span>
                <span className={`${styles.badge} ${styles.badgeProg}`}>
                  <span className={styles.dot} />
                  {t("xray.badge")}
                </span>
                <h3 className={styles.ptitle}>xray</h3>
                <p className={styles.desc}>{t("xray.desc")}</p>
                <div className={styles.tags}>
                  {xrayTags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <RepoLink href={XRAY_REPO} label={t("githubLabel")} />
              </div>
            </Col>
            <Col span={12} md={5} mdStart={1}>
              <div className={styles.frame}>
                <div className={styles.chrome}>
                  <div className={styles.bar}>
                    <WindowDots />
                    <div className={styles.url}>xray · replay</div>
                  </div>
                  <Image
                    className={styles.xrayImg}
                    src="/work/xray.png"
                    alt={t("xray.alt")}
                    width={1900}
                    height={913}
                    sizes="(min-width: 720px) 42vw, 100vw"
                  />
                </div>
                <CornerMarks />
              </div>
            </Col>
          </Row>
        </div>

        <div className={styles.rowBlock}>
          <Row className={styles.rowAlign} rowGap={28}>
            <Col span={12} md={6} mdStart={1}>
              <div className={styles.rowText}>
                <span className={styles.bignum}>03</span>
                <span className={`${styles.badge} ${styles.badgeSoon}`}>
                  <span className={styles.dot} />
                  {t("onehouse.badge")}
                </span>
                <h3 className={styles.ptitle}>OneHouse</h3>
                <p className={styles.desc}>{t("onehouse.desc")}</p>
                <div className={styles.tags}>
                  {onehouseTags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <RepoLink href={ONEHOUSE_REPO} label={t("githubLabel")} />
              </div>
            </Col>
            <Col span={12} md={3} mdStart={10}>
              <div className={styles.phoneFrame}>
                <div className={styles.phone}>
                  <Image
                    src="/work/onehouse.png"
                    alt={t("onehouse.alt")}
                    width={493}
                    height={896}
                    sizes="(min-width: 720px) 25vw, 280px"
                  />
                </div>
                <CornerMarks />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
