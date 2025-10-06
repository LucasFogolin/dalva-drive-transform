import dalvaInstructor from "/lovable-uploads/fb863f46-7728-4005-8b3c-f4af29198f45.png";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Prazer, sou a Instrutora Dalva Lúcia!
            </h2>
            
            <Card className="shadow-medium border-lavender/30">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Com mais de <strong className="text-primary">16 anos de experiência</strong> como instrutora de trânsito 
                  e mais de <strong className="text-primary">1.000 alunos</strong> que hoje dirigem com segurança, 
                  minha missão é ajudar você a realizar o sonho de dirigir novamente.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Trabalhei em autoescolas e desenvolvi um método validado pela prática, focado em paciência, 
                  técnica e na superação dos seus medos específicos. 
                  <strong className="text-primary"> A sua segurança e confiança são a minha prioridade!</strong>
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-gradient-primary text-primary-foreground px-4 py-2">
                    16+ Anos de Experiência
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2">
                    1000+ Alunos Formados
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2">
                    Método Personalizado
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <img
                src={dalvaInstructor}
                alt="Dalva Lúcia - Instrutora de Trânsito com mais de 16 anos de experiência"
                className="w-full max-w-md rounded-3xl shadow-strong"
              />
              <div className="absolute -bottom-6 -left-6 w-44 h-44 rounded-full border-[6px] border-primary/70 bg-background flex items-center justify-center rotate-[-15deg] shadow-strong">
                <div className="relative w-36 h-36 rounded-full border-[3px] border-primary/70 flex items-center justify-center">
                  <div className="absolute top-3 left-0 right-0 text-center">
                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.15em]">Especialista</p>
                  </div>
                  <Star className="text-primary fill-primary w-8 h-8" />
                  <div className="absolute bottom-3 left-0 right-0 text-center">
                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.15em]">Medo de Dirigir</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-0.5 bg-primary/70" style={{ transform: 'rotate(15deg)' }}></div>
                    <div className="w-full h-0.5 bg-primary/70 absolute" style={{ transform: 'rotate(-15deg)' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};