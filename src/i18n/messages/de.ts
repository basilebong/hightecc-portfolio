const messages = {
  nav: {
    about: "01 · Über",
    work: "02 · Arbeit",
    what: "03 · Was",
    contact: "04 · Kontakt",
    cta: "Let's talk →",
  },
  metadata: {
    home: {
      title: "Hightecc · Basile Bong · Softwareentwicklung",
      description:
        "Freelance Softwareentwicklung. Outcome-orientiert, klar kommuniziert, pünktlich geliefert.",
    },
    impressum: {
      title: "Impressum · Hightecc",
      description: "Impressum und Anbieterkennzeichnung gemäß § 5 DDG.",
    },
  },
  hero: {
    meta: {
      indexLabel: "Index",
      indexValue: "001 · Basile Bong",
      disciplineLabel: "Discipline",
      disciplineValue: "Freelance Software Engineer",
      locationLabel: "Location",
      locationValue: "Köln, DE",
      fmtLabel: "FMT 2026",
      fmtValue: "Freelance · Remote + Köln",
      scrollLabel: "Scroll",
      scrollValue: "↓ 04 Kapitel · ~2 min",
    },
    headline: {
      line1: "Ideen",
      line2: "die <amp>live</amp> gehen",
    },
    sub: "Ich bin Basile. Ich helfe Unternehmer·innen dabei, <strong>technische Projekte umzusetzen</strong>: mit klarer Kommunikation, intelligenter Planung und dem richtigen Tempo. Bis sie live gehen.",
    cta: {
      primary: "Projekt besprechen",
      secondary: "So arbeite ich",
    },
  },
  about: {
    section: {
      name: "Über",
      kicker: "Hey, ich bin Basile",
      title: "Tech ist nie langweilig. <em>Genau deshalb</em> bin ich dabei.",
    },
    lede: "Ich baue digitale Produkte, so lange ich denken kann. <em>Alles, was man bauen kann, interessiert mich.</em> <muted>Web, Mobile, Automatisierungen, KI-Features. Ich liebe es, Ideen in etwas Greifbares zu verwandeln. Und fast genauso sehr mag ich die andere Seite: Business, Sales, die Frage, ob das Produkt am Ende wirklich bei Menschen ankommt. Denn ein Produkt bauen ist das eine. Ziele damit erreichen das andere.</muted>",
    credo: {
      credoK: "Credo",
      credoV: "Annahmen sind teuer. Feedback nicht.",
      lovesK: "Liebt",
      lovesV: "Digitale Produkte aller Art. Business & Sales. AI & Automation.",
      basedInK: "Basiert in",
      basedInV: "Köln, DE oder remote",
      languagesK: "Sprachen",
      languagesV: "Deutsch · Français · English",
    },
    body: "Was mich antreibt: Tech ist nie zu Ende. Sie entwickelt sich weiter, sie steht an vorderster Front von Veränderungen, die unsere Gesellschaft formen. Ich bin überzeugter AI-Believer, Automation-Fan, und glaube daran, dass gute Software Leben spürbar besser macht. Nicht in Pitch-Deck-Sprache, sondern konkret: weniger Reibung, weniger Warten, mehr Möglichkeiten.",
  },
  pillars: {
    section: {
      name: "Arbeitsweise",
      kicker: "Drei Prinzipien",
      title: "Wofür Du mich buchst <em>(und nicht nur für Code).</em>",
      lede: 'Der eigentliche Wert liegt selten im Code allein. Hier ist, was den Unterschied zwischen „Projekt läuft" und „Projekt kippt" macht.',
    },
    one: {
      num: "01",
      title: "Kommunikation, <em>die nicht rätseln lässt.</em>",
      body: "Klar und offen, ohne Fach-Jargon zum Beeindrucken. Ich frage lieber nach, bis ich verstanden habe, was Dir wirklich wichtig ist. Kommunikation als Tool, nicht als Nebensache.",
      items: ["Zuhören vor Vorschlagen", "Klartext statt Buzzwords", "Fragen, wenn's unklar ist"],
    },
    two: {
      num: "02",
      title: "Auf's <em>Essenzielle</em> runterbrechen.",
      body: "Ich zerlege große Vorhaben in Release-fähige Stücke. Schon nach wenigen Wochen läuft etwas Echtes, nicht erst nach Monaten. So kippt kein Budget im Dunkeln, und jede Entscheidung wird durch echtes Feedback bestätigt, nicht durch Annahmen.",
      items: [
        "MVP mit klarem Kern",
        "Früh in die Hände der Nutzer·innen",
        "Iteration statt Big-Bang",
      ],
    },
    three: {
      num: "03",
      title: "Planung mit <em>Business-Kopf.</em>",
      body: "Ich denke nicht nur in Code und Tech-Stack, sondern in Meilensteinen, Budgets und Hypothesen. Jede Woche Arbeit soll eine Frage Deines Business beantworten, nicht nur ein Ticket schließen.",
      items: ["ROI-getriebener Backlog", "Release-Pläne, die halten", "Kritische Pfade zuerst"],
    },
  },
  capabilities: {
    section: {
      name: "Was",
      kicker: "Wenn's Dich interessiert",
      title: "Womit ich meistens <em>unterwegs bin.</em>",
      lede: "Kurz, weil's nicht im Zentrum stehen sollte: Das sind die Bereiche, in denen ich tief unterwegs bin. Wähle nach Problem, nicht nach Tool.",
    },
    a: {
      title: "Web & APIs",
      desc: "Produktfertige Web-Apps und saubere Backends. Von MVP bis skalierbare Enterprise-Lösung.",
    },
    b: {
      title: "Mobile Apps",
      desc: "Cross-Platform (iOS / Android) mit einer Codebase. Schnell am Markt, wartbar im Alltag.",
    },
    c: {
      title: "KI-Integration",
      desc: "LLM-Features, die im Produkt funktionieren. Inkl. Monitoring, Guardrails und ehrlicher Evaluierung.",
    },
    d: {
      title: "Tech-Beratung & Automation",
      desc: "Internes Tooling unter die Lupe nehmen, Engpässe finden, Automationen vorschlagen. Damit Dein Team weniger klickt und mehr ausliefert.",
    },
    note: "Andere Stacks? <strong>Fragen lohnt sich.</strong> Das richtige Werkzeug entscheidet sich am Problem, nicht am Lebenslauf.",
    noteTag: "NOTE",
  },
  products: {
    section: {
      name: "Eigene Produkte",
      kicker: "In Arbeit",
      title: "Nebenher baue ich etwas <em>eigenes.</em>",
    },
    heading: "Noch ohne Namen. <em>Mit klarer Richtung.</em>",
    body: "Zwischen Kund·innen-Projekten baue ich an etwas Eigenem. Mehr dazu, sobald's so weit ist. Du baust auch was? Lass uns sparren.",
    meta: {
      statusK: "Status",
      statusV: "Prototyp · Research",
      launchK: "Launch",
      launchV: "TBD · 2026",
      modeK: "Modus",
      modeV: "Bootstrap · Solo",
      updatesK: "Updates",
      updatesV: "Per Mail auf Anfrage",
    },
  },
  contact: {
    heading: "Erzähl mir von <em>Deinem Projekt.</em>",
    mailK: "01 · Mail",
    mailM: "Schnellste Antwort",
    linkedinK: "02 · LinkedIn",
    linkedinV: "/in/basilebong",
    linkedinM: "Vernetzen & schreiben",
  },
  impressum: {
    section: {
      name: "Impressum",
      kicker: "Angaben gemäß § 5 DDG",
      title: "Wer hinter <em>Hightecc</em> steht.",
    },
    preface: "",
  },
  footer: {
    pitch: "Keine Cookies. Kein Tracking. Keine Banner. Nur die Seite, die du angefordert hast.",
    brandSuffix: "· Basile Bong · Köln, DE",
    impressum: "Impressum",
    build: "v2026.1 · Built with care",
  },
  localeSwitcher: {
    label: "Sprache",
    de: "DE",
    en: "EN",
  },
  a11y: {
    skipLink: "Zum Hauptinhalt springen",
  },
} as const;

export default messages;
