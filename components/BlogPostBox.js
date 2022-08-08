import Link from "next/link";

const BlogPostBox = ({ post }) => {
	return (
		<div className="flex flex-col items-center justify-center w-9/12 max-w-xl mb-10 rounded opacity-90 hover:opacity-100 bg-slate-800">
			<Link href={`/blog/${post.slug}`}>
				<a>
					<div className="relative flex justify-center w-full">
						<img
							className="rounded"
							src={post.frontmatter.img}
							alt={post.frontmatter.img}
						/>
					</div>
					<div>{post.frontmatter.date}</div>
					<p>{post.frontmatter.title}</p>
					<p>{post.frontmatter.description}</p>
				</a>
			</Link>
		</div>
	);
};

export default BlogPostBox;
