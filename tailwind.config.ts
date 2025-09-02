import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				display: ['Cormorant Garamond', 'serif'],
				heading: ['Crimson Text', 'serif'],
				body: ['Inter', 'sans-serif'],
			},
			fontSize: {
				'xs': ['0.75rem', { lineHeight: '1rem' }],
				'sm': ['0.875rem', { lineHeight: '1.25rem' }],
				'base': ['1rem', { lineHeight: '1.75rem' }],
				'lg': ['1.125rem', { lineHeight: '1.75rem' }],
				'xl': ['1.25rem', { lineHeight: '1.75rem' }],
				'2xl': ['1.5rem', { lineHeight: '2rem' }],
				'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
				'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
				'5xl': ['3rem', { lineHeight: '1.1' }],
				'6xl': ['3.75rem', { lineHeight: '1.1' }],
			},
			letterSpacing: {
				tighter: '-0.05em',
				tight: '-0.025em',
				normal: '0',
				wide: '0.025em',
				wider: '0.05em',
				widest: '0.1em',
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				'petalz-gold': 'hsl(var(--petalz-gold))',
				'petalz-gold-light': 'hsl(var(--petalz-gold-light))',
				'petalz-gold-dark': 'hsl(var(--petalz-gold-dark))',
				'petalz-gold-muted': 'hsl(var(--petalz-gold-muted))',
				'petalz-champagne': 'hsl(var(--petalz-champagne))',
				'petalz-bronze': 'hsl(var(--petalz-bronze))',
				'petalz-black': 'hsl(var(--petalz-black))',
				'petalz-charcoal': 'hsl(var(--petalz-charcoal))',
				'petalz-white': 'hsl(var(--petalz-white))',
				'petalz-cream': 'hsl(var(--petalz-cream))',
				'petalz-gray': 'hsl(var(--petalz-gray))',
				'petalz-gray-medium': 'hsl(var(--petalz-gray-medium))',
				'petalz-gray-dark': 'hsl(var(--petalz-gray-dark))',
				'petalz-sage': 'hsl(var(--petalz-sage))',
				'petalz-navy': 'hsl(var(--petalz-navy))',
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				'soft': '0 2px 8px hsl(var(--petalz-black) / 0.04), 0 1px 3px hsl(var(--petalz-black) / 0.08)',
				'medium': '0 4px 12px hsl(var(--petalz-black) / 0.08), 0 2px 4px hsl(var(--petalz-black) / 0.04)',
				'large': '0 8px 25px hsl(var(--petalz-black) / 0.12), 0 3px 8px hsl(var(--petalz-black) / 0.08)',
				'elegant': '0 12px 40px -8px hsl(var(--petalz-gold) / 0.2)',
				'gold': '0 0 35px hsl(var(--petalz-gold) / 0.3)',
				'premium': '0 20px 60px -12px hsl(var(--petalz-navy) / 0.35)',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.4s ease-out',
				'slide-in-left': 'slide-in-left 0.4s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'shimmer': 'shimmer 2s ease-in-out infinite',
			},
			scale: {
				'102': '1.02',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
