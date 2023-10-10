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
		<div className="flex flex-col items-center justify-start w-full flex-1">
			<article className="flex flex-col items-center max-w-6xl px-2 prose prose-slate">
				<h1 className="text-3xl font-bold">Bio</h1>
				<div
					className="max-w-[1035px] w-11/12"
					dangerouslySetInnerHTML={{ __html: marked(content) }}
				/>
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
