import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MapPin, X, ZoomIn } from "lucide-react";

import { clientHighlights } from "@/data/clientHighlights";
import {
  portfolioItems,
  serviceFilters,
  type PortfolioCategory,
} from "@/data/portfolioItems";

type PortfolioFilter = PortfolioCategory | "todos";

type LightboxItem = {
  image: string;
  title: string;
  alt: string;
  eyebrow: string;
  client: string;
  location: string;
};

const filterOptions: readonly { id: PortfolioFilter; label: string }[] = [
  { id: "todos", label: "Todos" },
  ...serviceFilters,
];

const isPortfolioCategory = (value: string | null): value is PortfolioCategory =>
  serviceFilters.some((filter) => filter.id === value);

const PortfolioSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [lightbox, setLightbox] = useState<LightboxItem | null>(null);

  const currentService = searchParams.get("servico");
  const active: PortfolioFilter = isPortfolioCategory(currentService) ? currentService : "todos";

  const filtered =
    active === "todos" ? portfolioItems : portfolioItems.filter((project) => project.category === active);

  const handleFilter = (category: PortfolioFilter) => {
    const nextParams = new URLSearchParams(searchParams);

    if (category === "todos") {
      nextParams.delete("servico");
    } else {
      nextParams.set("servico", category);
    }

    setSearchParams(nextParams, { preventScrollReset: true });
  };

  return (
    <section id="portfolio" className="py-20 md:py-28 section-gradient dot-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-widest text-primary">
            Projetos reais
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mt-5">
            Nossos <span className="text-highlight">Trabalhos</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4">
            Uma seleção com fotos reais de clientes, separada por serviço para facilitar a consulta.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {filterOptions.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => handleFilter(category.id)}
              className={`px-5 py-2.5 rounded-full font-body text-xs sm:text-sm font-semibold transition-all duration-300 ${
                active === category.id
                  ? "gradient-primary text-primary-foreground glow-shadow"
                  : "bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/40"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <button
              key={project.image}
              type="button"
              onClick={() =>
                setLightbox({
                  image: project.image,
                  title: project.title,
                  alt: project.alt,
                  eyebrow: project.service,
                  client: project.client,
                  location: project.location,
                })
              }
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] card-shadow hover:card-hover-shadow hover:-translate-y-1 transition-all duration-300 text-left"
              aria-label={`Ampliar foto: ${project.title}`}
            >
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/25 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="h-5 w-5 text-primary" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block text-[10px] font-body font-semibold uppercase tracking-wider text-primary-foreground gradient-primary px-2.5 py-1 rounded-full">
                  {project.service}
                </span>
                <h3 className="font-display text-lg md:text-xl font-bold text-primary-foreground mt-2.5 leading-tight">
                  {project.title}
                </h3>
                <p className="font-body text-xs text-primary-foreground/80 mt-1 line-clamp-1">
                  {project.client}
                </p>
              </div>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground font-body mt-8">
            Nenhum projeto nesta categoria.
          </p>
        )}

        <div id="clientes" className="mt-20 md:mt-24 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-widest text-primary">
                Clientes
              </span>
              <h3 className="font-display text-2xl md:text-4xl font-extrabold tracking-tight text-foreground mt-4">
                Clientes <span className="text-highlight">em destaque</span>
              </h3>
              <p className="font-body text-muted-foreground mt-3">
                Uma vitrine com 12 registros selecionados de clientes públicos, institucionais e corporativos.
              </p>
            </div>
            <p className="font-body text-sm font-semibold text-primary">
              {clientHighlights.length} fotos selecionadas
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {clientHighlights.map((photo) => (
              <button
                key={photo.image}
                type="button"
                onClick={() =>
                  setLightbox({
                    image: photo.image,
                    title: photo.title,
                    alt: photo.alt,
                    eyebrow: "Cliente em destaque",
                    client: photo.client,
                    location: photo.location,
                  })
                }
                className="group relative overflow-hidden rounded-3xl aspect-[4/3] card-shadow hover:card-hover-shadow hover:-translate-y-1 transition-all duration-300 text-left"
                aria-label={`Ampliar foto do cliente ${photo.client}`}
              >
                <img
                  src={photo.image}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-background/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="h-4 w-4 text-primary" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h4 className="font-display text-base font-bold text-primary-foreground leading-tight line-clamp-2">
                    {photo.client}
                  </h4>
                  <p className="font-body text-xs text-primary-foreground/80 mt-1 line-clamp-1">
                    {photo.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors z-10"
            aria-label="Fechar"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="max-w-5xl w-full animate-scale-in" onClick={(event) => event.stopPropagation()}>
            <img
              src={lightbox.image}
              alt={lightbox.alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <span className="text-xs font-body font-semibold uppercase tracking-wider text-accent">
                {lightbox.eyebrow}
              </span>
              <p className="text-primary-foreground font-display text-xl mt-1">{lightbox.title}</p>
              <p className="inline-flex items-center justify-center gap-1.5 text-primary-foreground/70 font-body text-sm mt-1">
                <MapPin className="h-4 w-4" />
                {lightbox.client} · {lightbox.location}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
