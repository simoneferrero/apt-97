/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        theme: 'var(--theme)',
        background: 'var(--background)',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      dropShadow: {
        title: '2px 4px 6px rgba(4,48,44,0.9)',
      },
      borderWidth: {
        1: '1px',
      },
    },
    fontFamily: {
      cursive: ['Dancing Script', 'cursive'],
      body: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}
