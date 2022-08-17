import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "../../utils/utilityFunctions";
import BlogPostBox from "../../components/BlogPostBox";

const BlogPosts = ({ blog }) => {
	return (
		<div className="flex flex-col items-center justify-start w-full min-h-screen">
			<h1 className="mb-5 text-3xl font-bold">Blog</h1>
			<div className="flex flex-col items-center justify-center w-11/12 h-fit">
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
