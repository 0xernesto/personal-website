import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { getAboutData } from "../../resources";

const About = async () => {
	const aboutContent = await getAboutData();

	return (
		<div className="flex w-full flex-1 flex-col items-center justify-start px-4 py-10">
			<div className="flex min-h-fit w-full max-w-4xl flex-col items-start">
				<h1 className="mb-6 text-3xl font-bold">About Me</h1>
				<div className="markdown-content flex w-full flex-col items-start justify-center">
					<ReactMarkdown remarkPlugins={[remarkGfm]}>
						{aboutContent}
					</ReactMarkdown>
				</div>
			</div>
		</div>
	);
};

export default About;
