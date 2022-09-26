const notes = () => {
	// I'm most likely going to use Gitbook for this.
	// https://docs.gitbook.com/
	return (
		<div className="flex flex-col items-center justify-start w-full min-h-screen">
			<h1 className="mb-5 text-3xl font-bold">Notes</h1>
			<div className="flex flex-col items-center justify-center max-w-[1035px] w-11/12 h-fit">
				<p className="mb-8">
					After many years of taking notes, I realized that they
					became very scattered. This was quite overwhelming because I
					constantly found myself Googling things I had written down
					before. Since I love taking notes and the idea of
					open-sourcing information, I wanted to consolidate my notes
					into an organized digital format that could be easily
					accessed by anyone from anywhere. The easiest and fastest
					way I found to do this was Gitbook. I'm still working on
					transferring my notes over to Gitbook, so bear with me.
				</p>
				<div className="flex items-center justify-center w-full">
					<a
						className="relative flex justify-center w-full h-16 max-w-[340px] p-2 rounded-md bg-slate-900 opacity-90 hover:opacity-100"
						href="https://docs.ernestoramirez.xyz"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							className="hidden xs:flex xs:mr-4 xs:rounded"
							src="/images/logo-gitbook.png"
							alt="logo"
						/>
						<p className="flex items-center justify-center">
							docs.ernestoramirez.xyz
						</p>
					</a>
				</div>
			</div>
		</div>
	);
};

export default notes;
