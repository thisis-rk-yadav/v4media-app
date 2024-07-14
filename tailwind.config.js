/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          primary: 'var(--color-text-primary)',
          'primary-dark': 'var(--color-background-primary)'
        },
      },
      backgroundColor: {
        skin: {
          primary: 'var(--color-background-primary)',
          'primary-shade': 'var(--color-background-primary-shade)',
          'button-accent': 'var(--color-button-accent)',
          'button-hover': 'var(--color-button-hover)',
          'primary-dark': 'var(--color-backgorund-primary-dark)',
        }
      }
    },
    fontFamily: {
      vietnam: ["Be Vietnam Pro", "sans-serif"],
    },
  },
  plugins: [],
}

