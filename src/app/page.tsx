import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import Footer from "../components/Footer";
import Header from "../components/Header";
import LinkRenderer from "../components/LinkRenderer";
import { getAboutData } from "../resources";

const About = async () => {
	const aboutContent = await getAboutData();

	return (
		<>
			<Header />
			<div className="flex w-full flex-1 flex-col items-center justify-start px-4 py-10">
				<div className="flex min-h-fit w-full max-w-4xl flex-col items-start">
					<h1 className="mb-6 text-3xl font-bold">About Me</h1>
					<div className="markdown-content flex w-full flex-col items-start justify-center">
						<ReactMarkdown
							remarkPlugins={[remarkGfm]}
							components={{ a: LinkRenderer }}
						>
							{aboutContent}
						</ReactMarkdown>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default About;
