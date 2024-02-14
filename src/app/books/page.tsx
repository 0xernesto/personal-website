import React from "react";

import Book from "../../components/Book";
import { books } from "../../data/books";

function Books() {
	return (
		<div className="flex w-full flex-1 flex-col items-center justify-start px-4 py-10">
			<div className="flex min-h-fit w-full max-w-4xl flex-col">
				<h1 className="mb-6 text-3xl font-bold">Books</h1>
				<p className="mb-5 self-start">
					The following is a list of non-fiction books I&apos;ve
					enjoyed reading and recommend to my friends.
				</p>
				<ul className="mb-5 ml-8 list-disc self-start">
					{books.map((book) => (
						<Book
							key={book.title}
							title={book.title}
							author={book.author}
							link={book.link}
						/>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Books;
