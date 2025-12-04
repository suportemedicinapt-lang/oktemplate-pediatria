import { Clock, Heart, Users, Shield } from "lucide-react";

const differentials = [
  {
    icon: Clock,
    title: "[Diferencial 1]",
    description: "[Descreva seu diferencial. Ex: Consultas sem pressa, com tempo para tirar todas as dúvidas.]",
  },
  {
    icon: Heart,
    title: "[Diferencial 2]",
    description: "[Descreva seu diferencial. Ex: Atendimento humanizado que acolhe criança e família.]",
  },
  {
    icon: Users,
    title: "[Diferencial 3]",
    description: "[Descreva seu diferencial. Ex: Suporte contínuo via WhatsApp para emergências.]",
  },
  {
    icon: Shield,
    title: "[Diferencial 4]",
    description: "[Descreva seu diferencial. Ex: Ambiente lúdico e acolhedor para os pequenos.]",
  },
];

export const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="py-20 md:py-28 bg-primary-light relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Diferenciais</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2 mb-4">
            Por que escolher meu consultório?
          </h2>
          <p className="text-muted-foreground">
            [Escreva uma frase sobre seu compromisso com qualidade. Ex: "Cada detalhe foi pensado para proporcionar a melhor experiência para você e seu filho."]
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 bg-card rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
