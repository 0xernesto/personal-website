const Home = () => {
	return (
		<div className="flex flex-col items-center justify-start w-full flex-1">
			<div className="flex flex-col items-center justify-center max-w-[1035px] w-11/12 h-fit">
				<h1 className="text-3xl font-bold mb-5">Ernesto Ramirez</h1>
				<p className="self-start mb-5">
					Hello! I'm passionate about accelerating technological
					advancement that can enhance global living standards, boost
					economic prosperity and freedom, or address inefficiencies
					in existing societal systems.
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
					space. I have extensive experience architecting protocols
					from the ground up and building across the entire tech
					stack. Recently, I co-founded {"  "}
					<a
						className="underline underline-offset-2 hover:text-white"
						href="https://chainrule.io/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Chain Rule Labs
					</a>
					, with a focus on addressing some of Web3's core challenges
					to pave the way for future adoption.
				</p>
				<p className="self-start">Thanks for stopping by!</p>
			</div>
		</div>
	);
};

export default Home;
