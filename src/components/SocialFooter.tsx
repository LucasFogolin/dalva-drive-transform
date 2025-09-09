import { Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SocialFooter = () => {
  return (
    <footer className="py-12 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-background mb-6">
            Siga-me nas redes sociais
          </h3>
          
          <div className="flex justify-center gap-4 mb-8">
            <Button 
              variant="outline" 
              size="lg"
              asChild
              className="bg-background/10 border-background/20 text-background hover:bg-background hover:text-foreground"
            >
              <a 
                href="https://www.instagram.com/instrutoradalvalucia/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              asChild
              className="bg-background/10 border-background/20 text-background hover:bg-background hover:text-foreground"
            >
              <a 
                href="https://www.facebook.com/instrutoradalvalucia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Facebook className="w-5 h-5" />
                Facebook
              </a>
            </Button>
          </div>
          
          <div className="border-t border-background/20 pt-6">
            <p className="text-background/70 text-sm">
              © 2024 Instrutora Dalva Lúcia - Todos os direitos reservados
            </p>
            <p className="text-background/70 text-sm mt-2">
              Aulas de direção em Santos, São Vicente e Praia Grande
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};