/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto Mono", "monospace"],
    },
    extend: {
      backgroundColor: {
        primary: "#2F2824",
        secondary: "#1E1A17",
        tertiary: "#463C36",
      },
      colors: {
        link: "#BFA595",
        "active-link": "#463C36",
        primary: "#2F2824",
        secondary: "#1E1A17",
        tertiary: "#463C36",
      },
      backgroundImage: {
        "signin-bg": 'url("./assets/signinbg.svg")',
      },
    },
  },
  plugins: [],
};
