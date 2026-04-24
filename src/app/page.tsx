import { Contact } from "@/components/contact";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { Services } from "@/components/services";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Services />
        <Process />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
