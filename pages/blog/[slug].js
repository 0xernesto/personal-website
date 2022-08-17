import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const BlogDetail = ({ frontmatter: { title, date, img }, content }) => {
	return (
		<div className="flex flex-col items-center justify-start w-full min-h-screen">
			<article className="flex flex-col items-center max-w-6xl px-2 prose prose-slate">
				<h1>{title}</h1>
				<div>Posted on {date}</div>
				<img src={img} alt="img" />
				<div dangerouslySetInnerHTML={{ __html: marked(content) }} />
			</article>
		</div>
	);
};

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join("content"));

	const paths = files.map((filename) => ({
		params: {
			slug: filename.replace(".md", ""),
		},
	}));

	return {
		paths,
		fallback: false, //If path is invalid, show a 404 page
	};
}

export async function getStaticProps({ params: { slug } }) {
	const markdownWithMeta = fs.readFileSync(
		path.join("content", slug + ".md"),
		"utf-8"
	);

	const { data: frontmatter, content } = matter(markdownWithMeta);

	return {
		props: {
			frontmatter,
			slug,
			content,
		},
	};
}

export default BlogDetail;
