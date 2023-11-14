import Link from "next/link";
import React from "react";

import { IPostBox } from "../../interfaces";

function BlogPostBox({ post }: IPostBox) {
	return (
		<div className="mb-10 flex h-fit w-full max-w-xl flex-col items-center justify-center rounded bg-dark-500 opacity-90 hover:opacity-100">
			<Link href={`/blog/${post.slug}`}>
				<div className="relative flex w-full justify-center overflow-hidden">
					<img
						className="rounded transition duration-300 ease-in-out hover:scale-105"
						src={post.frontmatter.img}
						alt={post.frontmatter.img}
					/>
				</div>
				<div className="p-3">
					{/* <p>{post.frontmatter.date}</p> */}
					<p className="font-bold text-light-100">
						{post.frontmatter.title}
					</p>
					<p>{post.frontmatter.description}</p>
				</div>
			</Link>
		</div>
	);
}

export default BlogPostBox;
