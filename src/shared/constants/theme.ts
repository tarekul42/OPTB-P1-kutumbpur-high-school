/**
 * App-wide theme configuration and color mapping.
 * Centralized for consistent styling and accessibility.
 */

export const THEME = {
  MODES: {
    LIGHT: 'light',
    DARK: 'dark',
  },
  
  STORAGE_KEY: 'theme',
  
  // Color mappings for dynamic components like Hero or Icons
  ACCENT_COLORS: {
    PRIMARY: 'from-primary-600 to-primary-800',
    SECONDARY: 'from-secondary-600 to-secondary-800',
    ACCENT_GOLD: 'from-amber-400 to-amber-600',
    SLATE: 'from-slate-700 to-slate-900',
    BLUE: 'from-blue-600 to-blue-800',
  } as Record<string, string>,
} as const;

export type ThemeMode = typeof THEME.MODES[keyof typeof THEME.MODES];
export type ThemeColors = keyof typeof THEME.ACCENT_COLORS;
