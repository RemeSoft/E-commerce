/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          primary: {
            light: "#ffffff",
            dark: "#ffffff",
          },
          secondary: {
            light: "#F7F8FA",
            dark: "#ffffff",
          },
          tertiary: {
            light: "#F4F4F4",
            dark: "#ffffff",
          },
          text: {
            primary: {
              light: "#334155",
              dark: "#ffffff",
            },
            secondary: {
              light: "#808080",
              dark: "#ffffff",
            },
            highlight: {
              light: "#ffffff",
              dark: "#ffffff",
            },
          },
          border: {
            light: "#E1E1E1",
            dark: "#ffffff",
          },
          state: {
            success: {
              background: "#DBF4F1",
              foreground: "#287F71",
            },
          },
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
