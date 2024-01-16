import React from "react";
import {
	FaCalendarDays,
	FaGithub,
	FaLinkedin,
	FaTelegram,
	FaXTwitter,
} from "react-icons/fa6";

import FarcasterIcon from "../FarcasterIcon";

function ConnectLinks() {
	return (
		<>
			<a
				className="mt-6 flex h-14 w-44 items-center justify-center rounded-md bg-dark-500 outline-none hover:text-primary-100 hover:underline hover:underline-offset-4"
				href={process.env.CALENDAR_URL}
				target="_blank"
				rel="noopener noreferrer"
			>
				<div className="relative ml-4 flex h-7 w-7 items-center justify-center rounded bg-light-300">
					<FaCalendarDays className="text-dark-600" size="20px" />
				</div>
				<span className="flex grow items-center justify-center">
					Calendar
				</span>
			</a>
			<a
				className="mt-6 flex h-14 w-44 items-center justify-center rounded-md bg-dark-500 outline-none hover:text-primary-100 hover:underline hover:underline-offset-4"
				href={process.env.TELEGRAM_URL}
				target="_blank"
				rel="noopener noreferrer"
			>
				<div className="relative ml-4 flex h-7 w-7 items-center justify-center rounded bg-light-300">
					<FaTelegram className="text-dark-600" size="20px" />
				</div>
				<span className="flex grow items-center justify-center">
					Telegram
				</span>
			</a>
			<a
				className="mt-6 flex h-14 w-44 items-center justify-center rounded-md bg-dark-500 outline-none hover:text-primary-100 hover:underline hover:underline-offset-4"
				href={process.env.GITHUB_URL}
				target="_blank"
				rel="noopener noreferrer"
			>
				<div className="relative ml-4 flex h-7 w-7 items-center justify-center rounded bg-light-300">
					<FaGithub className="text-dark-600" size="20px" />
				</div>
				<span className="flex grow items-center justify-center">
					GitHub
				</span>
			</a>
			<a
				className="mt-6 flex h-14 w-44 items-center justify-center rounded-md bg-dark-500 outline-none hover:text-primary-100 hover:underline hover:underline-offset-4"
				href={process.env.TWITTER_URL}
				target="_blank"
				rel="noopener noreferrer"
			>
				<div className="relative ml-4 flex h-7 w-7 items-center justify-center rounded bg-light-300">
					<FaXTwitter className="text-dark-600" size="20px" />
				</div>
				<span className="flex grow items-center justify-center">X</span>
			</a>
			<a
				className="mt-6 flex h-14 w-44 items-center justify-center rounded-md bg-dark-500 outline-none hover:text-primary-100 hover:underline hover:underline-offset-4"
				href={process.env.FARCASTER_URL}
				target="_blank"
				rel="noopener noreferrer"
			>
				<div className="relative ml-4 flex h-7 w-7 items-center justify-center rounded bg-light-300">
					<FarcasterIcon className="text-dark-600" size="20px" />
				</div>
				<span className="flex grow items-center justify-center">
					Farcaster
				</span>
			</a>
			<a
				className="mt-6 flex h-14 w-44 items-center justify-center rounded-md bg-dark-500 outline-none hover:text-primary-100 hover:underline hover:underline-offset-4"
				href={process.env.LINKEDIN_URL}
				target="_blank"
				rel="noopener noreferrer"
			>
				<div className="relative ml-4 flex h-7 w-7 items-center justify-center rounded bg-light-300">
					<FaLinkedin className="text-dark-600" size="20px" />
				</div>
				<span className="flex grow items-center justify-center">
					LinkedIn
				</span>
			</a>
		</>
	);
}

export default ConnectLinks;
