/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {animation: {
      'bounce-slow': 'bounce 2s infinite',
      'pulse-slow': 'pulse 4s infinite',
      'fade-in': 'fadeIn 0.7s ease-in forwards',
      'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      fadeInUp: {
        '0%': { opacity: '0', transform: 'translateY(10px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
    },
  },  
},
  plugins: [],
};
