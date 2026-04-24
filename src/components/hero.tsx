import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-border/60 border-b">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-foreground/[0.06] via-transparent to-transparent"
      />
      <div className="container mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 py-24 md:py-32">
        <Badge variant="secondary" className="rounded-full px-3 py-1">
          Accepting 2 new projects for Q3 2026
        </Badge>
        <h1 className="max-w-4xl text-balance font-semibold text-5xl leading-[1.05] tracking-tight md:text-7xl">
          {site.tagline}
        </h1>
        <p className="max-w-2xl text-balance text-lg text-muted-foreground md:text-xl">
          {site.description}
        </p>
        <div className="flex flex-col items-stretch gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="#contact">Book a discovery call</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#work">See recent work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
