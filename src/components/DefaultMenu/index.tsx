import Link from "next/link";
import React from "react";

function DefaultMenu() {
	return (
		<>
			<Link
				className="border-y-2 border-transparent px-2 py-1 hover:border-b-primary-100 hover:text-primary-100"
				href="/about"
			>
				About
			</Link>
			<Link
				className="border-y-2 border-transparent px-2 py-1 hover:border-b-primary-100 hover:text-primary-100"
				href="/blog"
			>
				Blog
			</Link>
			<Link
				className="border-y-2 border-transparent px-2 py-1 hover:border-b-primary-100 hover:text-primary-100"
				href="/projects"
			>
				Projects
			</Link>
			<a
				className="border-y-2 border-transparent px-2 py-1 hover:border-b-primary-100 hover:text-primary-100"
				href={process.env.GITBOOK_URL}
				target="_blank"
				rel="noopener noreferrer"
			>
				Notes
			</a>
			<Link
				className="border-y-2 border-transparent px-2 py-1 hover:border-b-primary-100 hover:text-primary-100"
				href="/books"
			>
				Books
			</Link>
			<Link
				className="border-y-2 border-transparent px-2 py-1 hover:border-b-primary-100 hover:text-primary-100"
				href="/contact"
			>
				Contact
			</Link>
		</>
	);
}

export default DefaultMenu;
