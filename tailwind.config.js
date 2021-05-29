module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "branding-dark": "#2D2D2D",
        "branding-light": "#F4EDE7",
        "branding-accent-primary": "#FAAF18",
        "branding-accent-primary-darker": "#ED7801",
        "branding-accent-secondary": "#8B542F",
      },
      fontFamily: {
        primary: ["Bowlby One SC", "cursive"],
        secondary: ["Scada", "sans-serif"],
      },
      spacing: {
        13: "3.25rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
