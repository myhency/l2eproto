module.exports = {
  content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  darkMode: 'class', // media
  plugins: [require('tailwind-scrollbar-hide')],
};
