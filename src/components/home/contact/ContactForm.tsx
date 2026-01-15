"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send, CheckCircle2 } from "lucide-react";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <Card className="p-8 text-center">
        <CheckCircle2 className="mx-auto mb-4 text-emerald-500" size={48} />
        <h3 className="font-bold text-xl">¡Mensaje enviado!</h3>
        <Button className="mt-4" onClick={() => setIsSubmitted(false)}>
          Enviar otro
        </Button>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input placeholder="Nombre completo" required />
      <Input type="email" placeholder="Correo electrónico" required />
      <Input placeholder="Teléfono" />
      <Input placeholder="Asunto" required />
      <textarea
        className="w-full rounded-xl border p-3"
        rows={5}
        placeholder="Mensaje"
        required
      />
      <Button className="w-full gap-2" disabled={isSubmitting}>
        <Send size={16} /> {isSubmitting ? "Enviando..." : "Enviar mensaje"}
      </Button>
    </form>
  );
};

export default ContactForm;