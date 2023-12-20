import Link from "next/link";
import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";

function Home() {
	return (
		<>
			<Header />
			<div className="flex w-full flex-1 flex-col items-center justify-start px-4 py-10">
				<div className="flex min-h-fit w-full max-w-4xl flex-col">
					<h1 className="mb-6 text-3xl font-bold">Ernesto Ramirez</h1>
					<p className="mb-5 self-start">Hello!</p>
					<p className="mb-5 self-start">
						I currently work in the crypto space, where I&apos;ve
						architected and built multiple protocols from the ground
						up, across the entire tech stack.
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
			<Footer />
		</>
	);
}

export default Home;
