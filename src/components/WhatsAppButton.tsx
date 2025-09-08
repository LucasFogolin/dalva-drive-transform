import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  phone?: string;
  message?: string;
  variant?: "whatsapp" | "hero";
  children: React.ReactNode;
}

export const WhatsAppButton = ({ 
  phone = "5513981993808", 
  message = "Olá! Gostaria de agendar uma aula de direção.", 
  variant = "whatsapp",
  children 
}: WhatsAppButtonProps) => {
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <Button 
      variant={variant} 
      asChild
      className="gap-3"
    >
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="w-5 h-5" />
        {children}
      </a>
    </Button>
  );
};