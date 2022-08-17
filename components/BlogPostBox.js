import Link from "next/link";

const BlogPostBox = ({ post }) => {
	return (
		<div className="flex flex-col items-center justify-center w-full max-w-xl mb-10 rounded h-fit opacity-90 hover:opacity-100 bg-slate-900">
			<Link href={`/blog/${post.slug}`}>
				<a>
					<div className="relative flex justify-center w-full">
						<img
							className="rounded"
							src={post.frontmatter.img}
							alt={post.frontmatter.img}
						/>
					</div>
					<div className="p-3">
						<p>{post.frontmatter.date}</p>
						<p>{post.frontmatter.title}</p>
						<p>{post.frontmatter.description}</p>
					</div>
				</a>
			</Link>
		</div>
	);
};

export default BlogPostBox;
