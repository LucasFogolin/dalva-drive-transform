import dalvaInstructor from "@/assets/dalva-instructor.jpg";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

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
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-medium border border-lavender/20">
                <p className="text-sm font-semibold text-primary">Especialista em superar</p>
                <p className="text-sm font-semibold text-primary">o medo de dirigir</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};