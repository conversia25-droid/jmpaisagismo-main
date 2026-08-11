import { ArrowRight, Droplets, Hammer, Leaf, Scissors, Trees, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import type { PortfolioCategory } from "@/data/portfolioItems";
import serviceConstrucao from "@/assets/service-construcao.jpg";
import { publicPath } from "@/lib/publicPath";

const services: {
  icon: typeof Hammer;
  title: string;
  description: string;
  image: string;
  category: PortfolioCategory;
}[] = [
  {
    icon: Hammer,
    title: "Constru\u00e7\u00e3o Civil",
    description:
      "Execu\u00e7\u00e3o de projetos de constru\u00e7\u00e3o e reforma civil para \u00e1reas verdes, pra\u00e7as, jardins e espa\u00e7os urbanos com qualidade e planejamento.",
    image: serviceConstrucao,
    category: "construcao",
  },
  {
    icon: Droplets,
    title: "Irriga\u00e7\u00e3o",
    description:
      "Instala\u00e7\u00e3o, manuten\u00e7\u00e3o e ajustes de sistemas de irriga\u00e7\u00e3o para campos, gramados e \u00e1reas verdes.",
    image: publicPath("/portfolio-real/irrigacao/05-irrigacao-campo.jpg"),
    category: "irrigacao",
  },
  {
    icon: Leaf,
    title: "Manuten\u00e7\u00e3o de Jardins",
    description:
      "Cuidamos do seu jardim com podas regulares, aduba\u00e7\u00e3o e controle de pragas para manter a beleza o ano todo.",
    image: publicPath("/portfolio-real/jardins/06-jardins-jardim-municipal-taquaracu.jpg"),
    category: "jardins",
  },
  {
    icon: Droplets,
    title: "Gramados Esportivos",
    description:
      "Implanta\u00e7\u00e3o, recupera\u00e7\u00e3o e manuten\u00e7\u00e3o de gramados para campos esportivos com padr\u00e3o profissional.",
    image: publicPath("/portfolio-real/gramados/07-gramados-campo-de-novo-soberbo-santa-cruz-do-escalvado-7.jpg"),
    category: "gramados",
  },
  {
    icon: Trees,
    title: "Limpeza Urbana",
    description:
      "Capina, ro\u00e7agem, varri\u00e7\u00e3o, pintura de meio-fio, lavagem de vias e coleta de entulho vegetal e civil.",
    image: publicPath("/portfolio-real/limpeza/03-limpeza-limpeza-urbana-3.jpg"),
    category: "limpeza",
  },
  {
    icon: Scissors,
    title: "Poda de \u00c1rvores",
    description:
      "Poda t\u00e9cnica, supress\u00e3o e transplante de \u00e1rvores com equipe especializada e equipamentos adequados.",
    image: publicPath("/portfolio-real/poda/02-poda-corte-e-supressao-de-arvores-2.jpg"),
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
              Nossos <span className="text-highlight">{"Servi\u00e7os"}</span>
            </h2>
            <p className="font-body text-muted-foreground mt-4">
              {"Solu\u00e7\u00f5es completas em constru\u00e7\u00e3o civil, irriga\u00e7\u00e3o, paisagismo e conserva\u00e7\u00e3o para empresas, condom\u00ednios e \u00f3rg\u00e3os p\u00fablicos."}
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

            <div className="md:col-span-2 lg:col-span-3 rounded-3xl gradient-primary p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 glow-shadow">
              <div className="max-w-2xl">
                <h3 className="font-display text-2xl font-extrabold text-primary-foreground mb-3">
                  {"Precisa de algo espec\u00edfico?"}
                </h3>
                <p className="font-body text-sm text-primary-foreground/85">
                  {"Montamos um plano sob medida para a sua \u00e1rea verde ou obra. Fale com a nossa equipe e receba um or\u00e7amento sem compromisso."}
                </p>
              </div>
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 self-start md:self-auto rounded-full bg-primary-foreground px-6 py-3 font-body font-semibold text-primary hover:opacity-90 transition-opacity"
              >
                {"Solicitar Or\u00e7amento"}
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