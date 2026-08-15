/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFBF4',
          100: '#F3E7C4',
          200: '#E6C575',
          300: '#D7A747',
          400: '#C5A059',
          500: '#B89047',
          600: '#9B7433',
          700: '#7B5924',
          800: '#5F421A',
          900: '#462E12',
        },
        navy: {
          50: '#F0F4F8',
          100: '#D9E2EC',
          800: '#1C2541',
          900: '#0B132B',
          950: '#060B18',
        },
        sand: {
          50: '#FDFBF7',
          100: '#F8F6F0',
          200: '#F1ECE1',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        'gold-glow': '0 10px 30px -10px rgba(197, 160, 89, 0.3)',
        'premium': '0 20px 40px -15px rgba(11, 19, 43, 0.12)',
      }
    },
  },
  plugins: [],
}
