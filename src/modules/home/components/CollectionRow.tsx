import { component$ } from "@builder.io/qwik";
import CollectionCard from "./CollectionCard";

type Collection = {
  id: string;
  name: string;
  description: string;
  cover: string;
};

type Props = {
  collections: Collection[];
  label: string;
};

export default component$<Props>(({ collections, label }) => {
  return (
    <div class="space-y-2">
      <h2 class="t-sb-16 text-gray-900">{label}</h2>
      <div class="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
        {collections.map((collection) => (
          <div
            key={collection.id}
            class="w-1/2 shrink-0 snap-start snap-always md:w-1/3 lg:w-1/4"
          >
            <CollectionCard
              id={collection.id}
              cover={collection.cover}
              name={collection.name}
              description={collection.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
});
