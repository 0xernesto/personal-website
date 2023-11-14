import Link from "next/link";
import React from "react";

function Home() {
	return (
		<div className="flex w-full flex-1 flex-col items-center justify-start px-4 py-10">
			<div className="flex min-h-fit w-full max-w-4xl flex-col">
				<h1 className="mb-6 text-3xl font-bold">Ernesto Ramirez</h1>
				<p className="mb-5 self-start">
					Hello! I love engineering and startups.
				</p>
				<p className="mb-5 self-start">
					I currently work in the{" "}
					<a
						href="https://en.wikipedia.org/wiki/Decentralized_finance"
						target="_blank"
						rel="noopener noreferrer"
					>
						DeFi
					</a>{" "}
					space, where I&apos;ve architected and built multiple
					protocols from the ground up, across the entire tech stack.
				</p>
				<p className="mb-5 self-start">
					Feel free to {"  "}
					<Link
						className="underline underline-offset-4 hover:text-light-100"
						href="/contact"
					>
						reach out
					</Link>{" "}
					if we have similar interests.
				</p>
				<p className="self-start">Thanks for stopping by!</p>
			</div>
		</div>
	);
}

export default Home;
