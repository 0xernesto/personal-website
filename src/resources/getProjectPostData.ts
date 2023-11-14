import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { Post } from "../interfaces";

export const getProjectPostData = async (slug: string): Promise<Post> => {
	// 1. Get file from the content directory
	const markdownWithMeta = fs.readFileSync(
		path.join(process.cwd(), "public", "content/projects", `${slug}.md`),
		"utf-8"
	);

	// 2. Get frontmatter and content
	const { data: frontmatter, content } = matter(markdownWithMeta);

	return {
		slug,
		frontmatter,
		content,
	};
};
