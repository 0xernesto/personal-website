import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { Post } from "../interfaces";
import { sortByDate } from "../utils";

export const getBlogData = async (): Promise<Post[]> => {
	// 1. Get files from the content directory
	const files = fs.readdirSync(
		path.join(process.cwd(), "public", "content/blog")
	);

	// 2. Get slug, frontmatter, and content
	const posts = files.map((filename) => {
		const slug = filename.replace(".md", "");

		const markdownWithMeta = fs.readFileSync(
			path.join(process.cwd(), "public", "content/blog", filename),
			"utf-8"
		);

		const { data: frontmatter, content } = matter(markdownWithMeta);

		return {
			slug,
			frontmatter,
			content,
		};
	});

	return posts.sort(sortByDate);
};
