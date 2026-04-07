import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility to merge tailwind classes with clsx and tailwind-merge.
 * Note: Ensure clsx and tailwind-merge are installed via bun/npm.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
