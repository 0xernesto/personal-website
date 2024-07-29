import Link from "next/link";
import React from "react";

import { IPostBox } from "../../interfaces";

function ProjectBox({ post }: IPostBox) {
	return (
		<div className="mb-10 flex h-fit w-full max-w-xl flex-col items-center justify-center rounded bg-dark-500 opacity-90 hover:opacity-100">
			<Link href={`/projects/${post.slug}`}>
				<div className="relative flex w-full justify-center overflow-hidden">
					<img
						className="rounded grayscale filter transition duration-300 ease-in-out hover:scale-105 hover:grayscale-0"
						src={post.frontmatter.img}
						alt={post.frontmatter.img}
					/>
				</div>
				<div className="p-3">
					<p className="font-bold text-light-100">
						{post.frontmatter.title}
					</p>
					<p>{post.frontmatter.description}</p>
				</div>
			</Link>
		</div>
	);
}

export default ProjectBox;
