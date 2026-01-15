// src/app/login/page.tsx
import { LoginForm } from "@/components/auth/login-form";
import Header from "@/components/home/layout/header";
import Footer from "@/components/home/layout/footer";
import { Ticket, Star, Headphones } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna Izquierda: Beneficios (Igual al original) */}
          <div className="hidden lg:block space-y-8 pr-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-foreground leading-tight">
                Bienvenido de vuelta a <br />
                <span className="text-primary">PromoTrip AI</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Inicia sesión para gestionar tus viajes estudiantiles y acceder a ofertas exclusivas.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50 shadow-sm">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Ticket className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Acceso a tus reservas</h3>
                  <p className="text-sm text-muted-foreground">Gestiona todos tus viajes en un solo lugar</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50 shadow-sm">
                <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
                  <Star className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Promociones exclusivas</h3>
                  <p className="text-sm text-muted-foreground">Descuentos especiales para grupos y colegios</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50 shadow-sm">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                  <Headphones className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Soporte prioritario</h3>
                  <p className="text-sm text-muted-foreground">Atención 24/7 para tus consultas de viaje</p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta de Login */}
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <div className="bg-card rounded-2xl shadow-2xl border border-border p-8">
              <div className="mb-8 text-center lg:text-left">
                <h2 className="text-2xl font-bold text-foreground">Iniciar Sesión</h2>
                <p className="text-sm text-muted-foreground mt-2">Ingresa tus credenciales para continuar</p>
              </div>

              <LoginForm />

              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground font-medium">O continúa con</span>
                </div>
              </div>

              <p className="text-center text-sm text-muted-foreground">
                ¿No tienes una cuenta?{" "}
                <a href="/registro" className="text-primary font-bold hover:underline">
                  Regístrate aquí
                </a>
              </p>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}