import type { MessageShape } from "./shape";

const messages: MessageShape = {
  nav: {
    about: "01 · About",
    work: "02 · Work",
    what: "03 · What",
    contact: "04 · Contact",
    cta: "Let's talk →",
  },
  metadata: {
    home: {
      title: "Hightecc · Basile Bong · Software Engineering",
      description:
        "Freelance software engineering. Outcome-driven, clearly communicated, delivered on time.",
    },
    impressum: {
      title: "Legal notice · Hightecc",
      description: "Legal notice and provider information pursuant to § 5 DDG.",
    },
  },
  hero: {
    meta: {
      indexLabel: "Index",
      indexValue: "001 · Basile Bong",
      disciplineLabel: "Discipline",
      disciplineValue: "Freelance Software Engineer",
      locationLabel: "Location",
      locationValue: "Cologne, DE",
      fmtLabel: "FMT 2026",
      fmtValue: "Freelance · Remote + Cologne",
      scrollLabel: "Scroll",
      scrollValue: "↓ 04 chapters · ~2 min",
    },
    headline: {
      line1: "Ideas",
      line2: "that go <amp>live</amp>",
    },
    sub: "I'm Basile. I help founders <strong>ship technical projects</strong>: with clear communication, smart planning, and the right pace. Until they go live.",
    cta: {
      primary: "Discuss a project",
      secondary: "How I work",
    },
  },
  about: {
    section: {
      name: "About",
      kicker: "Hey, I'm Basile",
      title: "Tech is never boring. <em>That's exactly why</em> I'm here.",
    },
    lede: "I've been building digital products for as long as I can remember. <em>Anything you can build, I'm curious about.</em> <muted>Web, mobile, automations, AI features. I love turning ideas into something tangible. And almost as much, I love the other side: business, sales, the question of whether the product actually lands with people. Because building a product is one thing. Hitting goals with it is another.</muted>",
    credo: {
      credoK: "Credo",
      credoV: "Assumptions are expensive. Feedback isn't.",
      lovesK: "Loves",
      lovesV: "Digital products of every kind. Business & sales. AI & automation.",
      basedInK: "Based in",
      basedInV: "Cologne, DE or remote",
      languagesK: "Languages",
      languagesV: "Deutsch · Français · English",
    },
    body: "What drives me: tech is never finished. It keeps evolving, sitting at the front line of changes that shape our society. I'm a convinced AI believer, an automation fan, and I believe good software makes life tangibly better. Not in pitch-deck speak. Concretely: less friction, less waiting, more possibilities.",
  },
  pillars: {
    section: {
      name: "Approach",
      kicker: "Three principles",
      title: "What you book me for <em>(and not just for code).</em>",
      lede: 'The real value rarely lives in the code alone. Here\'s what makes the difference between "project running" and "project failing".',
    },
    one: {
      num: "01",
      title: "Communication <em>that leaves no guesswork.</em>",
      body: "Clear and open, no jargon to impress. I'd rather ask again until I've understood what really matters to you. Communication as a tool, not an afterthought.",
      items: [
        "Listen before proposing",
        "Plain talk over buzzwords",
        "Ask when something's unclear",
      ],
    },
    two: {
      num: "02",
      title: "Cut down to <em>the essentials.</em>",
      body: "I break large initiatives into release-ready slices. Something real is running after a few weeks, not months. Budgets don't tip over in the dark, and every decision is confirmed by real feedback, not assumptions.",
      items: ["MVP with a clear core", "Early in users' hands", "Iteration, not Big Bang"],
    },
    three: {
      num: "03",
      title: "Planning with a <em>business head.</em>",
      body: "I don't just think in code and tech stack. I think in milestones, budgets, and hypotheses. Every week of work should answer a question for your business, not just close a ticket.",
      items: ["ROI-driven backlog", "Release plans that hold", "Critical paths first"],
    },
  },
  capabilities: {
    section: {
      name: "What",
      kicker: "If you're curious",
      title: "Where I usually <em>operate.</em>",
      lede: "Short, because it shouldn't be the focus: these are the areas I go deep in. Choose by problem, not by tool.",
    },
    a: {
      title: "Web & APIs",
      desc: "Production-ready web apps and clean backends. From MVP to scalable enterprise.",
    },
    b: {
      title: "Mobile apps",
      desc: "Cross-platform (iOS / Android) from a single codebase. Fast to market, maintainable day-to-day.",
    },
    c: {
      title: "AI integration",
      desc: "LLM features that work inside the product. Including monitoring, guardrails, and honest evaluation.",
    },
    d: {
      title: "Tech consulting & automation",
      desc: "A close look at internal tooling, finding bottlenecks, proposing automations. So your team clicks less and ships more.",
    },
    note: "Other stacks? <strong>Worth asking.</strong> The right tool is decided by the problem, not by the resume.",
    noteTag: "NOTE",
  },
  products: {
    section: {
      name: "Own products",
      kicker: "In progress",
      title: "On the side, I'm building <em>something of my own.</em>",
    },
    heading: "No name yet. <em>Clear direction.</em>",
    body: "Between client projects, I'm building something of my own. More on it when it's ready. Building something too? Let's spar.",
    meta: {
      statusK: "Status",
      statusV: "Prototype · Research",
      launchK: "Launch",
      launchV: "TBD · 2026",
      modeK: "Mode",
      modeV: "Bootstrap · Solo",
      updatesK: "Updates",
      updatesV: "By email on request",
    },
  },
  contact: {
    heading: "Tell me about <em>your project.</em>",
    mailK: "01 · Mail",
    mailM: "Fastest reply",
    linkedinK: "02 · LinkedIn",
    linkedinV: "/in/basilebong",
    linkedinM: "Connect & message",
  },
  impressum: {
    section: {
      name: "Legal notice",
      kicker: "Information pursuant to § 5 DDG",
      title: "Who's behind <em>Hightecc</em>.",
    },
    preface:
      "Legal notice required by German law. The original German text follows below and is the legally binding version.",
  },
  footer: {
    pitch: "No cookies. No tracking. No banners. Just the page you asked for.",
    brandSuffix: "· Basile Bong · Cologne, DE",
    impressum: "Legal notice",
    build: "v2026.1 · Built with care",
  },
  localeSwitcher: {
    label: "Language",
    de: "DE",
    en: "EN",
  },
  a11y: {
    skipLink: "Skip to main content",
  },
};

export default messages;
