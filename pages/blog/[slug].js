import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const BlogDetail = ({
	frontmatter: { title, date, img, imgAuthor, imgSource },
	content,
}) => {
	return (
		<div className="flex flex-col items-center justify-start w-full flex-1">
			<article className="flex flex-col items-center max-w-6xl px-2 prose prose-slate">
				<h1 className="text-3xl font-bold">{title}</h1>
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
				<div dangerouslySetInnerHTML={{ __html: marked(content) }} />
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
