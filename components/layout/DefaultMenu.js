import Link from "next/link";

const DefaultMenu = () => {
	return (
		<>
			<Link href={"/"}>
				<a className="px-2 py-1 border-transparent border-y-2 hover:text-white hover:border-b-white">
					Home
				</a>
			</Link>
			<Link href={"/bio"}>
				<a className="px-2 py-1 border-transparent border-y-2 hover:text-white hover:border-b-white">
					Bio
				</a>
			</Link>
			<Link href={"/blog"}>
				<a className="px-2 py-1 border-transparent border-y-2 hover:text-white hover:border-b-white">
					Blog
				</a>
			</Link>
			<Link href={"/projects"}>
				<a className="px-2 py-1 border-transparent border-y-2 hover:text-white hover:border-b-white">
					Projects
				</a>
			</Link>
			<a
				className="px-2 py-1 border-transparent border-y-2 hover:text-white hover:border-b-white"
				href={process.env.GITBOOK_URL}
				target="_blank"
				rel="noopener noreferrer"
			>
				Notes
			</a>
			<Link href={"/books"}>
				<a className="px-2 py-1 border-transparent border-y-2 hover:text-white hover:border-b-white">
					Books
				</a>
			</Link>
			<Link href={"/contact"}>
				<a className="px-2 py-1 border-transparent border-y-2 hover:text-white hover:border-b-white">
					Contact
				</a>
			</Link>
		</>
	);
};

export default DefaultMenu;
