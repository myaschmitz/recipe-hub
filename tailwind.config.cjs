/** @type {import('tailwindcss').Config}*/
import defaultTheme from 'tailwindcss/defaultTheme';

const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	plugins: [require('flowbite/plugin')],

	darkMode: 'class',

	theme: {
		screens: {
			'3xs': '375px',
			'2xs': '400px',
			xs: '475px',
			xsm: '700px',
			...defaultTheme.screens
		},
		extend: {
			colors: {
			}
		}
	}
};

module.exports = config;
