import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Name */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">P</span>
            </div>
            <span className="font-bold text-lg">[Seu Nome]</span>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm opacity-70">
              © {new Date().getFullYear()} [Seu Nome] - CRM [Seu CRM]
            </p>
            <p className="text-sm opacity-70">
              Todos os direitos reservados
            </p>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-1 text-sm opacity-70">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-accent fill-accent" />
            <span>para cuidar do seu filho</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
