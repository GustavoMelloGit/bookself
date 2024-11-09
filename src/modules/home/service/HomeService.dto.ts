export type ListHomeSectionsOutputDto = Array<{
  id: string;
  name: string;
  collections: Array<{
    id: string;
    name: string;
    description: string;
    cover: string;
  }>;
}>;
