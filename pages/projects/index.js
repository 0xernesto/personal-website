import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "../../utils/utilityFunctions";
import ProjectBox from "../../components/ProjectBox";

const AllProjects = ({ projects }) => {
	return (
		<div className="flex w-full flex-1 flex-col items-center justify-start py-10 px-4">
			<div className="flex min-h-fit max-w-4xl w-full items-center flex-col">
				<h1 className="text-3xl font-bold mb-6">Projects</h1>
				<div className="flex flex-col items-center justify-center h-fit">
					{projects.map((project, index) => (
						<ProjectBox key={index} project={project} />
					))}
				</div>
			</div>
		</div>
	);
};

// This function gets called at build time on server-side and won't be called at
// run time on client-side. Next.js uses the data returned by this function to
// pre-render the page.
export const getStaticProps = async () => {
	// 1. Get files from the content directory
	const files = fs.readdirSync(path.join("content/projects"));

	// 2. Get slug and frontmatter from content
	const projects = files.map((filename) => {
		// Create slug
		const slug = filename.replace(".md", "");

		// Get frontmatter
		const markdownWithMeta = fs.readFileSync(
			path.join("content/projects", filename),
			"utf-8"
		);

		const { data: frontmatter } = matter(markdownWithMeta);

		return {
			slug,
			frontmatter,
		};
	});

	return {
		props: {
			projects: projects.sort(sortByDate),
		},
	};
};

export default AllProjects;
