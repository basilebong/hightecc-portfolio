import { getTranslations } from "next-intl/server";

import { Col, Container, Row } from "@/components/ui/grid";
import { site } from "@/lib/site";

import { SectionHead } from "../section-head";
import styles from "./impressum.module.css";

export async function Impressum() {
  const t = await getTranslations("impressum");
  const preface = t("preface");
  const { provider } = site.legal;

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

            <div lang="de">
              <dl className={styles.block}>
                <dt>Diensteanbieter</dt>
                <dd>
                  {provider.name}
                  <br />
                  {provider.tradeName} ({provider.legalForm})
                  <br />
                  {provider.street}
                  <br />
                  {provider.postalCode} {provider.city}
                  <br />
                  {provider.country}
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
                <dt>Wirtschafts-Identifikationsnummer</dt>
                <dd>DE457457668-00001</dd>
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
                  {provider.name}
                  <br />
                  {provider.street}, {provider.postalCode} {provider.city}, {provider.country}
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
                  Als Diensteanbieter bin ich für die eigenen Inhalte auf diesen Seiten nach den
                  allgemeinen Gesetzen verantwortlich. Fremde Informationen Dritter werden auf
                  dieser Website weder gespeichert noch übermittelt. Eine Haftung ist erst ab dem
                  Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Sobald mir eine
                  solche bekannt wird, entferne ich den betreffenden Inhalt umgehend.
                </dd>
              </dl>

              <dl className={styles.block}>
                <dt>Haftung für Links</dt>
                <dd>
                  Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich
                  keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr
                  übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                  oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum
                  Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
                  Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
                  inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
                  einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
                  werde ich derartige Links umgehend entfernen.
                </dd>
              </dl>

              <dl className={styles.block}>
                <dt>Urheberrecht</dt>
                <dd>
                  Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                  unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                  Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                  bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden
                  die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
                  gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam
                  werden, bitte ich um einen entsprechenden Hinweis. Bei Bekanntwerden von
                  Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.
                </dd>
              </dl>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
