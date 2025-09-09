import { Play } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const videoTestimonials = [
  {
    title: "Rosângela, feliz e sem medo na rodovia!",
    description: "Veja como Rosângela superou o medo de dirigir em rodovias"
  },
  {
    title: "Mayara, mais segura e pronta para dirigir sozinha",
    description: "A transformação de Mayara em direção independente"
  },
  {
    title: "Júlia, sentindo a liberdade do volante",
    description: "Como Júlia conquistou sua independência no trânsito"
  },
  {
    title: "Michelle, superando a insegurança da balsa",
    description: "Michelle venceu seus medos e hoje dirige com confiança"
  }
];

export const VideoTestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Veja na Prática a Transformação
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nada fala mais alto do que resultados reais. Veja o progresso de algumas alunas durante nossas aulas.
          </p>
        </div>
        
        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videoTestimonials.map((video, index) => (
            <Card key={index} className="group cursor-pointer shadow-soft hover:shadow-medium transition-all duration-300 border-lavender/20">
              <CardHeader className="p-0">
                <div className="relative bg-gradient-primary rounded-t-lg h-48 flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/20 rounded-t-lg" />
                  <div className="relative z-10 bg-white/20 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-white fill-white" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-semibold text-white text-sm leading-tight">{video.title}</h3>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-muted-foreground text-sm">{video.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {videoTestimonials.map((video, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-4/5">
                  <Card className="group cursor-pointer shadow-soft hover:shadow-medium transition-all duration-300 border-lavender/20">
                    <CardHeader className="p-0">
                      <div className="relative bg-gradient-primary rounded-t-lg h-40 flex items-center justify-center">
                        <div className="absolute inset-0 bg-black/20 rounded-t-lg" />
                        <div className="relative z-10 bg-white/20 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-6 h-6 text-white fill-white" />
                        </div>
                        <div className="absolute bottom-3 left-3 right-3">
                          <h3 className="font-semibold text-white text-xs leading-tight">{video.title}</h3>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-3">
                      <p className="text-muted-foreground text-xs">{video.description}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground italic">
            * Os vídeos mostram alunas reais durante as aulas práticas, demonstrando a evolução e confiança adquirida.
          </p>
        </div>
      </div>
    </section>
  );
};