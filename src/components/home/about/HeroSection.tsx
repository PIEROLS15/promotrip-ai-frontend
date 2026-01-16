import { FC } from "react";
import { Badge } from "@/components/ui/badge";

const HeroSection: FC = () => {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-students.jpg"
          alt="Estudiantes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 to-foreground/50" />
      </div>

      <div className="relative z-10 text-center px-4">
        <Badge variant="turquoise" className="mb-4">Sobre Nosotros</Badge>

        <h1 className="text-4xl md:text-6xl font-bold text-card mb-4">
          Transformamos la educación<br />
          a través del <span className="text-secondary">turismo</span>
        </h1>

        <p className="text-card/90 text-lg max-w-2xl mx-auto">
          Somos la primera plataforma en Cañete que usa IA para conectar colegios con experiencias educativas.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

