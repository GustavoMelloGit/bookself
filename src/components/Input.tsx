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
      <div class="flex flex-col gap-1">
        {label && (
          <label class="t-r-16 block text-gray-900" for={props.id}>
            {label}
          </label>
        )}
        <input
          class={cn(
            "t-r-16 text-gray-900",
            "block w-full rounded-lg p-2.5",
            "border border-gray-300 bg-gray-50",
            "focus:border-blue-500 focus:ring-blue-500",
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
