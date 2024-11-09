import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="grid min-h-screen w-full place-content-center bg-gray-300 px-4">
      <div class="w-fit space-y-4 rounded-lg bg-white p-4 text-center shadow-md">
        <h1 class="t-sb-24 text-gray-900">Erro 404</h1>
        <p class="t-r-18 text-gray-700">
          A página que você está procurando não existe.
        </p>
      </div>
    </div>
  );
});
