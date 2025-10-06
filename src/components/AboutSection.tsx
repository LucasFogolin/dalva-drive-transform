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
              <div className="absolute -bottom-6 -left-6 w-44 h-44 flex items-center justify-center rotate-[-15deg]">
                {/* Círculos externos */}
                <div className="absolute w-44 h-44 rounded-full border-[3px] border-primary/60"></div>
                <div className="absolute w-40 h-40 rounded-full border-2 border-dashed border-primary/70"></div>
                <div className="absolute w-36 h-36 rounded-full border-[3px] border-primary/80"></div>
                
                {/* Estrelas decorativas */}
                <Star className="absolute top-6 left-1/2 -translate-x-1/2 w-3 h-3 text-primary fill-primary" />
                <Star className="absolute bottom-6 left-1/2 -translate-x-1/2 w-3 h-3 text-primary fill-primary" />
                <Star className="absolute top-12 left-8 w-2 h-2 text-primary fill-primary" />
                <Star className="absolute top-12 right-8 w-2 h-2 text-primary fill-primary" />
                <Star className="absolute bottom-12 left-8 w-2 h-2 text-primary fill-primary" />
                <Star className="absolute bottom-12 right-8 w-2 h-2 text-primary fill-primary" />
                
                {/* Faixa diagonal com texto */}
                <div className="relative w-48 h-16 bg-background border-[3px] border-primary/80 shadow-strong flex items-center justify-center transform rotate-[8deg]">
                  <div className="absolute inset-0 border-2 border-primary/60 m-1"></div>
                  <div className="text-center px-2">
                    <p className="text-[11px] font-black text-primary uppercase tracking-wider leading-tight">Especialista em</p>
                    <p className="text-[11px] font-black text-primary uppercase tracking-wider leading-tight">Medo de Dirigir</p>
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