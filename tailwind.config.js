/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
]
}

