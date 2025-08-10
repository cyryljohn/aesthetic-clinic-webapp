/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8f0f7',
          100: '#c8dded',
          200: '#a5c8e1',
          300: '#81b3d5',
          400: '#66a3cd',
          500: '#4b93c5',
          600: '#3f84b9',
          700: '#3471a5',
          800: '#295f91',
          900: '#1b3e6a',
        },
        secondary: {
          50: '#e0eff0',
          100: '#b3d9db',
          200: '#80c1c4',
          300: '#4da8ad',
          400: '#26969c',
          500: '#00848b',
          600: '#007680',
          700: '#00646f',
          800: '#00525e',
          900: '#00343f',
        },
        cream: {
          50: '#faf8f5',
          100: '#f3ede4',
          200: '#ebe2d2',
          300: '#e3d6c0',
          400: '#ddcdb2',
          500: '#d7c4a4',
          600: '#cdb695',
          700: '#bfa27e',
          800: '#b18e67',
          900: '#966c44',
        },
        sage: {
          50: '#ecf2f0',
          100: '#d0dfda',
          200: '#b1cac2',
          300: '#92b5aa',
          400: '#7aa697',
          500: '#639785',
          600: '#578878',
          700: '#487466',
          800: '#3a6154',
          900: '#254037',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'display': ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}