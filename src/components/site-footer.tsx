import Link from "next/link";

import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-border/60 border-t py-10">
      <div className="container mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
        <div>
          <p className="font-semibold">{site.name}</p>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} {site.owner.name}. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-6 text-muted-foreground text-sm">
          <Link href={`mailto:${site.owner.email}`} className="hover:text-foreground">
            {site.owner.email}
          </Link>
          <Link href="#contact" className="hover:text-foreground">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
