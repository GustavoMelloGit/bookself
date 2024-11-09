import { component$, QwikIntrinsicElements, Slot } from "@builder.io/qwik";
import { cn } from "~/utils/cn";

type Props = QwikIntrinsicElements["button"] & {
  "aria-label": string;
};

export default component$<Props>(({ class: className, ...props }) => {
  return (
    <button
      type="button"
      {...props}
      class={cn(
        "inline-flex items-center justify-center rounded-lg",
        "size-11 min-h-11 min-w-11",
        "bg-blue-700 text-center",
        "t-r-16 text-white",
        "hover:bg-blue-800",
        "focus:outline-none focus:ring-4 focus:ring-blue-300",
        className,
      )}
    >
      <Slot />
    </button>
  );
});
