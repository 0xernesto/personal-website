const AllProjects = () => {
	// May need to change main container from h-screen to h-fit once project cards are done
	return (
		<div className="flex flex-col items-center justify-start w-full min-h-screen">
			<h1 className="mb-5 text-3xl font-bold">Projects</h1>
			<div className="flex flex-col items-center justify-center w-11/12 h-fit">
				<div className="flex flex-col items-center justify-center w-full max-w-xl p-3 mt-5 mb-5 rounded bg-slate-900 opacity-90 hover:opacity-100">
					Project Card
				</div>
				<div className="flex flex-col items-center justify-center w-full max-w-xl p-3 mb-5 rounded bg-slate-900 opacity-90 hover:opacity-100">
					Project Card
				</div>
				<div className="flex flex-col items-center justify-center w-full max-w-xl p-3 mb-5 rounded bg-slate-900 opacity-90 hover:opacity-100">
					Project Card
				</div>
			</div>
		</div>
	);
};

export default AllProjects;
