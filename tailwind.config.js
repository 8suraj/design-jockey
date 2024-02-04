/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				SFPro: 'SF Pro',
				MExtended: 'Monument Extended', // Adds a new `font-display` class
			},
		},
		colors: {
			black: '#000000',
			black2: '#00000040',
			black3: '#1A1A1A',
			black4: '#171717',
			'black-light': '#0C0C0C',
			'color-primary': '#C4FE01',
			'color-secondary': '#0038FF',
			white: '#FFFFFF',
			'grey-dark': '#282828',
			'grey-light': '#939393',
			transparent: 'transparent',
			red: '#FF0000',
		},
		screens: {
			m1: '320px',
			// => @media (min-width: 320px) { ... }
			m2: '375px',

			m3: '425px',

			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }
			xl3: '1280px',

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
	},
	plugins: [],
};
