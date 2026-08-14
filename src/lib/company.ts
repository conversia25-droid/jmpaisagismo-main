export const company = {
  name: "JM Paisagismo & Conservação",
  legalName: "J.M Limpeza e Conservação LTDA",
  shortName: "JM Paisagismo",
  phoneDisplay: "(31) 99063-5460",
  phoneHref: "tel:+5531990635460",
  whatsappNumber: "5531990635460",
  email: "contato@jmpaisagismo.com.br",
  instagramHandle: "@jmpaisagismoeconservacao",
  instagramUrl: "https://www.instagram.com/jmpaisagismoeconservacao/",
  location: "Belo Horizonte, MG",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Belo%20Horizonte%2C%20MG",
  siteUrl: "https://jmpaisagismo.com.br/",
};

export const createWhatsAppUrl = (message = "Olá! Gostaria de um orçamento.") =>
  `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`;
