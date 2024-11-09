import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Routes } from "~/constants/routes";

type Props = {
  cover: string;
  name: string;
  description: string;
  id: string;
};
export default component$<Props>(({ cover, description, name, id }) => {
  return (
    <div class="relative h-full rounded-lg border border-gray-200 bg-white shadow-md">
      <Link href={Routes.collection(id)} class="absolute inset-0">
        <span class="sr-only">Ir para coleção {name}</span>
      </Link>
      <div class="aspect-video w-full overflow-hidden rounded-t-lg">
        <img
          class="w-full object-cover"
          width="400"
          height="225"
          src={cover}
          alt={name}
          loading="lazy"
        />
      </div>
      <div class="space-y-2 p-2">
        <h5 class="t-sb-16 text-gray-900">{name}</h5>
        <p class="t-r-14 line-clamp-2 text-gray-700">{description}</p>
      </div>
    </div>
  );
});
