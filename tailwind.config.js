/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-plus-jakarta)'],
        mono: ['var(--font-jetbrains-mono)'],
      },
      animation: {
        'fadeInUp': 'fadeInUp 1s ease-out forwards',
        'draw': 'draw 3s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        draw: {
          'from': {
            strokeDasharray: '2000',
            strokeDashoffset: '2000',
          },
          'to': {
            strokeDasharray: '2000',
            strokeDashoffset: '0',
          },
        },
      },
    },
  },
  plugins: [],
}
