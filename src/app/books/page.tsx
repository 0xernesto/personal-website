import React from "react";

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
					<li className="mb-5 pl-3">
						<a
							className="underline underline-offset-4 hover:text-light-100"
							href="https://a.co/d/6fY7d7d"
							target="_blank"
							rel="noopener noreferrer"
						>
							The Almanack of Naval Ravikant
						</a>{" "}
						by by Eric Jorgenson and Tim Ferriss
					</li>
					<li className="mb-5 pl-3">
						<a
							className="underline underline-offset-4 hover:text-light-100"
							href="https://a.co/d/0WfJl4K"
							target="_blank"
							rel="noopener noreferrer"
						>
							Principles for Dealing with the Changing World Order
						</a>{" "}
						by Ray Dalio
					</li>
					<li className="mb-5 pl-3">
						<a
							className="underline underline-offset-4 hover:text-light-100"
							href="https://a.co/d/eOvxiDY"
							target="_blank"
							rel="noopener noreferrer"
						>
							Zero to One
						</a>{" "}
						by Peter Thiel and Blake Masters
					</li>
					<li className="mb-5 pl-3">
						<a
							className="underline underline-offset-4 hover:text-light-100"
							href="https://a.co/d/dPjNGoh"
							target="_blank"
							rel="noopener noreferrer"
						>
							Elon Musk
						</a>{" "}
						by Ashlee Vance
					</li>
					<li className="mb-5 pl-3">
						<a
							className="underline underline-offset-4 hover:text-light-100"
							href="https://a.co/d/fzpOjQz"
							target="_blank"
							rel="noopener noreferrer"
						>
							Steve Jobs
						</a>{" "}
						by Walter Isaacson
					</li>
					<li className="mb-5 pl-3">
						<a
							className="underline underline-offset-4 hover:text-light-100"
							href="https://a.co/d/4QInv8D"
							target="_blank"
							rel="noopener noreferrer"
						>
							The Lessons of History
						</a>{" "}
						by Will and Ariel Durant
					</li>
					<li className="mb-5 pl-3">
						<a
							className="underline underline-offset-4 hover:text-light-100"
							href="https://a.co/d/gaf2pRt"
							target="_blank"
							rel="noopener noreferrer"
						>
							The 48 Laws of Power
						</a>{" "}
						by Robert Greene
					</li>
					<li className="mb-5 pl-3">
						<a
							className="underline underline-offset-4 hover:text-light-100"
							href="https://a.co/d/cVrMQ6G"
							target="_blank"
							rel="noopener noreferrer"
						>
							The Republic
						</a>{" "}
						by Plato
					</li>
					<li className="mb-5 pl-3">
						<a
							className="underline underline-offset-4 hover:text-light-100"
							href="https://a.co/d/hKVdiXC"
							target="_blank"
							rel="noopener noreferrer"
						>
							Sapiens
						</a>{" "}
						by Yuval Noah Harari
					</li>
					<li className="mb-5 pl-3">
						<a
							className="underline underline-offset-4 hover:text-light-100"
							href="https://a.co/d/3QQF74p"
							target="_blank"
							rel="noopener noreferrer"
						>
							21 Lessons for the 21st Century
						</a>{" "}
						by Yuval Noah Harari
					</li>
					<li className="mb-5 pl-3">
						<a
							className="underline underline-offset-4 hover:text-light-100"
							href="https://a.co/d/dFmilNZ"
							target="_blank"
							rel="noopener noreferrer"
						>
							The Sovereign Individual
						</a>{" "}
						by James Dale Davidson and William Rees-Mogg
					</li>
					<li className="mb-5 pl-3">
						<a
							className="underline underline-offset-4 hover:text-light-100"
							href="https://a.co/d/b2tdbQL"
							target="_blank"
							rel="noopener noreferrer"
						>
							Surely You&apos;re Joking, Mr. Feynman!
						</a>{" "}
						by Richard P. Feynman
					</li>
					<li className="mb-5 pl-3">
						<a
							className="underline underline-offset-4 hover:text-light-100"
							href="https://a.co/d/2fiJMxr"
							target="_blank"
							rel="noopener noreferrer"
						>
							Six Easy Pieces
						</a>{" "}
						by Richard P. Feynman
					</li>
					<li className="mb-5 pl-3">
						<a
							className="underline underline-offset-4 hover:text-light-100"
							href="https://a.co/d/8fsi6B0"
							target="_blank"
							rel="noopener noreferrer"
						>
							Skin in the Game
						</a>{" "}
						by Nassim Nicholas Taleb
					</li>
					<li className="mb-5 pl-3">
						<a
							className="underline underline-offset-4 hover:text-light-100"
							href="https://a.co/d/iCFw9qy"
							target="_blank"
							rel="noopener noreferrer"
						>
							The Network State
						</a>{" "}
						by Balaji Srinivasan
					</li>
					<li className="mb-5 pl-3">
						<a
							className="underline underline-offset-4 hover:text-light-100"
							href="https://a.co/d/4JwQZHZ"
							target="_blank"
							rel="noopener noreferrer"
						>
							The Physics of Wall Street
						</a>{" "}
						by James Owen Weatherall
					</li>
					<li className="mb-5 pl-3">
						<a
							className="underline underline-offset-4 hover:text-light-100"
							href="https://a.co/d/iMdj2dP"
							target="_blank"
							rel="noopener noreferrer"
						>
							Where Is My Flying Car?
						</a>{" "}
						by J. Storrs Hall
					</li>
					<li className="pl-3">
						<a
							className="underline underline-offset-4 hover:text-light-100"
							href="https://a.co/d/iCbriTG"
							target="_blank"
							rel="noopener noreferrer"
						>
							The Mom Test
						</a>{" "}
						by Rob Fitzpatrick
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Books;
