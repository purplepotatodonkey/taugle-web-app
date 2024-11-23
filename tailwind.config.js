/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/components/Header.jsx',
    './src/components/Mission.jsx',
    './src/components/How.jsx',
    './src/components/Footer.jsx',
    './src/pages/Chat.jsx',
    './src/App.jsx'
  ],
  theme: {
    extend: {
      colors: {
        peachOrange: '#F2D5B3',
        lightBrown: '#B97B65',
        darkBrown: '#8B3B2D',
        peach: {
          DEFAULT: '#F8E4D1', // Custom peach color for background
          300: '#F9D3B6', // Lighter shade for button hover
          400: '#E9C2A4', // Hover background color for button
        },
        brown: {
          500: '#9B6648', // Text for the heading
          800: '#5A3525', // Darker text for other elements
        },
      }
    },
  },
  plugins: [],
};

