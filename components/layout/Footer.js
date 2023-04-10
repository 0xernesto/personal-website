import {
	AiOutlineLinkedin,
	AiOutlineGithub,
	AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
	return (
		<div className="flex items-center justify-center p-1 mt-5 bg-slate-900">
			<a
				className="px-5 py-3 hover:text-white"
				href="https://github.com/0xernesto"
				target="_blank"
				rel="noopener noreferrer"
			>
				<AiOutlineGithub size="25px" />
			</a>
			<a
				className="px-5 py-3 hover:text-white"
				href="https://www.linkedin.com/in/ernesto1034"
				target="_blank"
				rel="noopener noreferrer"
			>
				<AiOutlineLinkedin size="25px" />
			</a>
			<a
				className="px-5 py-3 hover:text-white"
				href="https://twitter.com/ernestor_eth"
				target="_blank"
				rel="noopener noreferrer"
			>
				<AiOutlineTwitter size="25px" />
			</a>
		</div>
	);
};

export default Footer;
