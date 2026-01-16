import type { Metadata } from "next";
import ContactHero from "@/components/home/contact2/contactHero";
import ContactInfoGrid from "@/components/home/contact2/contactInfoGrid";
import ContactForm from "@/components/home/contact2/contactForm";
import FAQSection from "@/components/home/contact2/faqSection";
import AIChatSection from "@/components/home/contact2/aiChatSection";

export const metadata: Metadata = {
  title: "Contacto | GoPromo AI",
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
