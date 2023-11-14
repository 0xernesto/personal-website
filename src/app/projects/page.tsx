import React from "react";

import ProjectBox from "../../components/ProjectBox";
import { getProjectsData } from "../../resources";

const Projects = async () => {
	const projectPosts = await getProjectsData();

	return (
		<div className="flex w-full flex-1 flex-col items-center justify-start px-4 py-10">
			<div className="flex min-h-fit w-full max-w-4xl flex-col items-center">
				<h1 className="mb-6 text-3xl font-bold">Projects</h1>
				<div className="flex flex-col items-center justify-center">
					{projectPosts.map((post) => (
						<ProjectBox key={post.slug} post={post} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;
