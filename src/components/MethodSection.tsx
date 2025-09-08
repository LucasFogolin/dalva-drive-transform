import { MessageCircle, Search, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Primeiro Contato",
    description: "Você entra em contato pelo WhatsApp e me conta seus principais medos e objetivos."
  },
  {
    icon: Search,
    number: "02", 
    title: "Aula Avaliativa",
    description: "Fazemos uma primeira aula prática para eu entender seu nível de direção e montarmos juntas um plano de treinos."
  },
  {
    icon: BookOpen,
    number: "03",
    title: "Aulas Personalizadas", 
    description: "Focamos exatamente no que você precisa: seja estacionar, dirigir em rodovias ou subir ladeiras. O melhor: vou até você!"
  }
];

export const MethodSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Um treinamento pensado para as suas necessidades
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative h-full shadow-soft hover:shadow-medium transition-all duration-300 border-lavender/30">
              <CardHeader className="text-center pb-4">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">{step.number}</span>
                </div>
                <div className="w-16 h-16 bg-lavender rounded-full flex items-center justify-center mx-auto mb-4 mt-4">
                  <step.icon className="w-8 h-8 text-purple-deep" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};