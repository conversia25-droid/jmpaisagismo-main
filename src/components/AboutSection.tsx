import {
  Users,
  Clock,
  Wrench,
  CalendarCheck,
  ShieldCheck,
  Leaf,
} from "lucide-react";
import aboutImg from "@/assets/portfolio-paisagismo-2.jpg";

const features = [
  {
    icon: Users,
    title: "Equipe Qualificada",
    text: "Engenheiro Agrônomo, Arquiteto Urbanista, Engenheiro Civil e Biólogo no corpo técnico.",
  },
  {
    icon: Clock,
    title: "Atendimento Rápido",
    text: "Agilidade no orçamento e no início da execução dos serviços.",
  },
  {
    icon: Wrench,
    title: "Equipamentos Profissionais",
    text: "Maquinário moderno e de alta performance para cada tipo de obra.",
  },
  {
    icon: CalendarCheck,
    title: "Compromisso com Prazos",
    text: "Cronograma definido e cumprido do início à entrega do projeto.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança Garantida",
    text: "Normas rigorosas de segurança do trabalho em todas as operações.",
  },
  {
    icon: Leaf,
    title: "Normas Ambientais",
    text: "Práticas sustentáveis e respeito à legislação ambiental vigente.",
  },
];

const stats = [
  { number: "10+", label: "Anos de Experiência" },
  { number: "500+", label: "Projetos Realizados" },
  { number: "100%", label: "Satisfação" },
  { number: "50+", label: "Clientes Ativos" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 section-gradient dot-pattern">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-widest text-primary">
              Sobre Nós
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mt-5 mb-6 leading-tight">
              Especialistas em <span className="text-highlight">áreas verdes</span>, obras e
              conservação urbana
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-5">
              A J.M Limpeza e Conservação LTDA é sediada em Belo Horizonte/MG e atua com
              construção civil, paisagismo, gramados esportivos e conservação urbana,
              oferecendo soluções completas para manter espaços organizados, seguros e bem
              cuidados.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              Com anos de experiência no mercado, construímos uma reputação sólida baseada na
              qualidade do serviço, pontualidade e atendimento personalizado às necessidades de
              cada cliente — de pequenos jardins residenciais a grandes áreas corporativas e
              públicas.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden card-shadow">
              <img
                src={aboutImg}
                alt="Equipe da JM Paisagismo executando manutenção de área verde"
                className="w-full h-72 lg:h-96 object-cover"
                loading="lazy"
              />
            </div>
            <div className="bg-card rounded-3xl p-6 md:p-8 card-hover-shadow -mt-16 mx-4 md:mx-8 relative z-10 border border-border">
              <div className="grid grid-cols-2 gap-6 text-center">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display text-3xl md:text-4xl font-extrabold text-gradient">
                      {stat.number}
                    </div>
                    <div className="font-body text-xs text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-card rounded-2xl p-7 border border-border card-shadow hover:card-hover-shadow hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-5">
                <f.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
