import { Link } from "../routes";

const MainIndex = () => {
	return (
		<div>
			<h1>Home Page</h1>
			<Link route={"/about"}>
				<a>About</a>
			</Link>
			<Link route={"/projects/all"}>
				<a>Projects</a>
			</Link>
			<Link route={"/blog/posts"}>
				<a>Blog</a>
			</Link>
			<Link route={"/contact"}>
				<a>Contact</a>
			</Link>
		</div>
	);
};

export default MainIndex;
