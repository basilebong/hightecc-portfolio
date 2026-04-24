import Link from "next/link";

import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="rounded-2xl border border-border/60 bg-card p-10 md:p-16">
          <p className="mb-2 font-medium text-muted-foreground text-sm uppercase tracking-wide">
            Contact
          </p>
          <h2 className="mb-4 text-balance font-semibold text-3xl tracking-tight md:text-4xl">
            Have a project in mind?
          </h2>
          <p className="mb-8 max-w-2xl text-muted-foreground">
            The fastest way to start is a short email with what you're trying to build and when you
            need it. I reply within 24 hours on weekdays.
          </p>
          <div className="flex flex-col items-stretch gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href={`mailto:${site.owner.email}?subject=Hightecc%20project%20inquiry`}>
                Email {site.owner.name.split(" ")[0]}
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="https://cal.com/" target="_blank" rel="noreferrer">
                Book 30 minutes
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
