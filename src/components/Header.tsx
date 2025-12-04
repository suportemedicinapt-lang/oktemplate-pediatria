import { Button } from "@/components/ui/button";
import { Phone, Calendar, Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">P</span>
            </div>
            <span className="font-bold text-lg text-foreground">[Seu Nome]</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Sobre
            </a>
            <a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Serviços
            </a>
            <a href="#diferenciais" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Diferenciais
            </a>
            <a href="#depoimentos" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Depoimentos
            </a>
            <a href="#contato" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Contato
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="gap-2">
              <Phone className="w-4 h-4" />
              <span className="text-muted-foreground">[Seu Telefone]</span>
            </Button>
            <Button variant="default" size="sm" className="gap-2">
              <Calendar className="w-4 h-4" />
              Agendar Consulta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              <a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Sobre
              </a>
              <a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Serviços
              </a>
              <a href="#diferenciais" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Diferenciais
              </a>
              <a href="#depoimentos" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Depoimentos
              </a>
              <a href="#contato" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Contato
              </a>
              <Button variant="default" size="sm" className="gap-2 w-full mt-2">
                <Calendar className="w-4 h-4" />
                Agendar Consulta
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
