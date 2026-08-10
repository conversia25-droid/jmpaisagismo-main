import { Link, useLocation } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  return (
    <main className="min-h-screen bg-background dot-pattern flex items-center justify-center px-4 py-16">
      <section className="max-w-lg text-center">
        <span className="inline-flex rounded-full bg-secondary px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-widest text-primary">
          Página não encontrada
        </span>
        <h1 className="font-display text-5xl md:text-7xl font-extrabold text-foreground mt-6 mb-4">
          404
        </h1>
        <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
          O endereço <span className="font-semibold text-foreground">{location.pathname}</span> não
          existe ou foi movido.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 rounded-full gradient-primary px-7 py-3.5 font-body font-semibold text-primary-foreground glow-shadow hover:opacity-95 transition-opacity"
        >
          <Home className="h-4 w-4" />
          Voltar para o início
        </Link>
      </section>
    </main>
  );
};

export default NotFound;
