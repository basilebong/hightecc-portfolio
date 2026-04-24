import type { Metadata } from "next";

import { Impressum } from "@/components/impressum";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Impressum · Hightecc",
  description: "Impressum und Anbieterkennzeichnung gemäß § 5 DDG.",
};

export default function ImpressumPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Impressum />
      </main>
      <SiteFooter />
    </>
  );
}
