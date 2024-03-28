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
				primary: {
					'50': '#f0faf1',
				    '100': '#dbf0e1',
				    '200': '#bee4d0',
				    '300': '#8fd1bb',
				    '400': '#58b6a6',
				    '500': '#409a9c',
				    '600': '#367081',
				    '700': '#32536c',
				    '800': '#2f3f5b',
				    '900': '#2b314f',
				    '950': '#191a33',
				},
				
			}
		}
	}
};

module.exports = config;
