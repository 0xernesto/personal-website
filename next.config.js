module.exports = {
	reactStrictMode: true,
	trailingSlash: true,
	exportPathMap: async () => {
		return {
			"/": { page: "/", query: { __nextDefaultLocale: "en-US" } },
			"/bio": { page: "/bio", query: { __nextDefaultLocale: "en-US" } },
			"/blog": { page: "/blog" },
			"/projects": {
				page: "/projects",
				query: { __nextDefaultLocale: "en-US" },
			},
			"/books": {
				page: "/books",
				query: { __nextDefaultLocale: "en-US" },
			},
			"/contact": {
				page: "/contact",
				query: { __nextDefaultLocale: "en-US" },
			},
			"/connect": {
				page: "/connect",
				query: { __nextDefaultLocale: "en-US" },
			},
		};
	},
	env: {
		CONTACT_FORM_ENDPOINT: process.env.CONTACT_FORM_ENDPOINT,
		GITBOOK_URL: "https://docs.ernestor.xyz",
		GITHUB_URL: "https://github.com/0xernesto",
		LINKEDIN_URL: "https://www.linkedin.com/in/0xernesto",
		TWITTER_URL: "https://twitter.com/ernestor_eth",
		WARPCAST_URL: "https://warpcast.com/ernesto",
	},
};
