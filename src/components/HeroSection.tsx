import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, Star } from "lucide-react";
import doctorImage from "@/assets/doctor-placeholder.jpg";

export const HeroSection = () => {
  return (
    <section className="min-h-screen hero-gradient pt-20 md:pt-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-32 left-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-32 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-card rounded-full px-4 py-2 card-shadow">
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="text-sm font-medium text-foreground">[Sua Especialidade em Pediatria]</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="text-foreground">Cuidando da saúde do</span>
              <br />
              <span className="text-gradient">seu filho</span>
              <br />
              <span className="text-foreground">com carinho</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              [Descreva aqui em uma frase seu propósito e compromisso com a saúde infantil. Ex: "Pediatra dedicada a oferecer atendimento humanizado e personalizado para garantir o desenvolvimento saudável do seu pequeno."]
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" className="gap-2">
                <Calendar className="w-5 h-5" />
                Agendar Consulta
              </Button>
              <Button variant="heroOutline" className="gap-2">
                <MessageCircle className="w-5 h-5" />
                Fale pelo WhatsApp
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">[+]</span>
                </div>
                <div>
                  <p className="font-bold text-foreground">[X] anos</p>
                  <p className="text-sm text-muted-foreground">de experiência</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">[+]</span>
                </div>
                <div>
                  <p className="font-bold text-foreground">[X]+</p>
                  <p className="text-sm text-muted-foreground">pacientes atendidos</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Star className="w-5 h-5 text-accent fill-accent" />
                </div>
                <div>
                  <p className="font-bold text-foreground">[5.0]</p>
                  <p className="text-sm text-muted-foreground">avaliação Google</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative z-10">
              <img
                src={doctorImage}
                alt="[Seu Nome] - Pediatra"
                className="w-full max-w-lg mx-auto rounded-3xl card-shadow"
              />
            </div>
            {/* Decorative card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 card-shadow animate-float z-20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Agendamento Online</p>
                  <p className="text-sm text-muted-foreground">Rápido e fácil</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
