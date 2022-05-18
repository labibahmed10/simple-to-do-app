module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a991f7",
          secondary: "#f6d860",
          accent: "#3d4451",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      // "light",
      // "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
