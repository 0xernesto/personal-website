import Link from "next/link";

const BlogPostBox = ({ post }) => {
	return (
		<div className="flex flex-col items-center justify-center w-full max-w-xl mb-10 rounded h-fit opacity-90 hover:opacity-100 bg-slate-900">
			<Link href={`/blog/${post.slug}`}>
				<a>
					<div className="relative flex justify-center w-full overflow-hidden">
						<img
							className="transition duration-300 ease-in-out rounded hover:scale-105"
							src={post.frontmatter.img}
							alt={post.frontmatter.img}
						/>
					</div>
					<div className="p-3">
						{/* <p>{post.frontmatter.date}</p> */}
						<p className="font-bold text-white">
							{post.frontmatter.title}
						</p>
						<p>{post.frontmatter.description}</p>
					</div>
				</a>
			</Link>
		</div>
	);
};

export default BlogPostBox;