import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "[Nome do Paciente 1]",
    relation: "[Relação - Ex: Mãe do João]",
    text: "[Depoimento do paciente. Ex: 'A Dra. é maravilhosa! Meu filho sempre sai feliz das consultas. Ela tem uma paciência incrível e explica tudo com muito carinho.']",
    rating: 5,
  },
  {
    name: "[Nome do Paciente 2]",
    relation: "[Relação - Ex: Pai da Maria]",
    text: "[Depoimento do paciente. Ex: 'Encontramos uma pediatra que realmente se importa. O atendimento é completo e o suporte pós-consulta é excepcional.']",
    rating: 5,
  },
  {
    name: "[Nome do Paciente 3]",
    relation: "[Relação - Ex: Mãe do Pedro]",
    text: "[Depoimento do paciente. Ex: 'Desde que conhecemos a Dra., nossa experiência com pediatra mudou completamente. Profissional, carinhosa e muito competente.']",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Depoimentos</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2 mb-4">
            O que as famílias dizem
          </h2>
          <p className="text-muted-foreground">
            [Frase introdutória. Ex: "A satisfação das famílias é minha maior recompensa."]
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">
                    {testimonial.name.charAt(1).toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.relation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
