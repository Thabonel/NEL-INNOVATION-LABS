/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a0a0a',
        'neon-purple': '#a855f7',
        'neon-blue': '#3b82f6',
        'neon-cyan': '#06b6d4',
        'text-primary': '#f8fafc',
        // Additional grays for dark theme
        gray: {
          800: '#1f2937',
          900: '#111827',
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #6b46c1 0%, #3b82f6 100%)',
      },
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      backdropBlur: {
        'xl': '20px',
      }
    },
  },
  plugins: [],
}