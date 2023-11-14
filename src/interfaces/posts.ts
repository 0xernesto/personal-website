export type Post = {
	slug: string;
	frontmatter: {
		[key: string]: string;
	};
	content: string;
};

export interface IPostBox {
	post: Post;
}
