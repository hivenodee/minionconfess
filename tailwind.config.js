// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Include the app directory
    "./pages/**/*.{js,ts,jsx,tsx}", // Include the pages directory if it exists
    "./components/**/*.{js,ts,jsx,tsx}", // Include the components directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
