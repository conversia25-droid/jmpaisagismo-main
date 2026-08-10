import { ArrowRight, Droplets, Hammer, Leaf, Scissors, Trees, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import serviceConstrucao from "@/assets/service-construcao.jpg";
import serviceGramados from "@/assets/service-gramados.jpg";
import serviceJardins from "@/assets/service-jardins.jpg";
import serviceLimpeza from "@/assets/service-limpeza.jpg";
import servicePoda from "@/assets/service-poda.jpg";
import type { PortfolioCategory } from "@/data/portfolioItems";

const services: {
  icon: typeof Hammer;
  title: string;
  description: string;
  image: string;
  category: PortfolioCategory;
}[] = [
  {
    icon: Hammer,
    title: "Construção Civil",
    description:
      "Execução de projetos de construção e reforma civil para áreas verdes, praças, jardins e espaços urbanos com qualidade e planejamento.",
    image: serviceConstrucao,
    category: "construcao",
  },
  {
    icon: Leaf,
    title: "Manutenção de Jardins",
    description:
      "Cuidamos do seu jardim com podas regulares, adubação e controle de pragas para manter a beleza o ano todo.",
    image: serviceJardins,
    category: "jardins",
  },
  {
    icon: Droplets,
    title: "Gramados Esportivos",
    description:
      "Implantação, recuperação e manutenção de gramados para campos esportivos com padrão profissional.",
    image: serviceGramados,
    category: "gramados",
  },
  {
    icon: Trees,
    title: "Limpeza Urbana",
    description:
      "Capina, roçagem, varrição, pintura de meio-fio, lavagem de vias e coleta de entulho vegetal e civil.",
    image: serviceLimpeza,
    category: "limpeza",
  },
  {
    icon: Scissors,
    title: "Poda de Árvores",
    description:
      "Poda técnica, supressão e transplante de árvores com equipe especializada e equipamentos adequados.",
    image: servicePoda,
    category: "poda",
  },
];

const ServicesSection = () => {
  const [lightbox, setLightbox] = useState<{ image: string; title: string } | null>(null);

  return (
    <>
      <section id="servicos" className="py-20 md:py-28 bg-background dot-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-widest text-primary">
              O que fazemos
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mt-5">
              Nossos <span className="text-highlight">Serviços</span>
            </h2>
            <p className="font-body text-muted-foreground mt-4">
              Soluções completas em construção civil, paisagismo e conservação para empresas,
              condomínios e órgãos públicos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-card rounded-3xl overflow-hidden border border-border card-shadow hover:card-hover-shadow hover:-translate-y-1 transition-all duration-300"
              >
                <button
                  type="button"
                  className="relative h-52 w-full overflow-hidden text-left"
                  onClick={() => setLightbox({ image: service.image, title: service.title })}
                  aria-label={`Ampliar imagem de ${service.title}`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 w-11 h-11 rounded-xl gradient-primary flex items-center justify-center glow-shadow">
                    <service.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                </button>
                <div className="p-7">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to={`/portfolio?servico=${service.category}`}
                    className="inline-flex items-center gap-2 mt-5 font-body text-sm font-semibold text-primary hover:text-primary-glow transition-colors"
                  >
                    Ver trabalhos
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}

            <div className="rounded-3xl gradient-primary p-8 flex flex-col justify-center glow-shadow">
              <h3 className="font-display text-2xl font-extrabold text-primary-foreground mb-3">
                Precisa de algo específico?
              </h3>
              <p className="font-body text-sm text-primary-foreground/85 mb-6">
                Montamos um plano sob medida para a sua área verde ou obra. Fale com a nossa
                equipe e receba um orçamento sem compromisso.
              </p>
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 self-start rounded-full bg-primary-foreground px-6 py-3 font-body font-semibold text-primary hover:opacity-90 transition-opacity"
              >
                Solicitar Orçamento
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            aria-label="Fechar"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="max-w-5xl w-full animate-scale-in" onClick={(event) => event.stopPropagation()}>
            <img
              src={lightbox.image}
              alt={lightbox.title}
              className="w-full h-auto max-h-[85vh] object-contain rounded-2xl"
            />
            <p className="text-primary-foreground text-center mt-4 font-display text-lg">
              {lightbox.title}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ServicesSection;
