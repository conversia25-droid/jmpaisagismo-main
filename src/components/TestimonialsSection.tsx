import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ricardo Almeida",
    role: "Síndico — Condomínio Vila Verde",
    text: "A equipe da JM transformou completamente as áreas comuns do condomínio. Pontuais, organizados e o resultado ficou impecável.",
  },
  {
    name: "Fernanda Souza",
    role: "Gerente de Facilities — Grupo BH",
    text: "Contratamos para manutenção das áreas verdes e limpeza. Serviço padronizado, equipe uniformizada e relatórios sempre em dia.",
  },
  {
    name: "Marcos Tavares",
    role: "Diretor — Clube Esportivo",
    text: "Recuperaram nosso campo de futebol em tempo recorde. O gramado nunca esteve tão bem cuidado. Recomendo sem hesitar.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 section-gradient dot-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-widest text-primary">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mt-5">
            O que dizem <span className="text-highlight">nossos clientes</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="bg-card rounded-3xl p-8 border border-border card-shadow hover:card-hover-shadow hover:-translate-y-1 transition-all duration-300"
            >
              <Quote className="h-8 w-8 text-primary-glow mb-4" />
              <blockquote className="font-body text-muted-foreground leading-relaxed mb-6">
                “{t.text}”
              </blockquote>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <figcaption>
                <div className="font-display font-bold text-foreground">{t.name}</div>
                <div className="font-body text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
