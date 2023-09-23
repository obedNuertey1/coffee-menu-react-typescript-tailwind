/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        "twitter-blue": "#1DA1F2",
        "burlywood": "burlywood",
        "brown": "brown"
      },
      fontFamily:{
        'impact': "Impact, serif",
        'helvetica': "Helvetica Neue, Helvetica, Arial, sans-serif",
        'playfair': "Playfair Display, serif"
      }
    },
  },
  plugins: [],
}

 