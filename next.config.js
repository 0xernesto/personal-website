module.exports = {
	reactStrictMode: true,
	trailingSlash: true,
	exportPathMap: async () => {
		return {
			"/": { page: "/" },
			"/about": { page: "/about" },
			"/contact": { page: "/contact" },
			"/blog": { page: "/blog" },
			"/projects": { page: "/projects" },
		};
	},
};
