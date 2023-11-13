import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";

const Footer = () => {
	return (
		<div className="flex items-center w-full justify-center p-4 mt-5 bg-slate-900">
			<a
				className="hover:text-white h-12 w-12 flex items-center justify-center flex-shrink-0"
				href={process.env.GITHUB_URL}
				target="_blank"
				rel="noopener noreferrer"
			>
				<FaGithub size="25px" />
			</a>
			<a
				className="hover:text-white h-12 w-12 flex items-center justify-center flex-shrink-0"
				href={process.env.LINKEDIN_URL}
				target="_blank"
				rel="noopener noreferrer"
			>
				<FaLinkedin size="25px" />
			</a>
			<a
				className="hover:text-white h-12 w-12 flex items-center justify-center p-[14px] flex-shrink-0"
				href={process.env.WARPCAST_URL}
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					className="opacity-90 hover:opacity-100"
					src="/images/iconFarcaster.svg"
					alt="farcaster"
				/>
			</a>
			<a
				className="hover:text-white h-12 w-12 flex items-center justify-center flex-shrink-0"
				href={process.env.TWITTER_URL}
				target="_blank"
				rel="noopener noreferrer"
			>
				<FaXTwitter size="25px" />
			</a>
		</div>
	);
};

export default Footer;
