import { Post } from "../interfaces";

export const sortByDate = (a: Post, b: Post) =>
	new Date(b.frontmatter.date).getTime() -
	new Date(a.frontmatter.date).getTime();
