import Link from "next/link";

import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-border/60 border-b bg-background/70 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-foreground text-background">
            H
          </span>
          <span className="text-base">{site.name}</span>
        </Link>
        <nav className="hidden items-center gap-6 text-muted-foreground text-sm md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button asChild size="sm">
          <Link href="#contact">Start a project</Link>
        </Button>
      </div>
    </header>
  );
}
