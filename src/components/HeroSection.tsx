import { Link } from "react-router-dom";
import { ChevronDown, MessageCircle, Phone, Sparkles } from "lucide-react";

import { company } from "@/lib/company";
import { publicPath } from "@/lib/publicPath";

const heroBg = publicPath("/portfolio-real/gramados/07-gramados-campo-de-novo-soberbo-santa-cruz-do-escalvado-7.jpg");
const heroTitleLine1 = "JM Paisagismo e";
const heroTitleLine2 = "Limpeza Urbana";
const heroSubtitle = "Irriga\u00e7\u00e3o, gramado esportivo e Engenharia Civil";
const heroDescription =
  "Atendemos condom\u00ednios, empresas, \u00e1reas p\u00fablicas e resid\u00eancias com solu\u00e7\u00f5es completas, equipe pr\u00f3pria e registros reais dos trabalhos entregues.";

const HeroSection = () => {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      <img
        src={heroBg}
        alt="Campo esportivo revitalizado pela JM Paisagismo"
        className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.74]"
        loading="eager"
      />
      <div className="absolute inset-0 bg-foreground/58" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/76 via-foreground/18 to-foreground/36" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 48%, rgba(3, 18, 12, 0.82) 0%, rgba(3, 18, 12, 0.58) 38%, rgba(3, 18, 12, 0.18) 66%, rgba(3, 18, 12, 0) 100%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 py-32 md:py-40">
        <div className="mx-auto max-w-5xl text-center">
          <span className="mx-auto inline-flex items-center gap-2 rounded-full bg-foreground/50 border border-primary-foreground/25 backdrop-blur-sm px-4 py-1.5 font-body text-xs sm:text-sm text-primary-foreground animate-fade-in">
            <Sparkles className="h-3.5 w-3.5 text-primary-glow" />
            Fotos reais de obras, jardins e campos atendidos
          </span>

          <h1
            className="mx-auto max-w-5xl font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.98] tracking-normal text-primary-foreground mt-6 mb-5 animate-fade-up"
            style={{ textShadow: "0 4px 18px rgba(0, 0, 0, 0.72)" }}
          >
            {heroTitleLine1}
            <span className="block text-highlight mt-1 font-black">{heroTitleLine2}</span>
          </h1>

          <p
            className="font-display text-xl sm:text-2xl md:text-3xl font-bold italic leading-tight text-primary-foreground max-w-3xl mx-auto mb-5 animate-fade-up"
            style={{
              animationDelay: "0.12s",
              textShadow: "0 3px 14px rgba(0, 0, 0, 0.78)",
            }}
          >
            {heroSubtitle}
          </p>

          <p
            className="font-body text-base sm:text-xl font-medium leading-relaxed text-primary-foreground max-w-3xl mx-auto mb-10 animate-fade-up"
            style={{
              animationDelay: "0.2s",
              textShadow: "0 2px 12px rgba(0, 0, 0, 0.84)",
            }}
          >
            {heroDescription}
          </p>

          <div
            className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Link
              to="/contato"
              className="inline-flex items-center justify-center gap-2 rounded-full gradient-primary px-8 py-4 font-body font-semibold text-primary-foreground glow-shadow hover:opacity-95 transition-opacity"
            >
              <MessageCircle className="h-5 w-5" />
              {"Solicitar Or\u00e7amento"}
            </Link>
            <a
              href={company.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/5 backdrop-blur-sm px-8 py-4 font-body font-semibold text-primary-foreground hover:bg-primary-foreground/15 transition-colors"
            >
              <Phone className="h-5 w-5" />
              Falar com Especialista
            </a>
          </div>
        </div>
      </div>

      <a
        href="#servicos"
        aria-label="Ver serviços"
        className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-1 rounded-full px-4 py-2 text-primary-foreground/75 animate-fade-in transition-colors hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/70"
      >
        <span className="font-body text-xs">{"Ver servi\u00e7os"}</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
