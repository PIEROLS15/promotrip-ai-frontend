"use client";

import { useRouter, usePathname } from "next/navigation";
import { MapPin, Home, ArrowLeft, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleGoBack = () => {
    router.back();
    setTimeout(() => {
      if (window.location.pathname === pathname) {
        router.push("/");
      }
    }, 150);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
        <div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-soft"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Floating icons decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <MapPin
          className="absolute top-[15%] left-[10%] w-8 h-8 text-primary/20 animate-float"
          style={{ animationDelay: "0s" }}
        />
        <Compass
          className="absolute top-[20%] right-[15%] w-10 h-10 text-secondary/20 animate-float"
          style={{ animationDelay: "0.5s" }}
        />
        <MapPin
          className="absolute bottom-[25%] left-[20%] w-6 h-6 text-primary/15 animate-float"
          style={{ animationDelay: "1s" }}
        />
        <Compass
          className="absolute bottom-[20%] right-[10%] w-8 h-8 text-secondary/15 animate-float"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-lg mx-auto">
        {/* Glass card */}
        <div className="bg-card/50 backdrop-blur-xl border border-border/50 rounded-3xl p-8 md:p-12 shadow-2xl">
          {/* 404 */}
          <div className="relative mb-6">
            <h1 className="text-[120px] md:text-[160px] font-bold leading-none bg-gradient-to-br from-primary via-primary/80 to-secondary bg-clip-text text-transparent select-none">
              404
            </h1>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Compass className="w-16 h-16 md:w-20 md:h-20 text-foreground/10" />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            ¡Destino no encontrado!
          </h2>

          <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
            Parece que esta ruta no existe en nuestro mapa de aventuras.
            La página que buscas pudo haber sido movida o eliminada.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={() => router.push("/")}
              className="gap-2 px-6"
              size="lg"
            >
              <Home className="w-4 h-4" />
              Volver al inicio
            </Button>
            <Button
              onClick={handleGoBack}
              variant="outline"
              className="gap-2 px-6"
              size="lg"
            >
              <ArrowLeft className="w-4 h-4" />
              Regresar
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground/70">
            ¿Necesitas ayuda?
            <button
              onClick={() => router.push("/contacto")}
              className="text-primary hover:text-primary/80 ml-1 underline-offset-4 hover:underline transition-colors"
            >
              Contáctanos
            </button>
          </p>
        </div>

        <p className="mt-6 text-xs text-muted-foreground/50 font-mono">
          Ruta: {pathname}
        </p>
      </div>
    </div>
  );
};

export default NotFound;
