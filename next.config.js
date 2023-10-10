module.exports = {
	reactStrictMode: true,
	trailingSlash: true,
	exportPathMap: async () => {
		return {
			"/": { page: "/" },
			"/bio": { page: "/bio" },
			"/blog": { page: "/blog" },
			"/projects": { page: "/projects" },
			"/books": { page: "/books" },
			"/contact": { page: "/contact" },
			"/connect": {
				page: "/connect",
				query: { __nextDefaultLocale: "en" },
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
