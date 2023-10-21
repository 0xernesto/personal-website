import Link from "next/link";

const Home = () => {
	return (
		<div className="flex flex-col items-center justify-start w-full flex-1">
			<div className="flex flex-col items-center justify-center max-w-[1035px] w-11/12 h-fit">
				<h1 className="text-3xl font-bold mb-5">Ernesto Ramirez</h1>
				<p className="self-start mb-5">
					Hello! I love engineering and startups!
				</p>
				<p className="self-start mb-5">
					I currently work in the{" "}
					<a
						className="underline underline-offset-2 hover:text-white"
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
						<a className="underline underline-offset-2 hover:text-white">
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
