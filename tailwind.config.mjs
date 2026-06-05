/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-container": "#ffc82c",
        "on-primary-container": "#705400",
        "surface-variant": "#e8e2d3",
        "on-surface-variant": "#4f4633",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f9f3e3",
        "surface-container": "#f3eede",
        "surface-container-high": "#ede8d8",
        "surface": "#fff9e9",
        "on-surface": "#1d1c12",
        "background": "#fff9e9",
        "on-background": "#1d1c12",
        "primary": "#775a00",
        "secondary": "#006e2a",
        "secondary-fixed": "#8dfa9b",
        "tertiary": "#00639d",
        "tertiary-container": "#acd4ff",
        "outline-variant": "#d2c5ac",
        "outline": "#817661"
      },
      fontFamily: {
        "headline-xl-mobile": ["Plus Jakarta Sans"],
        "body-md": ["Plus Jakarta Sans"],
        "headline-lg": ["Plus Jakarta Sans"],
        "headline-md": ["Plus Jakarta Sans"],
        "body-lg": ["Plus Jakarta Sans"],
        "label-md": ["Plus Jakarta Sans"],
        "headline-xl": ["Plus Jakarta Sans"]
      }
    }
  },
  plugins: [],
}