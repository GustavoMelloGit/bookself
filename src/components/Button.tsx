import { component$, QwikIntrinsicElements, Slot } from "@builder.io/qwik";
import { cn } from "~/utils/cn";

export default component$<QwikIntrinsicElements["button"]>(
  ({ class: className, ...props }) => {
    return (
      <button
        type="button"
        {...props}
        class={cn(
          "rounded-lg",
          "bg-blue-700 px-5 py-2.5",
          "hover:bg-blue-800 ",
          "focus:outline-none focus:ring-4 focus:ring-blue-300",
          "t-r-14 text-white",
          className,
        )}
      >
        <Slot />
      </button>
    );
  },
);
