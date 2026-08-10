export type PortfolioCategory = "construcao" | "jardins" | "gramados" | "limpeza" | "poda";

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
  { "id": "jardins", "label": "Manutenção de Jardins" },
  { "id": "gramados", "label": "Gramados Esportivos" },
  { "id": "limpeza", "label": "Limpeza Urbana" },
  { "id": "poda", "label": "Poda de Árvores" }
];

export const portfolioItems: readonly PortfolioItem[] = [
    {
        "title":  "Termino Das Instalações Da Válvula Fechamento Das Valas Dos Tubo",
        "category":  "construcao",
        "service":  "Construção Civil",
        "client":  "PROJETO HEXAGONO - SAMARCO",
        "location":  "Projeto Hexágono",
        "image":  "/portfolio-real/construcao/01-construcao-termino-das-instalacoes-da-valvula-fechamento-das-valas-dos-tubo-1.jpg",
        "alt":  "Construção Civil - Termino Das Instalações Da Válvula Fechamento Das Valas Dos Tubo - PROJETO HEXAGONO - SAMARCO"
    },
    {
        "title":  "Início Da Irrigação",
        "category":  "construcao",
        "service":  "Construção Civil",
        "client":  "PREFEITURA DE RIO DOCE",
        "location":  "Rio Doce, MG",
        "image":  "/portfolio-real/construcao/02-construcao-inicio-da-irrigacao-2.jpg",
        "alt":  "Construção Civil - Início Da Irrigação - PREFEITURA DE RIO DOCE"
    },
    {
        "title":  "Colocando Os Tubos Nas Valas",
        "category":  "construcao",
        "service":  "Construção Civil",
        "client":  "PROJETO HEXAGONO - SAMARCO",
        "location":  "Projeto Hexágono",
        "image":  "/portfolio-real/construcao/03-construcao-colocando-os-tubos-nas-valas-3.jpg",
        "alt":  "Construção Civil - Colocando Os Tubos Nas Valas - PROJETO HEXAGONO - SAMARCO"
    },
    {
        "title":  "Serviço De Drenagem Limpeza Do Gramado E Fechamento Dos Drenos",
        "category":  "construcao",
        "service":  "Construção Civil",
        "client":  "PREFEITURA DE RIO DOCE",
        "location":  "Rio Doce, MG",
        "image":  "/portfolio-real/construcao/04-construcao-servico-de-drenagem-limpeza-do-gramado-e-fechamento-dos-drenos-4.jpg",
        "alt":  "Construção Civil - Serviço De Drenagem Limpeza Do Gramado E Fechamento Dos Drenos - PREFEITURA DE RIO DOCE"
    },
    {
        "title":  "Irrigação Campo",
        "category":  "construcao",
        "service":  "Construção Civil",
        "client":  "PREFEITURA DE DIAMANTINA",
        "location":  "Diamantina, MG",
        "image":  "/portfolio-real/construcao/05-construcao-irrigacao-campo-5.jpg",
        "alt":  "Construção Civil - Irrigação Campo - PREFEITURA DE DIAMANTINA"
    },
    {
        "title":  "Colocando Os Tubos Nas Valas",
        "category":  "construcao",
        "service":  "Construção Civil",
        "client":  "PROJETO HEXAGONO - SAMARCO",
        "location":  "Projeto Hexágono",
        "image":  "/portfolio-real/construcao/06-construcao-colocando-os-tubos-nas-valas-6.jpg",
        "alt":  "Construção Civil - Colocando Os Tubos Nas Valas - PROJETO HEXAGONO - SAMARCO"
    },
    {
        "title":  "Marcação Das Valas",
        "category":  "construcao",
        "service":  "Construção Civil",
        "client":  "PREFEITURA DE RIO DOCE",
        "location":  "Rio Doce, MG",
        "image":  "/portfolio-real/construcao/07-construcao-marcacao-das-valas-7.jpg",
        "alt":  "Construção Civil - Marcação Das Valas - PREFEITURA DE RIO DOCE"
    },
    {
        "title":  "Irrigação Campo",
        "category":  "construcao",
        "service":  "Construção Civil",
        "client":  "PREFEITURA DE DIAMANTINA",
        "location":  "Diamantina, MG",
        "image":  "/portfolio-real/construcao/08-construcao-irrigacao-campo-8.jpg",
        "alt":  "Construção Civil - Irrigação Campo - PREFEITURA DE DIAMANTINA"
    },
    {
        "title":  "Manutenção de áreas verdes",
        "category":  "jardins",
        "service":  "Manutenção de Jardins",
        "client":  "PRAÇA NOSSA SENHORA DA CONCEIÇÃO",
        "location":  "Minas Gerais",
        "image":  "/portfolio-real/jardins/01-jardins-manutencao-de-areas-verdes-1.jpg",
        "alt":  "Manutenção de Jardins - Manutenção de áreas verdes - PRAÇA NOSSA SENHORA DA CONCEIÇÃO"
    },
    {
        "title":  "Conservação Da Praça",
        "category":  "jardins",
        "service":  "Manutenção de Jardins",
        "client":  "PRAÇA NOSSA SENHORA DA CONCEIÇÃO",
        "location":  "Minas Gerais",
        "image":  "/portfolio-real/jardins/02-jardins-conservacao-da-praca.jpg",
        "alt":  "Manutenção de Jardins - Conservação Da Praça - PRAÇA NOSSA SENHORA DA CONCEIÇÃO"
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
        "title":  "Catedral Bh",
        "category":  "jardins",
        "service":  "Manutenção de Jardins",
        "client":  "IURD",
        "location":  "Cliente institucional",
        "image":  "/portfolio-real/jardins/04-jardins-catedral-bh-4.jpg",
        "alt":  "Manutenção de Jardins - Catedral Bh - IURD"
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
        "title":  "Jardim Municipal",
        "category":  "jardins",
        "service":  "Manutenção de Jardins",
        "client":  "PREFEITURA DE TAQUARAÇU DE MINAS",
        "location":  "Taquaraçu de Minas, MG",
        "image":  "/portfolio-real/jardins/06-jardins-jardim-municipal-taquaracu.jpg",
        "alt":  "Manutenção de Jardins - Jardim Municipal - PREFEITURA DE TAQUARAÇU DE MINAS"
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
        "title":  "Replantio De Grama No Campo",
        "category":  "jardins",
        "service":  "Manutenção de Jardins",
        "client":  "PREFEITURA DE MORRO DO PILAR",
        "location":  "Morro do Pilar, MG",
        "image":  "/portfolio-real/jardins/08-jardins-replantio-de-grama-no-campo-8.jpg",
        "alt":  "Manutenção de Jardins - Replantio De Grama No Campo - PREFEITURA DE MORRO DO PILAR"
    },
    {
        "title":  "Campo",
        "category":  "gramados",
        "service":  "Gramados Esportivos",
        "client":  "PREFEITURA DE DIAMANTINA",
        "location":  "Diamantina, MG",
        "image":  "/portfolio-real/gramados/01-gramados-campo-1.jpg",
        "alt":  "Gramados Esportivos - Campo - PREFEITURA DE DIAMANTINA"
    },
    {
        "title":  "Corte Do Campo Com Máquina Helicoidal",
        "category":  "gramados",
        "service":  "Gramados Esportivos",
        "client":  "PREFEITURA DE MORRO DO PILAR",
        "location":  "Morro do Pilar, MG",
        "image":  "/portfolio-real/gramados/02-gramados-corte-do-campo-com-maquina-helicoidal.jpg",
        "alt":  "Gramados Esportivos - Corte Do Campo Com Máquina Helicoidal - PREFEITURA DE MORRO DO PILAR"
    },
    {
        "title":  "Campo",
        "category":  "gramados",
        "service":  "Gramados Esportivos",
        "client":  "PREFEITURA DE DIAMANTINA",
        "location":  "Diamantina, MG",
        "image":  "/portfolio-real/gramados/03-gramados-campo-3.jpg",
        "alt":  "Gramados Esportivos - Campo - PREFEITURA DE DIAMANTINA"
    },
    {
        "title":  "Campo",
        "category":  "gramados",
        "service":  "Gramados Esportivos",
        "client":  "PREFEITURA DE MORRO DO PILAR",
        "location":  "Morro do Pilar, MG",
        "image":  "/portfolio-real/gramados/04-gramados-campo-4.jpg",
        "alt":  "Gramados Esportivos - Campo - PREFEITURA DE MORRO DO PILAR"
    },
    {
        "title":  "Plantio De Grama",
        "category":  "gramados",
        "service":  "Gramados Esportivos",
        "client":  "PREFEITURA DE RIO DOCE",
        "location":  "Rio Doce, MG",
        "image":  "/portfolio-real/gramados/05-gramados-plantio-de-grama-5.jpg",
        "alt":  "Gramados Esportivos - Plantio De Grama - PREFEITURA DE RIO DOCE"
    },
    {
        "title":  "Estádio Municipal",
        "category":  "gramados",
        "service":  "Gramados Esportivos",
        "client":  "PREFEITURA DE RIO DOCE",
        "location":  "Rio Doce, MG",
        "image":  "/portfolio-real/gramados/06-gramados-estadio-municipal-6.jpg",
        "alt":  "Gramados Esportivos - Estádio Municipal - PREFEITURA DE RIO DOCE"
    },
    {
        "title":  "Campo De Novo Soberbo Santa Cruz Do Escalvado",
        "category":  "gramados",
        "service":  "Gramados Esportivos",
        "client":  "PROJETO HEXAGONO - SAMARCO",
        "location":  "Projeto Hexágono",
        "image":  "/portfolio-real/gramados/07-gramados-campo-de-novo-soberbo-santa-cruz-do-escalvado-7.jpg",
        "alt":  "Gramados Esportivos - Campo De Novo Soberbo Santa Cruz Do Escalvado - PROJETO HEXAGONO - SAMARCO"
    },
    {
        "title":  "Campo Santana Do Deserto Rio Doce",
        "category":  "gramados",
        "service":  "Gramados Esportivos",
        "client":  "PROJETO HEXAGONO - SAMARCO",
        "location":  "Projeto Hexágono",
        "image":  "/portfolio-real/gramados/08-gramados-campo-santana-do-deserto-rio-doce-8.jpg",
        "alt":  "Gramados Esportivos - Campo Santana Do Deserto Rio Doce - PROJETO HEXAGONO - SAMARCO"
    },
    {
        "title":  "Limpeza e conservação urbana",
        "category":  "limpeza",
        "service":  "Limpeza Urbana",
        "client":  "PRAÇA NOSSA SENHORA DA CONCEIÇÃO",
        "location":  "Minas Gerais",
        "image":  "/portfolio-real/limpeza/01-limpeza-limpeza-e-conservacao-urbana-1.jpg",
        "alt":  "Limpeza Urbana - Limpeza e conservação urbana - PRAÇA NOSSA SENHORA DA CONCEIÇÃO"
    },
    {
        "title":  "Limpeza e conservação urbana",
        "category":  "limpeza",
        "service":  "Limpeza Urbana",
        "client":  "PRAÇA NOSSA SENHORA DA CONCEIÇÃO",
        "location":  "Minas Gerais",
        "image":  "/portfolio-real/limpeza/02-limpeza-limpeza-e-conservacao-urbana-2.jpg",
        "alt":  "Limpeza Urbana - Limpeza e conservação urbana - PRAÇA NOSSA SENHORA DA CONCEIÇÃO"
    },
    {
        "title":  "Limpeza Urbana",
        "category":  "limpeza",
        "service":  "Limpeza Urbana",
        "client":  "PREFEITURA DE RIO DOCE",
        "location":  "Rio Doce, MG",
        "image":  "/portfolio-real/limpeza/03-limpeza-limpeza-urbana-3.jpg",
        "alt":  "Limpeza Urbana - Limpeza Urbana - PREFEITURA DE RIO DOCE"
    },
    {
        "title":  "Limpeza Urbana",
        "category":  "limpeza",
        "service":  "Limpeza Urbana",
        "client":  "PREFEITURA DE RIO DOCE",
        "location":  "Rio Doce, MG",
        "image":  "/portfolio-real/limpeza/04-limpeza-limpeza-urbana-4.jpg",
        "alt":  "Limpeza Urbana - Limpeza Urbana - PREFEITURA DE RIO DOCE"
    },
    {
        "title":  "Rastelamento Do Campo",
        "category":  "limpeza",
        "service":  "Limpeza Urbana",
        "client":  "PREFEITURA DE MORRO DO PILAR",
        "location":  "Morro do Pilar, MG",
        "image":  "/portfolio-real/limpeza/05-limpeza-rastelamento-do-campo-5.jpg",
        "alt":  "Limpeza Urbana - Rastelamento Do Campo - PREFEITURA DE MORRO DO PILAR"
    },
    {
        "title":  "Corte Em Torno Do Campo Com Roçadeira",
        "category":  "limpeza",
        "service":  "Limpeza Urbana",
        "client":  "PREFEITURA DE MORRO DO PILAR",
        "location":  "Morro do Pilar, MG",
        "image":  "/portfolio-real/limpeza/06-limpeza-corte-em-torno-do-campo-com-rocadeira-6.jpg",
        "alt":  "Limpeza Urbana - Corte Em Torno Do Campo Com Roçadeira - PREFEITURA DE MORRO DO PILAR"
    },
    {
        "title":  "Limpeza e conservação urbana",
        "category":  "limpeza",
        "service":  "Limpeza Urbana",
        "client":  "PRAÇA NOSSA SENHORA DA CONCEIÇÃO",
        "location":  "Minas Gerais",
        "image":  "/portfolio-real/limpeza/07-limpeza-limpeza-e-conservacao-urbana-7.jpg",
        "alt":  "Limpeza Urbana - Limpeza e conservação urbana - PRAÇA NOSSA SENHORA DA CONCEIÇÃO"
    },
    {
        "title":  "Limpeza Urbana",
        "category":  "limpeza",
        "service":  "Limpeza Urbana",
        "client":  "PREFEITURA DE RIO DOCE",
        "location":  "Rio Doce, MG",
        "image":  "/portfolio-real/limpeza/08-limpeza-limpeza-urbana-8.jpg",
        "alt":  "Limpeza Urbana - Limpeza Urbana - PREFEITURA DE RIO DOCE"
    },
    {
        "title":  "Corte E Supressão De Árvores",
        "category":  "poda",
        "service":  "Poda de Árvores",
        "client":  "PREFEITURA DE DIAMANTINA",
        "location":  "Diamantina, MG",
        "image":  "/portfolio-real/poda/01-poda-corte-e-supressao-de-arvores-1.jpg",
        "alt":  "Poda de Árvores - Corte E Supressão De Árvores - PREFEITURA DE DIAMANTINA"
    },
    {
        "title":  "Corte E Supressão De Árvores",
        "category":  "poda",
        "service":  "Poda de Árvores",
        "client":  "PREFEITURA DE DIAMANTINA",
        "location":  "Diamantina, MG",
        "image":  "/portfolio-real/poda/02-poda-corte-e-supressao-de-arvores-2.jpg",
        "alt":  "Poda de Árvores - Corte E Supressão De Árvores - PREFEITURA DE DIAMANTINA"
    },
    {
        "title":  "Corte E Supressão De Árvores",
        "category":  "poda",
        "service":  "Poda de Árvores",
        "client":  "PREFEITURA DE DIAMANTINA",
        "location":  "Diamantina, MG",
        "image":  "/portfolio-real/poda/03-poda-corte-e-supressao-de-arvores-3.jpg",
        "alt":  "Poda de Árvores - Corte E Supressão De Árvores - PREFEITURA DE DIAMANTINA"
    },
    {
        "title":  "Corte E Supressão De Árvores",
        "category":  "poda",
        "service":  "Poda de Árvores",
        "client":  "PREFEITURA DE DIAMANTINA",
        "location":  "Diamantina, MG",
        "image":  "/portfolio-real/poda/04-poda-corte-e-supressao-de-arvores-4.jpg",
        "alt":  "Poda de Árvores - Corte E Supressão De Árvores - PREFEITURA DE DIAMANTINA"
    },
    {
        "title":  "Corte E Supressão De Árvores",
        "category":  "poda",
        "service":  "Poda de Árvores",
        "client":  "PREFEITURA DE DIAMANTINA",
        "location":  "Diamantina, MG",
        "image":  "/portfolio-real/poda/05-poda-corte-e-supressao-de-arvores-5.jpg",
        "alt":  "Poda de Árvores - Corte E Supressão De Árvores - PREFEITURA DE DIAMANTINA"
    },
    {
        "title":  "Corte E Supressão De Árvores",
        "category":  "poda",
        "service":  "Poda de Árvores",
        "client":  "PREFEITURA DE DIAMANTINA",
        "location":  "Diamantina, MG",
        "image":  "/portfolio-real/poda/06-poda-corte-e-supressao-de-arvores-6.jpg",
        "alt":  "Poda de Árvores - Corte E Supressão De Árvores - PREFEITURA DE DIAMANTINA"
    },
    {
        "title":  "Corte E Supressão De Árvores",
        "category":  "poda",
        "service":  "Poda de Árvores",
        "client":  "PREFEITURA DE DIAMANTINA",
        "location":  "Diamantina, MG",
        "image":  "/portfolio-real/poda/07-poda-corte-e-supressao-de-arvores-7.jpg",
        "alt":  "Poda de Árvores - Corte E Supressão De Árvores - PREFEITURA DE DIAMANTINA"
    },
    {
        "title":  "Corte E Supressão De Árvores",
        "category":  "poda",
        "service":  "Poda de Árvores",
        "client":  "PREFEITURA DE DIAMANTINA",
        "location":  "Diamantina, MG",
        "image":  "/portfolio-real/poda/08-poda-corte-e-supressao-de-arvores-8.jpg",
        "alt":  "Poda de Árvores - Corte E Supressão De Árvores - PREFEITURA DE DIAMANTINA"
    }
];
