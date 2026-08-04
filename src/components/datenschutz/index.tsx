import { getTranslations } from "next-intl/server";

import { Col, Container, Row } from "@/components/ui/grid";
import { site } from "@/lib/site";

import { SectionHead } from "../section-head";
import styles from "./datenschutz.module.css";

export async function Datenschutz() {
  const t = await getTranslations("datenschutz");
  const preface = t("preface");
  const { provider, hosting, supervisoryAuthority } = site.legal;

  return (
    <section id="datenschutz">
      <SectionHead
        num="06"
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
                <dt>Verantwortlicher</dt>
                <dd>
                  {provider.name}
                  <br />
                  {provider.tradeName}
                  <br />
                  {provider.street}
                  <br />
                  {provider.postalCode} {provider.city}
                  <br />
                  {provider.country}
                </dd>
                <dd>
                  E-Mail: <a href={`mailto:${site.owner.email}`}>{site.owner.email}</a>
                </dd>
              </dl>

              <dl className={styles.block}>
                <dt>Zugriffsdaten</dt>
                <dd>
                  Beim Aufruf dieser Website übermittelt Ihr Browser technisch notwendige Daten an
                  den Server, darunter Ihre IP-Adresse, die aufgerufene Adresse sowie Angaben zu
                  Browser und Betriebssystem. Der Server verarbeitet diese Angaben zusammen mit
                  Datum und Uhrzeit der Anfrage und dem Statuscode der Antwort ausschließlich, um
                  die Website auszuliefern. Ein Zugriffsprotokoll (Access-Log) wird nicht geführt.
                  Bei technischen Störungen protokolliert der Webserver einzelne Fehlermeldungen,
                  die die IP-Adresse enthalten können; diese Einträge werden nicht dauerhaft
                  aufbewahrt, sondern im Rahmen der laufenden Rotation des Systemprotokolls
                  automatisch überschrieben.
                </dd>
                <dd>
                  Die Website wird bei der {hosting.name} in einem Rechenzentrum in{" "}
                  {hosting.country} betrieben, auf Grundlage eines Vertrags über die
                  Auftragsverarbeitung nach Art. 28 DSGVO.
                </dd>
                <dd>
                  Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt in
                  der technisch fehlerfreien Bereitstellung und der Sicherheit der Website.
                </dd>
              </dl>

              <dl className={styles.block}>
                <dt>Cookies und Reichweitenmessung</dt>
                <dd>
                  Diese Website setzt keine Cookies und bindet keine Analyse-, Tracking- oder
                  Werbedienste ein. Schriftarten werden vom eigenen Server ausgeliefert, es werden
                  keine Verbindungen zu Servern Dritter aufgebaut. Eine Einwilligung nach § 25 TDDDG
                  ist deshalb nicht erforderlich.
                </dd>
              </dl>

              <dl className={styles.block}>
                <dt>Kontaktaufnahme</dt>
                <dd>
                  Wenn Sie mir schreiben, verarbeite ich Ihre E-Mail-Adresse und den Inhalt Ihrer
                  Nachricht, um die Anfrage zu beantworten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b
                  DSGVO, soweit es um die Anbahnung oder Durchführung eines Vertrags geht, sonst
                  Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden gelöscht, sobald sie nicht mehr
                  benötigt werden und keine gesetzlichen Aufbewahrungsfristen entgegenstehen.
                </dd>
                <dd>
                  Die Angabe Ihrer E-Mail-Adresse ist weder gesetzlich noch vertraglich
                  vorgeschrieben; Sie sind nicht verpflichtet, sie bereitzustellen. Ohne diese
                  Angabe kann ich Ihre Anfrage jedoch nicht beantworten.
                </dd>
                <dd>
                  Der E-Mail-Dienst wird von einem Anbieter mit Sitz in der Schweiz betrieben. Für
                  die Schweiz besteht ein Angemessenheitsbeschluss der Europäischen Kommission nach
                  Art. 45 DSGVO.
                </dd>
              </dl>

              <dl className={styles.block}>
                <dt>Ihre Rechte</dt>
                <dd>
                  Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO),
                  Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO),
                  Datenübertragbarkeit (Art. 20 DSGVO) und Widerspruch (Art. 21 DSGVO) sowie das
                  Recht, eine erteilte Einwilligung jederzeit zu widerrufen (Art. 7 Abs. 3 DSGVO).
                  Eine formlose Nachricht an{" "}
                  <a href={`mailto:${site.owner.email}`}>{site.owner.email}</a> genügt.
                </dd>
              </dl>

              <dl className={styles.block}>
                <dt>Widerspruchsrecht</dt>
                <dd>
                  Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben,
                  jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten, die auf
                  Grundlage von Art. 6 Abs. 1 lit. f DSGVO erfolgt, Widerspruch einzulegen. Ich
                  verarbeite die betroffenen Daten dann nicht mehr, es sei denn, ich kann zwingende
                  schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte
                  und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung,
                  Ausübung oder Verteidigung von Rechtsansprüchen.
                </dd>
              </dl>

              <dl className={styles.block}>
                <dt>Beschwerderecht</dt>
                <dd>
                  Sie können sich nach Art. 77 DSGVO bei einer Aufsichtsbehörde beschweren. Für mich
                  zuständig ist die {supervisoryAuthority.name} (
                  <a href={supervisoryAuthority.url} rel="noreferrer noopener">
                    ldi.nrw.de
                  </a>
                  ).
                </dd>
              </dl>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
