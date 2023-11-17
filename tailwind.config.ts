import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  //darkMode: 'class',
  theme: {
    
    screens: {
      '2xl': {'max': '1535px'},

      'xl': {'max': '1280px'},

      'lg': {'max': '1023px'},

      'md': {'max': '767px'},

      'sm': {'max': '639px'},
    },

    extend: {
      display: ["group-hover"],
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        'light-gray': 'rgb(250, 250, 252)',
        'gray': 'rgb(209, 209, 209)',
        'blue-gray': 'rgb(128, 130, 133)',
        'dark-gray': 'rgb(85, 85, 85)',
        'primary': 'rgb(13, 12, 34)',
        'secondary': 'rgb(12, 0, 255)',
        'green': 'rgb(4, 186, 0)',
        "blood-red": 'rgb(255, 0, 0)',
      }
    },
  },
  plugins: [],
}
export default config
