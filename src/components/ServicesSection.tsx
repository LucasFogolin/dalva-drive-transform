import { ArrowUp, Square, Car, Route, Package, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: ArrowUp,
    title: "Controle de Embreagem em Subidas",
    description: "Domine ladeiras e subidas sem medo de descer ou dar o famoso 'cavalo de pau'."
  },
  {
    icon: Square,
    title: "Estacionamento em Vagas e Garagens", 
    description: "Aprenda a estacionar com confiança em vagas apertadas e na sua própria garagem."
  },
  {
    icon: Car,
    title: "Trânsito Intenso em Avenidas",
    description: "Ganhe segurança para dirigir em avenidas movimentadas e no trânsito do dia a dia."
  },
  {
    icon: Route,
    title: "Direção em Rodovias",
    description: "Supere o medo de velocidades mais altas e mudanças de faixa em rodovias."
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Aulas focadas na sua evolução
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="text-center h-full shadow-soft hover:shadow-medium transition-all duration-300 border-lavender/20">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-medium border-lavender/30">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <Package className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Pacotes de Aulas</h3>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Ofereço aulas avulsas e pacotes de 5, 10 ou 20 aulas, recomendados após a avaliação inicial 
                para garantir que você aprenda no seu tempo e sem enrolação.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Aula Avulsa</Badge>
                <Badge variant="secondary">Pacote 5 Aulas</Badge>
                <Badge variant="secondary">Pacote 10 Aulas</Badge>
                <Badge variant="secondary">Pacote 20 Aulas</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-lavender/30">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Diferencial Único</h3>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                <strong className="text-primary">Vou até a sua casa!</strong> Você não precisa se deslocar, 
                as aulas começam e terminam no seu endereço. Mais comodidade e praticidade para você.
              </p>
              <Badge className="bg-gradient-primary text-primary-foreground">Atendimento Domiciliar</Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};