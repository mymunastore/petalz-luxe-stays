/**
 * Design System Utilities for Petalz Home
 * Enhanced design tools and utilities for consistent styling
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Enhanced utility function
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Design System Constants
export const DESIGN_TOKENS = {
  colors: {
    gold: 'hsl(var(--petalz-gold))',
    goldLight: 'hsl(var(--petalz-gold-light))',
    goldDark: 'hsl(var(--petalz-gold-dark))',
    champagne: 'hsl(var(--petalz-champagne))',
    bronze: 'hsl(var(--petalz-bronze))',
    black: 'hsl(var(--petalz-black))',
    charcoal: 'hsl(var(--petalz-charcoal))',
    white: 'hsl(var(--petalz-white))',
    cream: 'hsl(var(--petalz-cream))',
    gray: 'hsl(var(--petalz-gray))',
    grayMedium: 'hsl(var(--petalz-gray-medium))',
    grayDark: 'hsl(var(--petalz-gray-dark))',
    sage: 'hsl(var(--petalz-sage))',
    navy: 'hsl(var(--petalz-navy))',
  },
  gradients: {
    gold: 'var(--gradient-gold)',
    champagne: 'var(--gradient-champagne)',
    warm: 'var(--gradient-warm)',
    elegant: 'var(--gradient-elegant)',
    premium: 'var(--gradient-premium)',
    hero: 'var(--gradient-hero)',
  },
  shadows: {
    soft: 'var(--shadow-soft)',
    medium: 'var(--shadow-medium)',
    large: 'var(--shadow-large)',
    elegant: 'var(--shadow-elegant)',
    gold: 'var(--shadow-gold)',
    premium: 'var(--shadow-premium)',
  },
  typography: {
    display: 'var(--font-display)',
    heading: 'var(--font-heading)',
    body: 'var(--font-body)',
  },
  transitions: {
    smooth: 'var(--transition-smooth)',
    fast: 'var(--transition-fast)',
  }
} as const;

// Spacing Scale
export const SPACING_SCALE = {
  xs: '0.25rem',   // 4px
  sm: '0.5rem',    // 8px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  '2xl': '3rem',   // 48px
  '3xl': '4rem',   // 64px
  '4xl': '6rem',   // 96px
  '5xl': '8rem',   // 128px
} as const;

// Typography Scale
export const TYPOGRAPHY_SCALE = {
  xs: { fontSize: '0.75rem', lineHeight: '1rem' },
  sm: { fontSize: '0.875rem', lineHeight: '1.25rem' },
  base: { fontSize: '1rem', lineHeight: '1.75rem' },
  lg: { fontSize: '1.125rem', lineHeight: '1.75rem' },
  xl: { fontSize: '1.25rem', lineHeight: '1.75rem' },
  '2xl': { fontSize: '1.5rem', lineHeight: '2rem' },
  '3xl': { fontSize: '1.875rem', lineHeight: '2.25rem' },
  '4xl': { fontSize: '2.25rem', lineHeight: '2.5rem' },
  '5xl': { fontSize: '3rem', lineHeight: '1.1' },
  '6xl': { fontSize: '3.75rem', lineHeight: '1.1' },
} as const;

// Component Variants
export const COMPONENT_VARIANTS = {
  card: {
    default: 'bg-card rounded-2xl shadow-medium border border-petalz-gray/50 p-8',
    premium: 'bg-gradient-to-br from-petalz-white to-petalz-cream rounded-2xl shadow-premium border border-petalz-gold/20 p-8',
    elegant: 'bg-petalz-white/80 backdrop-blur-sm rounded-2xl shadow-elegant border border-petalz-gold/30 p-8',
    minimal: 'bg-card rounded-xl shadow-soft border border-petalz-gray/30 p-6',
  },
  text: {
    gradient: 'bg-gradient-to-r from-petalz-gold to-petalz-gold-light bg-clip-text text-transparent',
    champagne: 'bg-gradient-to-r from-petalz-champagne to-petalz-gold-muted bg-clip-text text-transparent',
    elegant: 'font-heading font-normal italic text-petalz-gray-medium',
    display: 'font-display font-light tracking-tight',
  },
  animation: {
    fadeInUp: 'opacity-0 translate-y-4 transition-all duration-500 ease-out',
    slideIn: 'opacity-0 translate-x-4 transition-all duration-300 ease-out',
    scaleIn: 'opacity-0 scale-95 transition-all duration-200 ease-out',
    float: 'animate-float',
    pulse: 'animate-pulse',
  }
} as const;

// Utility Functions
const designUtils = {
  // Get responsive classes
  responsive: (base: string, md?: string, lg?: string, xl?: string) => {
    let classes = base;
    if (md) classes += ` md:${md}`;
    if (lg) classes += ` lg:${lg}`;
    if (xl) classes += ` xl:${xl}`;
    return classes;
  },

  // Generate hover states
  hover: (baseClasses: string, hoverClasses: string) => {
    return `${baseClasses} hover:${hoverClasses} transition-all duration-300`;
  },

  // Focus ring utility
  focusRing: (color: keyof typeof DESIGN_TOKENS.colors = 'gold') => {
    return `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-petalz-${color} focus-visible:ring-offset-2 focus-visible:ring-offset-background`;
  },

  // Animation delay utility
  stagger: (order: number, delay: number = 100) => {
    return {
      animationDelay: `${order * delay}ms`
    };
  },

  // Breakpoint utilities
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Container queries
  container: (maxWidth: 'sm' | 'md' | 'lg' | 'xl' | '2xl' = 'xl') => {
    return `max-w-${maxWidth === 'xl' ? '7xl' : maxWidth} mx-auto px-4 lg:px-8`;
  },

  // Section spacing
  section: (size: 'sm' | 'md' | 'lg' | 'xl' = 'lg') => {
    const spacing = {
      sm: 'py-12 px-4 lg:px-8',
      md: 'py-16 px-4 lg:px-8',
      lg: 'py-20 px-4 lg:px-8',
      xl: 'py-24 px-4 lg:px-8',
    };
    return spacing[size];
  },

  // Card hover effects
  cardHover: (variant: 'default' | 'premium' | 'elegant' = 'default') => {
    const effects = {
      default: 'hover:shadow-elegant hover:border-petalz-gold/30 hover:scale-105',
      premium: 'hover:shadow-elegant hover:scale-105 hover:-translate-y-2',
      elegant: 'hover:shadow-gold hover:border-petalz-gold/50 hover:scale-102',
    };
    return `transition-all duration-500 ${effects[variant]}`;
  },

  // Text gradients
  textGradient: (variant: keyof typeof COMPONENT_VARIANTS.text) => {
    return COMPONENT_VARIANTS.text[variant];
  },

  // Performance optimization classes
  performance: {
    willChange: 'will-change-transform',
    gpuAccelerated: 'transform-gpu',
    containLayout: 'contain-layout',
    containStyle: 'contain-style',
  },
};

// Theme-aware color utilities
const colorUtils = {
  withOpacity: (color: string, opacity: number) => {
    return `${color}/${Math.round(opacity * 100)}`;
  },

  gradient: (from: string, to: string, direction: string = '135deg') => {
    return `linear-gradient(${direction}, ${from}, ${to})`;
  },

  shadow: (color: string, opacity: number = 0.1) => {
    return `0 10px 30px -10px ${color}/${Math.round(opacity * 100)}`;
  },
};

// Animation utilities
const animationUtils = {
  entrance: {
    fadeInUp: 'animate-fade-in-up',
    slideInRight: 'animate-slide-in-right',
    scaleIn: 'animate-scale-in',
  },

  continuous: {
    float: 'animate-float',
    pulse: 'animate-pulse',
    bounce: 'animate-bounce',
  },

  hover: {
    scale: 'hover:scale-105 transition-transform duration-300',
    lift: 'hover:-translate-y-2 transition-transform duration-300',
    glow: 'hover:shadow-gold transition-shadow duration-300',
  },

  staggered: (children: number, delay: number = 100) => {
    return Array.from({ length: children }, (_, i) => ({
      animationDelay: `${i * delay}ms`
    }));
  },
};

// Layout utilities
const layoutUtils = {
  grid: {
    responsive: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
    hero: 'grid grid-cols-1 lg:grid-cols-2 gap-12 items-center',
    feature: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8',
  },

  flex: {
    center: 'flex items-center justify-center',
    between: 'flex items-center justify-between',
    column: 'flex flex-col',
    wrap: 'flex flex-wrap',
  },

  position: {
    absolute: {
      center: 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
      topRight: 'absolute top-4 right-4',
      bottomLeft: 'absolute bottom-4 left-4',
    },
    relative: 'relative',
    sticky: 'sticky top-0',
  },
};

// Validation utilities
const validators = {
  isValidColor: (color: string): boolean => {
    return /^hsl\([\d\s%,\.]+\)$/.test(color) || /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
  },

  isValidSpacing: (spacing: string): boolean => {
    return /^\d+(\.\d+)?(px|rem|em|%)$/.test(spacing);
  },

  isValidBreakpoint: (breakpoint: string): boolean => {
    return Object.keys(designUtils.breakpoints).includes(breakpoint);
  },
};

// Export all utilities
export {
  DESIGN_TOKENS as tokens,
  SPACING_SCALE as spacing,
  TYPOGRAPHY_SCALE as typography,
  COMPONENT_VARIANTS as variants,
  designUtils,
  colorUtils,
  animationUtils,
  layoutUtils,
  validators,
};