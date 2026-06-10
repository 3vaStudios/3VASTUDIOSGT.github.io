import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/525549089924?text=Hola%203VA%20Studios%2C%20quiero%20cotizar%20un%20proyecto"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-primary/40 blur-xl animate-pulse-glow" />
      <span className="relative flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-lg group-hover:scale-110 transition-transform">
        <MessageCircle size={26} />
      </span>
    </a>
  );
}
