import { component$ } from "@builder.io/qwik";
import { Link, routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import {
  formAction$,
  useForm,
  valiForm$,
  type InitialValues,
} from "@modular-forms/qwik";
import * as v from "valibot";
import IconButton from "~/components/IconButton";
import Input from "~/components/Input";
import { PersonCircle } from "~/components/icons/PersonCircle";
import { Search } from "~/components/icons/Search";
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

export const useListCollectionsLoader = routeLoader$(async () => {
  return HomeService.listCollections();
});

export const useFormAction = formAction$<SearchFormValues>((values) => {
  console.log(values);
}, valiForm$(SearchSchema));

export default component$(() => {
  const [searchForm, { Form, Field }] = useForm<SearchFormValues>({
    loader: useSearchFormLoader(),
    action: useFormAction(),
    validate: valiForm$(SearchSchema),
  });
  const collections = useListCollectionsLoader();

  return (
    <div class="space-y-12 p-4">
      <header class="flex items-center justify-between">
        <p class="font-semibold">BookSelf</p>
        <div class="flex items-center gap-2">
          <Link href="/">Criar coleção</Link>
          <PersonCircle class="size-8" />
        </div>
      </header>
      <section class="space-y-8">
        <Form>
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
              <Search />
            </IconButton>
          </div>
        </Form>
        <div class="space-y-4">
          <CollectionRow
            label="Novas Coleções"
            collections={collections.value}
          />
          <CollectionRow
            label="Mais Curtidas"
            collections={collections.value}
          />
          <CollectionRow label="Por Gênero" collections={collections.value} />
        </div>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: "BookSelf",
  meta: [
    {
      name: "description",
      content: "Compartilhe seus livros favoritos com a comunidade",
    },
  ],
};
