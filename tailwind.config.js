// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // Include App Router files
    "./components/**/*.{js,ts,jsx,tsx}", // Include components
    "./pages/**/*.{js,ts,jsx,tsx}",     // If using Pages Router
    "./public/**/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

