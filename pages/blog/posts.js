// This page will display a list of all blogs that I have written.
import matter from "gray-matter";
import BlogPostBox from "../../components/BlogPostBox";

const BlogPosts = (props) => {
	const blogData = props.blogData.map((post) => matter(post));
	const listItems = blogData.map((listItem) => listItem.data);

	return (
		<div className="flex flex-col items-center justify-start w-full h-full">
			<h1 className="text-3xl font-bold">My Blog Posts</h1>
			<p>These are all my blog posts.</p>
			<div className="flex flex-col items-center justify-center w-11/12">
				{listItems.map((post, i) => (
					<BlogPostBox key={i} post={post} />
				))}
			</div>
		</div>
	);
};

// This function gets called at build time on server-side and won't be called at
// run time on client-side. Next.js uses the data returned by this function to
// pre-render the page.
export const getStaticProps = async () => {
	const fs = require("fs");

	const files = fs.readdirSync(`${process.cwd()}/content`, "utf-8");

	const blog = files.filter((fn) => fn.endsWith(".md"));

	const blogData = blog.map((post) => {
		const path = `${process.cwd()}/content/${post}`;
		const rawContent = fs.readFileSync(path, {
			encoding: "utf-8",
		});

		return rawContent;
	});

	return {
		props: {
			blogData,
		},
	};
};

export default BlogPosts;
