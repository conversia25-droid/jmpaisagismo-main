import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const showcaseItems = [
  {
    service: "Gramados Esportivos",
    title: "Campos com padr\u00e3o profissional",
    image: "/portfolio-real/gramados/07-gramados-campo-de-novo-soberbo-santa-cruz-do-escalvado-7.jpg",
    href: "/portfolio?servico=gramados",
  },
  {
    service: "Manuten\u00e7\u00e3o de Jardins",
    title: "Jardins e \u00e1reas verdes sempre cuidados",
    image: "/portfolio-real/jardins/06-jardins-jardim-municipal-taquaracu.jpg",
    href: "/portfolio?servico=jardins",
  },
  {
    service: "Constru\u00e7\u00e3o Civil",
    title: "Infraestrutura para pra\u00e7as e campos",
    image: "/portfolio-real/construcao/03-construcao-colocando-os-tubos-nas-valas-3.jpg",
    href: "/portfolio?servico=construcao",
  },
  {
    service: "Limpeza Urbana",
    title: "Conserva\u00e7\u00e3o de \u00e1reas p\u00fablicas",
    image: "/portfolio-real/limpeza/03-limpeza-limpeza-urbana-3.jpg",
    href: "/portfolio?servico=limpeza",
  },
  {
    service: "Poda de \u00c1rvores",
    title: "Poda t\u00e9cnica e supress\u00e3o segura",
    image: "/portfolio-real/poda/02-poda-corte-e-supressao-de-arvores-2.jpg",
    href: "/portfolio?servico=poda",
  },
  {
    service: "Gramados Esportivos",
    title: "Corte e acabamento de campo",
    image: "/portfolio-real/gramados/02-gramados-corte-do-campo-com-maquina-helicoidal.jpg",
    href: "/portfolio?servico=gramados",
  },
  {
    service: "Manuten\u00e7\u00e3o de Jardins",
    title: "Clientes corporativos e institucionais",
    image: "/portfolio-real/jardins/03-jardins-sede-3.jpg",
    href: "/portfolio?servico=jardins",
  },
  {
    service: "Constru\u00e7\u00e3o Civil",
    title: "Irriga\u00e7\u00e3o, drenagem e preparo t\u00e9cnico",
    image: "/portfolio-real/construcao/02-construcao-inicio-da-irrigacao-2.jpg",
    href: "/portfolio?servico=construcao",
  },
] as const;

const HomeShowcase = () => {
  const trackItems = [...showcaseItems, ...showcaseItems];

  return (
    <section className="py-16 md:py-20 bg-foreground overflow-hidden">
      <div className="container mx-auto px-4 mb-9">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-widest text-primary-glow">
              {"Servi\u00e7os em a\u00e7\u00e3o"}
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-primary-foreground mt-4">
              Fotos reais passando pela tela
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 self-start md:self-auto rounded-full border border-primary-foreground/20 px-6 py-3 font-body text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
          >
            {"Ver portf\u00f3lio completo"}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="service-marquee-wrap">
        <div className="service-marquee-track flex w-max gap-5 px-4">
          {trackItems.map((item, index) => (
            <Link
              key={`${item.image}-${index}`}
              to={item.href}
              className="group relative h-72 w-[78vw] max-w-[360px] shrink-0 overflow-hidden rounded-3xl border border-primary-foreground/10 bg-card text-left card-shadow transition-transform duration-300 hover:-translate-y-1"
              aria-label={`Ver fotos de ${item.service}`}
            >
              <img
                src={item.image}
                alt={`${item.service} - ${item.title}`}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading={index < showcaseItems.length ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/92 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-flex rounded-full gradient-primary px-3 py-1 font-body text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                  {item.service}
                </span>
                <h3 className="font-display text-xl font-bold leading-tight text-primary-foreground mt-3">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeShowcase;