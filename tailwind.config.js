/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Cinzel', 'serif'],
        serif: ['Cormorant Garamond', 'serif'],
        'mono-portal': ['Space Mono', 'monospace'],
      },
      colors: {
        canvas: '#ffffff',
        'card-light': '#F7F7F7',
        'card-hover': '#F0F0F0',
        'ink-black': '#111111',
        'ink-gray': '#666666',
        'ink-light': '#999999',
        // Portal realm colors
        'void-dark': '#05060f',
        'void-light': '#0a0b1c',
        'crimson-main': '#8a1c2a',
        'gold-bright': '#e8d099',
        'gold-glow': '#f7e6b7',
        'cyan-bright': '#7da7d9',
      },
      gridTemplateColumns: {
        'bento-4': 'repeat(4, 1fr)',
      },
      letterSpacing: {
        'meta': '0.1em',
        'brand': '0.05em',
        'portal': '0.3em',
        'wide-portal': '0.4em',
      },
    },
  },
  plugins: [],
};