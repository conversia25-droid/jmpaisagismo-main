export type PortfolioCategory = "construcao" | "irrigacao" | "jardins" | "gramados" | "limpeza" | "poda";

export type PortfolioItem = {
  title: string;
  category: PortfolioCategory;
  service: string;
  client: string;
  location: string;
  image: string;
  alt: string;
};

export const serviceFilters: readonly { id: PortfolioCategory; label: string }[] = [
  { "id": "construcao", "label": "Construção Civil" },
  { "id": "irrigacao", "label": "Irriga\u00e7\u00e3o" },
  { "id": "jardins", "label": "Manutenção de Jardins" },
  { "id": "gramados", "label": "Gramados Esportivos" },
  { "id": "limpeza", "label": "Limpeza Urbana" },
  { "id": "poda", "label": "Poda de Árvores" }
];

export const portfolioItems: readonly PortfolioItem[] = [
    {
        "title":  "Obra civil da praça",
        "category":  "construcao",
        "service":  "Construção Civil",
        "client":  "Praça Nossa Senhora da Conceição",
        "location":  "Minas Gerais",
        "image":  "/portfolio-real/construcao/01-construcao-obra-praca-retroescavadeira.jpg",
        "alt":  "Construção Civil - Obra civil da praça - Praça Nossa Senhora da Conceição"
    },
    {
        "title":  "Estrutura e formas da praça",
        "category":  "construcao",
        "service":  "Construção Civil",
        "client":  "Praça Nossa Senhora da Conceição",
        "location":  "Minas Gerais",
        "image":  "/portfolio-real/construcao/02-construcao-formas-estrutura-praca.jpg",
        "alt":  "Construção Civil - Estrutura e formas da praça - Praça Nossa Senhora da Conceição"
    },
    {
        "title":  "Mureta e base de concreto",
        "category":  "construcao",
        "service":  "Construção Civil",
        "client":  "Praça Nossa Senhora da Conceição",
        "location":  "Minas Gerais",
        "image":  "/portfolio-real/construcao/03-construcao-mureta-base-concreto.jpg",
        "alt":  "Construção Civil - Mureta e base de concreto - Praça Nossa Senhora da Conceição"
    },
    {
        "title":  "Nivelamento do terreno",
        "category":  "construcao",
        "service":  "Construção Civil",
        "client":  "Praça Nossa Senhora da Conceição",
        "location":  "Minas Gerais",
        "image":  "/portfolio-real/construcao/04-construcao-nivelamento-terreno.jpg",
        "alt":  "Construção Civil - Nivelamento do terreno - Praça Nossa Senhora da Conceição"
    },
    {
        "title":  "Execução dos passeios",
        "category":  "construcao",
        "service":  "Construção Civil",
        "client":  "Praça Nossa Senhora da Conceição",
        "location":  "Minas Gerais",
        "image":  "/portfolio-real/construcao/05-construcao-passeios-praca.jpg",
        "alt":  "Construção Civil - Execução dos passeios - Praça Nossa Senhora da Conceição"
    },
    {
        "title":  "Concretagem da praça",
        "category":  "construcao",
        "service":  "Construção Civil",
        "client":  "Praça Nossa Senhora da Conceição",
        "location":  "Minas Gerais",
        "image":  "/portfolio-real/construcao/06-construcao-concretagem-praca.jpg",
        "alt":  "Construção Civil - Concretagem da praça - Praça Nossa Senhora da Conceição"
    },
    {
        "title":  "Acabamento de piso",
        "category":  "construcao",
        "service":  "Construção Civil",
        "client":  "Praça Nossa Senhora da Conceição",
        "location":  "Minas Gerais",
        "image":  "/portfolio-real/construcao/07-construcao-acabamento-piso.jpg",
        "alt":  "Construção Civil - Acabamento de piso - Praça Nossa Senhora da Conceição"
    },
    {
        "title":  "Acabamento final da praça",
        "category":  "construcao",
        "service":  "Construção Civil",
        "client":  "Praça Nossa Senhora da Conceição",
        "location":  "Minas Gerais",
        "image":  "/portfolio-real/construcao/08-construcao-piso-intertravado-acabamentos.jpg",
        "alt":  "Construção Civil - Acabamento final da praça - Praça Nossa Senhora da Conceição"
    },
    {
        "title":  "Instalação de válvula e fechamento de valas",
        "category":  "irrigacao",
        "service":  "Irrigação",
        "client":  "Projeto Hexágono - Samarco",
        "location":  "Projeto Hexágono",
        "image":  "/portfolio-real/irrigacao/01-irrigacao-instalacao-valvula-fechamento-valas.jpg",
        "alt":  "Irrigação - Instalação de válvula e fechamento de valas - Projeto Hexágono - Samarco"
    },
    {
        "title":  "Início da irrigação",
        "category":  "irrigacao",
        "service":  "Irrigação",
        "client":  "Prefeitura de Rio Doce",
        "location":  "Rio Doce, MG",
        "image":  "/portfolio-real/irrigacao/02-irrigacao-inicio-da-irrigacao.jpg",
        "alt":  "Irrigação - Início da irrigação - Prefeitura de Rio Doce"
    },
    {
        "title":  "Colocação dos tubos nas valas",
        "category":  "irrigacao",
        "service":  "Irrigação",
        "client":  "Projeto Hexágono - Samarco",
        "location":  "Projeto Hexágono",
        "image":  "/portfolio-real/irrigacao/03-irrigacao-colocacao-tubos-valas.jpg",
        "alt":  "Irrigação - Colocação dos tubos nas valas - Projeto Hexágono - Samarco"
    },
    {
        "title":  "Drenagem e fechamento de drenos",
        "category":  "irrigacao",
        "service":  "Irrigação",
        "client":  "Prefeitura de Rio Doce",
        "location":  "Rio Doce, MG",
        "image":  "/portfolio-real/irrigacao/04-irrigacao-drenagem-fechamento-drenos.jpg",
        "alt":  "Irrigação - Drenagem e fechamento de drenos - Prefeitura de Rio Doce"
    },
    {
        "title":  "Irrigação do campo",
        "category":  "irrigacao",
        "service":  "Irrigação",
        "client":  "Prefeitura de Diamantina",
        "location":  "Diamantina, MG",
        "image":  "/portfolio-real/irrigacao/05-irrigacao-campo.jpg",
        "alt":  "Irrigação - Irrigação do campo - Prefeitura de Diamantina"
    },
    {
        "title":  "Tubulação nas valas de irrigação",
        "category":  "irrigacao",
        "service":  "Irrigação",
        "client":  "Projeto Hexágono - Samarco",
        "location":  "Projeto Hexágono",
        "image":  "/portfolio-real/irrigacao/06-irrigacao-tubos-valas.jpg",
        "alt":  "Irrigação - Tubulação nas valas de irrigação - Projeto Hexágono - Samarco"
    },
    {
        "title":  "Marcação das valas de irrigação",
        "category":  "irrigacao",
        "service":  "Irrigação",
        "client":  "Prefeitura de Rio Doce",
        "location":  "Rio Doce, MG",
        "image":  "/portfolio-real/irrigacao/07-irrigacao-marcacao-valas.jpg",
        "alt":  "Irrigação - Marcação das valas de irrigação - Prefeitura de Rio Doce"
    },
    {
        "title":  "Sistema de irrigação do campo",
        "category":  "irrigacao",
        "service":  "Irrigação",
        "client":  "Prefeitura de Diamantina",
        "location":  "Diamantina, MG",
        "image":  "/portfolio-real/irrigacao/08-irrigacao-sistema-campo.jpg",
        "alt":  "Irrigação - Sistema de irrigação do campo - Prefeitura de Diamantina"
    },
    {
        "title":  "Jardim municipal com palmeiras",
        "category":  "jardins",
        "service":  "Manutenção de Jardins",
        "client":  "Prefeitura de Taquaraçu de Minas",
        "location":  "Taquaraçu de Minas, MG",
        "image":  "/portfolio-real/jardins/01-jardins-jardim-municipal-taquaracu.jpg",
        "alt":  "Manutenção de Jardins - Jardim municipal com palmeiras - Prefeitura de Taquaraçu de Minas"
    },
    {
        "title":  "Canteiro corporativo aparado",
        "category":  "jardins",
        "service":  "Manutenção de Jardins",
        "client":  "MRV",
        "location":  "Cliente corporativo",
        "image":  "/portfolio-real/jardins/02-jardins-canteiro-corporativo-mrv.jpg",
        "alt":  "Manutenção de Jardins - Canteiro corporativo aparado - MRV"
    },
    {
        "title":  "Área de convivência ajardinada",
        "category":  "jardins",
        "service":  "Manutenção de Jardins",
        "client":  "MRV",
        "location":  "Cliente corporativo",
        "image":  "/portfolio-real/jardins/03-jardins-area-convivencia-verde-mrv.jpg",
        "alt":  "Manutenção de Jardins - Área de convivência ajardinada - MRV"
    },
    {
        "title":  "Manutenção de canteiros da sede",
        "category":  "jardins",
        "service":  "Manutenção de Jardins",
        "client":  "MRV",
        "location":  "Cliente corporativo",
        "image":  "/portfolio-real/jardins/04-jardins-canteiros-sede-mrv.jpg",
        "alt":  "Manutenção de Jardins - Manutenção de canteiros da sede - MRV"
    },
    {
        "title":  "Paisagismo de área verde",
        "category":  "jardins",
        "service":  "Manutenção de Jardins",
        "client":  "MRV",
        "location":  "Cliente corporativo",
        "image":  "/portfolio-real/jardins/05-jardins-paisagismo-area-verde-mrv.jpg",
        "alt":  "Manutenção de Jardins - Paisagismo de área verde - MRV"
    },
    {
        "title":  "Cerca viva e arbustos aparados",
        "category":  "jardins",
        "service":  "Manutenção de Jardins",
        "client":  "IURD",
        "location":  "Cliente institucional",
        "image":  "/portfolio-real/jardins/06-jardins-cerca-viva-catedral-bh.jpg",
        "alt":  "Manutenção de Jardins - Cerca viva e arbustos aparados - IURD"
    },
    {
        "title":  "Canteiro ornamental da catedral",
        "category":  "jardins",
        "service":  "Manutenção de Jardins",
        "client":  "IURD",
        "location":  "Cliente institucional",
        "image":  "/portfolio-real/jardins/07-jardins-canteiro-ornamental-catedral-bh.jpg",
        "alt":  "Manutenção de Jardins - Canteiro ornamental da catedral - IURD"
    },
    {
        "title":  "Canteiro ornamental da praça",
        "category":  "jardins",
        "service":  "Manutenção de Jardins",
        "client":  "Praça Nossa Senhora da Conceição",
        "location":  "Minas Gerais",
        "image":  "/portfolio-real/jardins/08-jardins-canteiro-ornamental-praca.jpg",
        "alt":  "Manutenção de Jardins - Canteiro ornamental da praça - Praça Nossa Senhora da Conceição"
    },    {
        "title":  "Campo",
        "category":  "gramados",
        "service":  "Gramados Esportivos",
        "client":  "Prefeitura de Diamantina",
        "location":  "Diamantina, MG",
        "image":  "/portfolio-real/gramados/01-gramados-campo-1.jpg",
        "alt":  "Gramados Esportivos - Campo - Prefeitura de Diamantina"
    },
    {
        "title":  "Corte do campo com máquina helicoidal",
        "category":  "gramados",
        "service":  "Gramados Esportivos",
        "client":  "Prefeitura de Morro do Pilar",
        "location":  "Morro do Pilar, MG",
        "image":  "/portfolio-real/gramados/02-gramados-corte-do-campo-com-maquina-helicoidal.jpg",
        "alt":  "Gramados Esportivos - Corte do campo com máquina helicoidal - Prefeitura de Morro do Pilar"
    },
    {
        "title":  "Campo",
        "category":  "gramados",
        "service":  "Gramados Esportivos",
        "client":  "Prefeitura de Diamantina",
        "location":  "Diamantina, MG",
        "image":  "/portfolio-real/gramados/03-gramados-campo-3.jpg",
        "alt":  "Gramados Esportivos - Campo - Prefeitura de Diamantina"
    },
    {
        "title":  "Campo",
        "category":  "gramados",
        "service":  "Gramados Esportivos",
        "client":  "Prefeitura de Morro do Pilar",
        "location":  "Morro do Pilar, MG",
        "image":  "/portfolio-real/gramados/04-gramados-campo-4.jpg",
        "alt":  "Gramados Esportivos - Campo - Prefeitura de Morro do Pilar"
    },
    {
        "title":  "Plantio de grama",
        "category":  "gramados",
        "service":  "Gramados Esportivos",
        "client":  "Prefeitura de Rio Doce",
        "location":  "Rio Doce, MG",
        "image":  "/portfolio-real/gramados/05-gramados-plantio-de-grama-5.jpg",
        "alt":  "Gramados Esportivos - Plantio de grama - Prefeitura de Rio Doce"
    },
    {
        "title":  "Estádio municipal",
        "category":  "gramados",
        "service":  "Gramados Esportivos",
        "client":  "Prefeitura de Rio Doce",
        "location":  "Rio Doce, MG",
        "image":  "/portfolio-real/gramados/06-gramados-estadio-municipal-6.jpg",
        "alt":  "Gramados Esportivos - Estádio municipal - Prefeitura de Rio Doce"
    },
    {
        "title":  "Campo de Novo Soberbo, Santa Cruz do Escalvado",
        "category":  "gramados",
        "service":  "Gramados Esportivos",
        "client":  "Projeto Hexágono - Samarco",
        "location":  "Projeto Hexágono",
        "image":  "/portfolio-real/gramados/07-gramados-campo-de-novo-soberbo-santa-cruz-do-escalvado-7.jpg",
        "alt":  "Gramados Esportivos - Campo de Novo Soberbo, Santa Cruz do Escalvado - Projeto Hexágono - Samarco"
    },
    {
        "title":  "Campo Santana do Deserto, Rio Doce",
        "category":  "gramados",
        "service":  "Gramados Esportivos",
        "client":  "Projeto Hexágono - Samarco",
        "location":  "Projeto Hexágono",
        "image":  "/portfolio-real/gramados/08-gramados-campo-santana-do-deserto-rio-doce-8.jpg",
        "alt":  "Gramados Esportivos - Campo Santana do Deserto, Rio Doce - Projeto Hexágono - Samarco"
    },
    {
        "title":  "Rastelamento do campo",
        "category":  "gramados",
        "service":  "Gramados Esportivos",
        "client":  "Prefeitura de Morro do Pilar",
        "location":  "Morro do Pilar, MG",
        "image":  "/portfolio-real/gramados/09-gramados-rastelamento-campo.jpg",
        "alt":  "Gramados Esportivos - Rastelamento do campo - Prefeitura de Morro do Pilar"
    },
    {
        "title":  "Corte em torno do campo com roçadeira",
        "category":  "gramados",
        "service":  "Gramados Esportivos",
        "client":  "Prefeitura de Morro do Pilar",
        "location":  "Morro do Pilar, MG",
        "image":  "/portfolio-real/gramados/10-gramados-corte-entorno-campo-rocadeira.jpg",
        "alt":  "Gramados Esportivos - Corte em torno do campo com roçadeira - Prefeitura de Morro do Pilar"
    },
    {
        "title":  "Varrição de passeio público",
        "category":  "limpeza",
        "service":  "Limpeza Urbana",
        "client":  "Prefeitura de Rio Doce",
        "location":  "Rio Doce, MG",
        "image":  "/portfolio-real/limpeza/01-limpeza-varricao-passeio-rio-doce.jpg",
        "alt":  "Limpeza Urbana - Varrição de passeio público - Prefeitura de Rio Doce"
    },
    {
        "title":  "Pintura de meio-fio",
        "category":  "limpeza",
        "service":  "Limpeza Urbana",
        "client":  "Prefeitura de Rio Doce",
        "location":  "Rio Doce, MG",
        "image":  "/portfolio-real/limpeza/02-limpeza-pintura-meio-fio-rio-doce.jpg",
        "alt":  "Limpeza Urbana - Pintura de meio-fio - Prefeitura de Rio Doce"
    },
    {
        "title":  "Conservação de via pública",
        "category":  "limpeza",
        "service":  "Limpeza Urbana",
        "client":  "Prefeitura de Rio Doce",
        "location":  "Rio Doce, MG",
        "image":  "/portfolio-real/limpeza/03-limpeza-via-publica-conservada-rio-doce.jpg",
        "alt":  "Limpeza Urbana - Conservação de via pública - Prefeitura de Rio Doce"
    },
    {
        "title":  "Rua conservada e meio-fio pintado",
        "category":  "limpeza",
        "service":  "Limpeza Urbana",
        "client":  "Prefeitura de Rio Doce",
        "location":  "Rio Doce, MG",
        "image":  "/portfolio-real/limpeza/04-limpeza-rua-conservada-rio-doce.jpg",
        "alt":  "Limpeza Urbana - Rua conservada e meio-fio pintado - Prefeitura de Rio Doce"
    },
    {
        "title":  "Rua pavimentada conservada",
        "category":  "limpeza",
        "service":  "Limpeza Urbana",
        "client":  "Prefeitura de Rio Doce",
        "location":  "Rio Doce, MG",
        "image":  "/portfolio-real/limpeza/05-limpeza-rua-urbana-rio-doce.jpg",
        "alt":  "Limpeza Urbana - Rua pavimentada conservada - Prefeitura de Rio Doce"
    },
    {
        "title":  "Acabamento de meio-fio",
        "category":  "limpeza",
        "service":  "Limpeza Urbana",
        "client":  "Prefeitura de Rio Doce",
        "location":  "Rio Doce, MG",
        "image":  "/portfolio-real/limpeza/06-limpeza-acabamento-meio-fio-rio-doce.jpg",
        "alt":  "Limpeza Urbana - Acabamento de meio-fio - Prefeitura de Rio Doce"
    },
    {
        "title":  "Roçagem lateral de via",
        "category":  "limpeza",
        "service":  "Limpeza Urbana",
        "client":  "Prefeitura de Morro do Pilar",
        "location":  "Morro do Pilar, MG",
        "image":  "/portfolio-real/limpeza/07-limpeza-rocagem-lateral-via-morro-pilar.jpg",
        "alt":  "Limpeza Urbana - Roçagem lateral de via - Prefeitura de Morro do Pilar"
    },
    {
        "title":  "Capina e limpeza de passeio",
        "category":  "limpeza",
        "service":  "Limpeza Urbana",
        "client":  "Prefeitura de Morro do Pilar",
        "location":  "Morro do Pilar, MG",
        "image":  "/portfolio-real/limpeza/08-limpeza-capina-passeio-morro-pilar.jpg",
        "alt":  "Limpeza Urbana - Capina e limpeza de passeio - Prefeitura de Morro do Pilar"
    },    {
        "title":  "Corte e supressão de árvores",
        "category":  "poda",
        "service":  "Poda de Árvores",
        "client":  "Prefeitura de Diamantina",
        "location":  "Diamantina, MG",
        "image":  "/portfolio-real/poda/01-poda-corte-e-supressao-de-arvores-1.jpg",
        "alt":  "Poda de Árvores - Corte e supressão de árvores - Prefeitura de Diamantina"
    },
    {
        "title":  "Corte e supressão de árvores",
        "category":  "poda",
        "service":  "Poda de Árvores",
        "client":  "Prefeitura de Diamantina",
        "location":  "Diamantina, MG",
        "image":  "/portfolio-real/poda/02-poda-corte-e-supressao-de-arvores-2.jpg",
        "alt":  "Poda de Árvores - Corte e supressão de árvores - Prefeitura de Diamantina"
    },
    {
        "title":  "Corte e supressão de árvores",
        "category":  "poda",
        "service":  "Poda de Árvores",
        "client":  "Prefeitura de Diamantina",
        "location":  "Diamantina, MG",
        "image":  "/portfolio-real/poda/03-poda-corte-e-supressao-de-arvores-3.jpg",
        "alt":  "Poda de Árvores - Corte e supressão de árvores - Prefeitura de Diamantina"
    },
    {
        "title":  "Corte e supressão de árvores",
        "category":  "poda",
        "service":  "Poda de Árvores",
        "client":  "Prefeitura de Diamantina",
        "location":  "Diamantina, MG",
        "image":  "/portfolio-real/poda/04-poda-corte-e-supressao-de-arvores-4.jpg",
        "alt":  "Poda de Árvores - Corte e supressão de árvores - Prefeitura de Diamantina"
    },
    {
        "title":  "Corte e supressão de árvores",
        "category":  "poda",
        "service":  "Poda de Árvores",
        "client":  "Prefeitura de Diamantina",
        "location":  "Diamantina, MG",
        "image":  "/portfolio-real/poda/05-poda-corte-e-supressao-de-arvores-5.jpg",
        "alt":  "Poda de Árvores - Corte e supressão de árvores - Prefeitura de Diamantina"
    },
    {
        "title":  "Corte e supressão de árvores",
        "category":  "poda",
        "service":  "Poda de Árvores",
        "client":  "Prefeitura de Diamantina",
        "location":  "Diamantina, MG",
        "image":  "/portfolio-real/poda/06-poda-corte-e-supressao-de-arvores-6.jpg",
        "alt":  "Poda de Árvores - Corte e supressão de árvores - Prefeitura de Diamantina"
    },
    {
        "title":  "Corte e supressão de árvores",
        "category":  "poda",
        "service":  "Poda de Árvores",
        "client":  "Prefeitura de Diamantina",
        "location":  "Diamantina, MG",
        "image":  "/portfolio-real/poda/07-poda-corte-e-supressao-de-arvores-7.jpg",
        "alt":  "Poda de Árvores - Corte e supressão de árvores - Prefeitura de Diamantina"
    },
    {
        "title":  "Corte e supressão de árvores",
        "category":  "poda",
        "service":  "Poda de Árvores",
        "client":  "Prefeitura de Diamantina",
        "location":  "Diamantina, MG",
        "image":  "/portfolio-real/poda/08-poda-corte-e-supressao-de-arvores-8.jpg",
        "alt":  "Poda de Árvores - Corte e supressão de árvores - Prefeitura de Diamantina"
    }
];
