import { Heart, GraduationCap, Award, Building } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Info Side */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-light rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-shadow">
                <GraduationCap className="w-8 h-8 text-primary mb-3" />
                <h4 className="font-bold text-foreground mb-1">Formação</h4>
                <p className="text-sm text-muted-foreground">[Sua Faculdade]</p>
              </div>
              <div className="bg-accent-light rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-shadow">
                <Award className="w-8 h-8 text-accent mb-3" />
                <h4 className="font-bold text-foreground mb-1">Residência</h4>
                <p className="text-sm text-muted-foreground">[Hospital/Instituição]</p>
              </div>
              <div className="bg-secondary rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-shadow">
                <Building className="w-8 h-8 text-primary mb-3" />
                <h4 className="font-bold text-foreground mb-1">CRM</h4>
                <p className="text-sm text-muted-foreground">[Seu CRM]</p>
              </div>
              <div className="bg-primary/5 rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-shadow">
                <Heart className="w-8 h-8 text-accent mb-3" />
                <h4 className="font-bold text-foreground mb-1">Especialização</h4>
                <p className="text-sm text-muted-foreground">[Sua Especialização]</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Sobre Mim</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
              [Seu Nome Completo]
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                [Escreva aqui um parágrafo sobre você, sua história e o que te motivou a se tornar pediatra. Ex: "Desde criança, sempre soube que queria trabalhar com saúde infantil. Essa paixão me levou a me dedicar inteiramente à pediatria..."]
              </p>
              <p>
                [Continue contando sobre sua formação, especializações e diferenciais. Ex: "Formada pela [Universidade], com residência em [Hospital], busco constantemente atualização para oferecer o melhor cuidado aos meus pequenos pacientes..."]
              </p>
              <p>
                [Finalize com sua filosofia de atendimento. Ex: "Acredito que o cuidado pediátrico vai além do consultório. É sobre criar uma relação de confiança com as famílias e acompanhar o desenvolvimento saudável de cada criança."]
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <span className="bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-medium">
                [Área de Atuação 1]
              </span>
              <span className="bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-medium">
                [Área de Atuação 2]
              </span>
              <span className="bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-medium">
                [Área de Atuação 3]
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
