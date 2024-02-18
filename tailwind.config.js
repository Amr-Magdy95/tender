/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        loginFormBlue: "#004580",
        loginFormIcon: "#A49E9E",
        loginFormButtonColor: "#C3CDE2",
        titleTextBlue: "#004580",
      },
    },
  },
  plugins: [],
};
