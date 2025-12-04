import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contato" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contato</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2 mb-4">
            Agende sua consulta
          </h2>
          <p className="text-muted-foreground">
            [Frase de chamada. Ex: "Entre em contato e dê o primeiro passo para cuidar da saúde do seu filho."]
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-6 card-shadow">
              <h3 className="text-xl font-bold text-foreground mb-6">Informações de Contato</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Endereço</p>
                    <p className="text-muted-foreground">[Sua Rua, Número - Bairro]</p>
                    <p className="text-muted-foreground">[Cidade - Estado, CEP]</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Telefone</p>
                    <p className="text-muted-foreground">[Seu Telefone]</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">E-mail</p>
                    <p className="text-muted-foreground">[Seu E-mail]</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Horário de Atendimento</p>
                    <p className="text-muted-foreground">[Ex: Segunda a Sexta: 8h às 18h]</p>
                    <p className="text-muted-foreground">[Ex: Sábado: 8h às 12h]</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-semibold text-foreground mb-3">Redes Sociais</p>
                <div className="flex gap-3">
                  <a
                    href="[Seu Link do Instagram]"
                    className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="[Seu Link do WhatsApp]"
                    className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-primary rounded-2xl p-8 text-primary-foreground flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para agendar?
            </h3>
            <p className="mb-6 opacity-90">
              [Texto de incentivo. Ex: "Clique no botão abaixo para agendar sua consulta pelo WhatsApp. Respondo rapidamente!"]
            </p>
            <Button 
              variant="secondary" 
              size="xl" 
              className="w-full bg-card text-foreground hover:bg-card/90 gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar pelo WhatsApp
            </Button>

            <div className="mt-8 pt-6 border-t border-primary-foreground/20">
              <p className="text-sm opacity-80 mb-2">Convênios aceitos:</p>
              <p className="font-medium">[Liste os convênios ou "Particular"]</p>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="bg-muted rounded-2xl h-64 flex items-center justify-center">
            <p className="text-muted-foreground">[Incorpore aqui o mapa do Google Maps com a localização do consultório]</p>
          </div>
        </div>
      </div>
    </section>
  );
};
