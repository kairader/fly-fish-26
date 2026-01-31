/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'system-ui', 'sans-serif'],
        serif: ['Erode', 'Georgia', 'serif'],
      },
      colors: {
        cream:     '#FAF7F2',
        parchment: '#F0EBE1',
        ink:       '#1A1715',
        stone:     '#6B635A',
        rule:      '#D4CFC7',
        peach:     '#F2DDD0',
        sage:      '#D5DDD2',
        sky:       '#D0DBE5',
        wheat:     '#E8DEC8',
        clay:      '#D9C4AD',
        river:     '#3B6E8F',
        forest:    '#4A6741',
      },
      maxWidth: {
        'article': '72rem',
        'prose':   '40rem',
      },
      spacing: {
        'section': 'clamp(4rem, 8vw, 8rem)',
        'gutter':  'clamp(1.5rem, 3vw, 3rem)',
      },
    },
  },
  plugins: [],
}
