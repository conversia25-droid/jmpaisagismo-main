import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, MapPin, X, ZoomIn } from "lucide-react";

import { clientHighlights } from "@/data/clientHighlights";
import {
  portfolioItems,
  serviceFilters,
  type PortfolioCategory,
} from "@/data/portfolioItems";
import { publicPath } from "@/lib/publicPath";

type PortfolioFilter = PortfolioCategory | "todos";

type LightboxItem = {
  image: string;
  title: string;
  alt: string;
  eyebrow: string;
  client: string;
  location: string;
};

type LightboxState = {
  items: LightboxItem[];
  index: number;
};

const filterOptions: readonly { id: PortfolioFilter; label: string }[] = [
  { id: "todos", label: "Todos" },
  ...serviceFilters,
];

const isPortfolioCategory = (value: string | null): value is PortfolioCategory =>
  serviceFilters.some((filter) => filter.id === value);

const PortfolioSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const currentService = searchParams.get("servico");
  const active: PortfolioFilter = isPortfolioCategory(currentService) ? currentService : "todos";

  const filtered =
    active === "todos" ? portfolioItems : portfolioItems.filter((project) => project.category === active);

  const portfolioLightboxItems: LightboxItem[] = filtered.map((project) => ({
    image: project.image,
    title: project.title,
    alt: project.alt,
    eyebrow: project.service,
    client: project.client,
    location: project.location,
  }));

  const clientLightboxItems: LightboxItem[] = clientHighlights.map((photo) => ({
    image: photo.image,
    title: photo.title,
    alt: photo.alt,
    eyebrow: "Cliente em destaque",
    client: photo.client,
    location: photo.location,
  }));

  const currentLightbox = lightbox?.items[lightbox.index] ?? null;
  const canNavigateLightbox = Boolean(lightbox && lightbox.items.length > 1);

  const showLightboxItem = useCallback((direction: -1 | 1) => {
    setLightbox((current) => {
      if (!current || current.items.length < 2) {
        return current;
      }

      return {
        ...current,
        index: (current.index + direction + current.items.length) % current.items.length,
      };
    });
  }, []);

  const handleFilter = (category: PortfolioFilter) => {
    const nextParams = new URLSearchParams(searchParams);

    if (category === "todos") {
      nextParams.delete("servico");
    } else {
      nextParams.set("servico", category);
    }

    setSearchParams(nextParams, { preventScrollReset: true });
  };

  useEffect(() => {
    if (!lightbox) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightbox(null);
      }

      if (event.key === "ArrowLeft") {
        showLightboxItem(-1);
      }

      if (event.key === "ArrowRight") {
        showLightboxItem(1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox, showLightboxItem]);

  return (
    <section id="portfolio" className="scroll-mt-24 py-20 md:py-28 section-gradient dot-pattern">
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
          {filtered.map((project, index) => (
            <button
              key={project.image}
              type="button"
              onClick={() => setLightbox({ items: portfolioLightboxItems, index })}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] card-shadow hover:card-hover-shadow hover:-translate-y-1 transition-all duration-300 text-left"
              aria-label={`Ampliar foto: ${project.title}`}
            >
              <img
                src={publicPath(project.image)}
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
            {clientHighlights.map((photo, index) => (
              <button
                key={photo.image}
                type="button"
                onClick={() => setLightbox({ items: clientLightboxItems, index })}
                className="group relative overflow-hidden rounded-3xl aspect-[4/3] card-shadow hover:card-hover-shadow hover:-translate-y-1 transition-all duration-300 text-left"
                aria-label={`Ampliar foto do cliente ${photo.client}`}
              >
                <img
                  src={publicPath(photo.image)}
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

      {currentLightbox && lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors z-20"
            aria-label="Fechar"
          >
            <X className="h-8 w-8" />
          </button>

          {canNavigateLightbox && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showLightboxItem(-1);
                }}
                className="absolute left-3 sm:left-6 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-primary shadow-lg transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/80"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="h-7 w-7" />
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showLightboxItem(1);
                }}
                className="absolute right-3 sm:right-6 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-primary shadow-lg transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/80"
                aria-label="Próxima foto"
              >
                <ChevronRight className="h-7 w-7" />
              </button>
            </>
          )}

          <div className="max-w-5xl w-full animate-scale-in" onClick={(event) => event.stopPropagation()}>
            <img
              src={publicPath(currentLightbox.image)}
              alt={currentLightbox.alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              {canNavigateLightbox && (
                <p className="font-body text-xs font-semibold text-primary-foreground/60 mb-2">
                  {lightbox.index + 1} de {lightbox.items.length}
                </p>
              )}
              <span className="text-xs font-body font-semibold uppercase tracking-wider text-accent">
                {currentLightbox.eyebrow}
              </span>
              <p className="text-primary-foreground font-display text-xl mt-1">{currentLightbox.title}</p>
              <p className="inline-flex items-center justify-center gap-1.5 text-primary-foreground/70 font-body text-sm mt-1">
                <MapPin className="h-4 w-4" />
                {currentLightbox.client} · {currentLightbox.location}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
