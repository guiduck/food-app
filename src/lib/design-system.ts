/**
 * Design Tokens
 *
 * All design system tokens.
 */

export const colors = {
  // Brand Colors
  brand: {
    primary: "#7B1FA2",
    dark: "#580F78",
  },

  // Teal Brand
  teal: {
    primary: "#00A296",
    background: "#F2FAFA",
    text: "#027A7A",
  },

  // Status Colors
  status: {
    success: "#02A117",
    warning: "#FFB300",
    error: "#D2373C",
  },

  // Neutral Colors
  neutral: {
    white: "#ffffff",
    containers: "#EEF0F5",
    icons: "#A8ADB7",
    textSecondary: "#6D6F73",
    textMedium: "#393A3C",
    textPrimary: "#202326",
    dividers: "#CDD1D9",
  },
} as const;

export const spacing = {
  xxs: "6px",
  xs: "8px",
  s: "12px",
  m: "16px",
  l: "24px",
  xl: "32px",
  xxl: "68px",
} as const;

export const borderRadius = {
  s: "4px",
  m: "8px",
} as const;

export const fontSize = {
  xs: "12px",
  s: "14px",
  m: "16px",
  l: "20px",
  xl: "24px",
} as const;

// Essential component utilities
export const designUtils = {
  /**
   * Button variants for food delivery app
   */
  button: {
    primary:
      "bg-primary hover:bg-primary-dark text-primary-foreground px-m py-s rounded-m font-medium transition-colors",
    secondary:
      "bg-secondary hover:bg-neutral-100 text-secondary-foreground px-m py-s rounded-m font-medium transition-colors",
    teal: "bg-teal hover:bg-teal/90 text-white px-m py-s rounded-m font-medium transition-colors",
    destructive:
      "bg-destructive hover:bg-destructive/90 text-destructive-foreground px-m py-s rounded-m font-medium transition-colors",
    ghost:
      "text-primary hover:bg-primary/10 px-m py-s rounded-m font-medium transition-colors",
  },

  /**
   * Card variants for food items and UI containers
   */
  card: {
    default:
      "bg-card text-card-foreground p-l rounded-m border border-border shadow-sm",
    food: "bg-card p-m rounded-m border border-border shadow-sm hover:shadow-md transition-shadow",
    elevated:
      "bg-card text-card-foreground p-l rounded-m border border-border shadow-md",
  },

  /**
   * Text hierarchy for food delivery content
   */
  text: {
    heading: {
      h1: "text-xl font-bold text-text-primary",
      h2: "text-l font-semibold text-text-primary",
      h3: "text-m font-semibold text-text-primary",
    },
    body: {
      large: "text-m text-text-primary",
      medium: "text-s text-text-primary",
      small: "text-xs text-text-secondary",
    },
    price: "text-l font-bold text-primary",
  },

  /**
   * Status indicators for orders and delivery
   */
  status: {
    success:
      "bg-success/10 text-success px-s py-xs rounded-s text-xs font-medium",
    warning:
      "bg-warning/10 text-warning px-s py-xs rounded-s text-xs font-medium",
    error:
      "bg-destructive/10 text-destructive px-s py-xs rounded-s text-xs font-medium",
  },
};

// Type definitions
export type ColorPalette = typeof colors;
export type SpacingScale = typeof spacing;
export type BorderRadiusScale = typeof borderRadius;
export type FontSizeScale = typeof fontSize;

export default {
  colors,
  spacing,
  borderRadius,
  fontSize,
  designUtils,
};
