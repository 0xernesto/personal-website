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
				"dark-600": "#020617",
				"dark-500": "#0f172a",
				"dark-400": "#1e293b",
				"dark-300": "#334155",
				"dark-200": "#475569",
				"dark-100": "#64748b",
				// **************** //

				// ***** Light ***** //
				"light-500": "#94a3b8",
				"light-400": "#cbd5e1",
				"light-300": "#e2e8f0",
				"light-200": "#f1f5f9",
				"light-100": "#f8fafc",
				// ***************** //

				// ***** Primary ***** //
				"primary-200": "#0d9488",
				"primary-100": "#14b8a6",
				// ******************* //

				// ***** Accents ***** //
				"bad-accent": "#cf0202",
				"good-accent": "#4bd402",
				// ******************* //
			},
		},
	},
	plugins: [],
};
export default config;
