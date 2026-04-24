import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do you work solo or with a team?",
    a: "Solo by default. For larger builds I bring in a trusted network of senior freelancers — but you always have a single point of contact: me.",
  },
  {
    q: "What's your typical engagement length?",
    a: "Most projects run 4 to 12 weeks. I also take shorter audits and longer retainers for fractional CTO / tech-lead work.",
  },
  {
    q: "What stack do you use?",
    a: "Next.js, TypeScript, Postgres, edge-native runtimes. AI work with Claude, OpenAI, and open-source models. I pick the right tool for the job, not the trendy one.",
  },
  {
    q: "How do you handle IP and code ownership?",
    a: "You own everything: code, infrastructure accounts, and the repo. Work happens in your GitHub / GitLab org from day one.",
  },
  {
    q: "What does it cost?",
    a: "Fixed-price scoped projects start at €8k. Retainers from €4k / month. I send a written proposal after the discovery call — no surprises.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-border/60 border-b py-24">
      <div className="container mx-auto max-w-3xl px-6">
        <div className="mb-12">
          <p className="mb-2 font-medium text-muted-foreground text-sm uppercase tracking-wide">
            FAQ
          </p>
          <h2 className="text-balance font-semibold text-3xl tracking-tight md:text-4xl">
            Answers before you ask
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base">{item.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
