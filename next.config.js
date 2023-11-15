/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const prod = process.env.NODE_ENV === "production";

const withPWA = require("next-pwa")({
	dest: "public",
	register: true,
	skipWaiting: true,
	disable: !prod,
});

module.exports = withPWA({
	reactStrictMode: true,
	trailingSlash: true,
	output: "export",
	env: {
		// ********* PRIVATE ********* //
		CONTACT_FORM_ENDPOINT: process.env.CONTACT_FORM_ENDPOINT,
		TELEGRAM_URL: process.env.TELEGRAM_URL,

		// ********* PUBLIC ********* //
		GITBOOK_URL: "https://docs.ernestor.xyz",
		GITHUB_URL: "https://github.com/0xernesto",
		LINKEDIN_URL: "https://www.linkedin.com/in/0xernesto",
		TWITTER_URL: "https://twitter.com/ernestor_eth",
		WARPCAST_URL: "https://warpcast.com/ernesto",
	},
});
