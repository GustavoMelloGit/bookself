import { ListCollectionsOutputDto } from "./HomeService.dto";

export const HomeService = {
  async listCollections(): Promise<ListCollectionsOutputDto> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: "1",
            name: "Filosofia",
            description: "Coleção de livros sobre filosofia",
            cover: "https://picsum.photos/400/225",
          },
          {
            id: "2",
            name: "História",
            description: "Coleção de livros sobre história",
            cover: "https://picsum.photos/401/226",
          },
          {
            id: "3",
            name: "Desenvolvimento de software",
            description: "Coleção de livros sobre desenvolvimento de software",
            cover: "https://picsum.photos/402/227",
          },
          {
            id: "4",
            name: "Matemática",
            description: "Coleção de livros sobre matemática",
            cover: "https://picsum.photos/403/228",
          },
          {
            id: "5",
            name: "Inglês",
            description: "Coleção de livros sobre inglês",
            cover: "https://picsum.photos/404/229",
          },
        ]);
      }, 400);
    });
  },
};
