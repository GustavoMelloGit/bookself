import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import {
  formAction$,
  useForm,
  valiForm$,
  type InitialValues,
} from "@modular-forms/qwik";
import * as v from "valibot";
import IconButton from "~/components/IconButton";
import Input from "~/components/Input";
import { Search } from "~/components/icons/Search";
import CollectionRow from "~/modules/home/components/CollectionRow";
import Header from "~/modules/home/components/Header";
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

export const useFormAction = formAction$<SearchFormValues>((values) => {
  console.log(values);
}, valiForm$(SearchSchema));

export default component$(() => {
  const [_form, { Form, Field }] = useForm<SearchFormValues>({
    loader: useSearchFormLoader(),
    action: useFormAction(),
    validate: valiForm$(SearchSchema),
  });
  const sections = useListSectionsLoader();

  return (
    <div class="space-y-12 p-4">
      <Header />
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
