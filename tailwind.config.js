/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
      },
         animation: {
        loader: 'loader-animation 1s infinite alternate',
      },
      keyframes: {
        'loader-animation': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}

