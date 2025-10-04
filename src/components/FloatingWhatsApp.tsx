export const FloatingWhatsApp = () => {
  const whatsappUrl = "https://wa.me/5513981993808?text=Oi! gostaria de saber mais informações.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 rounded-full shadow-strong hover:shadow-medium transition-all duration-300 hover:scale-110"
      aria-label="Falar no WhatsApp"
    >
      <img 
        src="/lovable-uploads/74ae7c28-d24e-4cf3-8552-6173f61dc599.png" 
        alt="WhatsApp" 
        className="w-16 h-16 rounded-full"
      />
    </a>
  );
};