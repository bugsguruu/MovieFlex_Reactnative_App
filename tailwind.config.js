/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#030014",
        secondary: "#140034",
        light: {
          100: '#D6C6FF',
          200: '#B899FF',
          300: '#9A6CFF',
        },
        dark: {
          100: '#000000',
          200: '#140034',
        },
        accent: "#AB8BFF"
      },
    },
  },
  plugins: [],
}