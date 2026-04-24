const steps = [
  {
    step: "01",
    title: "Scope",
    body: "Free 30-minute call to map the problem, constraints, and success metrics. You leave with a written recap either way.",
  },
  {
    step: "02",
    title: "Plan",
    body: "Fixed-price proposal with milestones, risks, and deliverables. No open-ended retainers unless you want one.",
  },
  {
    step: "03",
    title: "Build",
    body: "Weekly demos, Linear board for visibility, PRs in your repo from day one. You own everything.",
  },
  {
    step: "04",
    title: "Ship & support",
    body: "Production rollout with monitoring, docs, and handover. Optional retainer for ongoing iteration.",
  },
];

export function Process() {
  return (
    <section id="process" className="border-border/60 border-b py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 font-medium text-muted-foreground text-sm uppercase tracking-wide">
            Process
          </p>
          <h2 className="text-balance font-semibold text-3xl tracking-tight md:text-4xl">
            A predictable way to work
          </h2>
        </div>
        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li
              key={s.step}
              className="rounded-lg border border-border/60 bg-card p-6 transition-colors hover:border-foreground/40"
            >
              <p className="mb-4 font-mono text-muted-foreground text-sm">{s.step}</p>
              <h3 className="mb-2 font-semibold text-lg">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
