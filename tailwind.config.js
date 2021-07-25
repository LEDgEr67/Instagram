module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },

  theme: {
    fill: (theme) => ({
      red: theme("colors.red.primary"),
    }),
    colors: {
      white: "#ffffff",
      blue: {
        medium: "#0095f6",
      },
      black: {
        light: "#005c98",
        faded: "#00000059",
      },
      gray: {
        primary: "#dbdbdb",
        base: "#616161",
        background: "#fafafa",
      },
      red: {
        primary: "#ed4956",
      },
    },
  },
  variants: {
    display: ["group-hover "],
  },
};
