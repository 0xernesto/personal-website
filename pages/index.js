import Link from "next/link";

const Home = () => {
	return (
		<div className="flex w-full flex-1 flex-col items-center justify-start py-10 px-4">
			<div className="flex min-h-fit max-w-4xl w-full flex-col">
				<h1 className="text-3xl font-bold mb-6">Ernesto Ramirez</h1>
				<p className="self-start mb-5">
					Hello! I love engineering and startups.
				</p>
				<p className="self-start mb-5">
					I currently work in the{" "}
					<a
						href="https://en.wikipedia.org/wiki/Decentralized_finance"
						target="_blank"
						rel="noopener noreferrer"
					>
						DeFi
					</a>{" "}
					space, where I've architected and built multiple protocols
					from the ground up, across the entire tech stack.
				</p>
				<p className="self-start mb-5">
					Feel free to {"  "}
					<Link href={"/contact"}>
						<a className="hover:text-white underline underline-offset-4">
							reach out
						</a>
					</Link>{" "}
					if we have similar interests!
				</p>
				<p className="self-start">Thanks for stopping by!</p>
			</div>
		</div>
	);
};

export default Home;
