import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const ProjectDetail = ({
	frontmatter: { title, date, img, repo, client },
	content,
}) => {
	// Create and set a custom renderer for marked to override default behavior
	// Open links in separate tabs
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
				<img className="mb-0" src={img} alt="img" />
				<div className="flex flex-col items-start justify-center w-fit">
					{repo ? (
						<p className="my-1">
							GitHub Repo: {"  "}
							<a
								className="break-all"
								href={repo}
								target="_blank"
								rel="noopener noreferrer"
							>
								{repo}
							</a>
						</p>
					) : null}
					{client ? (
						<p className="my-1">
							App: {"  "}
							<a
								className="break-all"
								href={client}
								target="_blank"
								rel="noopener noreferrer"
							>
								{client}
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
	const files = fs.readdirSync(path.join("content/projects"));

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
		path.join("content/projects", slug + ".md"),
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

export default ProjectDetail;
