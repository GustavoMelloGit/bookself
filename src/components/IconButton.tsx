import { component$, QwikIntrinsicElements, Slot } from "@builder.io/qwik";
import { cn } from "~/utils/cn";
import Spinner from "./Spinner";

type Props = QwikIntrinsicElements["button"] & {
  "aria-label": string;
  isLoading?: boolean;
};

export default component$<Props>(
  ({ class: className, isLoading = false, ...props }) => {
    return (
      <button
        type="button"
        disabled={isLoading}
        {...props}
        class={cn(
          "inline-flex items-center justify-center rounded-lg",
          "size-10 shrink-0",
          "bg-blue-700 text-center",
          "t-r-16 text-white",
          "hover:bg-blue-800",
          "focus:outline-none focus:ring-4 focus:ring-blue-300",
          className,
        )}
      >
        {isLoading ? <Spinner class="size-4" /> : <Slot />}
      </button>
    );
  },
);
