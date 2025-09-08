import { MessageCircle } from "lucide-react";

export const FloatingWhatsApp = () => {
  const whatsappUrl = "https://wa.me/5513981993808?text=Olá! Gostaria de agendar uma aula de direção.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-gradient-primary text-primary-foreground p-4 rounded-full shadow-strong hover:shadow-medium transition-all duration-300 hover:scale-110"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};