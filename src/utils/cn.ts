import type { ClassNameValue } from 'tailwind-merge';
import { twMerge } from 'tailwind-merge';


export function cn(...inputs: ClassNameValue[]) {
  return twMerge(inputs)
}