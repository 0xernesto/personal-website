import React from "react";

import BlogPostBox from "../../components/BlogPostBox";
import { getBlogData } from "../../resources";

const Blog = async () => {
	const blogPosts = await getBlogData();

	return (
		<div className="flex w-full flex-1 flex-col items-center justify-start px-4 py-10">
			<div className="flex min-h-fit w-full max-w-4xl flex-col items-center">
				<h1 className="mb-6 text-3xl font-bold">Blog</h1>
				<div className="flex flex-col items-center justify-center">
					{blogPosts.map((post) => (
						<BlogPostBox key={post.slug} post={post} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Blog;
