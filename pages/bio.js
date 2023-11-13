import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";

const Bio = ({ content }) => {
	// Create and set a custom renderer for marked, to open links in separate tabs
	const renderer = new marked.Renderer();
	const linkRenderer = renderer.link;
	renderer.link = (href, title, text) => {
		const html = linkRenderer.call(renderer, href, title, text);
		return html.replace(
			/^<a /,
			'<a target="_blank" rel="noopener noreferrer" '
		);
	};
	marked.setOptions({ renderer });

	return (
		<div className="flex w-full flex-1 flex-col items-center justify-start py-10 px-4">
			<article className="flex min-h-fit max-w-4xl w-full flex-col prose prose-slate">
				<h1 className="text-3xl font-bold mb-0">Bio</h1>
				<div dangerouslySetInnerHTML={{ __html: marked(content) }} />
			</article>
		</div>
	);
};

export async function getStaticProps() {
	const markdownWithMeta = fs.readFileSync("content/bio.md", "utf-8");

	const { data: frontmatter, content } = matter(markdownWithMeta);

	return {
		props: {
			frontmatter,
			content,
		},
	};
}

export default Bio;
