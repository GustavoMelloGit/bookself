import type { QRL } from "@builder.io/qwik";
import { $, component$ } from "@builder.io/qwik";
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
