import { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Sparkles } from "lucide-react";

const MissionVision: FC = () => {
  return (
    <section className="py-16 md:py-24 container px-4">
      <div className="grid md:grid-cols-2 gap-8">
        <Card variant="feature" className="p-8">
          <CardContent className="p-0">
            <div className="w-14 h-14 gradient-hero rounded-xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-primary-foreground" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Nuestra Misión</h2>
            <p className="text-muted-foreground leading-relaxed">
              Democratizar el acceso a experiencias de turismo educativo de calidad...
            </p>
          </CardContent>
        </Card>

        <Card variant="feature" className="p-8">
          <CardContent className="p-0">
            <div className="w-14 h-14 gradient-cta rounded-xl flex items-center justify-center mb-6">
              <Sparkles className="w-7 h-7 text-secondary-foreground" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Nuestra Visión</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ser la plataforma líder de turismo estudiantil en Latinoamérica...
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MissionVision;
