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
        "title":  "Término das instalações da válvula e fechamento das valas dos tubos",
        "category":  "construcao",
        "service":  "Construção Civil",
        "client":  "Projeto Hexágono - Samarco",
        "location":  "Projeto Hexágono",
        "image":  "/portfolio-real/construcao/01-construcao-termino-das-instalacoes-da-valvula-fechamento-das-valas-dos-tubo-1.jpg",
        "alt":  "Construção Civil - Término das instalações da válvula e fechamento das valas dos tubos - Projeto Hexágono - Samarco"
    },
    {
        "title":  "Início da irrigação",
        "category":  "irrigacao",
        "service":  "Irriga\u00e7\u00e3o",
        "client":  "Prefeitura de Rio Doce",
        "location":  "Rio Doce, MG",
        "image":  "/portfolio-real/construcao/02-construcao-inicio-da-irrigacao-2.jpg",
        "alt":  "Irriga\u00e7\u00e3o - Início da irrigação - Prefeitura de Rio Doce"
    },
    {
        "title":  "Colocação dos tubos nas valas",
        "category":  "construcao",
        "service":  "Construção Civil",
        "client":  "Projeto Hexágono - Samarco",
        "location":  "Projeto Hexágono",
        "image":  "/portfolio-real/construcao/03-construcao-colocando-os-tubos-nas-valas-3.jpg",
        "alt":  "Construção Civil - Colocação dos tubos nas valas - Projeto Hexágono - Samarco"
    },
    {
        "title":  "Serviço de drenagem, limpeza do gramado e fechamento dos drenos",
        "category":  "construcao",
        "service":  "Construção Civil",
        "client":  "Prefeitura de Rio Doce",
        "location":  "Rio Doce, MG",
        "image":  "/portfolio-real/construcao/04-construcao-servico-de-drenagem-limpeza-do-gramado-e-fechamento-dos-drenos-4.jpg",
        "alt":  "Construção Civil - Serviço de drenagem, limpeza do gramado e fechamento dos drenos - Prefeitura de Rio Doce"
    },
    {
        "title":  "Irrigação do campo",
        "category":  "irrigacao",
        "service":  "Irriga\u00e7\u00e3o",
        "client":  "Prefeitura de Diamantina",
        "location":  "Diamantina, MG",
        "image":  "/portfolio-real/construcao/05-construcao-irrigacao-campo-5.jpg",
        "alt":  "Irriga\u00e7\u00e3o - Irrigação do campo - Prefeitura de Diamantina"
    },
    {
        "title":  "Colocação dos tubos nas valas",
        "category":  "construcao",
        "service":  "Construção Civil",
        "client":  "Projeto Hexágono - Samarco",
        "location":  "Projeto Hexágono",
        "image":  "/portfolio-real/construcao/06-construcao-colocando-os-tubos-nas-valas-6.jpg",
        "alt":  "Construção Civil - Colocação dos tubos nas valas - Projeto Hexágono - Samarco"
    },
    {
        "title":  "Marcação das valas",
        "category":  "construcao",
        "service":  "Construção Civil",
        "client":  "Prefeitura de Rio Doce",
        "location":  "Rio Doce, MG",
        "image":  "/portfolio-real/construcao/07-construcao-marcacao-das-valas-7.jpg",
        "alt":  "Construção Civil - Marcação das valas - Prefeitura de Rio Doce"
    },
    {
        "title":  "Irrigação do campo",
        "category":  "irrigacao",
        "service":  "Irriga\u00e7\u00e3o",
        "client":  "Prefeitura de Diamantina",
        "location":  "Diamantina, MG",
        "image":  "/portfolio-real/construcao/08-construcao-irrigacao-campo-8.jpg",
        "alt":  "Irriga\u00e7\u00e3o - Irrigação do campo - Prefeitura de Diamantina"
    },
    {
        "title":  "Manutenção de áreas verdes",
        "category":  "jardins",
        "service":  "Manutenção de Jardins",
        "client":  "Praça Nossa Senhora da Conceição",
        "location":  "Minas Gerais",
        "image":  "/portfolio-real/jardins/01-jardins-manutencao-de-areas-verdes-1.jpg",
        "alt":  "Manutenção de Jardins - Manutenção de áreas verdes - Praça Nossa Senhora da Conceição"
    },
    {
        "title":  "Conservação da praça",
        "category":  "jardins",
        "service":  "Manutenção de Jardins",
        "client":  "Praça Nossa Senhora da Conceição",
        "location":  "Minas Gerais",
        "image":  "/portfolio-real/jardins/02-jardins-conservacao-da-praca.jpg",
        "alt":  "Manutenção de Jardins - Conservação da praça - Praça Nossa Senhora da Conceição"
    },
    {
        "title":  "Sede",
        "category":  "jardins",
        "service":  "Manutenção de Jardins",
        "client":  "MRV",
        "location":  "Cliente corporativo",
        "image":  "/portfolio-real/jardins/03-jardins-sede-3.jpg",
        "alt":  "Manutenção de Jardins - Sede - MRV"
    },
    {
        "title":  "Catedral BH",
        "category":  "jardins",
        "service":  "Manutenção de Jardins",
        "client":  "IURD",
        "location":  "Cliente institucional",
        "image":  "/portfolio-real/jardins/04-jardins-catedral-bh-4.jpg",
        "alt":  "Manutenção de Jardins - Catedral BH - IURD"
    },
    {
        "title":  "Terreno Aimorés",
        "category":  "jardins",
        "service":  "Manutenção de Jardins",
        "client":  "IURD",
        "location":  "Cliente institucional",
        "image":  "/portfolio-real/jardins/05-jardins-terreno-aimores-5.jpg",
        "alt":  "Manutenção de Jardins - Terreno Aimorés - IURD"
    },
    {
        "title":  "Jardim municipal",
        "category":  "jardins",
        "service":  "Manutenção de Jardins",
        "client":  "Prefeitura de Taquaraçu de Minas",
        "location":  "Taquaraçu de Minas, MG",
        "image":  "/portfolio-real/jardins/06-jardins-jardim-municipal-taquaracu.jpg",
        "alt":  "Manutenção de Jardins - Jardim municipal - Prefeitura de Taquaraçu de Minas"
    },
    {
        "title":  "Sede",
        "category":  "jardins",
        "service":  "Manutenção de Jardins",
        "client":  "MRV",
        "location":  "Cliente corporativo",
        "image":  "/portfolio-real/jardins/07-jardins-sede-7.jpg",
        "alt":  "Manutenção de Jardins - Sede - MRV"
    },
    {
        "title":  "Replantio de grama no campo",
        "category":  "jardins",
        "service":  "Manutenção de Jardins",
        "client":  "Prefeitura de Morro do Pilar",
        "location":  "Morro do Pilar, MG",
        "image":  "/portfolio-real/jardins/08-jardins-replantio-de-grama-no-campo-8.jpg",
        "alt":  "Manutenção de Jardins - Replantio de grama no campo - Prefeitura de Morro do Pilar"
    },
    {
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
        "title":  "Limpeza e conservação urbana",
        "category":  "limpeza",
        "service":  "Limpeza Urbana",
        "client":  "Praça Nossa Senhora da Conceição",
        "location":  "Minas Gerais",
        "image":  "/portfolio-real/limpeza/01-limpeza-limpeza-e-conservacao-urbana-1.jpg",
        "alt":  "Limpeza Urbana - Limpeza e conservação urbana - Praça Nossa Senhora da Conceição"
    },
    {
        "title":  "Limpeza e conservação urbana",
        "category":  "limpeza",
        "service":  "Limpeza Urbana",
        "client":  "Praça Nossa Senhora da Conceição",
        "location":  "Minas Gerais",
        "image":  "/portfolio-real/limpeza/02-limpeza-limpeza-e-conservacao-urbana-2.jpg",
        "alt":  "Limpeza Urbana - Limpeza e conservação urbana - Praça Nossa Senhora da Conceição"
    },
    {
        "title":  "Limpeza urbana",
        "category":  "limpeza",
        "service":  "Limpeza Urbana",
        "client":  "Prefeitura de Rio Doce",
        "location":  "Rio Doce, MG",
        "image":  "/portfolio-real/limpeza/03-limpeza-limpeza-urbana-3.jpg",
        "alt":  "Limpeza Urbana - Limpeza urbana - Prefeitura de Rio Doce"
    },
    {
        "title":  "Limpeza urbana",
        "category":  "limpeza",
        "service":  "Limpeza Urbana",
        "client":  "Prefeitura de Rio Doce",
        "location":  "Rio Doce, MG",
        "image":  "/portfolio-real/limpeza/04-limpeza-limpeza-urbana-4.jpg",
        "alt":  "Limpeza Urbana - Limpeza urbana - Prefeitura de Rio Doce"
    },
    {
        "title":  "Rastelamento do campo",
        "category":  "limpeza",
        "service":  "Limpeza Urbana",
        "client":  "Prefeitura de Morro do Pilar",
        "location":  "Morro do Pilar, MG",
        "image":  "/portfolio-real/limpeza/05-limpeza-rastelamento-do-campo-5.jpg",
        "alt":  "Limpeza Urbana - Rastelamento do campo - Prefeitura de Morro do Pilar"
    },
    {
        "title":  "Corte em torno do campo com roçadeira",
        "category":  "limpeza",
        "service":  "Limpeza Urbana",
        "client":  "Prefeitura de Morro do Pilar",
        "location":  "Morro do Pilar, MG",
        "image":  "/portfolio-real/limpeza/06-limpeza-corte-em-torno-do-campo-com-rocadeira-6.jpg",
        "alt":  "Limpeza Urbana - Corte em torno do campo com roçadeira - Prefeitura de Morro do Pilar"
    },
    {
        "title":  "Limpeza e conservação urbana",
        "category":  "limpeza",
        "service":  "Limpeza Urbana",
        "client":  "Praça Nossa Senhora da Conceição",
        "location":  "Minas Gerais",
        "image":  "/portfolio-real/limpeza/07-limpeza-limpeza-e-conservacao-urbana-7.jpg",
        "alt":  "Limpeza Urbana - Limpeza e conservação urbana - Praça Nossa Senhora da Conceição"
    },
    {
        "title":  "Limpeza urbana",
        "category":  "limpeza",
        "service":  "Limpeza Urbana",
        "client":  "Prefeitura de Rio Doce",
        "location":  "Rio Doce, MG",
        "image":  "/portfolio-real/limpeza/08-limpeza-limpeza-urbana-8.jpg",
        "alt":  "Limpeza Urbana - Limpeza urbana - Prefeitura de Rio Doce"
    },
    {
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
