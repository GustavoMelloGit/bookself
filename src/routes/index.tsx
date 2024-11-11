import type { QRL } from "@builder.io/qwik";
import { $, component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$, useNavigate } from "@builder.io/qwik-city";
import type { SubmitHandler } from "@modular-forms/qwik";
import { useForm, valiForm$, type InitialValues } from "@modular-forms/qwik";
import * as v from "valibot";
import IconButton from "~/components/IconButton";
import Input from "~/components/Input";
import { Search } from "~/components/icons/Search";
import { Routes } from "~/constants/routes";
import CollectionRow from "~/modules/home/components/CollectionRow";
import { HomeService } from "~/modules/home/service/HomeService";

const SearchSchema = v.object({
  search: v.string(),
});

type SearchFormValues = v.InferInput<typeof SearchSchema>;

export const useSearchFormLoader = routeLoader$<
  InitialValues<SearchFormValues>
>(() => ({
  search: "",
}));

export const useListSectionsLoader = routeLoader$(async () => {
  return HomeService.listHomeSections();
});

export default component$(() => {
  const [_form, { Form, Field }] = useForm<SearchFormValues>({
    loader: useSearchFormLoader(),
    validate: valiForm$(SearchSchema),
  });
  const nav = useNavigate();
  const sections = useListSectionsLoader();

  const handleSubmit: QRL<SubmitHandler<SearchFormValues>> = $(
    async (values) => {
      const params = new URLSearchParams({ query: values.search });
      await nav(Routes.search + `?${params.toString()}`);
    },
  );

  return (
    <div class="space-y-8">
      <Form onSubmit$={handleSubmit}>
        <div class="flex items-end gap-2">
          <Field name="search">
            {(field, props) => (
              <Input
                {...props}
                label="Pesquisar"
                type="search"
                placeholder="Pesquise uma coleção"
                error={field.error}
              />
            )}
          </Field>
          <IconButton aria-label="Pesquisar" type="submit">
            <Search class="size-6" />
          </IconButton>
        </div>
      </Form>
      <div class="space-y-4">
        {sections.value.map((section) => (
          <CollectionRow
            key={section.id}
            sectionId={section.id}
            label={section.name}
            collections={section.collections}
          />
        ))}
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "BookSelf | Crie e Compartilhe Tierlists de Livros",
  meta: [
    {
      name: "description",
      content:
        "No BookSelf, você pode criar e compartilhar tierlists de livros em diversos temas. Organize e classifique suas leituras favoritas, de romances a ficção e mais!",
    },
    {
      name: "keywords",
      content:
        "BookSelf, tierlist de livros, classificação de livros, opiniões de livros, lista de livros, recomendação de livros, temas de livros",
    },
    {
      name: "author",
      content: "BookSelf",
    },
    {
      name: "language",
      content: "pt-BR",
    },
    {
      property: "og:title",
      content: "BookSelf | Crie e Compartilhe Tierlists de Livros",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://www.bookself.com.br",
    },
    {
      property: "og:description",
      content:
        "Crie e compartilhe tierlists de livros com o BookSelf! Organize e classifique suas leituras favoritas, compartilhe sua opinião e inspire outros leitores.",
    },
    {
      property: "og:image",
      content: "https://www.bookself.com.br/imagens/bookself-banner.png",
    },
    {
      property: "og:site_name",
      content: "BookSelf",
    },
    {
      property: "og:locale",
      content: "pt_BR",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "BookSelf | Crie e Compartilhe Tierlists de Livros",
    },
    {
      name: "twitter:description",
      content:
        "No BookSelf, você pode criar e compartilhar tierlists de livros em diversos temas. Organize suas leituras, classifique seus favoritos e compartilhe suas opiniões!",
    },
    {
      name: "twitter:image",
      content: "https://www.bookself.com.br/imagens/bookself-banner.png",
    },
    {
      name: "twitter:site",
      content: "@bookself",
    },
  ],
};
