const defaultTheme = require("tailwindcss/defaultTheme")
const plugin = require("tailwindcss/plugin")

module.exports = {
  purge: [
    "./pages/**/*.md",
    "./pages/**/*.njk",
    "./includes/**/*.njk",
    "./assets/**/*.svg",
    "./assets/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        link: "#fbf3f3",
      },
    },
  },

  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
    margin: ["responsive", "last", "first"],
    padding: ["responsive", "last"],
  },

  plugins: [
    plugin(function ({ addBase, addUtilities, theme }) {
      addBase({
        body: {
          "-webkit-font-smoothing": "subpixel-antialiased",
        },
      })
    }),
  ],
}
