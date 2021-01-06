const defaultTheme = require("tailwindcss/defaultTheme")
const plugin = require("tailwindcss/plugin")
const colors = require("tailwindcss/colors")

module.exports = {
  purge: [
    "./pages/**/*.md",
    "./pages/**/*.njk",
    "./_includes/**/*.njk",
    "./assets/**/*.svg",
    "./assets/**/*.js",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      yellow: colors.amber,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
    },
    extend: {
      fontFamily: {
        sans: ["inter", ...defaultTheme.fontFamily.sans],
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
