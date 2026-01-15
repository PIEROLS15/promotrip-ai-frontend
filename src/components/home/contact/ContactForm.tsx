"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send, CheckCircle2 } from "lucide-react";
import { useContact } from "@/hooks/useContact";
import type { ApiError } from "@/types/api";

const ContactForm = () => {
  const { createContact } = useContact();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setFieldErrors({});

    try {
      await createContact(form);
      setIsSubmitted(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err: unknown) {
        const apiError = err as ApiError;

        if (apiError?.errors) {
          setFieldErrors(apiError.errors);
        } else {
          setError(apiError?.message || "Error al enviar mensaje");
  }
} finally {
      setIsSubmitting(false);
    }
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
      <div>
        <Input
          placeholder="Nombre completo"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        {fieldErrors.name && (
          <p className="text-red-500 text-sm">{fieldErrors.name[0]}</p>
        )}
      </div>

      <div>
        <Input
          type="email"
          placeholder="Correo electrónico"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {fieldErrors.email && (
          <p className="text-red-500 text-sm">{fieldErrors.email[0]}</p>
        )}
      </div>

      <Input
        placeholder="Teléfono"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />

      <Input
        placeholder="Asunto"
        required
        value={form.subject}
        onChange={(e) => setForm({ ...form, subject: e.target.value })}
      />

      <textarea
        className="w-full rounded-xl border p-3"
        rows={5}
        placeholder="Mensaje"
        required
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <Button className="w-full gap-2" disabled={isSubmitting}>
        <Send size={16} /> {isSubmitting ? "Enviando..." : "Enviar mensaje"}
      </Button>
    </form>
  );
};

export default ContactForm;
