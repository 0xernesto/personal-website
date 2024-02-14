import React from "react";

import { IBook } from "../../interfaces";

// Define the Book component
function Book({ title, author, link }: IBook) {
	return (
		<li className="mb-5 pl-3">
			<a
				className="underline underline-offset-4 hover:text-primary-100"
				href={link}
				target="_blank"
				rel="noopener noreferrer"
			>
				{title}
			</a>{" "}
			by {author}
		</li>
	);
}

export default Book;
