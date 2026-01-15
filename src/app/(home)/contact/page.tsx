import type { Metadata } from "next";
import ContactHero from "@/components/home/contact/ContactHero";
import ContactInfoGrid from "@/components/home/contact/ContactInfoGrid";
import ContactForm from "@/components/home/contact/ContactForm";
import FAQSection from "@/components/home/contact/FAQSection";
import AIChatSection from "@/components/home/contact/AIChatSection";

export const metadata: Metadata = {
  title: "Contacto | PromoTrip AI",
};

export default function ContactPage() {
  return (
    <main className="pt-20">
      <ContactHero />
      <ContactInfoGrid />

      <section className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
          <ContactForm />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Preguntas frecuentes</h2>
          <FAQSection />
          <AIChatSection />
        </div>
      </section>
    </main>
  );
}