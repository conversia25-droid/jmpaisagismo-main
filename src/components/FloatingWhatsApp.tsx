import { MessageCircle } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/company";

const FloatingWhatsApp = () => {
  return (
    <a
      href={createWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full gradient-primary glow-shadow flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default FloatingWhatsApp;
