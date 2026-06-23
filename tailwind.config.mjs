/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'neon-cyan': '#00f0ff',
        'neon-purple': '#b347ea',
        'neon-pink': '#ff2d95',
        'dark-bg': '#0a0a0f',
        'dark-card': '#12121a',
        'dark-border': '#1e1e2e',
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
