import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    extend: {
      colors: {
        main: '#88aaee',
        overlay: 'rgba(0,0,0,0.8)', // background color overlay for alert dialogs, modals, etc.
  
        // light mode
        bg: '#dfe5f2',
        text: '#000',
        border: '#000',
  
        // dark mode
        darkBg: '#272933',
        darkText: '#eeefe9',
        darkBorder: '#000',
        secondaryBlack: '#212121', // opposite of plain white, not used pitch black because borders and box-shadows are that color 
      },
      borderRadius: {
        base: '3px'
      },
      boxShadow: {
        light: '-4px 4px 0px 0px #000',
        dark: '-4px 4px 0px 0px #000',
      },
      translate: {
        boxShadowX: '-4px',
        boxShadowY: '4px',
        reverseBoxShadowX: '4px',
        reverseBoxShadowY: '-4px',
      },
      fontWeight: {
        base: '400',
        heading: '900',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
