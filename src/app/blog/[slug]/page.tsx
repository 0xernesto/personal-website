import { notFound } from "next/navigation";
import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

import LinkRenderer from "../../../components/LinkRenderer";
import { getBlogData, getBlogPostData } from "../../../resources";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
	const posts = await getBlogData();

	return posts.map((post) => ({
		slug: post.slug,
	}));
}

async function BlogDetail({ params }: { params: { slug: string } }) {
	// Check if post exists
	const { slug } = params;
	const blogPosts = await getBlogData();
	if (!blogPosts.find((post) => post.slug === slug)) notFound();

	// Extract post data
	const { frontmatter, content } = await getBlogPostData(slug);
	const { title, date, img, imgAuthor, imgSource } = frontmatter;

	return (
		<div className="flex w-full flex-1 flex-col items-center justify-start px-4 py-10">
			<div className="flex min-h-fit w-full max-w-4xl flex-col items-center">
				<h1 className="mb-6 text-3xl font-bold">{title}</h1>
				<span className="mb-6">Posted on {date}</span>
				<div className="flex h-full w-full flex-col items-center justify-center">
					<img className="mb-2" src={img} alt={slug} />
					{imgAuthor ?? imgSource ? (
						<p>
							Photo by
							{"  "}
							<a
								className="underline underline-offset-4 hover:text-light-100"
								href={imgSource}
								target="_blank"
								rel="noopener noreferrer"
							>
								{imgAuthor}
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

export default BlogDetail;
