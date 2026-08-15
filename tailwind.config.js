/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        casaoro: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FCA5A5',
          300: '#F87171',
          400: '#EF4444',
          500: '#E53935',
          600: '#D32F2F', // Official Casaoro Red
          700: '#C62828',
          800: '#B71C1C',
          900: '#8E0000',
          950: '#5C0000',
        },
        slate: {
          950: '#0F172A',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        'casaoro-glow': '0 10px 30px -10px rgba(211, 47, 47, 0.3)',
      }
    },
  },
  plugins: [],
}
