import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const BlogDetail = ({
	frontmatter: { title, date, img, imgAuthor, imgSource },
	content,
}) => {
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
			<article className="flex min-h-fit max-w-4xl w-full items-center flex-col prose prose-slate">
				<h1 className="text-3xl font-bold mb-6">{title}</h1>
				<div>Posted on {date}</div>
				<div className="flex flex-col items-center justify-center w-full h-full">
					<img className="mb-0" src={img} alt="img" />
					{imgAuthor ?? imgSource ? (
						<p>
							Photo by
							{"  "}
							<a
								href={imgSource}
								target="_blank"
								rel="noopener noreferrer"
							>
								{imgAuthor}
							</a>
						</p>
					) : null}
				</div>
				<div
					className="flex flex-col w-full items-start justify-center"
					dangerouslySetInnerHTML={{ __html: marked(content) }}
				/>
			</article>
		</div>
	);
};

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join("content/blog"));

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
		path.join("content/blog", slug + ".md"),
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
