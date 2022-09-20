const THEME_COLORS = {
  primary: '#18134D',
  secondary: '#00D989',
  accent: '#00D989',
  content: '#242424',
  black: '#1C1C1C',
  beige: {
    DEFAULT: '#F0AA80',
    dark: '#E1793A',
    medium: '#F8D3C0',
    light: '#FEF8F4',
  },
  green: {
    DEFAULT: '#115357',
    dark: '#043134',
    medium: '#A3DFC7',
    light: '#E9FAF3',
  },
  blue: {
    DEFAULT: '#0123FF',
    light: '#0C35BF',
    dark: '#18134D',
  },
};

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ...THEME_COLORS,
      },
    },
  },
  plugins: [],
};
