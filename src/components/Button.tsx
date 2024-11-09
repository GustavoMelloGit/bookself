import type { QwikIntrinsicElements} from "@builder.io/qwik";
import { component$, Slot } from "@builder.io/qwik";
import { cn } from "~/utils/cn";
import Spinner from "./Spinner";

type Props = QwikIntrinsicElements["button"] & {
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
          "rounded-lg",
          "bg-blue-700 px-5 py-2.5",
          "hover:bg-blue-800 ",
          "focus:outline-none focus:ring-4 focus:ring-blue-300",
          "t-r-14 text-white",
          className,
        )}
      >
        {isLoading ? <Spinner class="size-4" /> : <Slot />}
      </button>
    );
  },
);
