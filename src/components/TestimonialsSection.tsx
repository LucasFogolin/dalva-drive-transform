import { Card, CardContent } from "@/components/ui/card";
import depoimentoIzi from "@/assets/depoimento-izi.png";
import depoimentoGlaice from "@/assets/depoimento-glaice.png";
import depoimentoRosi from "@/assets/depoimento-rosi.png";
import depoimentoJunynhu from "@/assets/depoimento-junynhu.png";

const testimonials = [
  {
    name: "Izi Souza",
    text: "Top! Escolha certeira. A comodidade de não precisar me deslocar, a diversidade de trajetos, a segurança e paciência transmitidas... gratidão Dalva.",
    image: depoimentoIzi
  },
  {
    name: "Glaice Lima", 
    text: "Super indico, profissional com uma paciência e leveza em ensinar. Não dirigia há anos, e com ela me trouxe uma segurança sem igual... obrigada por me ajudar a realizar meu sonho de dirigir novamente.",
    image: depoimentoGlaice
  },
  {
    name: "Rosi Maria",
    text: "Super recomendo, uma excelente instrutora muito atenciosa, nos dá todo suporte e segurança pra dirigir, perdi totalmente o medo.",
    image: depoimentoRosi
  },
  {
    name: "Junynhu Partideiro",
    text: "Para quem quer aprender a dirigir de verdade, subir morro, ir de Santos a Cubatão... a Dalva Lúcia conhece tudo e mais um pouco. Super indico!",
    image: depoimentoJunynhu
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
            <Card key={index} className="overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 border-lavender/20">
              <CardContent className="p-0">
                <img
                  src={testimonial.image}
                  alt={`Depoimento de ${testimonial.name} sobre as aulas da Instrutora Dalva Lúcia`}
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};