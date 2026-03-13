/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        yellow:        '#F5C800',
        'yellow-dark': '#C9A200',
        green:         '#1B6B35',
        'green-light': '#239B4E',
        'green-pale':  '#E8F5ED',
        dark:          '#0A0A0A',
        surface:       '#1E1E1E',
        raised:        '#161616',
        muted:         '#2E2E2E',
        cream:         '#F7F4EE',
        'cream-dark':  '#EEE9E0',
      },
      fontFamily: {
        bebas:  ['"Bebas Neue"', 'sans-serif'],
        barlow: ['"Barlow Condensed"', 'sans-serif'],
        body:   ['Barlow', 'sans-serif'],
      },
      fontSize: {
        'hero': 'clamp(5rem, 12vw, 11rem)',
        'section': 'clamp(2.5rem, 5vw, 4.5rem)',
      },
      backgroundImage: {
        'stadium': "url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Estadio_Jaime_Moron_Leon_desde_la_tribuna.jpg/1280px-Estadio_Jaime_Moron_Leon_desde_la_tribuna.jpg')",
      },
      animation: {
        'slide-left': 'slideLeft 30s linear infinite',
        'blink': 'blink 1.5s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        slideLeft: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%':      { opacity: 0.2 },
        },
        fadeUp: {
          '0%':   { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}