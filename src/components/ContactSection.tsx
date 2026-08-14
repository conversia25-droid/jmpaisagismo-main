import { FormEvent, useState } from "react";
import { CheckCircle2, Clock, Instagram, Mail, MessageCircle, Phone } from "lucide-react";
import { company, createWhatsAppUrl } from "@/lib/company";

type ContactItem = {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
};

const contactItems: ContactItem[] = [
  { icon: Phone, label: "Telefone / WhatsApp", value: company.phoneDisplay, href: createWhatsAppUrl(), external: true },
  {
    icon: Instagram,
    label: "Instagram",
    value: company.instagramHandle,
    href: company.instagramUrl,
    external: true,
  },
  { icon: Mail, label: "E-mail", value: company.email, href: `mailto:${company.email}` },
  { icon: Clock, label: "Atendimento", value: "Seg a Sex, 8h às 18h" },
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const ContactCard = ({ item }: { item: ContactItem }) => {
  const content = (
    <>
      <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center mb-4">
        <item.icon className="h-5 w-5 text-primary-foreground" />
      </div>
      <div className="font-body text-xs uppercase tracking-wide text-muted-foreground">
        {item.label}
      </div>
      <div className="font-display font-bold text-foreground mt-1 break-words">{item.value}</div>
    </>
  );

  const className =
    "group bg-card rounded-2xl p-6 border border-border card-shadow hover:card-hover-shadow hover:-translate-y-1 transition-all duration-300";

  if (!item.href) {
    return <div className={className}>{content}</div>;
  }

  return (
    <a
      href={item.href}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
      className={className}
    >
      {content}
    </a>
  );
};

const ContactSection = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const phone = form.phone.trim();
    const message = form.message.trim();

    if (!name || !phone || !message) {
      setStatus({
        type: "error",
        text: "Preencha nome, telefone e mensagem para gerar o atendimento.",
      });
      return;
    }

    const whatsappMessage = [
      `Olá! Meu nome é ${name}.`,
      `Telefone: ${phone}`,
      email ? `E-mail: ${email}` : null,
      "Gostaria de solicitar um orçamento para:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(createWhatsAppUrl(whatsappMessage), "_blank", "noopener,noreferrer");
    setStatus({
      type: "success",
      text: "Mensagem preparada. Confirme o envio na janela do WhatsApp.",
    });
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-background dot-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-widest text-primary">
            Fale conosco
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mt-5">
            Entre em <span className="text-highlight">Contato</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4">
            Solicite um orçamento sem compromisso. Estamos prontos para transformar o seu espaço.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 content-start">
            {contactItems.map((item) => (
              <ContactCard key={item.label} item={item} />
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-3xl p-8 border border-border card-shadow space-y-5"
          >
            <div>
              <label htmlFor="contact-name" className="font-body text-sm font-medium text-foreground block mb-1.5">
                Nome
              </label>
              <input
                id="contact-name"
                type="text"
                value={form.name}
                onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                placeholder="Seu nome completo"
                autoComplete="name"
                required
                className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="font-body text-sm font-medium text-foreground block mb-1.5">
                E-mail
              </label>
              <input
                id="contact-email"
                type="email"
                value={form.email}
                onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                placeholder="seu@email.com"
                autoComplete="email"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label htmlFor="contact-phone" className="font-body text-sm font-medium text-foreground block mb-1.5">
                Telefone
              </label>
              <input
                id="contact-phone"
                type="tel"
                value={form.phone}
                onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
                placeholder="(31) 90000-0000"
                autoComplete="tel"
                required
                className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="font-body text-sm font-medium text-foreground block mb-1.5">
                Mensagem
              </label>
              <textarea
                id="contact-message"
                rows={4}
                value={form.message}
                onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                placeholder="Descreva seu projeto..."
                required
                className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>

            {status && (
              <div
                role="status"
                className={`flex items-start gap-2 rounded-2xl px-4 py-3 font-body text-sm ${
                  status.type === "success"
                    ? "bg-secondary text-primary"
                    : "bg-destructive/10 text-destructive"
                }`}
              >
                <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{status.text}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full gradient-primary px-6 py-3.5 font-body font-semibold text-primary-foreground glow-shadow hover:opacity-95 transition-opacity"
            >
              <MessageCircle className="h-4 w-4" />
              Enviar pelo WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
