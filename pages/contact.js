// This page will display a form for people to contact me, along
// with social links (which should probably be included in the
// app's footer).
import { useState } from "react";
import { GoCheck } from "react-icons/go";
import Link from "next/link";
import validator from "validator";

const Contact = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [isEmailValid, setIsEmailValid] = useState(false);
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [successMessage, setSuccessMessage] = useState("");

	const validateEmail = (event) => {
		const emailInput = event.target.value;
		if (validator.isEmail(emailInput)) {
			setEmail(emailInput);
			setIsEmailValid(true);
		} else {
			setEmail(emailInput);
			setIsEmailValid(false);
		}
	};

	const onSubmit = async (event) => {
		// Prevent automatic form submission
		event.preventDefault();

		// Set state
		setLoading(true);
		setError("");

		// Send email via API request
		fetch(process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT, {
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
		})
			.then((res) => {
				if (res.status == 200) {
					// Refresh state
					setFirstName("");
					setLastName("");
					setEmail("");
					document.getElementById("email").value = "";
					setIsEmailValid(false);
					setSubject("");
					setMessage("");

					// Success message
					setSuccessMessage("Your message was successfully sent.");
				}
			})
			.catch((err) => {
				setError(err.message);
				console.error(err);
			});

		setLoading(false);
	};

	return (
		<div className="flex flex-col items-center justify-start w-full min-h-screen">
			<h1 className="mb-5 text-3xl font-bold">Contact</h1>
			<form
				className="flex flex-col items-start justify-center max-w-2xl p-6 mb-5 rounded bg-slate-700 sm:w-11/12"
				onSubmit={onSubmit}
			>
				<h1 className="text-3xl font-bold">Let's talk.</h1>
				<div className="relative flex items-center justify-end w-full mt-3">
					{firstName ? (
						<GoCheck
							className="absolute mr-2 pointer-events-none"
							color="white"
							size="25px"
						/>
					) : null}
					<input
						className="w-full py-1 pl-2 pr-10 text-white border rounded outline-none border-slate-900 focus:border-slate-300 bg-slate-900"
						type="text"
						id="firstName"
						name="firstName"
						placeholder="First Name"
						value={firstName}
						onChange={(event) => setFirstName(event.target.value)}
						autoComplete="off"
						required
					/>
				</div>
				<div className="relative flex items-center justify-end w-full mt-3">
					{lastName ? (
						<GoCheck
							className="absolute mr-2 pointer-events-none"
							color="white"
							size="25px"
						/>
					) : null}
					<input
						className="w-full py-1 pl-2 pr-10 text-white border rounded outline-none border-slate-900 focus:border-slate-300 bg-slate-900"
						type="text"
						id="lastName"
						name="lastName"
						placeholder="Last Name"
						value={lastName}
						onChange={(event) => setLastName(event.target.value)}
						autoComplete="off"
						required
					/>
				</div>
				<div className="relative flex items-center justify-end w-full mt-3">
					{email && isEmailValid ? (
						<GoCheck
							className="absolute mr-2 pointer-events-none"
							color="white"
							size="25px"
						/>
					) : null}
					<input
						className="w-full py-1 pl-2 pr-10 text-white border rounded outline-none border-slate-900 focus:border-slate-300 bg-slate-900"
						type="email"
						id="email"
						name="email"
						placeholder="Email"
						onChange={(event) => validateEmail(event)}
						autoComplete="off"
						required
					/>
				</div>
				<div className="relative flex items-center justify-end w-full mt-3">
					{subject ? (
						<GoCheck
							className="absolute mr-2 pointer-events-none"
							color="white"
							size="25px"
						/>
					) : null}
					<input
						className="w-full py-1 pl-2 pr-10 text-white border rounded outline-none border-slate-900 focus:border-slate-300 bg-slate-900"
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
					className="w-full min-h-[128px] px-2 py-1 mt-3 text-white border rounded outline-none border-slate-900 focus:border-slate-300 bg-slate-900"
					type="text"
					id="message"
					name="message"
					placeholder="Message"
					value={message}
					onChange={(event) => setMessage(event.target.value)}
					autoComplete="off"
					required
				/>
				{error ? (
					<div className="flex flex-col items-center justify-start w-full mt-3">
						<span className="font-bold text-red-400">ERROR</span>
						<span className="text-red-400">{error}</span>
					</div>
				) : null}
				{successMessage ? (
					<div className="flex flex-col items-center justify-start w-full mt-3">
						<span className="text-green-400">{successMessage}</span>
						<span className="text-green-400">
							I will get back to you within 24 hours.
						</span>
						<Link href="/">
							<button className="w-full p-2 mt-3 rounded bg-slate-900 opacity-90 hover:opacity-100">
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
								? "p-2 mt-6 rounded bg-slate-900 opacity-70 hover:cursor-not-allowed w-full"
								: "p-2 mt-6 rounded bg-slate-900 w-full opacity-90 hover:opacity-100"
						}
						disabled={
							!firstName ||
							!lastName ||
							!email ||
							!isEmailValid ||
							!subject ||
							!message ||
							loading
								? true
								: false
						}
					>
						Submit
					</button>
				)}
			</form>
		</div>
	);
};

export default Contact;
