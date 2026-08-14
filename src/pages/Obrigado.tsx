import { Link } from "react-router-dom";
import { CheckCircle2, Home, MessageCircle } from "lucide-react";

import PageBanner from "@/components/PageBanner";
import { createWhatsAppUrl } from "@/lib/company";

const ObrigadoPage = () => {
  return (
    <>
      <PageBanner title="Solicitação recebida" subtitle="Obrigado pelo contato" />
      <section className="section-gradient dot-pattern py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-primary">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
              Recebemos sua solicitação
            </h2>
            <p className="mt-5 font-body text-base leading-relaxed text-muted-foreground md:text-lg">
              A conversa foi aberta no WhatsApp da JM Paisagismo. Confirme o envio da mensagem por lá para a equipe receber seu pedido de orçamento.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full gradient-primary px-6 py-3 font-body font-semibold text-primary-foreground glow-shadow transition-opacity hover:opacity-95"
              >
                <MessageCircle className="h-4 w-4" />
                Abrir WhatsApp
              </a>
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-body font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Home className="h-4 w-4" />
                Voltar ao início
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ObrigadoPage;
