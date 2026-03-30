import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FAF6F0',
          100: '#F5EDE0',
          200: '#E8D7C3',
          300: '#D4BE9A',
          400: '#B8956F',
          500: '#A88650',
          600: '#8D6F3F',
          700: '#725832',
          800: '#574326',
          900: '#3C2E1A',
        },
      },
    },
  },
  plugins: [],
}

export default config
