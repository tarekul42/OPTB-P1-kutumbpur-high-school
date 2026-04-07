import { format } from 'date-fns';

/**
 * Utility functions for formatting strings, dates, and numbers.
 */

/**
 * Formats a date string using date-fns.
 * @param date - The date to format.
 * @param formatStr - The format string (default: 'PPP').
 */
export function formatDate(date: string | number | Date, formatStr: string = 'PPP') {
  try {
    return format(new Date(date), formatStr);
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Invalid Date';
  }
}

/**
 * Formats a currency amount to BDT (Bangladeshi Taka).
 * @param amount - The number to format.
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-BD', {
    style: 'currency',
    currency: 'BDT',
    minimumFractionDigits: 0,
  }).format(amount);
}

/**
 * Generates a standard ordinal (1st, 2nd, etc.) from a number.
 * @param n - The number to format.
 */
export function formatOrdinal(n: number): string {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}
