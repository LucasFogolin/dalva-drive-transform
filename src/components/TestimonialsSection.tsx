import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Izi Souza",
    text: "Top! Escolha certeira. A comodidade de não precisar me deslocar, a diversidade de trajetos, a segurança e paciência transmitidas... gratidão Dalva.",
    rating: 5
  },
  {
    name: "Glaice Lima", 
    text: "Super indico, profissional com uma paciência e leveza em ensinar. Não dirigia há anos, e com ela me trouxe uma segurança sem igual... obrigada por me ajudar a realizar meu sonho de dirigir novamente.",
    rating: 5
  },
  {
    name: "Rosi Maria",
    text: "Super recomendo, uma excelente instrutora muito atenciosa, nos dá todo suporte e segurança pra dirigir, perdi totalmente o medo.",
    rating: 5
  },
  {
    name: "Junynhu Partideiro",
    text: "Para quem quer aprender a dirigir de verdade, subir morro, ir de Santos a Cubatão... a Dalva Lúcia conhece tudo e mais um pouco. Super indico!",
    rating: 5
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Veja o que meus alunos dizem
          </h2>
          <p className="text-lg text-muted-foreground">
            Histórias reais de transformação e conquista da independência no trânsito
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300 border-lavender/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-lavender" />
                  <blockquote className="text-muted-foreground italic leading-relaxed pl-6">
                    "{testimonial.text}"
                  </blockquote>
                </div>
                
                <div className="mt-6 pt-4 border-t border-lavender/30">
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">Aluna da Instrutora Dalva</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};