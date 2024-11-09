import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { PersonCircle } from "~/components/icons/PersonCircle";

export default component$(() => {
  return (
    <header class="flex items-center justify-between">
      <p class="font-semibold">BookSelf</p>
      <div class="flex items-center gap-2">
        <Link href="/">Criar coleção</Link>
        <PersonCircle class="size-8" />
      </div>
    </header>
  );
});
