import { Link } from "../routes";

const BlogPostBox = ({ post }) => {
	return (
		<div className="flex flex-col items-center justify-center w-9/12 max-w-xl mb-10 rounded opacity-90 hover:opacity-100 bg-slate-800">
			<Link route={`/blog/${post.slug}`}>
				<a>
					<div className="relative flex justify-center w-full">
						<img
							className="rounded"
							src={post.img}
							alt={post.img}
						/>
					</div>
					<div>{post.date}</div>
					<p>{post.title}</p>
					<p>{post.description}</p>
				</a>
			</Link>
		</div>
	);
};

export default BlogPostBox;
