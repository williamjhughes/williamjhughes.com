// eslint-disable-next-line @typescript-eslint/no-require-imports
const theme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				mono: ['Jetbrains Mono', ...theme.fontFamily.mono]
			},
			container: {
				center: true
			}
		}
	},
	plugins: []
};
