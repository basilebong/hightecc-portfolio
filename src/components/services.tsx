import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Product engineering",
    description:
      "Ship web products end-to-end: architecture, UI, backend, infra. Next.js, TypeScript, Postgres, edge-native.",
  },
  {
    title: "AI-forward tooling",
    description:
      "Embed LLMs, agents, and RAG into real workflows. From prototypes to production pipelines on Claude, OpenAI, and open-source.",
  },
  {
    title: "Platform & DX",
    description:
      "Internal tools, CI/CD, typed APIs, and developer experience upgrades so your team ships faster with fewer regressions.",
  },
  {
    title: "Fractional tech lead",
    description:
      "Drop-in technical leadership for early-stage teams — reviews, hiring support, and architecture calls on retainer.",
  },
];

export function Services() {
  return (
    <section id="services" className="border-border/60 border-b py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 font-medium text-muted-foreground text-sm uppercase tracking-wide">
            Services
          </p>
          <h2 className="text-balance font-semibold text-3xl tracking-tight md:text-4xl">
            What I build for clients
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Card
              key={service.title}
              className="border-border/60 transition-colors hover:border-foreground/40"
            >
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
