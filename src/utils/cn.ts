import type { ClassList } from "@builder.io/qwik";
import type { ClassNameValue } from "tailwind-merge";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: (ClassNameValue | ClassList)[]) {
  return twMerge(inputs as ClassNameValue[]);
}
