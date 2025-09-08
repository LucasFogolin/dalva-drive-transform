import { WhatsAppButton } from "./WhatsAppButton";
import heroBackground from "@/assets/hero-background.jpg";
import dalvaInstructor from "@/assets/dalva-instructor.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Perca o medo de dirigir e 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> conquiste sua independência</span> no trânsito
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Aulas de direção personalizadas para habilitados em Santos, São Vicente e Praia Grande. 
              Volte a dirigir com confiança e segurança!
            </p>
            <div className="pt-4">
              <WhatsAppButton 
                variant="hero"
                message="Olá! Gostaria de agendar minha aula avaliativa. Quero vencer o medo de dirigir!"
              >
                Agende sua Aula Avaliativa pelo WhatsApp
              </WhatsAppButton>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={dalvaInstructor}
                alt="Instrutora Dalva Lúcia - Instrutora de Trânsito Especializada"
                className="w-full max-w-md rounded-3xl shadow-strong"
              />
              <div className="absolute -top-4 -right-4 bg-gradient-primary text-primary-foreground px-6 py-3 rounded-2xl shadow-medium">
                <p className="font-semibold text-sm">+16 anos de experiência</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};