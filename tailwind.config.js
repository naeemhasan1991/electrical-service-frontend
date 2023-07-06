/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		colors: {
			'primary': '#FCCB06',
			'light': '#FFF7D4',
			'white': '#FFFFFF',
			'black': '#000000'

		},
		fontFamily: {
			sans: ['Fira Sans', 'sans-serif', 'Ubuntu'],
			notoKufi: ['Noto Kufi Arabic'],
		}
	},
	plugins: [],
}

