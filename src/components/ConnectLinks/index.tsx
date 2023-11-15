import React from "react";

function ConnectLinks() {
	return (
		<>
			<a
				className="mt-6 flex h-14 w-44 items-center justify-center rounded-md bg-dark-500 outline-none hover:text-light-100 hover:underline hover:underline-offset-4"
				href={process.env.TELEGRAM_URL}
				target="_blank"
				rel="noopener noreferrer"
			>
				<div className="relative ml-4 flex w-7 justify-center">
					<img
						className="rounded"
						src="/images/iconTelegram.png"
						alt="Telegram Icon"
					/>
				</div>
				<span className="flex grow items-center justify-center">
					Telegram
				</span>
			</a>
			<a
				className="mt-6 flex h-14 w-44 items-center justify-center rounded-md bg-dark-500 outline-none hover:text-light-100 hover:underline hover:underline-offset-4"
				href={process.env.GITHUB_URL}
				target="_blank"
				rel="noopener noreferrer"
			>
				<div className="relative ml-4 flex w-7 justify-center">
					<img
						className="rounded"
						src="/images/iconGithub.png"
						alt="Github Icon"
					/>
				</div>
				<span className="flex grow items-center justify-center">
					GitHub
				</span>
			</a>
			<a
				className="mt-6 flex h-14 w-44 items-center justify-center rounded-md bg-dark-500 outline-none hover:text-light-100 hover:underline hover:underline-offset-4"
				href={process.env.TWITTER_URL}
				target="_blank"
				rel="noopener noreferrer"
			>
				<div className="relative ml-4 flex w-7 justify-center">
					<img
						className="rounded"
						src="/images/iconTwitter.jpg"
						alt="Twitter Icon"
					/>
				</div>
				<span className="flex grow items-center justify-center">X</span>
			</a>
			<a
				className="mt-6 flex h-14 w-44 items-center justify-center rounded-md bg-dark-500 outline-none hover:text-light-100 hover:underline hover:underline-offset-4"
				href={process.env.WARPCAST_URL}
				target="_blank"
				rel="noopener noreferrer"
			>
				<div className="relative ml-4 flex w-7 justify-center">
					<img
						className="rounded"
						src="/images/iconFarcaster.jpg"
						alt="Farcaster Icon"
					/>
				</div>
				<span className="flex grow items-center justify-center">
					Warpcast
				</span>
			</a>
			<a
				className="mt-6 flex h-14 w-44 items-center justify-center rounded-md bg-dark-500 outline-none hover:text-light-100 hover:underline hover:underline-offset-4"
				href={process.env.LINKEDIN_URL}
				target="_blank"
				rel="noopener noreferrer"
			>
				<div className="relative ml-4 flex w-7 justify-center">
					<img
						className="rounded"
						src="/images/iconLinkedin.png"
						alt="Linkedin Icon"
					/>
				</div>
				<span className="flex grow items-center justify-center">
					LinkedIn
				</span>
			</a>
		</>
	);
}

export default ConnectLinks;
