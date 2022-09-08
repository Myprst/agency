/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#00d9a6',
      'second': '#9be15d',
      'white': '#fff',
      'black': '#000000'
    },
    fontFamily: {
      'sans': ['Quicksand', 'sans-serif'],
    },
    screens: {
      'sm': { 'max': '480px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }
      'mm': { 'min': '480px', 'max': '740px' },
      
      'md': { 'min': '480px', 'max': '960px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': { 'min': '960px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

    },
  },
  plugins: [],
}
