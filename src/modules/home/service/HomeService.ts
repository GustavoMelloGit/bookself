import type { ListHomeSectionsOutputDto } from "./HomeService.dto";

const mockSessions = [
  {
    id: Math.random().toString(),
    name: "Novas Coleções",
    collections: [
      {
        id: Math.random().toString(),
        name: "Filosofia Contemporânea",
        description:
          "Obras de filosofia moderna abordando questões existenciais e éticas atuais.",
        cover: "https://picsum.photos/405/230",
      },
      {
        id: Math.random().toString(),
        name: "História Moderna",
        description:
          "Livros que exploram eventos e revoluções dos séculos XIX e XX.",
        cover: "https://picsum.photos/406/231",
      },
      {
        id: Math.random().toString(),
        name: "Desenvolvimento Web",
        description:
          "Coleção focada em tecnologias e práticas de desenvolvimento front-end e back-end.",
        cover: "https://picsum.photos/407/232",
      },
      {
        id: Math.random().toString(),
        name: "Inteligência Artificial",
        description:
          "Livros sobre o impacto e as aplicações da IA no mundo atual.",
        cover: "https://picsum.photos/408/233",
      },
      {
        id: Math.random().toString(),
        name: "Sustentabilidade",
        description:
          "Coleção de livros que discutem práticas sustentáveis e a preservação ambiental.",
        cover: "https://picsum.photos/409/234",
      },
    ],
  },
  {
    id: Math.random().toString(),
    name: "Mais Curtidas",
    collections: [
      {
        id: Math.random().toString(),
        name: "Psicologia e Comportamento",
        description: "Exploração da mente humana, emoções e comportamento.",
        cover: "https://picsum.photos/410/235",
      },
      {
        id: Math.random().toString(),
        name: "Grandes Clássicos da Literatura",
        description:
          "Obras literárias que atravessaram gerações e continuam relevantes.",
        cover: "https://picsum.photos/411/236",
      },
      {
        id: Math.random().toString(),
        name: "Tecnologia e Inovação",
        description: "Coleção sobre as mais recentes inovações tecnológicas.",
        cover: "https://picsum.photos/412/237",
      },
      {
        id: Math.random().toString(),
        name: "Economia para Todos",
        description:
          "Introdução e análise acessível sobre economia e finanças pessoais.",
        cover: "https://picsum.photos/413/238",
      },
      {
        id: Math.random().toString(),
        name: "Fotografia e Arte Visual",
        description: "Livros inspiradores sobre fotografia e artes visuais.",
        cover: "https://picsum.photos/414/239",
      },
    ],
  },
  {
    id: Math.random().toString(),
    name: "Por Gênero",
    collections: [
      {
        id: Math.random().toString(),
        name: "Romance Histórico",
        description:
          "Histórias de amor ambientadas em períodos históricos fascinantes.",
        cover: "https://picsum.photos/415/240",
      },
      {
        id: Math.random().toString(),
        name: "Ficção Científica",
        description:
          "Explorando possibilidades futuras, tecnologias e universos distantes.",
        cover: "https://picsum.photos/416/241",
      },
      {
        id: Math.random().toString(),
        name: "Poesia e Prosa",
        description: "Coleção de livros de poesia e prosa lírica.",
        cover: "https://picsum.photos/417/242",
      },
      {
        id: Math.random().toString(),
        name: "Suspense e Mistério",
        description:
          "Narrativas envolventes que mantêm o leitor na ponta da cadeira.",
        cover: "https://picsum.photos/418/243",
      },
      {
        id: Math.random().toString(),
        name: "Autoajuda e Motivação",
        description: "Livros que inspiram mudanças e reflexões pessoais.",
        cover: "https://picsum.photos/419/244",
      },
    ],
  },
  {
    id: Math.random().toString(),
    name: "Sugestões para Estudantes",
    collections: [
      {
        id: Math.random().toString(),
        name: "Matemática Básica e Avançada",
        description:
          "Do básico ao avançado, uma coleção essencial para estudantes de exatas.",
        cover: "https://picsum.photos/420/245",
      },
      {
        id: Math.random().toString(),
        name: "Redação e Gramática",
        description:
          "Técnicas para melhorar habilidades de escrita e domínio da língua portuguesa.",
        cover: "https://picsum.photos/421/246",
      },
      {
        id: Math.random().toString(),
        name: "Introdução à Física",
        description:
          "Fundamentos e conceitos principais da física para iniciantes.",
        cover: "https://picsum.photos/422/247",
      },
      {
        id: Math.random().toString(),
        name: "Biologia e Ciências Naturais",
        description:
          "Coleção de introdução às ciências da vida e do meio ambiente.",
        cover: "https://picsum.photos/423/248",
      },
      {
        id: Math.random().toString(),
        name: "Química para Iniciantes",
        description: "Fundamentos da química para quem está começando.",
        cover: "https://picsum.photos/424/249",
      },
    ],
  },
  {
    id: Math.random().toString(),
    name: "Autobiografias e Biografias",
    collections: [
      {
        id: Math.random().toString(),
        name: "Liderança Inspiradora",
        description: "Histórias de líderes que marcaram época.",
        cover: "https://picsum.photos/425/250",
      },
      {
        id: Math.random().toString(),
        name: "Artistas e Inventores",
        description:
          "Biografias de artistas, músicos e inventores que mudaram o mundo.",
        cover: "https://picsum.photos/426/251",
      },
      {
        id: Math.random().toString(),
        name: "Cientistas e Exploradores",
        description:
          "A vida de cientistas e exploradores que desafiaram limites.",
        cover: "https://picsum.photos/427/252",
      },
      {
        id: Math.random().toString(),
        name: "Esportistas Legendários",
        description: "Biografias de grandes nomes do esporte mundial.",
        cover: "https://picsum.photos/428/253",
      },
      {
        id: Math.random().toString(),
        name: "Políticos e Líderes Mundiais",
        description: "Coleção de líderes que moldaram o cenário global.",
        cover: "https://picsum.photos/429/254",
      },
    ],
  },
  {
    id: Math.random().toString(),
    name: "Coleções Temáticas",
    collections: [
      {
        id: Math.random().toString(),
        name: "Mitologia e Religião",
        description:
          "Exploração das diversas mitologias e religiões pelo mundo.",
        cover: "https://picsum.photos/430/255",
      },
      {
        id: Math.random().toString(),
        name: "Viagens e Aventura",
        description: "Relatos de viagens e explorações ao redor do mundo.",
        cover: "https://picsum.photos/431/256",
      },
      {
        id: Math.random().toString(),
        name: "Cinema e TV",
        description:
          "Livros sobre a história e os bastidores do cinema e da televisão.",
        cover: "https://picsum.photos/432/257",
      },
      {
        id: Math.random().toString(),
        name: "Cultura Pop",
        description: "Livros que exploram a cultura pop e fenômenos modernos.",
        cover: "https://picsum.photos/433/258",
      },
      {
        id: Math.random().toString(),
        name: "Natureza e Meio Ambiente",
        description:
          "Obras sobre a beleza da natureza e os desafios ecológicos atuais.",
        cover: "https://picsum.photos/434/259",
      },
    ],
  },
];

export const HomeService = {
  async listHomeSections(): Promise<ListHomeSectionsOutputDto> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockSessions);
      }, 400);
    });
  },
};
