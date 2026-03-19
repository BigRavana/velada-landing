import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { FightersSection } from "@/components/sections/Fighters";
import { EventsSection } from "@/components/sections/Events";
import { FAQSection } from "@/components/sections/FAQ";
import { MerchandisingSection } from "@/components/sections/Merchandising";
import { Footer } from "@/components/sections/Footer";
import { fighters } from "@/data/fighters";
import { events } from "@/data/events";
import { faqItems } from "@/data/faq";
import { merchItems } from "@/data/merch";

export const revalidate = 60;

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <FightersSection fighters={fighters} />
        <EventsSection events={events} fighters={fighters} />
        <FAQSection items={faqItems} />
        <MerchandisingSection items={merchItems} />
      </main>
      <Footer />
    </>
  );
}
