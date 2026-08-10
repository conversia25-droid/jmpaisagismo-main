import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo-jm.png";
import { company } from "@/lib/company";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Portfólio", href: "/portfolio" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location.pathname]);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid ? "bg-card/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center" aria-label="Página inicial">
          <img
            src={logo}
            alt={company.name}
            className={`h-12 md:h-14 w-auto transition-all ${solid ? "" : "brightness-0 invert"}`}
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = location.pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  to={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`font-body text-[15px] font-medium transition-colors ${
                    solid
                      ? active
                        ? "text-primary"
                        : "text-foreground/75 hover:text-primary"
                      : active
                        ? "text-primary-glow"
                        : "text-primary-foreground/85 hover:text-primary-glow"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            to="/contato"
            className="hidden sm:inline-flex items-center gap-2 rounded-full gradient-primary px-5 py-2.5 font-body text-sm font-semibold text-primary-foreground glow-shadow hover:opacity-95 transition-opacity"
          >
            <Phone className="h-4 w-4" />
            Fale Conosco
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 ${solid ? "text-foreground" : "text-primary-foreground"}`}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-in">
          <ul className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-xl px-4 py-3 font-body font-medium transition-colors ${
                    location.pathname === link.href
                      ? "bg-secondary text-primary"
                      : "text-foreground/80 hover:bg-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/contato"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full gradient-primary px-5 py-3 font-body font-semibold text-primary-foreground"
              >
                <Phone className="h-4 w-4" />
                Fale Conosco
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
