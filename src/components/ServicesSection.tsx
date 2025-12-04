import { Baby, Stethoscope, Syringe, Brain, Apple, Moon } from "lucide-react";

const services = [
  {
    icon: Baby,
    title: "[Serviço 1]",
    description: "[Descreva brevemente este serviço. Ex: Acompanhamento do desenvolvimento infantil desde o nascimento.]",
  },
  {
    icon: Stethoscope,
    title: "[Serviço 2]",
    description: "[Descreva brevemente este serviço. Ex: Consultas de rotina para manter a saúde do seu filho em dia.]",
  },
  {
    icon: Syringe,
    title: "[Serviço 3]",
    description: "[Descreva brevemente este serviço. Ex: Orientação completa sobre o calendário vacinal.]",
  },
  {
    icon: Brain,
    title: "[Serviço 4]",
    description: "[Descreva brevemente este serviço. Ex: Avaliação do desenvolvimento neuropsicomotor.]",
  },
  {
    icon: Apple,
    title: "[Serviço 5]",
    description: "[Descreva brevemente este serviço. Ex: Orientação nutricional para cada fase da infância.]",
  },
  {
    icon: Moon,
    title: "[Serviço 6]",
    description: "[Descreva brevemente este serviço. Ex: Consultoria de sono infantil para noites tranquilas.]",
  },
];

export const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Serviços</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2 mb-4">
            Como posso ajudar seu filho
          </h2>
          <p className="text-muted-foreground">
            [Descreva aqui sua abordagem geral de atendimento. Ex: "Ofereço atendimento completo e humanizado para todas as fases da infância."]
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
