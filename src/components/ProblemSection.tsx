import { Car, AlertTriangle, Clock, Heart } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const problems = [
  {
    icon: AlertTriangle,
    title: "Medo de trânsito intenso",
    description: "Fica ansioso(a) só de pensar em avenidas movimentadas ou no trânsito do dia a dia?"
  },
  {
    icon: Car,
    title: "Insegurança com o carro",
    description: "Não se sente confortável com as dimensões do carro, baliza, ladeiras ou em estacionar na sua própria garagem?"
  },
  {
    icon: Clock,
    title: "Falta de prática",
    description: "Tirou a CNH há muito tempo e nunca mais dirigiu, perdendo totalmente a prática e a confiança?"
  },
  {
    icon: Heart,
    title: "Trauma ou ansiedade",
    description: "Passou por alguma situação ruim no trânsito ou a simples ideia de dirigir te causa calafrios?"
  }
];

export const ProblemSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sente alguma destas dificuldades ao pensar em dirigir?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {problems.map((problem, index) => (
            <Card key={index} className="text-center h-full shadow-soft hover:shadow-medium transition-all duration-300 border-lavender/20">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <problem.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{problem.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-xl font-semibold text-primary bg-lavender-light px-8 py-4 rounded-2xl inline-block shadow-soft">
            Se você respondeu 'sim' a qualquer uma dessas perguntas, eu posso te ajudar a superar isso.
          </p>
        </div>
      </div>
    </section>
  );
};