/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'work-sans': ['"Work Sans"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'emerald-green': '#50c878',
        'gold': '#FFD700',
        'brown': '#421e15',
        'dark-purple': '#20081c',
        'charcoal-black': '#0000006b',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

