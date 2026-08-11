import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

import logo from "@/assets/logo-jm.png";
import { serviceFilters } from "@/data/portfolioItems";
import { company } from "@/lib/company";

const footerLinks = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Portfólio", href: "/portfolio" },
  { label: "Clientes", href: "/portfolio#clientes" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
          <div className="md:col-span-1">
            <img src={logo} alt={company.shortName} className="h-12 w-auto brightness-0 invert mb-4" />
            <p className="font-body text-sm text-background/60 leading-relaxed">
              Construção civil, paisagismo e conservação urbana com qualidade e dedicação em Belo
              Horizonte e região.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-background mb-4">Navegação</h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-body text-sm text-background/60 hover:text-primary-glow transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-background mb-4">Serviços</h4>
            <ul className="space-y-2.5">
              {serviceFilters.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/portfolio?servico=${service.id}#portfolio`}
                    className="font-body text-sm text-background/60 hover:text-primary-glow transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-background mb-4">Contato</h4>
            <ul className="space-y-3 font-body text-sm text-background/60">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary-glow flex-shrink-0" />
                <a href={company.phoneHref} className="hover:text-primary-glow transition-colors">
                  {company.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary-glow flex-shrink-0" />
                <a
                  href={`mailto:${company.email}`}
                  className="break-all hover:text-primary-glow transition-colors"
                >
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary-glow flex-shrink-0" />
                <a
                  href={company.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-glow transition-colors"
                >
                  {company.location}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="font-body text-xs text-background/40">
            © {new Date().getFullYear()} {company.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

