// This page will display a blog post with a specific post ID.
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

const ShowBlogPost = (props) => {
	const { data, content } = matter(props.content);

	return (
		<div className="flex flex-col items-center justify-start w-full h-screen">
			<h1>{data.title}</h1>
			<h3>{data.description}</h3>
			<ReactMarkdown children={content} />
		</div>
	);
};

// This function returns data for Next.js to pre-render a page
// with said data. This is useful if we want to fetch data that
// changes often, and have the page update to show the most current
// data.
export const getServerSideProps = async (context) => {
	const fs = require("fs");

	const post = context.query.postId;

	const content = fs.readFileSync(
		`${process.cwd()}/content/${post}.md`,
		"utf8"
	);

	return {
		props: {
			content,
		},
	};
};

export default ShowBlogPost;
