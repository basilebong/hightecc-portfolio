import { About } from "@/components/about";
import { Capabilities } from "@/components/capabilities";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Pillars } from "@/components/pillars";
import { Products } from "@/components/products";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <Hero />
      <main>
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
