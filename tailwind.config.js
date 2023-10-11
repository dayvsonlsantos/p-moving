/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'moving-orange-01': "#F0A65B",
        'moving-orange-01-35': "rgba(240, 166, 91, 0.35)",
        'moving-blue': "#384550"
      },
      backgroundColor: {
        'moving-orange-01': "#F0A65B !important",
        'moving-orange-01-35': "rgba(240, 166, 91, 0.35)",
        'moving-blue': "#384550"
      }
    },
    screens: {
      'small': {'max': '450px'},
      'medium': {'min': '451px', 'max': '1280px'},
      'larger': {'min': '1281px', 'max': '1750px'},
      'extra-larger': {'min': '1751px'},
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
