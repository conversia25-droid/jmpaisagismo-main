import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import App from "@/App";

describe("JM Paisagismo site", () => {
  beforeEach(() => {
    window.history.pushState({}, "", "/");
  });

  it("renders the home page with the main offer", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: /jm paisagismo e limpeza urbana/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /solicitar orçamento/i })).toBeInTheDocument();
    const servicesLink = screen.getByRole("link", { name: /ver servi/i });
    expect(servicesLink).toHaveAttribute("href", "#servicos");
    expect(screen.getByRole("heading", { name: /fotos reais passando pela tela/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /ver trabalhos de construção civil/i })).toHaveAttribute(
      "href",
      "/portfolio?servico=construcao",
    );
    expect(screen.getByRole("link", { name: /ver trabalhos de paisagismo e gramados/i })).toHaveAttribute(
      "href",
      "/portfolio?servico=jardins",
    );
    expect(screen.getByRole("link", { name: /ver trabalhos de limpeza e conservação/i })).toHaveAttribute(
      "href",
      "/portfolio?servico=limpeza",
    );
  });

  it("navigates portfolio lightbox photos within the active service", () => {
    window.history.pushState({}, "", "/portfolio?servico=irrigacao");

    render(<App />);

    fireEvent.click(screen.getAllByRole("button", { name: /ampliar foto/i })[0]);
    expect(screen.getByText(/1 de 8/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /pr.xima foto/i }));
    expect(screen.getByText(/2 de 8/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /foto anterior/i }));
    expect(screen.getByText(/1 de 8/i)).toBeInTheDocument();
  });
  it("opens the contact cards with WhatsApp, Instagram and email", () => {
    window.history.pushState({}, "", "/contato");

    render(<App />);

    const phoneCard = screen.getByRole("link", { name: /telefone \/ whatsapp/i });
    expect(phoneCard).toHaveAttribute("href", expect.stringContaining("https://wa.me/5531990635460"));
    expect(phoneCard).toHaveAttribute("target", "_blank");

    const instagramCard = screen.getByRole("link", { name: /instagram/i });
    expect(instagramCard).toHaveAttribute(
      "href",
      "https://www.instagram.com/jmpaisagismoeconservacao/",
    );
    expect(instagramCard).toHaveAttribute("target", "_blank");
    expect(screen.queryByText("@jmpaisagismoeconservacao")).not.toBeInTheDocument();

    const emailCard = screen.getByRole("link", { name: /e-mail/i });
    expect(emailCard).toHaveAttribute("href", "mailto:contato@jmpaisagismo.com.br");
  });
  it("prepares a WhatsApp message from the contact form", () => {
    window.history.pushState({}, "", "/contato");
    const open = vi.spyOn(window, "open").mockImplementation(() => null);

    render(<App />);

    fireEvent.change(screen.getByLabelText(/nome/i), { target: { value: "Maria Silva" } });
    fireEvent.change(screen.getByLabelText(/e-mail/i), { target: { value: "maria@email.com" } });
    fireEvent.change(screen.getByLabelText(/telefone/i), { target: { value: "(31) 98888-7777" } });
    fireEvent.change(screen.getByLabelText(/mensagem/i), {
      target: { value: "Preciso de manutenção de jardim para condomínio." },
    });
    fireEvent.click(screen.getByRole("button", { name: /enviar pelo whatsapp/i }));

    expect(open).toHaveBeenCalledTimes(1);
    const [url] = open.mock.calls[0];
    const decodedUrl = decodeURIComponent(String(url));

    expect(decodedUrl).toContain("https://wa.me/5531990635460");
    expect(decodedUrl).toContain("Maria Silva");
    expect(decodedUrl).toContain("maria@email.com");
    expect(decodedUrl).toContain("manutenção de jardim");
    expect(screen.getByText(/mensagem preparada/i)).toBeInTheDocument();
  });
});
