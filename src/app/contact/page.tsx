"use client";

import Link from "next/link";
import React, { useState } from "react";
import { GoCheck } from "react-icons/go";
import validator from "validator";

function Contact() {
	const [firstName, setFirstName] = useState<string>("");
	const [lastName, setLastName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
	const [subject, setSubject] = useState<string>("");
	const [message, setMessage] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>("");
	const [successMessage, setSuccessMessage] = useState<string>("");

	const validateEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
		const emailInput = event.target.value;
		if (validator.isEmail(emailInput)) {
			setEmail(emailInput);
			setIsEmailValid(true);
		} else {
			setEmail(emailInput);
			setIsEmailValid(false);
		}
	};

	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);
		setError("");

		try {
			const response = await fetch(process.env.CONTACT_FORM_ENDPOINT!, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					firstName,
					lastName,
					email,
					subject,
					message,
				}),
			});

			if (response.status === 200) {
				// Refresh state
				setFirstName("");
				setLastName("");
				setEmail("");
				setIsEmailValid(false);
				setSubject("");
				setMessage("");

				// Success message
				setSuccessMessage("Thank you for your message!");
			} else {
				// Handle non-200 responses here
				setError("An error occurred while sending your message.");
			}
		} catch (err) {
			if (err instanceof Error) {
				setError(err.message);
				// eslint-disable-next-line no-console
				console.error(err);
			} else {
				setError("An unexpected error occurred.");
				// eslint-disable-next-line no-console
				console.error("An unexpected error occurred:", err);
			}
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="flex w-full flex-1 flex-col items-center justify-start px-4 py-10">
			<div className="flex min-h-fit w-full max-w-4xl flex-col items-center">
				<h1 className="mb-3 text-3xl font-bold">Contact</h1>
				<h2>
					Reach out if you want to chat or meet up. You can also DM me
					on{" "}
					<a
						className="max-w-2xl px-3 underline underline-offset-4 hover:border-b-primary-100 hover:text-primary-100 sm:w-11/12"
						href={process.env.TWITTER_URL}
						target="_blank"
						rel="noopener noreferrer"
					>
						X
					</a>
					.
				</h2>
				<form
					className="mb-5 flex max-w-2xl flex-col items-start justify-center p-3 sm:w-11/12"
					onSubmit={onSubmit}
				>
					<div className="relative mt-3 flex w-full items-center justify-end">
						{firstName ? (
							<GoCheck
								className="pointer-events-none absolute mr-2 text-primary-100"
								size="25px"
							/>
						) : null}
						<input
							className="w-full rounded-sm bg-dark-600 py-1 pl-2 pr-10 outline-none ring-1 ring-light-500 focus:ring-light-100"
							type="text"
							id="firstName"
							name="firstName"
							placeholder="First Name"
							value={firstName}
							onChange={(event) =>
								setFirstName(event.target.value)
							}
							autoComplete="off"
							required
						/>
					</div>
					<div className="relative mt-3 flex w-full items-center justify-end">
						{lastName ? (
							<GoCheck
								className="pointer-events-none absolute mr-2 text-primary-100"
								size="25px"
							/>
						) : null}
						<input
							className="w-full rounded-sm bg-dark-600 py-1 pl-2 pr-10 outline-none ring-1 ring-light-500 focus:ring-light-100"
							type="text"
							id="lastName"
							name="lastName"
							placeholder="Last Name"
							value={lastName}
							onChange={(event) =>
								setLastName(event.target.value)
							}
							autoComplete="off"
							required
						/>
					</div>
					<div className="relative mt-3 flex w-full items-center justify-end">
						{email && isEmailValid ? (
							<GoCheck
								className="pointer-events-none absolute mr-2 text-primary-100"
								size="25px"
							/>
						) : null}
						<input
							className="w-full rounded-sm bg-dark-600 py-1 pl-2 pr-10 outline-none ring-1 ring-light-500 focus:ring-light-100"
							type="email"
							id="email"
							name="email"
							placeholder="Email"
							value={email}
							onChange={(event) => validateEmail(event)}
							autoComplete="off"
							required
						/>
					</div>
					<div className="relative mt-3 flex w-full items-center justify-end">
						{subject ? (
							<GoCheck
								className="pointer-events-none absolute mr-2 text-primary-100"
								size="25px"
							/>
						) : null}
						<input
							className="w-full rounded-sm bg-dark-600 py-1 pl-2 pr-10 outline-none ring-1 ring-light-500 focus:ring-light-100"
							type="text"
							id="subject"
							name="subject"
							placeholder="Subject"
							value={subject}
							onChange={(event) => setSubject(event.target.value)}
							autoComplete="off"
							required
						/>
					</div>

					<textarea
						className="mt-3 min-h-[128px] w-full rounded-sm bg-dark-600 px-2 py-1 outline-none ring-1 ring-light-500 focus:ring-light-100"
						id="message"
						name="message"
						placeholder="Message"
						value={message}
						onChange={(event) => setMessage(event.target.value)}
						autoComplete="off"
						required
					/>
					{error ? (
						<div className="mt-3 flex w-full flex-col items-center justify-start">
							<span className="font-bold text-bad-accent">
								ERROR
							</span>
							<span className="text-bad-accent">{error}</span>
						</div>
					) : null}
					{successMessage ? (
						<div className="mt-3 flex w-full flex-col items-center justify-start">
							<span className="my-5 text-primary-100">
								{successMessage}
							</span>
							<Link href="/">
								<button className="mt-3 w-full rounded-sm bg-dark-500 p-2 opacity-90 hover:text-primary-100 hover:opacity-100">
									Go to Home Page
								</button>
							</Link>
						</div>
					) : (
						<button
							className={
								!firstName ||
								!lastName ||
								!email ||
								!isEmailValid ||
								!subject ||
								!message ||
								loading
									? "mt-6 w-36 self-center rounded-sm bg-dark-500 p-2 opacity-70 hover:cursor-not-allowed hover:text-primary-100"
									: "mt-6 w-36 self-center rounded-sm bg-dark-500 p-2 opacity-90 hover:text-primary-100 hover:opacity-100"
							}
							disabled={
								!!(
									!firstName ||
									!lastName ||
									!email ||
									!isEmailValid ||
									!subject ||
									!message ||
									loading
								)
							}
						>
							Submit
						</button>
					)}
				</form>
			</div>
		</div>
	);
}

export default Contact;
