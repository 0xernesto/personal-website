/** @type {import('tailwindcss').Config} */

const config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			xs: "365px",
			sm: "440px",
			md: "550px",
			lg: "1024px",
			xl: "1280px",
		},
		extend: {
			colors: {
				// ***** Dark ***** //
				"dark-600": "#000000",
				"dark-500": "#111212",
				"dark-400": "#171717",
				"dark-300": "#1b1c1c",
				"dark-200": "#262626",
				"dark-100": "#404040",
				// **************** //

				// ***** Light ***** //
				"light-500": "#737373",
				"light-400": "#a3a3a3",
				"light-300": "#d4d4d4",
				"light-200": "#e5e5e5",
				"light-100": "#f8fafc",
				// ***************** //

				// ***** Primary ***** //
				"primary-200": "#0d9488",
				"primary-100": "#14b8a6",
				// ******************* //

				// ***** Accents ***** //
				"bad-accent": "#cf0202",
				// ******************* //
			},
		},
	},
	plugins: [],
};
export default config;
