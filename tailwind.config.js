/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		colors: {
			black: '#000000',
			black2: '#00000040',
			'black-light': '#0C0C0C',
			'color-primary': '#C4FE01',
			'color-secondary': '#0038FF',
			white: '#FFFFFF',
			'grey-dark': '#282828',
			'grey-light': '#939393',
		},
	},
	plugins: [],
};
