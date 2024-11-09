import type { QwikIntrinsicElements } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import { cn } from "~/utils/cn";

type Props = QwikIntrinsicElements["input"] & {
  label?: string;
  error?: string;
};
export default component$<Props>(
  ({ class: className, label, error, ...props }) => {
    return (
      <div class="flex w-full flex-col gap-1">
        {label && (
          <label class="t-r-16 block text-gray-900" for={props.id}>
            {label}
          </label>
        )}
        <input
          class={cn(
            "t-r-16 text-gray-900",
            "block h-10 w-full rounded-lg px-2.5",
            "border-none bg-gray-50",
            "ring-1 ring-inset ring-gray-400",
            "focus:ring-blue-500",
            "focus-visible:outline-none focus-visible:ring-2",
            "placeholder-shown:ring-gray-300",
            error && "ring-red-500 focus:ring-red-500",
            className,
          )}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${props.id}-error` : undefined}
          {...props}
        />
        {error && (
          <p class="t-l-14 text-red-500" id={`${props.id}-error`}>
            {error}
          </p>
        )}
      </div>
    );
  },
);
