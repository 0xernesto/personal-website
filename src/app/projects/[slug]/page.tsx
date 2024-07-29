import { notFound } from "next/navigation";
import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

import LinkRenderer from "../../../components/LinkRenderer";
import { getProjectPostData, getProjectsData } from "../../../resources";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
	const posts = await getProjectsData();

	return posts.map((post) => ({
		slug: post.slug,
	}));
}

async function ProjectDetail({ params }: { params: { slug: string } }) {
	// Check if post exists
	const { slug } = params;
	const projectPosts = await getProjectsData();
	if (!projectPosts.find((post) => post.slug === slug)) notFound();

	// Extract post data
	const { frontmatter, content } = await getProjectPostData(slug);
	const { title, date, img, repo, client } = frontmatter;

	return (
		<div className="flex w-full flex-1 flex-col items-center justify-start px-4 py-10">
			<div className="flex min-h-fit w-full max-w-4xl flex-col items-center">
				<h1 className="mb-6 text-3xl font-bold">{title}</h1>
				<span className="mb-6">Posted on {date}</span>
				<img className="mb-2" src={img} alt={slug} />
				<div className="mb-6 flex w-fit flex-col items-start justify-center">
					{repo ? (
						<p className="my-1">
							Code: {"  "}
							<a
								className="break-all underline underline-offset-4 hover:text-primary-100"
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
							Website: {"  "}
							<a
								className="break-all underline underline-offset-4 hover:text-primary-100"
								href={client}
								target="_blank"
								rel="noopener noreferrer"
							>
								{client}
							</a>
						</p>
					) : null}
				</div>
				<div className="markdown-content flex w-full flex-col items-start justify-center">
					<ReactMarkdown
						remarkPlugins={[remarkGfm]}
						rehypePlugins={[rehypeRaw]}
						components={{ a: LinkRenderer }}
					>
						{content}
					</ReactMarkdown>
				</div>
			</div>
		</div>
	);
}

export default ProjectDetail;
