import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const ProjectDetail = ({
	frontmatter: { title, date, img, repo, client },
	content,
}) => {
	return (
		<div className="flex flex-col items-center justify-start w-full flex-1">
			<article className="flex flex-col items-center max-w-6xl px-2 prose prose-slate">
				<h1 className="text-3xl font-bold">{title}</h1>
				<div>Posted on {date}</div>
				<img className="mb-0" src={img} alt="img" />
				<div className="flex flex-col items-start justify-center mb-5 w-fit">
					{repo ? (
						<p className="my-1">
							GitHub Repo: {"  "}
							<a
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
							Application: {"  "}
							<a
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
					className="max-w-[1035px] w-11/12"
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
