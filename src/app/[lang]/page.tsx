import { notFound } from "next/navigation";

import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import { About } from "@/components/about";
import { Capabilities } from "@/components/capabilities";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Pillars } from "@/components/pillars";
import { Products } from "@/components/products";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { routing } from "@/i18n/routing";

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(routing.locales, lang)) notFound();
  setRequestLocale(lang);

  return (
    <>
      <SiteHeader />
      <Hero />
      <main id="main">
        <About />
        <Pillars />
        <Capabilities />
        <Products />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
