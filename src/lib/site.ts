export const SITE_URL = "https://hightecc.com";

export const site = {
  name: "Hightecc",
  owner: {
    name: "Basile Bong",
    email: "hello@hightecc.com",
    location: "Köln, DE",
    linkedin: "https://linkedin.com/in/basilebong",
  },
  nav: [
    { key: "about", href: "/#about" },
    { key: "work", href: "/#work" },
    { key: "what", href: "/#what" },
    { key: "contact", href: "/#contact" },
  ],
  legal: {
    provider: {
      name: "Basile Bong",
      tradeName: "Hightecc",
      legalForm: "Einzelunternehmen, Kleinunternehmer i. S. d. § 19 UStG",
      street: "Spechtstr. 3",
      postalCode: "50735",
      city: "Köln",
      country: "Deutschland",
    },
    hosting: {
      name: "Hetzner Online GmbH",
      country: "Deutschland",
    },
    supervisoryAuthority: {
      name: "Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen",
      url: "https://www.ldi.nrw.de",
    },
  },
} as const;
