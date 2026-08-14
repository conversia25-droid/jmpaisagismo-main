export const company = {
  name: "JM Paisagismo & Conservação",
  legalName: "J.M Limpeza e Conservação LTDA",
  shortName: "JM Paisagismo",
  phoneDisplay: "(31) 99063-5460",
  phoneHref: "tel:+5531990635460",
  whatsappNumber: "5531990635460",
  formWhatsappNumber: "5531991284490",
  formWhatsappDisplay: "(31) 99128-4490",
  email: "contato@jmpaisagismo.com.br",
  instagramHandle: "@jmpaisagismoeconservacao",
  instagramUrl: "https://www.instagram.com/jmpaisagismoeconservacao/",
  location: "Belo Horizonte, MG",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Belo%20Horizonte%2C%20MG",
  siteUrl: "https://jmpaisagismo.com.br/",
};

const createWhatsAppUrlForNumber = (number: string, message = "Olá! Gostaria de um orçamento.") =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

export const createWhatsAppUrl = (message = "Olá! Gostaria de um orçamento.") =>
  createWhatsAppUrlForNumber(company.whatsappNumber, message);

export const createContactFormWhatsAppUrl = (message = "Olá! Gostaria de um orçamento.") =>
  createWhatsAppUrlForNumber(company.formWhatsappNumber, message);
