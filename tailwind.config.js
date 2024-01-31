/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "cVerydarkblue(mainbackground)": "hsl(233, 47%, 7%)",
"cDarkdesaturatedblue(cardbackground)": "hsl(244, 38%, 16%)",
"cSoftviolet(accent)": "hsl(277, 64%, 61%)",


"cWhite(mainheading,stats)":"hsl(0, 0%, 100%)",
"cSlightlytransparentwhite(mainparagraph)": "hsla(0, 0%, 100%, 0.75)",
"cSlightlytransparentwhite(statheadings)": "hsla(0, 0%, 100%, 0.6)",
      },
      fontFamily:{
      "Inter": ['Inter', "sans-serif"],
      "Lexend": ['Lexend Deca', "sans-serif"],
      }
    },
  },
  plugins: [],
}

