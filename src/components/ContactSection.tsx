import { WhatsAppButton } from "./WhatsAppButton";
import { Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const ContactSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Preparado(a) para dar o primeiro passo?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Chega de depender dos outros. Agende sua <span className="text-primary font-semibold">aula avaliativa</span> e descubra como é libertador 
            ter o <span className="text-primary font-semibold">controle do volante</span> nas suas mãos!
          </p>
          
          <div className="mb-12">
            <WhatsAppButton 
              variant="hero"
              message="Oi! Quero saber mais informações."
            >
              Entre em Contato
            </WhatsAppButton>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="shadow-medium border-lavender/30">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">WhatsApp</h3>
              <p className="text-2xl font-bold text-primary">(13) 98199-3808</p>
              <p className="text-muted-foreground mt-2">Atendimento rápido e personalizado</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-medium border-lavender/30">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Área de Atendimento</h3>
              <div className="space-y-1">
                <p className="text-lg font-semibold text-primary">Santos - SP</p>
                <p className="text-lg font-semibold text-primary">São Vicente - SP</p>
                <p className="text-lg font-semibold text-primary">Praia Grande - SP</p>
              </div>
              <p className="text-muted-foreground mt-2">Atendimento domiciliar</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};