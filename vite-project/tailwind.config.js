/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: 'rgba(107, 63, 2, 1)',
        darkBrown: 'rgba(89, 53, 2, 1)',
        bgColor: 'rgba(239, 239, 239, 1)',
        loginColor: 'rgba(255, 255, 255, 0.9)'
      },
      fontFamily: {
        logo: 'Playfair Display'
      },
      backgroundImage: {
        loginBg: "url('/src/assets/loginBg.svg')"
      }
    },
  },
  plugins: [],
}

