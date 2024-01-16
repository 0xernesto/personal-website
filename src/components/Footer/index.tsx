import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

import FarcasterIcon from "../FarcasterIcon";

function Footer() {
	return (
		<footer className="flex w-full items-center justify-center p-4">
			<a
				className="flex h-12 w-12 flex-shrink-0 items-center justify-center hover:text-primary-100"
				href={process.env.GITHUB_URL}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="GitHub Link"
			>
				<FaGithub size="25px" />
			</a>
			<a
				className="flex h-12 w-12 flex-shrink-0 items-center justify-center hover:text-primary-100"
				href={process.env.LINKEDIN_URL}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="LinkedIn Link"
			>
				<FaLinkedin size="25px" />
			</a>
			<a
				className="flex h-12 w-12 flex-shrink-0 items-center justify-center p-[14px] hover:text-primary-100"
				href={process.env.FARCASTER_URL}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Warpcast Link"
			>
				<FarcasterIcon size="25px" />
			</a>
			<a
				className="flex h-12 w-12 flex-shrink-0 items-center justify-center hover:text-primary-100"
				href={process.env.TWITTER_URL}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Twitter Link"
			>
				<FaXTwitter size="25px" />
			</a>
		</footer>
	);
}

export default Footer;
