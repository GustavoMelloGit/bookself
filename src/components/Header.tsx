import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { PersonCircle } from "~/components/icons/PersonCircle";
import { Routes } from "~/constants/routes";

export default component$(() => {
  return (
    <header class="flex items-center justify-between">
      <Link class="t-sb-24" href={Routes.home} aria-label="Ir para Home">
        BookSelf
      </Link>
      <div class="flex items-center gap-2">
        <Link href={Routes.createCollection}>Criar coleção</Link>
        <Link href={Routes.profile} aria-label="Ir para Perfil">
          <PersonCircle class="size-8" />
        </Link>
      </div>
    </header>
  );
});
