import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e4eefb',
          100: '#bcd5f5',
          300: '#639de8',
          500: '#1b61bb',
          700: '#134586',
        },
        beige: {
          50: '#fdfdfc',
          500: '#f4f4ed',
          600: '#ececdf',
        },
        'brand-green': '#39ae5e',
        'brand-yellow': '#f9e180',
        'brand-yellow-dark': '#f3c50c',
        grey: {
          200: '#cbcccd',
          700: '#717275',
          900: '#323334',
        },
        'blue-light': '#ebf4ff',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'DM Sans', 'sans-serif'],
        serif: ['var(--font-serif)', 'Lora', 'serif'],
      },
      borderRadius: {
        card: '18px',
        pill: '37.5px',
      },
    },
  },
  plugins: [],
}

export default config
