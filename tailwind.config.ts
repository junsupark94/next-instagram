import type { Config } from 'tailwindcss'

const config: Config = {
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
      dropShadow: {
        'around': '0px 0px 10px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        swell: 'swell 1s ease-in-out 1',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        swell: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.3)' },
        }
      }
    },
  },
  plugins: [],
}
export default config
