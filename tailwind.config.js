/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#124E38', // Dark Green
        'primary-light': '#1A6D4F', // Lighter Green
        'primary-dark': '#0A3325', // Darker Green
        'secondary': '#0F3460', // Navy Blue
        'secondary-light': '#1A4F8C', // Lighter Navy Blue
        'secondary-dark': '#092340', // Darker Navy Blue
        'accent': '#E9F7EF', // Light Green
        'accent-yellow': '#FFC107', // Accent Gold
        'accent-orange': '#FF6B35', // Accent Orange
        'accent-teal': '#2EC4B6', // Accent Teal
        'success': '#28A745', // Success green
        'warning': '#FFC107', // Warning yellow
        'danger': '#DC3545', // Danger red
        'info': '#17A2B8', // Info blue
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 1.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}