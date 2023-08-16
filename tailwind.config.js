const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      variants: {
        textColor: ['responsive', 'hover', 'focus', 'group-hover'],
      },
      colors: {
        white: '#F2F2F2F2',
        primary: {
          DEFAULT: '#E50000',
          '50': '#FF9E9E',
          '100': '#FF8989',
          '200': '#FF6060',
          '300': '#FF3838',
          '400': '#FF0F0F',
          '500': '#E50000',
          '600': '#AD0000',
          '700': '#750000',
          '800': '#3D0000',
          '900': '#050000',
          '950': '#000000',
          'background': '#3e1240',
          'text': '#abb5d1',
          'text-muted': '#56617B',
          'buttonTextColor': '#ffffff',
          'logoColor': '#FF0093'
        },
        darkblue: {
          DEFAULT: '#111D36',
          '50': '#313C9B',
          '100': '#2E3B93',
          '200': '#232A70',
          '300': '#202965',
          '400': '#1C2759',
          '500': '#162546',
          '600': '#14213E',
          '700': '#111D36',
          '800': '#0F192F',
          '900': '#0C1527',
          '950': '#0B1123',
        },
        immutablex: {
          primary: '#2EECFF',
          secondary: '#162546'
        },
        synquote: {
          primary: '#80E2EB',
          secondary: '#2E5970'
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      animation: {
        text: 'text 5s ease infinite',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      // Add a `third` variant, ie. `third:pb-0`
      addVariant('scrollbar', '&::-webkit-scrollbar');
      addVariant('scrollbar-thumb', '&::-webkit-scrollbar-thumb')
      addVariant('focus-peer', '.focus-peer &')
      addVariant('wide-page', '.wide-page &')
    }),
    require("tailwindcss-animate")
  ],
}
