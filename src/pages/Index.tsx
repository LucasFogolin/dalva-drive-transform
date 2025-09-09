import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { MethodSection } from "@/components/MethodSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { VideoTestimonialsSection } from "@/components/VideoTestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { SocialFooter } from "@/components/SocialFooter";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <MethodSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <VideoTestimonialsSection />
      <ContactSection />
      <SocialFooter />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
