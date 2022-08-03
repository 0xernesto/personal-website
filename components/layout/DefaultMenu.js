import { Link } from "../../routes";

const DefaultMenu = () => {
	return (
		<>
			<Link route={"/about"}>
				<a className="px-2 py-1 border-transparent border-y-2 hover:text-white hover:border-b-white">
					About
				</a>
			</Link>
			<Link route={"/projects/all"}>
				<a className="px-2 py-1 border-transparent border-y-2 hover:text-white hover:border-b-white">
					Projects
				</a>
			</Link>
			<Link route={"/blog/posts"}>
				<a className="px-2 py-1 border-transparent border-y-2 hover:text-white hover:border-b-white">
					Blog
				</a>
			</Link>
			<Link route={"/contact"}>
				<a className="px-2 py-1 border-transparent border-y-2 hover:text-white hover:border-b-white">
					Contact
				</a>
			</Link>
		</>
	);
};

export default DefaultMenu;
