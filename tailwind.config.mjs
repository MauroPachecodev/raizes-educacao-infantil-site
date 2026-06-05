import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				"on-secondary-fixed": "var(--on-secondary-fixed)",
				"primary-container": "var(--primary-container)",
				"surface-variant": "var(--surface-variant)",
				"on-error-container": "var(--on-error-container)",
				"on-primary-container": "var(--on-primary-container)",
				"on-surface-variant": "var(--on-surface-variant)",
				"inverse-surface": "var(--inverse-surface)",
				"surface-container-lowest": "var(--surface-container-lowest)",
				"on-tertiary": "var(--on-tertiary)",
				"secondary-fixed-dim": "var(--secondary-fixed-dim)",
				"surface-container": "var(--surface-container)",
				"tertiary-fixed": "var(--tertiary-fixed)",
				"on-tertiary-fixed": "var(--on-tertiary-fixed)",
				"surface-tint": "var(--surface-tint)",
				"background": "var(--background)",
				"on-background": "var(--on-background)",
				"on-error": "var(--on-error)",
				"on-secondary": "var(--on-secondary)",
				"primary-fixed": "var(--primary-fixed)",
				"secondary-container": "var(--secondary-container)",
				"secondary": "var(--secondary)",
				"on-surface": "var(--on-surface)",
				"on-primary-fixed": "var(--on-primary-fixed)",
				"on-secondary-fixed-variant": "var(--on-secondary-fixed-variant)",
				"secondary-fixed": "var(--secondary-fixed)",
				"surface-container-high": "var(--surface-container-high)",
				"surface-bright": "var(--surface-bright)",
				"on-tertiary-fixed-variant": "var(--on-tertiary-fixed-variant)",
				"tertiary-fixed-dim": "var(--tertiary-fixed-dim)",
				"inverse-primary": "var(--inverse-primary)",
				"surface": "var(--surface)",
				"inverse-on-surface": "var(--inverse-on-surface)",
				"on-secondary-container": "var(--on-secondary-container)",
				"on-tertiary-container": "var(--on-tertiary-container)",
				"surface-container-highest": "var(--surface-container-highest)",
				"on-primary-fixed-variant": "var(--on-primary-fixed-variant)",
				"on-primary": "var(--on-primary)",
				"error": "var(--error)",
				"outline-variant": "var(--outline-variant)",
				"outline": "var(--outline)",
				"tertiary": "var(--tertiary)",
				"surface-dim": "var(--surface-dim)",
				"primary": "var(--primary)",
				"surface-container-low": "var(--surface-container-low)",
				"error-container": "var(--error-container)",
				"primary-fixed-dim": "var(--primary-fixed-dim)",
				"tertiary-container": "var(--tertiary-container)"
			},
			borderRadius: {
				"DEFAULT": "var(--radius-default)",
				"lg": "var(--radius-lg)",
				"xl": "var(--radius-xl)",
				"2xl": "var(--radius-2xl)",
				"full": "9999px"
			},
			spacing: {
				"container-max": "var(--size-container-max)",
				"xl": "var(--size-xl)",
				"lg": "var(--size-lg)",
				"md": "var(--size-md)",
				"gutter": "var(--size-gutter)",
				"sm": "var(--size-sm)",
				"base": "var(--size-base)",
				"xs": "var(--size-xs)"
			},
			fontFamily: {
				"headline-xl-mobile": ["'Plus Jakarta Sans'", "sans-serif"],
				"body-md": ["'Plus Jakarta Sans'", "sans-serif"],
				"headline-lg": ["'Plus Jakarta Sans'", "sans-serif"],
				"headline-md": ["'Plus Jakarta Sans'", "sans-serif"],
				"body-lg": ["'Plus Jakarta Sans'", "sans-serif"],
				"label-md": ["'Plus Jakarta Sans'", "sans-serif"],
				"headline-xl": ["'Plus Jakarta Sans'", "sans-serif"]
			},
			fontSize: {
				"headline-xl-mobile": ["32px", { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "800" }],
				"body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
				"headline-lg": ["32px", { lineHeight: "40px", fontWeight: "700" }],
				"headline-md": ["24px", { lineHeight: "32px", fontWeight: "700" }],
				"body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
				"label-md": ["14px", { lineHeight: "20px", fontWeight: "600" }],
				"headline-xl": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "800" }]
			}
		},
	},
	plugins: [forms, containerQueries],
};