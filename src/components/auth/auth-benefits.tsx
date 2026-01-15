// src/components/auth/auth-benefits.tsx
import { Ticket, Star, Headphones } from "lucide-react";

export const AuthBenefits = () => (
  <div className="hidden lg:block space-y-8 pr-8">
    <div className="space-y-2">
      <h1 className="text-4xl font-bold text-foreground">Bienvenido de vuelta</h1>
      <p className="text-lg text-muted-foreground">Inicia sesión en tu cuenta para acceder a tus reservas, promociones y más.</p>
    </div>
    <div className="space-y-6">
      <BenefitItem icon={<Ticket className="text-primary"/>} title="Acceso a tus reservas" desc="Gestiona todos tus viajes en un solo lugar" />
      <BenefitItem icon={<Star className="text-secondary"/>} title="Promociones exclusivas" desc="Descuentos especiales para miembros" />
      <BenefitItem icon={<Headphones className="text-emerald-500"/>} title="Soporte prioritario" desc="Atención 24/7 para tus consultas" />
    </div>
  </div>
);

const BenefitItem = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border/50">
    <div className="p-2 rounded-lg bg-background shadow-sm">{icon}</div>
    <div>
      <h3 className="font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  </div>
);