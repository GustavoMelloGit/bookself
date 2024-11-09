export const Routes = {
  home: "/",
  collection: (id: string) => `/collection/details/${id}`,
  section: (id: string) => `/section/${id}`,
  createCollection: "/collection/create",
  profile: "/profile",
  search: "/search",
};
