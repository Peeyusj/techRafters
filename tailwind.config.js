/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-blue': '#008CE5',
        'secondary-blue':'#D9F0FF',
        'dim-gray': '#F2F2F2',
        'primary-green': '#38996c',
        'light-blue': '#F2F8FD',
        'primary-black': '#2F2F2F',
        'light-black': '#595C76',
        'mid-black': '#2F2F2F',
        'dim-black':'#595C76',
        'primary-white': '#FFFFFF',
        'dark-white': '#616C87',
        'danger': '#EF4444',
        'light-gray': '#E5E7EB',
        'mid-gray': '#D1D5DB',
        "dark-green":"#3d9970"
      },
    },
  },
  plugins: [],
}
