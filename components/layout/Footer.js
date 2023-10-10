import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
	return (
		<div className="flex items-center justify-center p-1 mt-5 bg-slate-900">
			<a
				className="hover:text-white h-12 w-12 flex items-center justify-center flex-shrink-0"
				href={process.env.GITHUB_URL}
				target="_blank"
				rel="noopener noreferrer"
			>
				<AiOutlineGithub size="28px" />
			</a>
			<a
				className="hover:text-white h-12 w-12 flex items-center justify-center flex-shrink-0"
				href={process.env.LINKEDIN_URL}
				target="_blank"
				rel="noopener noreferrer"
			>
				<AiFillLinkedin size="28px" />
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
				className="hover:text-white h-12 w-12 flex items-center justify-center p-[15px] flex-shrink-0"
				href={process.env.TWITTER_URL}
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					className="opacity-90 hover:opacity-100"
					src="/images/iconX.svg"
					alt="twitter"
				/>
			</a>
		</div>
	);
};

export default Footer;
