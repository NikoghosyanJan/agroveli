import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatLabel(text) {
  return text
    .replace(/_/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase());
}