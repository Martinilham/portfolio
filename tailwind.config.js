/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        hammer: ['hammerSmith', 'sans-serif'],
        potrait: ['potraitOne', 'sans-serif'],
        oswald: ['oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

