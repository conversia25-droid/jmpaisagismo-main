import { Link } from "react-router-dom";
import { ArrowRight, Hammer, Leaf, Trees } from "lucide-react";

import HeroSection from "@/components/HeroSection";
import HomeShowcase from "@/components/HomeShowcase";
import TestimonialsSection from "@/components/TestimonialsSection";

const pillars = [
  {
    icon: Hammer,
    title: "Constru\u00e7\u00e3o Civil",
    text: "Obras e reformas em pra\u00e7as, jardins e espa\u00e7os urbanos com planejamento t\u00e9cnico.",
    href: "/portfolio?servico=construcao",
  },
  {
    icon: Leaf,
    title: "Paisagismo e Gramados",
    text: "Projetos, implanta\u00e7\u00e3o e manuten\u00e7\u00e3o de jardins e gramados esportivos.",
    href: "/portfolio?servico=jardins",
  },
  {
    icon: Trees,
    title: "Limpeza e Conserva\u00e7\u00e3o",
    text: "Capina, ro\u00e7agem, varri\u00e7\u00e3o e conserva\u00e7\u00e3o de \u00e1reas p\u00fablicas e privadas.",
    href: "/portfolio?servico=limpeza",
  },
];

const Index = () => {
  return (
    <>
      <HeroSection />
      <HomeShowcase />

      <section id="servicos" className="scroll-mt-24 py-20 md:py-28 bg-background dot-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-widest text-primary">
              Bem-vindo
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mt-5 mb-5">
              {"Excel\u00eancia em"} <span className="text-highlight">{"obras e \u00e1reas verdes"}</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              {"A JM Paisagismo & Conserva\u00e7\u00e3o transforma espa\u00e7os com qualidade, dedica\u00e7\u00e3o e compromisso com a sustentabilidade."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {pillars.map((pillar) => (
              <Link
                key={pillar.title}
                to={pillar.href}
                aria-label={`Ver trabalhos de ${pillar.title}`}
                className="group block bg-card rounded-3xl p-8 border border-border card-shadow hover:card-hover-shadow hover:-translate-y-1 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105">
                  <pillar.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {pillar.text}
                </p>
              </Link>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-14">
            <Link
              to="/servicos"
              className="inline-flex items-center justify-center gap-2 rounded-full gradient-primary px-8 py-4 font-body font-semibold text-primary-foreground glow-shadow hover:opacity-95 transition-opacity"
            >
              {"Nossos Servi\u00e7os"}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contato"
              className="inline-flex items-center justify-center rounded-full border-2 border-primary px-8 py-4 font-body font-semibold text-primary hover:bg-secondary transition-colors"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsSection />
    </>
  );
};

export default Index;
