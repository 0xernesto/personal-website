import Link from "next/link";

const Home = () => {
	return (
		<div className="flex flex-col items-center justify-start w-full min-h-screen">
			<div className="flex flex-col items-center justify-center max-w-[1035px] w-11/12 h-fit">
				<h2 className="self-start mb-2 text-xl font-bold">
					Hi, I'm Ernesto.
				</h2>
				<p className="self-start mb-10">
					I spend most of my time learning and building in the Web3
					space. Click{" "}
					<Link href={"/about"}>
						<a className="underline hover:text-white">here</a>
					</Link>{" "}
					if you want to learn more about me.
				</p>
				<h2 className="self-start mb-2 text-xl font-bold">
					Check out some of my work.
				</h2>
				<p className="self-start mb-10">
					I'm currently spending all my time building Web3
					infrastructure and DeFi protocols. For the time being, I'm
					doing the majority of my Web3 work anonymously, but feel
					free to check out some of my previous projects {"  "}
					<Link href={"/projects"}>
						<a className="underline hover:text-white">here</a>
					</Link>
					.
				</p>
				<h2 className="self-start mb-2 text-xl font-bold">
					Take a look at my notes.
				</h2>
				<p className="self-start mb-10">
					I love taking notes and making them public for people with
					similar interests. Click{" "}
					<Link href={"/notes"}>
						<a className="underline hover:text-white">here</a>
					</Link>{" "}
					to look at my notes.
				</p>
				<h2 className="self-start mb-2 text-xl font-bold">
					I like to write.
				</h2>
				<p className="self-start mb-10">
					I will be publishing blog posts here and other sites like
					Medium and Substack soon.{" "}
					<Link href={"/blog"}>
						<a className="underline hover:text-white">
							Stay tuned...
						</a>
					</Link>
				</p>
				<h2 className="self-start mb-2 text-xl font-bold">
					Let's get in touch.
				</h2>
				<p className="self-start mb-2">
					Please{" "}
					<Link href={"/contact"}>
						<a className="underline hover:text-white">contact me</a>
					</Link>{" "}
					if you:
				</p>
				<ol className="self-start mb-5 list-decimal ml-14">
					<li>
						Find something that is unclear, broken, or inaccurate.
					</li>
					<li>Know of a better way to do something.</li>
					<li>Have comments about something I wrote.</li>
					<li>Want to chat about a similar interest.</li>
					<li>Want to work together.</li>
				</ol>
			</div>
		</div>
	);
};

export default Home;
