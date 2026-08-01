import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#151515',
        paper: '#faf8f4',
        line: '#ded8cf',
        copper: '#b65f36',
        moss: '#3e5f4b',
        ocean: '#1c5f78'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 24px 70px rgba(21, 21, 21, 0.10)'
      }
    }
  },
  plugins: []
} satisfies Config
