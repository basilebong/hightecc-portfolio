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
} as const;
