/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#1E392A',
          dark: '#162e21',
          deep: '#0f2419',
        },
        gold: {
          DEFAULT: '#FFB800',
          light: '#FFD166',
          dark: '#E5A600',
        },
        offwhite: '#FDFDFD',
        lightBg: '#F8F9FA',
        grayBody: '#4B5563',
      },
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],
      },
    },
  },
  plugins: [],
};
