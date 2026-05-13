import { getTranslations } from "next-intl/server";

import { Col, Container, Row } from "@/components/ui/grid";

import { SectionHead } from "../section-head";
import styles from "./impressum.module.css";

export async function Impressum() {
  const t = await getTranslations("impressum");
  const preface = t("preface");

  return (
    <section id="impressum">
      <SectionHead
        num="05"
        name={t("section.name")}
        kicker={t("section.kicker")}
        title={t.rich("section.title", {
          em: (chunks) => <em>{chunks}</em>,
        })}
      />

      <Container>
        <Row rowGap={48}>
          <Col span={12} md={8} className={styles.body}>
            {preface ? <p className={styles.preface}>{preface}</p> : null}

            <dl className={styles.block}>
              <dt>Diensteanbieter</dt>
              <dd>
                Basile Bong
                <br />
                Hightecc (Einzelunternehmen, Kleinunternehmer i. S. d. § 19 UStG)
                <br />
                Spechtstr. 3
                <br />
                50735 Köln
                <br />
                Deutschland
              </dd>
            </dl>

            <dl className={styles.block}>
              <dt>Kontakt</dt>
              <dd>
                Telefon: <a href="tel:+32486027778">+32 486 02 77 78</a>
                <br />
                E-Mail: <a href="mailto:hello@hightecc.com">hello@hightecc.com</a>
              </dd>
            </dl>

            <dl className={styles.block}>
              <dt>Umsatzsteuer</dt>
              <dd>
                Umsatzsteuerbefreit gemäß § 19 UStG (Kleinunternehmerregelung). Es wird keine
                Umsatzsteuer ausgewiesen.
              </dd>
            </dl>

            <dl className={styles.block}>
              <dt>Berufshaftpflichtversicherung</dt>
              <dd>
                Markel Insurance SE
                <br />
                Sophienstraße 26, 80333 München, Deutschland
                <br />
                Tarif: Markel Pro IT v2
                <br />
                Räumlicher Geltungsbereich: weltweit
              </dd>
            </dl>

            <dl className={styles.block}>
              <dt>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</dt>
              <dd>
                Basile Bong
                <br />
                Spechtstr. 3, 50735 Köln, Deutschland
              </dd>
            </dl>

            <dl className={styles.block}>
              <dt>EU-Streitschlichtung</dt>
              <dd>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
                bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  ec.europa.eu/consumers/odr
                </a>
                .
              </dd>
            </dl>

            <dl className={styles.block}>
              <dt>Verbraucherstreitbeilegung</dt>
              <dd>
                Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </dd>
            </dl>

            <dl className={styles.block}>
              <dt>Haftung für Inhalte</dt>
              <dd>
                Als Diensteanbieter bin ich gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen
                Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG bin ich
                als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
                rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
                Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
                Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
                konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender
                Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.
              </dd>
            </dl>

            <dl className={styles.block}>
              <dt>Haftung für Links</dt>
              <dd>
                Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich
                keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr
                übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt
                der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren
                zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle
                der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung
                nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links
                umgehend entfernen.
              </dd>
            </dl>

            <dl className={styles.block}>
              <dt>Urheberrecht</dt>
              <dd>
                Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Soweit
                die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
                Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
                gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam
                werden, bitte ich um einen entsprechenden Hinweis. Bei Bekanntwerden von
                Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.
              </dd>
            </dl>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
