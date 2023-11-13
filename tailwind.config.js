module.exports = {
	content: [
		"./pages/**/*.{js, jsx, ts, tsx}",
		"./components/**/*.{js, jsx, ts, tsx}",
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
			typography: ({ theme }) => ({
				slate: {
					css: {
						"--tw-prose-body": theme("colors.slate[300]"),
						"--tw-prose-headings": theme("colors.slate[200]"),
						"--tw-prose-links": theme("colors.slate[200]"),
						"--tw-prose-bold": theme("colors.slate[200]"),
						"--tw-prose-counters": theme("colors.slate[200]"),
						"--tw-prose-bullets": theme("colors.slate[200]"),
						"--tw-prose-hr": theme("colors.slate[200]"),
						"--tw-prose-quotes": theme("colors.slate[200]"),
						"--tw-prose-quote-borders": theme("colors.slate[200]"),
						"--tw-prose-captions": theme("colors.slate[200]"),
						"--tw-prose-code": theme("colors.slate[200]"),
						"--tw-prose-pre-code": theme("colors.slate[200]"),
						"--tw-prose-pre-bg": theme("colors.slate[200]"),
						"--tw-prose-th-borders": theme("colors.slate[200]"),
						"--tw-prose-td-borders": theme("colors.slate[200]"),
					},
				},
			}),
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
