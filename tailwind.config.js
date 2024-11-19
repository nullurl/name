/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'handwriting-en': ['Dancing Script', 'cursive'],
        'handwriting-ja': ['Noto Serif JP', 'serif'],
        'handwriting-zh': ['Ma Yen Xing', 'cursive'],
      },
    },
  },
  plugins: [],
}