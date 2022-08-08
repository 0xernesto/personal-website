// This page will display a list of all blogs that I have written.
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "../../utils/utilityFunctions";
import BlogPostBox from "../../components/BlogPostBox";

const BlogPosts = ({ blog }) => {
	return (
		<div className="flex flex-col items-center justify-start w-full h-full">
			<h1 className="text-3xl font-bold">My Blog Posts</h1>
			<p>These are all my blog posts.</p>
			<div className="flex flex-col items-center justify-center w-11/12">
				{blog.map((post, index) => (
					<BlogPostBox key={index} post={post} />
				))}
			</div>
		</div>
	);
};

// This function gets called at build time on server-side and won't be called at
// run time on client-side. Next.js uses the data returned by this function to
// pre-render the page.
export const getStaticProps = async () => {
	// 1. Get files from the content directory
	const files = fs.readdirSync(path.join("content"));

	// 2. Get slug and frontmatter from content
	const blog = files.map((filename) => {
		// Create slug
		const slug = filename.replace(".md", "");

		// Get frontmatter
		const markdownWithMeta = fs.readFileSync(
			path.join("content", filename),
			"utf-8"
		);

		const { data: frontmatter } = matter(markdownWithMeta);

		return {
			slug,
			frontmatter,
		};
	});

	return {
		props: {
			blog: blog.sort(sortByDate),
		},
	};
};

export default BlogPosts;
